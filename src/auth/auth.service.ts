import { BadRequestException, Injectable, ForbiddenException } from '@nestjs/common'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UsersService } from 'src/users/users.service'
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { AuthDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) { }


    async signUp(createUserDto: CreateUserDto): Promise<any> {
        // Check if user exists
        const userExists = await this.usersService.findByEmail(
            createUserDto.email,
        )
        if (userExists) {
            throw new BadRequestException('User already exists')
        }

        // Hash password
        const hash = await this.hashData(createUserDto.password)

        // create user
        const newUser = await this.usersService.create({
            ...createUserDto,
            password: hash,
        })
        const tokens = await this.getTokens(newUser.id, newUser.email)
        await this.updateRefreshToken(newUser.id, tokens.refreshToken)
        return tokens
    }

    async signIn(data: AuthDto) {
        // Check if user exists
        const user = await this.usersService.findByEmail(data.email)
        if (!user) throw new BadRequestException('User does not exist')
        const passwordMatches = await argon2.verify(user.password, data.password)

        if (!passwordMatches)
            throw new BadRequestException('Password is incorrect')
        const tokens = await this.getTokens(user.id, user.email)
        await this.updateRefreshToken(user.id, tokens.refreshToken)
        return tokens
    }

    async logout(userId: number) {
        return this.usersService.update(userId, { remember_token: null })
    }

    hashData(data: string) {
        return argon2.hash(data)
    }

    async updateRefreshToken(userId: number, refreshToken: string) {
        const hashedRefreshToken = await this.hashData(refreshToken)
        await this.usersService.update(userId, {
            remember_token: hashedRefreshToken,
        })
    }

    async getTokens(userId: number, email: string) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: userId,
                    email,
                },
                {
                    secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
                    expiresIn: '1d',
                },
            ),
            this.jwtService.signAsync(
                {
                    sub: userId,
                    email,
                },
                {
                    secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
                    expiresIn: '10y',
                },
            ),
        ])

        return {
            accessToken,
            refreshToken,
        }
    }

    async refreshTokens(userId: number, refreshToken: string) {
        const user = await this.usersService.findById(userId);
        if (!user || !user.remember_token)
          throw new ForbiddenException();
        const refreshTokenMatches = await argon2.verify(
          user.remember_token,
          refreshToken,
        );
        if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
      }
}
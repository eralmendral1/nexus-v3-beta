import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
    UseGuards
} from '@nestjs/common'
import { Request, Response } from 'express'
import { CreateUserDto } from '@/modules/users/dto/create-user.dto'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { AccessTokenGuard, RefreshTokenGuard } from './auth.guard'
import { ApiTags } from '@nestjs/swagger'

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto)
    }

    @Post('signin')
    signin(@Body() data: AuthDto) {
        return this.authService.signIn(data)
    }

    @UseGuards(AccessTokenGuard)
    @Get('logout')
    logout(@Req() req: Request) {
        this.authService.logout(req.user['sub'])
    }

    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    refreshTokens(@Req() req: Request) {
        const userId = req.user['sub']
        const refreshToken = req.user['refreshToken']
        return this.authService.refreshTokens(userId, refreshToken)
    }

    // @Get()
    // @UseGuards(AuthGuard('microsoft'))
    // async login() {
    // }

    // @Get('callback')
    // @UseGuards(AuthGuard('microsoft'))
    // async authCallback(@Req() req) {
    //     const user = req.user
    //     console.log('debug user:', user)
    //     const payload = { sub: user.id, username: user.username }

    //     return { user }
    // }
}
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
import { AccessTokenGuard, RefreshTokenGuard } from '@/common/guards'
import { ApiTags } from '@nestjs/swagger'
import { PusherService } from 'nestjs-pusher'
import { GetCurrentUser, GetCurrentUserId, Public } from '@/common/decorators'
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private pusherService: PusherService) { }

    @Public()
    @Post('signup')
    signup(@Body() createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto)
    }

    @Public()
    @Post('signin')
    signin(@Body() data: AuthDto) {
        return this.authService.signIn(data)
    }

    @UseGuards(AccessTokenGuard)
    @Get('logout')
    logout(@GetCurrentUserId() userId: number) {
        this.authService.logout(userId)
    }

    @Public()
    @UseGuards(RefreshTokenGuard)
    @Post('refresh')
    refreshTokens(@GetCurrentUserId() userId: number, @GetCurrentUser('refreshToken') refreshToken: string) {
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
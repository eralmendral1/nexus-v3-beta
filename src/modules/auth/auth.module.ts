import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AccessTokenStrategy, MicrosoftStrategy, RefreshTokenStrategy } from './auth.strategy'
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module'
import { AuthService } from './auth.service';

@Module({
    imports: [JwtModule.register({}), UsersModule],
    providers: [MicrosoftStrategy, AccessTokenStrategy, RefreshTokenStrategy, AuthController, AuthService],
    controllers: [AuthController],
})
export class AuthModule { }

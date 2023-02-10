import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy as PassportJwtStrategy } from 'passport-jwt'
import { Strategy as MsStrategy, Profile } from 'passport-microsoft'
import { Request } from 'express';

@Injectable()
export class MicrosoftStrategy extends PassportStrategy(MsStrategy, 'microsoft') {
    constructor(configService: ConfigService) {
        super({
            clientID: configService.get<string>('AZURE_CLIENT_ID'),
            clientSecret: configService.get<string>('AZURE_CLIENT_SECRET'),
            callbackURL: "http://localhost:3000/auth/callback",
            scope: ['user.read', 'openid', 'Presence.ReadWrite', 'email', 'profile', 'User.Read', 'offline_access'],

            // Microsoft specific options

            // [Optional] The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
            authorizationURL: `https://login.microsoftonline.com/c8bf7d4f-6677-436a-8994-17a3ff24848d/oauth2/v2.0/authorize`,

            // [Optional] The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
            tokenURL: `https://login.microsoftonline.com/c8bf7d4f-6677-436a-8994-17a3ff24848d/oauth2/v2.0/token`,
        })
    }

    async validate(accessToken: string, _refreshToken: string, profile: Profile) {
        return profile
    }
}

type JwtPayload = {
    sub: string
    username: string
}

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(PassportJwtStrategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_ACCESS_SECRET,
        })
    }

    validate(payload: JwtPayload) {
        return payload
    }
}

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(PassportJwtStrategy, 'jwt-refresh') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_REFRESH_SECRET,
            passReqToCallback: true,
        })
    }

    validate(req: Request, payload: any) {
        const refreshToken = req.get('Authorization').replace('Bearer', '').trim()
        return { ...payload, refreshToken }
    }
}
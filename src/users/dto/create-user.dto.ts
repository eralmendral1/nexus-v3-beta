
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty({ required: false })
    callcenter_id: number
    
    @ApiProperty({ required: false})
    sid: string

    @ApiProperty({ required: true })
    name: string

    @ApiProperty({ required: true })
    email: string

    @ApiProperty({ required: false })
    avatar: string

    @ApiProperty({ required: false })
    password: string

    @ApiProperty({ default: false })
    admin: boolean

    @ApiProperty({ default: false })
    external_agent: boolean

    @ApiProperty({ required: false })
    skills: string

    @ApiProperty({ required: false })
    timezone: string

    @ApiProperty({ default: true })
    block_reject: boolean

    @ApiProperty({ required: false })
    presence: string

    @ApiProperty({ required: false })
    reservation_passthrough: string

    @ApiProperty({ required: false })
    remember_token: string
    
}

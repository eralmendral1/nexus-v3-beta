import { Module } from '@nestjs/common';
import { ConferenceController } from './conference.controller';
import { ParticipantModule } from './participant/participant.module';
import { StatusModule } from './status/status.module'

@Module({
  controllers: [ConferenceController],
  imports: [ParticipantModule, StatusModule]
})
export class ConferenceModule {}

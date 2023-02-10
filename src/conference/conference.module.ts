import { Module } from '@nestjs/common';
import { ConferenceController } from './conference.controller';
import { ParticipantModule } from './participant/participant.module';

@Module({
  controllers: [ConferenceController],
  imports: [ParticipantModule]
})
export class ConferenceModule {}

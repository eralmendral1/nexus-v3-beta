import { Module } from '@nestjs/common';
import { ConferenceService } from './conference.service';
import { ConferenceController } from './conference.controller';

@Module({
  providers: [ConferenceService],
  controllers: [ConferenceController]
})
export class ConferenceModule {}

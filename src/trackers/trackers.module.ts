import { Module } from '@nestjs/common';
import { TrackersService } from './trackers.service';
import { TrackersController } from './trackers.controller';
import { HistoryModule } from './history/history.module';
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  providers: [TrackersService],
  controllers: [TrackersController],
  imports: [HistoryModule, PrismaModule]
})
export class TrackersModule {}

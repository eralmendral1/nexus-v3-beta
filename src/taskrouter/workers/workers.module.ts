import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { StatisticsModule } from './statistics/statistics.module';
import { ReservationsModule } from './reservations/reservations.module';
import { ChannelsModule } from './channels/channels.module';

@Module({
  providers: [WorkersService],
  controllers: [WorkersController],
  imports: [StatisticsModule, ReservationsModule, ChannelsModule]
})
export class WorkersModule {}

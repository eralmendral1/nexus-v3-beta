import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  providers: [WorkersService],
  controllers: [WorkersController],
  imports: [StatisticsModule]
})
export class WorkersModule {}
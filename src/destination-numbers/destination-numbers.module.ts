import { Module } from '@nestjs/common';
import { DestinationNumbersService } from './destination-numbers.service';
import { DestinationNumbersController } from './destination-numbers.controller';
import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [DestinationNumbersController],
  providers: [DestinationNumbersService, PrismaService]
})
export class DestinationNumbersModule {}

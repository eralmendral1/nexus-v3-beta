import { Module } from '@nestjs/common';
import { PolicyCategoriesService } from './policy-categories.service';
import { PolicyCategoriesController } from './policy-categories.controller';
import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [PolicyCategoriesController],
  providers: [PolicyCategoriesService, PrismaService]
})
export class PolicyCategoriesModule {}

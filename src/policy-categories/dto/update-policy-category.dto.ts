import { PartialType } from '@nestjs/swagger';
import { CreatePolicyCategoryDto } from './create-policy-category.dto';

export class UpdatePolicyCategoryDto extends PartialType(CreatePolicyCategoryDto) {}

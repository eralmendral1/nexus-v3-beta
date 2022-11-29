import { PartialType } from '@nestjs/swagger';
import { CreateDestinationNumberDto } from './create-destination-number.dto';

export class UpdateDestinationNumberDto extends PartialType(CreateDestinationNumberDto) {}

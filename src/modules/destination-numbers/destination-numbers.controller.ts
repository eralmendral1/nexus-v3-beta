import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { DestinationNumbersService } from './destination-numbers.service';
import { CreateDestinationNumberDto } from './dto/create-destination-number.dto';
import { UpdateDestinationNumberDto } from './dto/update-destination-number.dto';

@ApiTags('Destination Numbers')
@Controller('destination-numbers')
export class DestinationNumbersController {
  constructor(private readonly destinationNumbersService: DestinationNumbersService) {}

  @Post()
  create(@Body() createDestinationNumberDto: CreateDestinationNumberDto) {
    return this.destinationNumbersService.create(createDestinationNumberDto);
  }

  @Get()
  findAll() {
    return this.destinationNumbersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinationNumbersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDestinationNumberDto: UpdateDestinationNumberDto) {
    return this.destinationNumbersService.update(+id, updateDestinationNumberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinationNumbersService.remove(+id);
  }
}

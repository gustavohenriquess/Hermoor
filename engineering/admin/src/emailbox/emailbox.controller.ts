import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('emailbox')
export class EmailboxController {
  @Post()
  async create(@Body() emailbox: object): Promise<object> {
    return emailbox;
  }

  @Get()
  async findAll(): Promise<Array<object>> {
    return [{ message: 'GET all emailboxes' }];
  }

  @Get(':id')
  async findOne(@Param() params): Promise<object> {
    return { message: `GET emailbox ${params.id}` };
  }

  @Put()
  async update(@Body() emailbox: object): Promise<object> {
    return emailbox;
  }

  @Delete(':id')
  async remove(@Param() params): Promise<object> {
    return { message: `DELETE emailbox ${params.id}` };
  }
}

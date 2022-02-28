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
export class EmailBoxFolderController {
  @Post(':idmailBox/folders')
  async create(@Body() emailBoxFolder: object): Promise<object> {
    return emailBoxFolder;
  }

  @Get(':idEmailBox/folders')
  async findAll(): Promise<Array<object>> {
    return [{ message: 'GET all email boxs folders' }];
  }

  @Get(':idEmailBox/folders/:idFolder')
  async findOne(@Param() params): Promise<object> {
    return { message: `GET email box folder ${params.idFolder}` };
  }

  @Put(':idEmailBox/folders')
  async update(@Body() emailBoxFolder: object): Promise<object> {
    return emailBoxFolder;
  }

  @Delete(':idEmailBox/folders/:idFolder')
  async remove(@Param() params): Promise<object> {
    return { message: `DELETE email box folder ${params.idFolder}` };
  }
}

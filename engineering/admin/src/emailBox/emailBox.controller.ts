import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmailBox } from './emailBox.entity';
import { EmailBoxService } from './emailBox.service';

@Controller('emailbox')
export class EmailBoxController {
  constructor(private emailboxService: EmailBoxService) {}

  @Post()
  async create(@Body() emailbox: EmailBox): Promise<EmailBox> {
    return await this.emailboxService.createEmailBox(emailbox);
  }

  @Get()
  async findAll(): Promise<Array<EmailBox>> {
    return this.emailboxService.getEmailBox();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<EmailBox> {
    return this.emailboxService.getEmailBoxById(params.id);
  }

  @Put()
  async update(@Body() emailbox: EmailBox): Promise<[affectedCount: number]> {
    return this.emailboxService.updateEmailBox(emailbox.id, emailbox);
  }

  @Delete(':id')
  async remove(@Param() params): Promise<void> {
    await this.emailboxService.deleteEmailBox(params.id);
  }
}

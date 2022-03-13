import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NestResponse } from '../core/http/nestResponse';
import { NestResponseBuilder } from '../core/http/nestResponseBuilder';
import { EmailBox } from './emailBox.entity';
import { EmailBoxService } from './emailBox.service';
import { NotFound } from 'src/core/http/exceptions/NotFound';

@Controller('emailbox')
export class EmailBoxController {
  constructor(private emailboxService: EmailBoxService) {}

  @Post()
  async create(@Body() emailbox: EmailBox): Promise<NestResponse> {
    const emailBox = await this.emailboxService.createEmailBox(emailbox);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withBody(emailBox)
      .withHeaders({ location: `/emailbox/${emailBox.id}` })
      .build();
  }

  @Get()
  async findAll(): Promise<NestResponse> {
    const emailBoxes = await this.emailboxService.getEmailBox();

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withBody(emailBoxes)
      .withHeaders({ location: `/emailbox` })
      .build();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<NestResponse> {
    const emailBox = await this.emailboxService.getEmailBoxById(params.id);

    await new NotFound().exec(
      emailBox,
      HttpStatus.NOT_FOUND,
      'Email Box not found',
    );

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withBody(emailBox)
      .withHeaders({ location: `/emailbox/${emailBox.id}` })
      .build();
  }

  @Put(':id')
  async update(
    @Param() params,
    @Body() emailbox: EmailBox,
  ): Promise<NestResponse> {
    if (emailbox.id != params.id)
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: 'ID E-mailBox not match',
      });

    const hasEmailBox = await this.emailboxService.getEmailBoxById(emailbox.id);

    await new NotFound().exec(
      hasEmailBox,
      HttpStatus.NOT_FOUND,
      'Email Box not found',
    );

    const emailBox = await this.emailboxService.updateEmailBox(
      emailbox.id,
      emailbox,
    );

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withBody(emailBox)
      .withHeaders({ location: `/emailbox/${emailbox.id}` })
      .build();
  }

  @Delete(':id')
  async remove(@Param() params): Promise<void> {
    const hasEmailBox = await this.emailboxService.getEmailBoxById(params.id);

    await new NotFound().exec(
      hasEmailBox,
      HttpStatus.NOT_FOUND,
      'Email Box not found',
    );

    await this.emailboxService.deleteEmailBox(params.id);
  }
}

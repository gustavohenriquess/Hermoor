import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NestResponse } from '../../../core/infra/http/nest-response';
import { NestResponseBuilder } from '../../../core/infra/http/nest-response-builder';
import { EmailBox } from '../../databases/emailBox.entity';
import { EmailBoxService } from '../../emailBox.service';

@Controller('emailbox')
export class EmailBoxController {
  constructor(private emailBoxService: EmailBoxService) {}

  @Post()
  async create(@Body() emailBox: EmailBox): Promise<NestResponse> {
    const emailBoxCreated = await this.emailBoxService.create(emailBox);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({ location: `/emailbox/${emailBoxCreated.name}` })
      .withBody(emailBoxCreated)
      .build();
  }

  @Get()
  async getAll(): Promise<NestResponse> {
    const emailBoxes = await this.emailBoxService.getAll();

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({ location: `/emailbox` })
      .withBody(emailBoxes)
      .build();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<NestResponse> {
    const emailBox = await this.emailBoxService.getById(id);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({ location: `/emailbox/${emailBox.name}` })
      .withBody(emailBox)
      .build();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() emailBox: EmailBox,
  ): Promise<NestResponse> {
    const emailBoxUpdated = await this.emailBoxService.update(id, emailBox);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({ location: `/emailbox/${emailBoxUpdated.name}` })
      .withBody(emailBoxUpdated)
      .build();
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<NestResponse> {
    await this.emailBoxService.delete(id);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({ location: `/emailbox/${id}` })
      .build();
  }
}

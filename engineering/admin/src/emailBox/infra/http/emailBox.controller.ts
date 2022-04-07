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
      .withHeaders({ location: `/emailbox/${emailBoxCreated.id}` })
      .withBody(emailBoxCreated)
      .build();
  }

  @Get()
  async getAll(): Promise<NestResponse> {
    const [emailBoxes, counter] = await this.emailBoxService.getAll();

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({ location: `/emailbox` })
      .withBody({ emailBoxes, counter })
      .build();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<NestResponse> {
    const emailBox = await this.emailBoxService.getById(id);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({ location: `/emailbox/${emailBox.id}` })
      .withBody(emailBox)
      .build();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() emailBox: EmailBox,
  ): Promise<NestResponse> {
    await this.emailBoxService.update(id, emailBox);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.NO_CONTENT)
      .withHeaders({ location: `/emailbox/${id}` })
      .build();
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<NestResponse> {
    await this.emailBoxService.delete(id);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.NO_CONTENT)
      .withHeaders({ location: `/emailbox/${id}` })
      .build();
  }
}

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
import { NestResponse } from 'src/core/infra/http/nest-response';
import { NestResponseBuilder } from 'src/core/infra/http/nest-response-builder';
import { EmailBoxFolder } from 'src/emailBoxFolder/databases/emailBoxFolders.entity';
import { EmailBoxFolderService } from 'src/emailBoxFolder/emailBoxFolder.service';

@Controller('emailbox/:idMailBox/folder')
export class EmailBoxFolderController {
  constructor(private emailBoxFolderService: EmailBoxFolderService) {}

  @Post()
  async create(
    @Param('idMailBox') idMailBox: number,
    @Body() folder: EmailBoxFolder,
  ): Promise<NestResponse> {
    const emailBoxFolder = await this.emailBoxFolderService.create(
      idMailBox,
      folder,
    );

    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({ location: `/emailbox/${idMailBox}/folder/${folder.name}` })
      .withBody(emailBoxFolder)
      .build();
  }

  @Get()
  async getAll(@Param('idMailBox') idMailBox: number): Promise<NestResponse> {
    const [EmailBoxFolders, counter] = await this.emailBoxFolderService.getAll(
      idMailBox,
    );

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({
        location: `/emailbox/${idMailBox}/folder}`,
      })
      .withBody({ EmailBoxFolders, counter })
      .build();
  }

  @Get(':id')
  async getById(@Param() params): Promise<NestResponse> {
    const folder = await this.emailBoxFolderService.getById(params.id);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({
        location: `/emailbox/${params.idMailBox}/folder/${params.id}}`,
      })
      .withBody(folder)
      .build();
  }

  @Put(':id')
  async update(
    @Param() params,
    @Body() folder: EmailBoxFolder,
  ): Promise<NestResponse> {
    await this.emailBoxFolderService.update(
      Number(params.idMailBox),
      Number(params.id),
      folder,
    );

    return new NestResponseBuilder()
      .withStatus(HttpStatus.NO_CONTENT)
      .withHeaders({
        location: `/emailbox/${params.idMailBox}/folder/${params.id}}`,
      })
      .build();
  }

  @Delete(':id')
  async delete(@Param() params): Promise<NestResponse> {
    await this.emailBoxFolderService.delete(params.id);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.NO_CONTENT)
      .withHeaders({
        location: `/emailbox/${params.idMailBox}/folder/${params.id}}`,
      })
      .build();
  }
}

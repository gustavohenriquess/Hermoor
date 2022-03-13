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
import { NestResponse } from 'src/core/http/nestResponse';
import { NestResponseBuilder } from 'src/core/http/nestResponseBuilder';
import { EmailBoxFolder } from './emailBoxFolder.entity';
import { EmailBoxFolderService } from './emailBoxFolder.service';
import { NotFound } from 'src/core/http/exceptions/NotFound';

@Controller('emailbox')
export class EmailBoxFolderController {
  constructor(private emailBoxFolderService: EmailBoxFolderService) {}

  @Post(':idEmailBox/folders')
  async create(
    @Body() emailboxfolder: EmailBoxFolder,
    @Param() params,
  ): Promise<NestResponse> {
    emailboxfolder.idEmailBox = params.idEmailBox;
    const emailBoxFolder =
      await this.emailBoxFolderService.createEmailBoxFolder(emailboxfolder);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withBody(emailBoxFolder)
      .withHeaders({
        location: `/emailbox/${emailboxfolder.idEmailBox}/folders/${emailBoxFolder.id}`,
      })
      .build();
  }

  @Get(':idEmailBox/folders')
  async findAll(@Param() params): Promise<NestResponse> {
    const emailBoxFolder = await this.emailBoxFolderService.getEmailBoxFolder(
      params.idEmailBox,
    );

    await new NotFound().exec(
      emailBoxFolder,
      HttpStatus.NOT_FOUND,
      'Email Box Folders not found',
    );

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withBody(emailBoxFolder)
      .withHeaders({ location: `/emailbox/${params.idEmailBox}/folders` })
      .build();
  }

  @Get(':idEmailBox/folders/:idFolder')
  async findOne(@Param() params): Promise<NestResponse> {
    const emailBoxFolder =
      await this.emailBoxFolderService.getEmailBoxFolderById(
        params.idEmailBox,
        params.idFolder,
      );

    await new NotFound().exec(
      emailBoxFolder,
      HttpStatus.NOT_FOUND,
      'Email Box Folder not found',
    );

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withBody(emailBoxFolder)
      .withHeaders({
        location: `/emailbox/${emailBoxFolder.idEmailBox}/folders/${emailBoxFolder.id}`,
      })
      .build();
  }

  @Put(':idEmailBox/folders/:idFolder')
  async update(
    @Body() emailboxfolder: EmailBoxFolder,
    @Param() params,
  ): Promise<NestResponse> {
    if (emailboxfolder.idEmailBox != params.idEmailBox)
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: 'ID EmailBox not match',
      });

    if (emailboxfolder.id != params.idFolder)
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: 'ID Folder not match',
      });

    const hasEmailBoxFolder =
      await this.emailBoxFolderService.getEmailBoxFolderById(
        emailboxfolder.idEmailBox,
        emailboxfolder.id,
      );

    await new NotFound().exec(
      hasEmailBoxFolder,
      HttpStatus.NOT_FOUND,
      'Email Box Folder not found',
    );

    const emailBoxFolder =
      await this.emailBoxFolderService.updateEmailBoxFolder(
        params.idEmailBox,
        emailboxfolder.id,
        emailboxfolder,
      );

    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withBody(emailBoxFolder)
      .withHeaders({
        location: `/emailbox/${emailboxfolder.idEmailBox}/folders/${emailboxfolder.id}`,
      })
      .build();
  }

  @Delete(':idEmailBox/folders/:idFolder')
  async remove(@Param() params): Promise<void> {
    const hasEmailBoxFolder =
      await this.emailBoxFolderService.getEmailBoxFolderById(
        params.idEmailBox,
        params.idFolder,
      );

    await new NotFound().exec(
      hasEmailBoxFolder,
      HttpStatus.NOT_FOUND,
      'Email Box Folder not found',
    );

    await this.emailBoxFolderService.deleteEmailBoxFolder(
      params.idEmailBox,
      params.idFolder,
    );
  }
}

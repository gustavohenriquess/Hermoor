import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmailBoxFolder } from './emailBoxFolder.entity';
import { EmailBoxFolderService } from './emailBoxFolder.service';

@Controller('emailbox')
export class EmailBoxFolderController {
  constructor(private emailBoxFolderService: EmailBoxFolderService) {}

  @Post(':idEmailBox/folders')
  async create(
    @Body() emailBoxFolder: EmailBoxFolder,
    @Param() params,
  ): Promise<EmailBoxFolder> {
    emailBoxFolder.idEmailBox = params.idEmailBox;
    return await this.emailBoxFolderService.createEmailBoxFolder(
      emailBoxFolder,
    );
  }

  @Get(':idEmailBox/folders')
  async findAll(@Param() params): Promise<Array<EmailBoxFolder>> {
    return this.emailBoxFolderService.getEmailBoxFolder(params.idEmailBox);
  }

  @Get(':idEmailBox/folders/:idFolder')
  async findOne(@Param() params): Promise<EmailBoxFolder> {
    return this.emailBoxFolderService.getEmailBoxFolderById(
      params.idEmailBox,
      params.idFolder,
    );
  }

  @Put(':idEmailBox/folders/:idFolder')
  async update(
    @Body() emailBoxFolder: EmailBoxFolder,
    @Param() params,
  ): Promise<[affectedCount: number]> {
    console.log(emailBoxFolder.idEmailBox);
    if (emailBoxFolder.idEmailBox != params.idEmailBox)
      throw 'ID E-mailBox not match';
    if (emailBoxFolder.id != params.idFolder) throw 'ID Folder not match';

    return this.emailBoxFolderService.updateEmailBoxFolder(
      params.idEmailBox,
      emailBoxFolder.id,
      emailBoxFolder,
    );
  }

  @Delete(':idEmailBox/folders/:idFolder')
  async remove(@Param() params): Promise<void> {
    await this.emailBoxFolderService.deleteEmailBoxFolder(
      params.idEmailBox,
      params.idFolder,
    );
  }
}

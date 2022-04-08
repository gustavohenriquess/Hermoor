import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmailBoxFolder } from './databases/emailBoxFolders.entity';

@Injectable()
export class EmailBoxFolderService {
  constructor(
    @Inject('EMAIL_BOX_FOLDER_REPOSITORY')
    private emailBoxFolderRepository: Repository<EmailBoxFolder>,
  ) {}

  async create(
    idEmailBox: number,
    emailBoxFolder: EmailBoxFolder,
  ): Promise<EmailBoxFolder> {
    await this.checkIdEquals(idEmailBox, emailBoxFolder.idEmailBox);

    const emailBoxFolderData = await this.emailBoxFolderRepository.save(
      emailBoxFolder,
    );

    return emailBoxFolderData;
  }

  async getAll(idEmailBox: number): Promise<[EmailBoxFolder[], number]> {
    const emailBoxFolderData =
      await this.emailBoxFolderRepository.findAndCountBy({
        idEmailBox: idEmailBox,
      });

    return emailBoxFolderData;
  }

  async getById(id: number): Promise<EmailBoxFolder> {
    const emailBoxFolder = await this.emailBoxFolderRepository.findOneBy({
      id: id,
    });

    if (!emailBoxFolder) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'email.box.folder.not.found',
      });
    }

    return emailBoxFolder;
  }

  async update(
    idEmailBox: number,
    id: number,
    emailBoxFolder: EmailBoxFolder,
  ): Promise<EmailBoxFolder> {
    await this.checkIdEquals(idEmailBox, emailBoxFolder.idEmailBox);

    await this.checkIdEquals(id, emailBoxFolder.id);

    const emailboxfolder = await this.getById(emailBoxFolder.id);

    if (!emailboxfolder) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'email.box.folder.not.found',
      });
    }

    await this.emailBoxFolderRepository.update({ id: id }, emailBoxFolder);
    return;
  }

  async delete(id: number): Promise<EmailBoxFolder> {
    const emailBoxFolder = await this.getById(id);

    if (!emailBoxFolder) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'email.box.folder.not.found',
      });
    }

    await this.emailBoxFolderRepository.delete({ id: id });

    return;
  }

  private checkIdEquals(id1: number, id2: number): void {
    if (id1 !== id2) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'email.box.folder.id.not.equals',
      });
    }
  }
}

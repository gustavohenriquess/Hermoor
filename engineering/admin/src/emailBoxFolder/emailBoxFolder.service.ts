import { Inject, Injectable } from '@nestjs/common';
import { EmailBoxFolder } from './emailBoxFolder.entity';

@Injectable()
export class EmailBoxFolderService {
  constructor(
    @Inject('EMAIL_BOX_FOLDER_REPOSITORY')
    private emailboxRepository: typeof EmailBoxFolder,
  ) {}

  async getEmailBoxFolder(idEmailBox: number): Promise<Array<EmailBoxFolder>> {
    return this.emailboxRepository.findAll<EmailBoxFolder>({
      where: { idEmailBox },
    });
  }

  async getEmailBoxFolderById(
    idEmailBox: number,
    id: number,
  ): Promise<EmailBoxFolder> {
    return this.emailboxRepository.findOne<EmailBoxFolder>({
      where: { id, idEmailBox },
    });
  }

  async createEmailBoxFolder(emailbox: EmailBoxFolder) {
    return this.emailboxRepository.create<EmailBoxFolder>(emailbox);
  }

  async updateEmailBoxFolder(
    idEmailBox: number,
    id: number,
    emailboxfodler: EmailBoxFolder,
  ): Promise<[affectedCount: number]> {
    return this.emailboxRepository.update<EmailBoxFolder>(emailboxfodler, {
      where: { id },
    });
  }

  async deleteEmailBoxFolder(idEmailBox: number, id: number): Promise<void> {
    const emailBoxFolder: EmailBoxFolder = await this.getEmailBoxFolderById(
      idEmailBox,
      id,
    );
    emailBoxFolder.destroy();
  }
}

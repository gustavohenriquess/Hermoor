import { Inject, Injectable } from '@nestjs/common';
import { EmailBox } from './emailBox.entity';
import { CreateDefaultFolders } from './useCase/createDefaultFolders';

@Injectable()
export class EmailBoxService {
  constructor(
    @Inject('EMAIL_BOX_REPOSITORY') private emailBoxRepository: typeof EmailBox,
    private createDefaultFolders: CreateDefaultFolders,
  ) {}

  async getEmailBox(): Promise<Array<EmailBox>> {
    return this.emailBoxRepository.findAll<EmailBox>();
  }

  async getEmailBoxById(id: number): Promise<EmailBox> {
    return this.emailBoxRepository.findByPk<EmailBox>(id);
  }

  async createEmailBox(emailbox: EmailBox): Promise<EmailBox> {
    const emailBox = await this.emailBoxRepository.create<EmailBox>(emailbox);
    await this.createDefaultFolders.createFolders(emailBox.id);
    return emailBox;
  }

  async updateEmailBox(
    id: number,
    emailbox: EmailBox,
  ): Promise<[affectedCount: number]> {
    return this.emailBoxRepository.update<EmailBox>(emailbox, {
      where: { id },
    });
  }

  async deleteEmailBox(id: number): Promise<void> {
    const emailBox: EmailBox = await this.getEmailBoxById(id);
    emailBox.destroy();
  }
}

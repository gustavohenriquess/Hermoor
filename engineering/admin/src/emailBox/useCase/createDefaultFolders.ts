import { Inject, Injectable } from '@nestjs/common';
import { EmailBoxFolder } from 'src/emailBoxFolder/databases/emailBoxFolders.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateDefaultFolders {
  constructor(
    @Inject('EMAIL_BOX_FOLDER_REPOSITORY')
    private emailBoxFolderRepository: Repository<EmailBoxFolder>,
  ) {}

  async createFolders(emailBoxId: number): Promise<void> {
    // eslint-disable-next-line prefer-const
    for (let folder of defaultFolders) {
      folder.idEmailBox = emailBoxId;
      await this.emailBoxFolderRepository.save(folder);
    }
  }
}

const defaultFolders = [
  {
    name: 'Inbox',
    internalName: 'inbox',
    idEmailBox: 0,
  },
  {
    name: 'Sent',
    internalName: 'sent',
    idEmailBox: 0,
  },
  {
    name: 'Draft',
    internalName: 'draft',
    idEmailBox: 0,
  },
  {
    name: 'Trash',
    internalName: 'trash',
    idEmailBox: 0,
  },
  {
    name: 'Spam',
    internalName: 'spam',
    idEmailBox: 0,
  },
  {
    name: 'Archive',
    internalName: 'archive',
    idEmailBox: 0,
  },
];

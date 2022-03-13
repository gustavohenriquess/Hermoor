import { Inject, Injectable } from '@nestjs/common';
import { EmailBoxFolder } from '../../emailBoxFolder/emailBoxFolder.entity';

@Injectable()
export class CreateDefaultFolders {
  constructor(
    @Inject('EMAIL_BOX_FOLDER_REPOSITORY')
    private emailBoxFolderRepository: typeof EmailBoxFolder,
  ) {}

  async createFolders(emailBoxId: number): Promise<void> {
    // eslint-disable-next-line prefer-const
    for (let folder of defaultFolders) {
      folder.idEmailBox = emailBoxId;
      await this.emailBoxFolderRepository.create<EmailBoxFolder>(folder);
    }
  }
}

const defaultFolders = [
  {
    name: 'Inbox',
    internalName: 'inbox',
    isActive: true,
    idEmailBox: 0,
  },
  {
    name: 'Sent',
    internalName: 'sent',
    isActive: true,
    idEmailBox: 0,
  },
  {
    name: 'Draft',
    internalName: 'draft',
    isActive: true,
    idEmailBox: 0,
  },
  {
    name: 'Trash',
    internalName: 'trash',
    isActive: true,
    idEmailBox: 0,
  },
  {
    name: 'Spam',
    internalName: 'spam',
    isActive: true,
    idEmailBox: 0,
  },
  {
    name: 'Archive',
    internalName: 'archive',
    isActive: true,
    idEmailBox: 0,
  },
];

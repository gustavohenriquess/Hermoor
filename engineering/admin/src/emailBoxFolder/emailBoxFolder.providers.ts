import { EmailBoxFolder } from './emailBoxFolder.entity';

export const emailBoxFolderProviders = [
  {
    provide: 'EMAIL_BOX_FOLDER_REPOSITORY',
    useValue: EmailBoxFolder,
  },
];

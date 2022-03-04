import { EmailBoxFolder } from './emailBoxFolder.entity';

export const emailBoxFolderProviders = [
  {
    provide: 'EMAIL_BOX_REPOSITORY',
    useValue: EmailBoxFolder,
  },
];

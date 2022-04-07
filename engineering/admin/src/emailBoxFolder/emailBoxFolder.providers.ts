import { Connection } from 'typeorm';
import { EmailBoxFolder } from './databases/emailBoxFolders.entity';

export const emailBoxFolderProviders = [
  {
    provide: 'EMAIL_BOX_FOLDER_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(EmailBoxFolder),
    inject: ['DATABASE_CONNECTION'],
  },
];

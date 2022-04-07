import { Connection } from 'typeorm';
import { EmailBox } from './databases/emailBox.entity';

export const emailBoxProviders = [
  {
    provide: 'EMAIL_BOX_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(EmailBox),
    inject: ['DATABASE_CONNECTION'],
  },
];

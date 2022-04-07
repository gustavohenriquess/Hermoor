import { EmailBox } from 'src/emailBox/databases/emailBox.entity';
import { EmailBoxFolder } from 'src/emailBoxFolder/databases/emailBoxFolders.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.HOST_DB,
        port: Number(process.env.PORT_DB),
        username: process.env.USER_DB,
        password: process.env.PWD_DB,
        database: process.env.NAME_DB,
        entities: [EmailBox, EmailBoxFolder],
        synchronize: true,
      }),
  },
];

import { Sequelize } from 'sequelize-typescript';
import { EmailBox } from '../../emailBox/emailBox.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.HOST_DB,
        port: parseInt(process.env.PORT_DB),
        username: process.env.USER_DB,
        password: process.env.PWD_DB,
        database: process.env.NAME_DB,
      });
      sequelize.addModels([EmailBox]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

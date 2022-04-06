import { EmailBox } from './databases/emailBox.entity';
// import { EmailBoxFolder } from 'src/emailBoxFolder/emailBoxFolder.entity';

export const emailBoxProviders = [
  {
    provide: 'EMAIL_BOX_REPOSITORY',
    useValue: EmailBox,
  },
  // {
  //   provide: 'EMAIL_BOX_FOLDER_REPOSITORY',
  //   useValue: EmailBoxFolder,
  // },
];

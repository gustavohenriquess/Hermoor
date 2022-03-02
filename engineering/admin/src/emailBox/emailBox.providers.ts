import { EmailBox } from './emailBox.entity';

export const emailBoxProviders = [
  {
    provide: 'EMAIL_BOX_REPOSITORY',
    useValue: EmailBox,
  },
];

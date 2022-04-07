import {
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EmailBox } from './databases/emailBox.entity';

@Injectable()
export class EmailBoxService {
  private emailBoxList = [{ id: 1, name: 'emailBox1' }];
  constructor() {} // @Inject('EMAIL_BOX_REPOSITORY') private emailBoxRepository: typeof EmailBox,

  async create(emailBox: EmailBox): Promise<EmailBox> {
    // return this.emailBoxRepository.create<EmailBox>(emailBox);
    return;
  }

  async getById(id: number): Promise<EmailBox> {
    // const emailBox = await this.emailBoxRepository.findByPk(id);
    // if (!emailBox) {
    //   throw new NotFoundException({
    //     statusCode: HttpStatus.NOT_FOUND,
    //     message: 'emailbox.notFound',
    //   });
    // }
    // return emailBox;
    return;
  }

  async getAll(): Promise<EmailBox[]> {
    return;
    // return await this.emailBoxRepository.findAll<EmailBox>();
  }

  async update(id: number, emailBox: EmailBox): Promise<EmailBox> {
    this.checkIdAndEmailBoxId(id, emailBox.id);

    const emailBoxData = await this.getById(emailBox.id);
    if (!emailBoxData) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'emailbox.notFound',
      });
    }

    return emailBoxData;
    // return await emailBoxData.update(emailBox);
  }

  async delete(id: number): Promise<void> {
    const emailBox = await this.getById(id);
    if (!emailBox) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'emailbox.notFound',
      });
    }
    return;
    // return await emailBox.destroy();
  }

  private checkIdAndEmailBoxId(id: number, emailBoxId: number): void {
    if (id !== emailBoxId) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'emailbox.idNotMatch',
      });
    }
  }
}

import {
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmailBox } from './databases/emailBox.entity';

@Injectable()
export class EmailBoxService {
  constructor(
    @Inject('EMAIL_BOX_REPOSITORY')
    private emailBoxRepository: Repository<EmailBox>,
  ) {}

  async create(emailBox: EmailBox): Promise<EmailBox> {
    const emailbox = await this.emailBoxRepository.save(emailBox);
    return emailbox;
  }

  async getById(id: number): Promise<EmailBox> {
    const emailBox = await this.emailBoxRepository.findOneBy({ id: id });
    if (!emailBox) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'emailbox.notFound',
      });
    }
    return emailBox;
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

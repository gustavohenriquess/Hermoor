import {
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
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
        message: 'email.box.not.found',
      });
    }
    return emailBox;
  }

  async getAll(): Promise<[EmailBox[], number]> {
    return await this.emailBoxRepository.findAndCount();
  }

  async update(id: number, emailBox: EmailBox): Promise<EmailBox> {
    this.checkIdAndEmailBoxId(id, emailBox.id);

    const emailBoxData = await this.getById(emailBox.id);
    if (!emailBoxData) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'email.box.not.found',
      });
    }
    await this.emailBoxRepository.update({ id }, emailBox);

    return;
  }

  async delete(id: number): Promise<void> {
    const emailBox = await this.getById(id);
    if (!emailBox) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'email.box.not.found',
      });
    }

    await this.emailBoxRepository.delete({ id });

    return;
  }

  private checkIdAndEmailBoxId(id: number, emailBoxId: number): void {
    if (id !== emailBoxId) {
      throw new BadRequestException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'email.box.id.not.equals',
      });
    }
  }
}

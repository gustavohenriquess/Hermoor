import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { check } from 'prettier';
import { EmailBox } from './databases/emailBox.entity';

@Injectable()
export class EmailBoxService {
  private emailBoxes = [
    {
      name: 'Name',
      isActive: true,
      senderUser: 'string',
      senderPassword: 'string',
      senderHost: 'string',
      senderPort: 0,
      senderSsl: true,
      senderTls: true,
      senderProtocol: 'string',
      senderEmail: 'string',
      signature: 'string',
      receiverUser: 'string',
      receiverPassword: 'string',
      receiverHost: 'string',
      receiverPort: 0,
      receiverSsl: true,
      receiverTls: true,
      receiverProtocol: 'string',
      actionAfterReceive: 'string',
      receiptFolders: 'string',
    },
  ];

  async create(emailBox: EmailBox): Promise<EmailBox> {
    this.emailBoxes.push(emailBox);
    return emailBox;
  }

  async getById(emailBoxName: string): Promise<EmailBox> {
    const emailBox = await this.emailBoxes.find(
      (emailBox) => emailBox.name === emailBoxName,
    );
    if (!emailBox) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'emailbox.notFound',
      });
    }
    return emailBox;
  }

  async getAll(): Promise<EmailBox[]> {
    return this.emailBoxes;
  }

  async update(id: string, emailBox: EmailBox): Promise<EmailBox> {
    this.checkIdAndEmailBoxId(id, emailBox.name);

    const emailBoxIndex = this.emailBoxes.findIndex(
      (emailBoxItem) => emailBoxItem.name === emailBox.name,
    );

    if (emailBoxIndex === -1) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'emailbox.notFound',
      });
    }

    this.emailBoxes[emailBoxIndex] = emailBox;
    return emailBox;
  }

  async delete(id: string): Promise<EmailBox> {
    const emailBoxIndex = this.emailBoxes.findIndex(
      (emailBoxItem) => emailBoxItem.name === id,
    );

    if (emailBoxIndex === -1) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'emailbox.notFound',
      });
    }

    this.emailBoxes.splice(emailBoxIndex, 1);

    return;
  }

  private checkIdAndEmailBoxId(id: string, emailBoxName: string): void {
    if (id !== emailBoxName) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'emailbox.idNotMatch',
      });
    }
  }
}

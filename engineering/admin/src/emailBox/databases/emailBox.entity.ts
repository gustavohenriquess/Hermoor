import { Exclude } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
export class EmailBox {
  @IsString({ message: 'the field EmailBox.name must be the type string.' })
  @IsNotEmpty({ message: 'the field EmailBox.name is required.' })
  name: string;

  // @IsBoolean({
  //   message: 'the field EmailBox.isActive must be the type boolean.',
  // })
  // isActive: boolean;

  // // FKs;
  // // @HasMany(() => EmailBoxFolder)
  // // emailBoxFolders: EmailBoxFolder[];

  // //Sender
  // @IsString({
  //   message: 'the field EmailBox.senderUser must be the type string.',
  // })
  // @IsEmail(
  //   {},
  //   { message: 'the field EmailBox.senderUser must be a valid email.' },
  // )
  // senderUser: string;

  // @IsString({
  //   message: 'the field EmailBox.senderPassword must be the type string.',
  // })
  // @Exclude({ toPlainOnly: true })
  // senderPassword: string;
  // @IsString({
  //   message: 'the field EmailBox.senderHost must be the type string.',
  // })
  // senderHost: string;

  // @IsNumber(
  //   {},
  //   { message: 'the field EmailBox.senderPort must be the type number.' },
  // )
  // senderPort: number;

  // @IsBoolean({
  //   message: 'the field EmailBox.senderSsl must be the type boolean.',
  // })
  // senderSsl: boolean;

  // @IsBoolean({
  //   message: 'the field EmailBox.senderTls must be the type boolean.',
  // })
  // senderTls: boolean;

  // @IsString({
  //   message: 'the field EmailBox.senderProtocol must be the type string.',
  // })
  // senderProtocol: string; // SMTP, imap or pop3

  // @IsString({
  //   message: 'the field EmailBox.senderEmail must be the type string.',
  // })
  // @IsEmail(
  //   {},
  //   { message: 'the field EmailBox.senderEmail must be a valid email.' },
  // )
  // senderEmail: string;

  // @IsString({
  //   message: 'the field EmailBox.signature must be the type string.',
  // })
  // signature: string;

  // //Receiver
  // @IsString({
  //   message: 'the field EmailBox.receiverUser must be the type string.',
  // })
  // @IsEmail(
  //   {},
  //   { message: 'the field EmailBox.receiverUser must be a valid email.' },
  // )
  // receiverUser: string;

  // @IsString({
  //   message: 'the field EmailBox.receiverPassword must be the type string.',
  // })
  // @Exclude({ toPlainOnly: true })
  // receiverPassword: string;

  // @IsString({
  //   message: 'the field EmailBox.receiverHost must be the type string.',
  // })
  // receiverHost: string;

  // @IsNumber(
  //   {},
  //   { message: 'the field EmailBox.receiverPort must be the type number.' },
  // )
  // receiverPort: number;

  // @IsBoolean({
  //   message: 'the field EmailBox.receiverSsl must be the type boolean.',
  // })
  // receiverSsl: boolean;

  // @IsBoolean({
  //   message: 'the field EmailBox.receiverTls must be the type boolean.',
  // })
  // receiverTls: boolean;

  // @IsString({
  //   message: 'the field EmailBox.receiverProtocol must be the type string.',
  // })
  // receiverProtocol: string; // smtp, IMAP or pop3

  // @IsString({
  //   message: 'the field EmailBox.actionAfterReceive must be the type string.',
  // })
  // actionAfterReceive: string; // mark as read, move, delete, archive

  // @IsString({
  //   message: 'the field EmailBox.receiptFolders must be the type string.',
  // })
  // receiptFolders: string; // inbox, sent, drafts, spam, trash, archive
}

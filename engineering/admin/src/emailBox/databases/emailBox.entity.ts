import { Exclude } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmailBox {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString({ message: 'the field EmailBox.name must be the type string.' })
  @IsNotEmpty({ message: 'the field EmailBox.name is required.' })
  @Column({ length: 500 })
  name: string;

  @IsBoolean({
    message: 'the field EmailBox.isActive must be the type boolean.',
  })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  // FKs;
  // @HasMany(() => EmailBoxFolder)
  // emailBoxFolders: EmailBoxFolder[];

  //Sender
  @IsString({
    message: 'the field EmailBox.senderUser must be the type string.',
  })
  @IsEmail(
    {},
    { message: 'the field EmailBox.senderUser must be a valid email.' },
  )
  @Column({ length: 200, nullable: true })
  senderUser: string;

  @IsString({
    message: 'the field EmailBox.senderPassword must be the type string.',
  })
  @Exclude({ toPlainOnly: true })
  @Column({ length: 200, nullable: true })
  senderPassword: string;
  @IsString({
    message: 'the field EmailBox.senderHost must be the type string.',
  })
  @Column({ length: 200, nullable: true })
  senderHost: string;

  @IsNumber(
    {},
    { message: 'the field EmailBox.senderPort must be the type number.' },
  )
  @Column({ nullable: true })
  senderPort: number;

  @IsBoolean({
    message: 'the field EmailBox.senderSsl must be the type boolean.',
  })
  @Column({ type: 'boolean', default: false })
  senderSsl: boolean;

  @IsBoolean({
    message: 'the field EmailBox.senderTls must be the type boolean.',
  })
  @Column({ type: 'boolean', default: false })
  senderTls: boolean;

  @IsString({
    message: 'the field EmailBox.senderProtocol must be the type string.',
  })
  @Column({ type: 'char', nullable: true })
  senderProtocol: string; // S = SMTP, I = imap or P = pop3

  @IsString({
    message: 'the field EmailBox.senderEmail must be the type string.',
  })
  @IsEmail(
    {},
    { message: 'the field EmailBox.senderEmail must be a valid email.' },
  )
  @Column({ length: 200, nullable: true })
  senderEmail: string;

  @IsString({
    message: 'the field EmailBox.signature must be the type string.',
  })
  @Column({ length: 4000, nullable: true })
  signature: string;

  //Receiver
  @IsString({
    message: 'the field EmailBox.receiverUser must be the type string.',
  })
  @IsEmail(
    {},
    { message: 'the field EmailBox.receiverUser must be a valid email.' },
  )
  @Column({ length: 200, nullable: true })
  receiverUser: string;

  @IsString({
    message: 'the field EmailBox.receiverPassword must be the type string.',
  })
  @Exclude({ toPlainOnly: true })
  @Column({ length: 200, nullable: true })
  receiverPassword: string;

  @IsString({
    message: 'the field EmailBox.receiverHost must be the type string.',
  })
  receiverHost: string;

  @IsNumber(
    {},
    { message: 'the field EmailBox.receiverPort must be the type number.' },
  )
  @Column({ nullable: true })
  receiverPort: number;

  @IsBoolean({
    message: 'the field EmailBox.receiverSsl must be the type boolean.',
  })
  @Column({ type: 'boolean', default: false })
  receiverSsl: boolean;

  @IsBoolean({
    message: 'the field EmailBox.receiverTls must be the type boolean.',
  })
  @Column({ type: 'boolean', default: false })
  receiverTls: boolean;

  @IsString({
    message: 'the field EmailBox.receiverProtocol must be the type string.',
  })
  @Column({ type: 'char', nullable: true })
  receiverProtocol: string; // S = SMTP, I = imap or P = pop3

  @IsString({
    message: 'the field EmailBox.actionAfterReceive must be the type string.',
  })
  @Column({ length: 10, nullable: true })
  actionAfterReceive: string; // mark as read, move, delete, archive

  @IsString({
    message: 'the field EmailBox.receiptFolders must be the type string.',
  })
  @Column({ length: 10, nullable: true })
  receiptFolders: string; // inbox, sent, drafts, spam, trash, archive
}

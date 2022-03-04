import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { EmailBoxFolder } from 'src/emailBoxFolder/emailBoxFolder.entity';

@Table
export class EmailBox extends Model<EmailBox> {
  @Column({ type: DataType.STRING(100), allowNull: false })
  name: string;
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  isActive: boolean;

  //FKs
  @HasMany(() => EmailBoxFolder)
  emailBoxFolders: EmailBoxFolder[];

  //Sender
  @Column({ type: DataType.STRING(100) })
  senderUser: string;
  @Column({ type: DataType.STRING(100) })
  senderPassword: string;
  @Column({ type: DataType.STRING(100) })
  senderHost: string;
  @Column({ type: DataType.INTEGER })
  senderPort: number;
  @Column({ type: DataType.BOOLEAN })
  senderSsl: boolean;
  @Column({ type: DataType.BOOLEAN })
  senderTls: boolean;
  @Column({ type: DataType.STRING(5) })
  senderProtocol: string; // SMTP, imap or pop3
  @Column({ type: DataType.STRING(100) })
  senderEmail: string;
  @Column({ type: DataType.STRING })
  signature: string;

  //Receiver
  @Column({ type: DataType.STRING(100) })
  receiverUser: string;
  @Column({ type: DataType.STRING(100) })
  receiverPassword: string;
  @Column({ type: DataType.STRING(100) })
  receiverHost: string;
  @Column({ type: DataType.INTEGER })
  receiverPort: number;
  @Column({ type: DataType.BOOLEAN })
  receiverSsl: boolean;
  @Column({ type: DataType.BOOLEAN })
  receiverTls: boolean;
  @Column({ type: DataType.STRING(5) })
  receiverProtocol: string; // smtp, IMAP or pop3
  @Column({ type: DataType.STRING(100) })
  actionAfterReceive: string; // mark as read, move, delete, archive
  @Column({ type: DataType.STRING(100) })
  receiptFolders: string; // inbox, sent, drafts, spam, trash, archive
}

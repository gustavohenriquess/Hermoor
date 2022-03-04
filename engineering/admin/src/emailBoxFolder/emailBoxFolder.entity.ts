import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { EmailBox } from 'src/emailBox/emailBox.entity';

@Table
export class EmailBoxFolder extends Model<EmailBoxFolder> {
  @Column({ type: DataType.STRING(100), allowNull: false })
  name: string;
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  isActive: boolean;
  @Column({ type: DataType.STRING(100) })
  internalName: string;

  @ForeignKey(() => EmailBox)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idEmailBox: number;
}

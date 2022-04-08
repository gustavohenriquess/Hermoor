import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { EmailBox } from 'src/emailBox/databases/emailBox.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmailBoxFolder {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column({ length: 500 })
  name: string;

  @IsBoolean()
  @IsOptional()
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @IsString()
  @IsOptional()
  @Column({ length: 200, nullable: true })
  internalName: string;

  @IsNumber()
  @Column({ type: 'integer' })
  @ManyToOne(() => EmailBox, (emailBox) => emailBox.emailBoxFolders)
  idEmailBox: number;
}

import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  idEmailBox: number;
}

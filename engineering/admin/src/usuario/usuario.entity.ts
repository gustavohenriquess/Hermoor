import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico';

export class Usuario {
  id: number;

  @Expose({ name: 'username' })
  @IsNotEmpty({ message: 'nomeDeUsuario é obrigatório.' })
  @IsString({ message: 'nomeDeUsuario precisa ser uma string.' })
  @IsNomeDeUsuarioUnico({ message: 'nomeDeUsuario precisa ser único' })
  nomeDeUsuario: string;

  @Expose({ name: 'email' })
  @IsEmail({}, { message: 'email precisa ser um endereço de email válido!' })
  email: string;

  @Expose({ name: 'password' })
  @Exclude({ toPlainOnly: true }) // não exportar no retorno
  @IsNotEmpty({ message: 'senha é obrigatório.' })
  senha: string;

  @Expose({ name: 'fullName' })
  @IsNotEmpty({ message: 'nomeCompleto é obrigatório' })
  nomeCompleto: string;

  @Expose({ name: 'joinDate' })
  dataDeEntrada: Date;
}

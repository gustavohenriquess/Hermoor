import { Injectable } from '@nestjs/common';
import { EmailBox } from './emailBox.entity';

@Injectable()
export class EmailBoxService {
  private usuarios = [
    {
      id: 1,
      nomeDeUsuario: 'usuario1',
      email: 'user1@users.com',
      senha: 'senha1',
      nomeCompleto: 'Usuario 1',
      dataDeEntrada: new Date(),
    },
  ];

  public cria(usuario: EmailBox): EmailBox {
    this.usuarios.push(usuario);
    return usuario;
  }

  public buscaPorNomeDeUsuario(nomeDeUsuario: string): EmailBox {
    return this.usuarios.find(
      (usuario) => usuario.nomeDeUsuario === nomeDeUsuario,
    );
  }
}

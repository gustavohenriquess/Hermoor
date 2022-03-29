import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { NestResponse } from '../../core/http/nest-response';
import { NestResponseBuilder } from '../../core/http/nest-response-builder';
import { EmailBox } from '../emailBox.entity';
import { EmailBoxService } from '../emailBox.service';

@Controller('emailBox')
export class EmailBoxController {
  constructor(private usuarioService: EmailBoxService) {}

  @Post()
  public cria(@Body() usuario: EmailBox): NestResponse {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({ location: `/users/${usuarioCriado.nomeDeUsuario}` })
      .comBody(usuarioCriado)
      .build();
  }

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(
    @Param('nomeDeUsuario') nomeDeUsuario: string,
  ): EmailBox {
    const usuarioEncontrado =
      this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

    if (!usuarioEncontrado) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado',
      });
    }

    return usuarioEncontrado;
  }
}

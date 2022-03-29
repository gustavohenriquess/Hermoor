import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformaRespostaInterceptor } from './core/http/transforma-resposta-interceptor';
import { IsNomeDeUsuarioUnicoConstraint } from './is-nome-de-usuario-unico';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    IsNomeDeUsuarioUnicoConstraint,
    { provide: APP_INTERCEPTOR, useClass: TransformaRespostaInterceptor },
  ],
})
export class EmailBoxModule {}

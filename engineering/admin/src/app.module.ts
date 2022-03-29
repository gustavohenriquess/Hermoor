import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoHttp } from './core/common/filtros/filtro-de-excexao-http.filter';
import { EmailBoxModule } from './emailBox/emailBox.module';
import { TransformaRespostaInterceptor } from './usuario/core/http/transforma-resposta-interceptor';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, EmailBoxModule],
  controllers: [],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TransformaRespostaInterceptor },
    { provide: APP_FILTER, useClass: FiltroDeExcecaoHttp },
  ],
})
export class AppModule {}

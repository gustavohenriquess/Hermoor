import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformaRespostaInterceptor } from '../core/http/transforma-resposta-interceptor';
import { EmailBoxController } from './adapters/emailBox.controller';
import { EmailBoxService } from './emailBox.service';

@Module({
  imports: [],
  controllers: [EmailBoxController],
  providers: [
    EmailBoxService,
    { provide: APP_INTERCEPTOR, useClass: TransformaRespostaInterceptor },
  ],
})
export class EmailBoxModule {}

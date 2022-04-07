import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptorResponse } from '../core/infra/http/transforma-resposta-interceptor';
import { EmailBoxController } from './infra/http/emailBox.controller';
import { EmailBoxService } from './emailBox.service';

@Module({
  imports: [],
  controllers: [EmailBoxController],
  providers: [
    EmailBoxService,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptorResponse },
  ],
})
export class EmailBoxModule {}

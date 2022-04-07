import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptorResponse } from '../core/infra/http/transforma-resposta-interceptor';
import { EmailBoxController } from './infra/http/emailBox.controller';
import { EmailBoxService } from './emailBox.service';
import { emailBoxProviders } from './emailBox.providers';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmailBoxController],
  providers: [
    ...emailBoxProviders,
    EmailBoxService,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptorResponse },
  ],
})
export class EmailBoxModule {}

import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DatabaseModule } from 'src/core/database/database.module';
import { TransformInterceptorResponse } from 'src/core/infra/http/transforma-resposta-interceptor';
import { emailBoxFolderProviders } from './emailBoxFolder.providers';
import { EmailBoxFolderService } from './emailBoxFolder.service';
import { EmailBoxFolderController } from './infra/http/emailBoxFolder.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [EmailBoxFolderController],
  providers: [
    ...emailBoxFolderProviders,
    EmailBoxFolderService,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptorResponse },
  ],
})
export class EmailBoxFolderModule {}

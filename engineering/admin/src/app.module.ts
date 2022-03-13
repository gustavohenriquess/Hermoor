import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailBoxModule } from './emailBox/emailBox.module';
import { EmailBoxFolderModule } from './emailBoxFolder/emailBoxFolder.module';
import { DatabaseModule } from './infra/database/database.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from 'src/core/http/responseInterceptor';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmailBoxModule,
    EmailBoxFolderModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
  ],
})
export class AppModule {}

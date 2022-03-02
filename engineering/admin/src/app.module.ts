import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailBoxModule } from './emailBox/emailBox.module';
import { EmailBoxFolderModule } from './emailBoxFolder/emailBoxFolder.module';
import { DatabaseModule } from './infra/database/database.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmailBoxModule,
    EmailBoxFolderModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

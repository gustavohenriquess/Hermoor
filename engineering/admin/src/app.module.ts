import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailBoxModule } from './emailBox/emailBox.module';
import { EmailBoxFolderModule } from './emailBoxFolder/emailBoxFolder.module';

@Module({
  imports: [EmailBoxModule, EmailBoxFolderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

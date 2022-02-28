import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailBoxModule } from './emailBox/emailBox.module';

@Module({
  imports: [EmailBoxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

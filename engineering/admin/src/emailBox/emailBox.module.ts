import { Module } from '@nestjs/common';
import { EmailBoxController } from './emailBox.controller';
import { emailBoxProviders } from './emailBox.providers';
import { EmailBoxService } from './emailBox.service';

@Module({
  imports: [],
  controllers: [EmailBoxController],
  providers: [...emailBoxProviders, EmailBoxService],
})
export class EmailBoxModule {}

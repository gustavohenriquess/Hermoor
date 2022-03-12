import { Module } from '@nestjs/common';
import { EmailBoxController } from './emailBox.controller';
import { emailBoxProviders } from './emailBox.providers';
import { EmailBoxService } from './emailBox.service';
import { CreateDefaultFolders } from './useCase/createDefaultFolders';

@Module({
  imports: [],
  controllers: [EmailBoxController],
  providers: [...emailBoxProviders, EmailBoxService, CreateDefaultFolders],
})
export class EmailBoxModule {}

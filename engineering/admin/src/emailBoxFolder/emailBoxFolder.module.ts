import { Module } from '@nestjs/common';
import { EmailBoxFolderController } from './emailBoxFolder.controller';
import { emailBoxFolderProviders } from './emailBoxFolder.providers';
import { EmailBoxFolderService } from './emailBoxFolder.service';

@Module({
  imports: [],
  controllers: [EmailBoxFolderController],
  providers: [...emailBoxFolderProviders, EmailBoxFolderService],
})
export class EmailBoxFolderModule {}

import { Module } from '@nestjs/common';
import { EmailBoxFolderController } from './emailBoxFolder.controller';

@Module({
  imports: [],
  controllers: [EmailBoxFolderController],
  providers: [],
})
export class EmailBoxFolderModule {}

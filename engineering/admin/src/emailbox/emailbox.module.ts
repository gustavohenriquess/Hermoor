import { Module } from '@nestjs/common';
import { EmailboxController } from './emailbox.controller';

@Module({
  imports: [],
  controllers: [EmailboxController],
  providers: [],
})
export class EmailBoxModule {}

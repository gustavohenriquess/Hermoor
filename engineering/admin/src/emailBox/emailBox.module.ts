import { Module } from '@nestjs/common';
import { EmailBoxController } from './emailBox.controller';

@Module({
  imports: [],
  controllers: [EmailBoxController],
  providers: [],
})
export class EmailBoxModule {}

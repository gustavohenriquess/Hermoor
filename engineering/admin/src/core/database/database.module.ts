import { Module } from '@nestjs/common';
import { sequelizeProviders } from './sequilize.provider';

@Module({
  providers: [...sequelizeProviders],
  exports: [...sequelizeProviders],
})
export class DatabaseModule {}

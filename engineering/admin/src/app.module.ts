import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './core/common/filters/http-exception-filter.filter';
import { EmailBoxModule } from './emailBox/emailBox.module';
import { TransformInterceptorResponse } from './core/infra/http/transforma-resposta-interceptor';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [EmailBoxModule, DatabaseModule],
  controllers: [],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptorResponse },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class AppModule {}

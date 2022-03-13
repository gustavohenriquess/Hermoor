import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestResponse } from './nestResponse';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((ControllerResponse: NestResponse) => {
        if (ControllerResponse instanceof NestResponse) {
          const contextHttp = context.switchToHttp();
          const response = contextHttp.getResponse();
          const { headers, status, body } = ControllerResponse;

          const headersNames = Object.getOwnPropertyNames(headers);

          headersNames.forEach((headerName) => {
            const headersValues = headers[headerName];
            this.httpAdapter.setHeader(response, headerName, headersValues);
          });

          this.httpAdapter.status(response, status);
          return body;
        }
        return ControllerResponse;
      }),
    );
  }
}

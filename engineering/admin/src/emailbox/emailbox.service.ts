import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailboxService {
  private emailbox: Array<object> = [];
}

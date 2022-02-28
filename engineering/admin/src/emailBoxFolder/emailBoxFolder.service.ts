import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailboxService {
  private emailBox: Array<object> = [];
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailBoxService {
  private emailBox: Array<object> = [];
}

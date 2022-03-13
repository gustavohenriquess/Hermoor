import { HttpStatus, NotFoundException } from '@nestjs/common';

export class NotFound {
  async exec(object: any, status: HttpStatus, message: string): Promise<void> {
    if (!object || object.length === 0) {
      throw new NotFoundException({
        statusCode: status,
        message: message,
      });
    }

    return;
  }
}

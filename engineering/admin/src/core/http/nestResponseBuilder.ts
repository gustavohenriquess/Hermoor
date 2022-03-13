import { NestResponse } from './nestResponse';

export class NestResponseBuilder {
  private response: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };

  public withStatus(status: number) {
    this.response.status = status;
    return this;
  }
  public withHeaders(headers: object) {
    this.response.headers = headers;
    return this;
  }
  public withBody(body: object) {
    this.response.body = body;
    return this;
  }
  build() {
    return new NestResponse(this.response);
  }
}

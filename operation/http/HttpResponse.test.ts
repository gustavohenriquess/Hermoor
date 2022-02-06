import * as HttpResponse from './HttpResponse';

test('Check clientError Response', () => {
  const response = HttpResponse.clientError(new Error('Message'));
  expect(response.statusCode).toBe(400);
  expect(response.body.error).toBe('Message');
});

test('Check unauthorized Response', () => {
  const response = HttpResponse.unauthorized(new Error('Message'));
  expect(response.statusCode).toBe(401);
  expect(response.body.error).toBe('Message');
});

test('Check forbidden Response', () => {
  const response = HttpResponse.forbidden(new Error('Message'));
  expect(response.statusCode).toBe(403);
  expect(response.body.error).toBe('Message');
});

test('Check notFound Response', () => {
  const response = HttpResponse.notFound(new Error('Message'));
  expect(response.statusCode).toBe(404);
  expect(response.body.error).toBe('Message');
});

test('Check conflict Response', () => {
  const response = HttpResponse.conflict(new Error('Message'));
  expect(response.statusCode).toBe(409);
  expect(response.body.error).toBe('Message');
});

test('Check tooMany Response', () => {
  const response = HttpResponse.tooMany(new Error('Message'));
  expect(response.statusCode).toBe(429);
  expect(response.body.error).toBe('Message');
});

test('Check ok Response', () => {
  const response = HttpResponse.ok({ response: 'ok' });
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({ response: 'ok' });
});

test('Check created Response', () => {
  const response = HttpResponse.created();
  expect(response.statusCode).toBe(201);
  expect(response.body).toBeUndefined();
});

test('Check fail Response', () => {
  const response = HttpResponse.fail(new Error('Message'));
  expect(response.statusCode).toBe(500);
  expect(response.body.error).toBe('Message');
});

const environment = process.env.NODE_ENV === 'production';
const messaging = process.env.MESSAGING_PROVIDER || 'rabbitMQ';

export { environment, messaging };

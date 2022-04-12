import express from 'express';
import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import cors from 'cors';
// import helmet from 'helmet';
// import compression from 'compression';
import { v1Router } from './api/v1';
// import { isProduction } from '../../config';
const port = process.env.PORT_SRV || 3002;

const app = express();

// const origin = {
//   origin: isProduction ? 'https://whitelabel.com' : '*',
// };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors(origin));
// app.use(compression());
// app.use(helmet());
// app.use(morgan('combined'));

app.use('/api/v1', v1Router);

// New api versions can go here
app.listen(port, () => {
  console.log(`[App]: Server listening on ${port}`);
});

export { app };

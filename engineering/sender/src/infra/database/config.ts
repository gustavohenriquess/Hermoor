type Credentials = {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: number | undefined;
  dialect: string | undefined;
};

type DatabasesCredentials = {
  [key: string]: Credentials;
};
const environment: string = process.env.NODE_ENV || 'development';

const {
  DB_DEV_USER,
  DB_DEV_PASS,
  DB_DEV_NAME,
  DB_DEV_HOST,
  DB_TEST_USER,
  DB_TEST_PASS,
  DB_TEST_NAME,
  DB_TEST_HOST,
  DB_PROD_USER,
  DB_PROD_PASS,
  DB_PROD_NAME,
  DB_PROD_HOST,
  DB_DIALECT,
} = process.env;

const databasesCredentials: DatabasesCredentials = {
  development: {
    username: DB_DEV_USER,
    password: DB_DEV_PASS,
    database: DB_DEV_NAME,
    host: Number(DB_DEV_HOST),
    dialect: DB_DIALECT,
  },
  test: {
    username: DB_TEST_USER,
    password: DB_TEST_PASS,
    database: DB_TEST_NAME,
    host: Number(DB_TEST_HOST),
    dialect: DB_DIALECT,
  },
  production: {
    username: DB_PROD_USER,
    password: DB_PROD_PASS,
    database: DB_PROD_NAME,
    host: Number(DB_PROD_HOST),
    dialect: DB_DIALECT,
  },
};

const credential = databasesCredentials[environment];

export default credential;

import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import { join } from 'path';
import usersRouter from '../users/users.routes';
import router from './routes';

const app: express.Application = express();

loadConfigs();

loadViews();

loadRoutes();

export default app;

function loadRoutes() {
  app.use('/', usersRouter);
  // app.use(router);
}

function loadViews() {
  app.use(express.static(join(__dirname, '../public')));
}

function loadConfigs() {
  app.use(logger('dev'));
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(cookieParser());
}

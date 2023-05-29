import * as express from 'express';
import 'express-async-errors';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './config/di-container';
import { errorMiddleware } from './lib/middlewares/error-handler.middleware';
import { requestMiddleware } from './lib/middlewares/request-logger.middleware';
import rateLimit from 'express-rate-limit';

export class App {
  async setup() {
    const server = new InversifyExpressServer(container);
    server.setErrorConfig((app) => {
      app.use(errorMiddleware);
    });

    server.setConfig((app) => {
      app.use(express.json());
      app.use(requestMiddleware);
      app.use('*', rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
    });

    const app = server.build();

    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port http://localhost:${process.env.PORT}`
      );
    });
  }
}

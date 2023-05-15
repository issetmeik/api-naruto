import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './config/di-container';
import { ValidationException, HttpException } from './app/exceptions';
import { BaseHttpResponse } from './lib/base-http-response';
import { Application } from './lib/abstract-application';

export class App {
  async setup() {
    const server = new InversifyExpressServer(container);
    server.setErrorConfig((app) => {
      app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof ValidationException) {
          const response = BaseHttpResponse.failed(err.message);
          res.status(response.statusCode).json(response);
          next();
        }

        if (err instanceof HttpException) {
          const response = BaseHttpResponse.failed(err.message, err.statusCode);
          res.status(response.statusCode).json(response);
          next();
        }

        if (err instanceof Error) {
          const response = BaseHttpResponse.failed(err.message, 500);
          res.status(response.statusCode).json(response);
        }
      });
    });

    server.setConfig((app) => {
      app.use(express.json());
    });

    const app = server.build();

    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port http://localhost:${process.env.PORT}`
      );
    });
  }
}

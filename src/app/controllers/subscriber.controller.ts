import { Response, Request } from 'express';
import {
  controller,
  httpGet,
  httpPatch,
  httpPost,
} from 'inversify-express-utils';
import { CreateSubscriberDto, SubscriberDto } from '../dtos';
import { SubscribersService } from '../services/subscriber.service';
import { ValidateRequest } from '../../lib/middlewares/validate-request.middleware';
import { BaseHttpResponse } from '../../lib/base-http-response';

@controller('/subscribers')
export class SubscribersController {
  constructor(private readonly _service: SubscribersService) {}

  @httpGet('/')
  async index(req: Request, res: Response) {
    const response = await this._service.all();
    res.json({ data: { response } });
  }

  @httpPost('/', ValidateRequest.with(CreateSubscriberDto))
  async store(req: Request, res: Response) {
    const subscriber = await this._service.create(req.body);
    const response = BaseHttpResponse.success(subscriber, 201);
    res.status(response.statusCode).json(response);
  }
}

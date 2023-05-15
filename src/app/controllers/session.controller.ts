import { controller, httpPost } from 'inversify-express-utils';
import { Response, Request } from 'express';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { ValidateRequest } from '../../lib/middlewares/validate-request.middleware';
import { CreateTokenDto } from '../dtos';
import { BaseHttpResponse } from '../../lib/base-http-response';

@controller('/session')
export class SessionController {
  constructor(private readonly _service: SessionService) {}

  @httpPost('/', ValidateRequest.with(CreateTokenDto))
  async store(req: Request, res: Response) {
    const token = await this._service.generateToken(req.body);
    const response = BaseHttpResponse.success(token, 200);
    res.status(response.statusCode).json(response);
  }
}

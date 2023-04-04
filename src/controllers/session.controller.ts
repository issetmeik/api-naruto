import { controller, httpPost } from 'inversify-express-utils';
import { Response, Request } from 'express';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

@controller('/session')
export class SessionController {
  constructor(private readonly _service: SessionService) {}

  @httpPost('/')
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await this._service.generateToken({ email, password });

    res.status(200).json({ data: token });
  }
}

import { Response, Request } from 'express';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { UserService } from '../services/user.service';
import { authMiddleware } from '../middlewares/auth';

@controller('/user')
export class UserController {
  constructor(private readonly _service: UserService) {}

  @httpPost('/')
  async store(req: Request, res: Response) {
    const newUser = await this._service.create(req.body);
    res.status(201).json({ data: newUser });
  }

  @httpGet('/:id', authMiddleware)
  async getOne(req: Request, res: Response) {
    const id = req.params.id;
    const findUser = await this._service.findOne({ id });
    res.status(200).json({ data: { findUser } });
  }
}

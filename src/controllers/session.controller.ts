import { controller, httpPost } from 'inversify-express-utils';
import { Response, Request } from 'express';
import { UserService } from '../services/user.service';

@controller('/session')
export class SessionController {
  constructor(private readonly userService: UserService) {}

  @httpPost('/')
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await this.userService.findByEmail({ email });

    if (!user) {
      return res.status(404).json({ error: 'user not found' });
    }

    if (!(await this.userService.checkPassword(password, user.password))) {
      return res.status(400).json({ error: 'wrong password' });
    }

    const { id, name } = user;
  }
}

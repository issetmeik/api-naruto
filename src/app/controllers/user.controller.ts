import { Response, Request } from 'express';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { UserService } from '../services/user.service';
import { authMiddleware } from '../../middlewares/auth';
import { FavoriteService } from '../services/favorite.service';
import { createUserSchema } from '../dtos';
import * as Yup from 'yup';
import { ApiError, BadRequestError } from '../../shared/errors/api-errors';

@controller('/user')
export class UserController {
  constructor(
    private readonly _service: UserService,
    private readonly _favoriteService: FavoriteService
  ) {}

  @httpPost('/')
  async store(req: Request, res: Response) {
    const { name, email, password, avatar, birthDate, externalId } = req.body;

    await createUserSchema.validate({
      name,
      email,
      password,
      avatar,
      birthDate,
      externalId,
    });

    const newUser = await this._service.create(req.body);
    res.status(201).json({ data: newUser });
  }

  @httpGet('/:id', authMiddleware)
  async getOne(req: Request, res: Response) {
    const id = req.params.id;
    const findUser = await this._service.findOne({ id });
    res.status(200).json({ data: findUser });
  }
}

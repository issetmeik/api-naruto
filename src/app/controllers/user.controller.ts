import { Response, Request } from 'express';
import {
  controller,
  httpGet,
  httpPost,
  httpPut,
} from 'inversify-express-utils';
import { UserService } from '../services/user.service';
import { authMiddleware } from '../../lib/middlewares/auth';
import { CreateUserDto, UserFindOneDto, UserUpdateDto } from '../dtos';
import { ValidateRequest } from '../../lib/middlewares/validate-request.middleware';
import { BaseHttpResponse } from '../../lib/base-http-response';
import { upload } from '../../lib/middlewares/multer.middleware';
import { ValidationException } from '../exceptions';

@controller('/user')
export class UserController {
  constructor(private readonly _service: UserService) {}

  @httpPost('/', ValidateRequest.with(CreateUserDto))
  async store(req: Request, res: Response) {
    const user = await this._service.create(req.body);
    const response = BaseHttpResponse.success(user, 201);
    res.status(response.statusCode).json(response);
  }

  @httpGet('/:id', authMiddleware, ValidateRequest.withParams(UserFindOneDto))
  async getOne(req: Request, res: Response) {
    const user = await this._service.findOne(req.body);
    const response = BaseHttpResponse.success(user, 200);
    res.status(response.statusCode).json(response);
  }

  @httpPut(
    '/image',
    authMiddleware,
    ValidateRequest.withParams(UserUpdateDto),
    upload.single('image')
  )
  async uploadAvatar(req: Request, res: Response) {
    const image = req.file;
    if (!image) {
      throw new ValidationException('Missing property image');
    }
    const avatar = await this._service.uploadImg(req.body, image);
    const response = BaseHttpResponse.success(avatar, 200);
    res.status(response.statusCode).json(response);
  }
}

import { Request, Response } from 'express';
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
} from 'inversify-express-utils';
import { FavoriteService } from '../services/favorite.service';
import { authMiddleware } from '../../lib/middlewares/auth';
import { FavoriteTypes } from '@prisma/client';
import {
  CreateFavoriteDto,
  DeleteFavoriteDto,
  FavoriteFindManyDto,
} from '../dtos';
import { UserService } from '../services/user.service';
import { ValidateRequest } from '../../lib/middlewares/validate-request.middleware';
import { BaseHttpResponse } from '../../lib/base-http-response';

@controller('/favorites')
export class FavoriteController {
  constructor(
    private readonly _service: FavoriteService,
    private readonly _userService: UserService
  ) {}

  @httpPost(
    '/:id',
    authMiddleware,
    ValidateRequest.withParams(CreateFavoriteDto)
  )
  async store(req: Request, res: Response) {
    //TODO: Adicionar tratativa para nao permitir criar favoritos iguais para o mesmo usuario
    const favorite = await this._service.create(req.body);
    const response = BaseHttpResponse.success(favorite, 201);
    res.status(response.statusCode).json(response);
  }

  @httpGet('/', authMiddleware, ValidateRequest.withQuery(FavoriteFindManyDto))
  async getFavorites(req: Request, res: Response) {
    const favorites = await this._service.findMany(req.body);
    const response = BaseHttpResponse.success(favorites);
    res.json(response);
  }

  @httpDelete(
    '/:id',
    authMiddleware,
    ValidateRequest.withParams(DeleteFavoriteDto)
  )
  async delete(req: Request, res: Response) {
    const favorite = await this._service.delete(req.body);
    const response = BaseHttpResponse.success(favorite);
    res.json(response);
  }
}

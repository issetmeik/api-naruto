import { Request, Response } from 'express';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { FavoriteService } from '../services/favorite.service';
import { authMiddleware } from '../middlewares/auth';
import { FavoriteTypes } from '@prisma/client';
import {
  CreateFavoriteDto,
  FavoriteDeleteDto,
  FavoriteFindManyDto,
} from '../dtos';
import { UserService } from '../services/user.service';

@controller('/favorite')
export class FavoriteController {
  constructor(
    private readonly _service: FavoriteService,
    private readonly _userService: UserService
  ) {}

  @httpPost('/:id', authMiddleware)
  async store(req: Request, res: Response) {
    const dto: CreateFavoriteDto = {
      userId: req.body.auth.userId,
      type: req.body.type,
      id: req.params.id,
    };

    const newFavorite = await this._service.create(dto);
    res.status(201).json({ data: newFavorite });
  }

  @httpGet('/', authMiddleware)
  async getFavorites(req: Request, res: Response) {
    const dto: FavoriteFindManyDto = {
      page: req.body.page,
      pageSize: req.body.pageSize,
      userId: req.body.auth.userId,
    };

    const favorites = await this._service.findMany(dto);
    res.status(200).json({ data: favorites });
  }

  @httpPost('/delete/:id', authMiddleware)
  async delete(req: Request, res: Response) {
    const dto: FavoriteDeleteDto = {
      id: req.params.id,
      userId: req.body.auth.userId,
    };
    await this._service.delete(dto);

    res.status(200);
  }
}

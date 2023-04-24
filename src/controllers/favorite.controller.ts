import { Request, Response } from 'express';
import { controller, httpPost } from 'inversify-express-utils';
import { FavoriteService } from '../services/favorite.service';
import { authMiddleware } from '../middlewares/auth';
import { FavoriteTypes } from '@prisma/client';
import { CreateFavoriteDto } from '../dtos';

@controller('/favorite')
export class FavoriteController {
  constructor(private readonly _service: FavoriteService) {}

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
}

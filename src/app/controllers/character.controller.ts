import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  httpPost,
  httpPut,
} from 'inversify-express-utils';
import { CharacterService } from '../services/character.service';
import { ValidateRequest } from '../../lib/middlewares/validate-request.middleware';
import {
  CharacterFindManyDto,
  CharacterFindOneDto,
  CreateCharacterDto,
  UpdateCharacterDto,
} from '../dtos';
import { BaseHttpResponse } from '../../lib/base-http-response';
import { authMiddleware } from '../../lib/middlewares/auth';

@controller('/character')
export class CharacterController {
  constructor(private readonly _service: CharacterService) {}

  @httpPost('/', ValidateRequest.with(CreateCharacterDto))
  async store(req: Request, res: Response) {
    const character = await this._service.create(req.body);
    const response = BaseHttpResponse.success(character, 201);
    res.status(response.statusCode).json(response);
  }

  @httpGet('/', ValidateRequest.withQuery(CharacterFindManyDto))
  async index(req: Request, res: Response) {
    const characters = await this._service.findMany(req.body);
    const response = BaseHttpResponse.success(characters);
    res.json(response);
  }

  @httpGet('/:id', ValidateRequest.withParams(CharacterFindOneDto))
  async getOne(req: Request, res: Response) {
    const character = await this._service.findOne(req.body);
    const response = BaseHttpResponse.success(character);
    res.json(response);
  }

  @httpPut(
    '/:id',
    authMiddleware,
    ValidateRequest.withParams(UpdateCharacterDto)
  )
  async updateById(req: Request, res: Response) {
    const character = await this._service.update(req.body);
    const response = BaseHttpResponse.success(character);
    res.json(response);
  }
}

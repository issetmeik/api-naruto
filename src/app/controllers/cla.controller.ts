import { ClaService } from '../services/cla.service';
import {
  controller,
  httpGet,
  httpPost,
  httpPut,
} from 'inversify-express-utils';
import { Request, Response } from 'express';
import { ValidateRequest } from '../../lib/middlewares/validate-request.middleware';
import {
  ClaFindManyDto,
  ClaFindOneDto,
  ClaUpdateDto,
  CreateClaDto,
} from '../dtos';
import { BaseHttpResponse } from '../../lib/base-http-response';
import { authMiddleware } from '../../lib/middlewares/auth';

@controller('/cla')
export class ClaController {
  constructor(private readonly _service: ClaService) {}

  @httpPost('/', ValidateRequest.with(CreateClaDto))
  async store(req: Request, res: Response) {
    const cla = await this._service.create(req.body);
    const response = BaseHttpResponse.success(cla, 201);
    res.status(201).json(response);
  }

  @httpGet('/', ValidateRequest.withQuery(ClaFindManyDto))
  async index(req: Request, res: Response) {
    const clas = await this._service.findMany(req.body);
    const response = BaseHttpResponse.success(clas);
    res.json(response);
  }

  @httpGet('/:id', ValidateRequest.withParams(ClaFindOneDto))
  async getOne(req: Request, res: Response) {
    const cla = await this._service.findOne(req.body);
    const response = BaseHttpResponse.success(cla);
    res.json(response);
  }

  @httpPut('/:id', authMiddleware, ValidateRequest.withParams(ClaUpdateDto))
  async update(req: Request, res: Response) {
    const cla = await this._service.update(req.body);
    const response = BaseHttpResponse.success(cla);
    res.json(response);
  }
}

import { ClaService } from '../services/cla.service';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';

@controller('/cla')
export class ClaController {
  constructor(private readonly _service: ClaService) {}

  @httpPost('/')
  async store(req: Request, res: Response) {
    const newCla = await this._service.create(req.body);
    res.status(201).json({ data: newCla });
  }

  @httpGet('/all')
  async index(req: Request, res: Response) {
    const clas = await this._service.findMany();
    res.status(201).json({ data: clas });
  }

  @httpGet('/:id')
  async getOne(req: Request, res: Response) {
    const clas = await this._service.findOne({ id: req.params.id });
    res.status(201).json({ data: clas });
  }
}

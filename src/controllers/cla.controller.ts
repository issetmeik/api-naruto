import { ClaService } from '../services/cla.service';
import { controller, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';

@controller('/cla')
export class ClaController {
  constructor(private readonly _service: ClaService) {}

  @httpPost('/')
  async store(req: Request, res: Response) {
    const newCla = await this._service.create(req.body);
    res.status(201).json({ data: newCla });
  }
}

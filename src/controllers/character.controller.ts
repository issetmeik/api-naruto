import { Request, Response } from 'express';
import { controller, httpPost } from 'inversify-express-utils';
import { CharacterService } from '../services/character.service';

@controller('/character')
export class CharacterController {
  constructor(private readonly _service: CharacterService) {}

  @httpPost('/')
  async store(req: Request, res: Response) {
    const newCla = await this._service.create(req.body);
    res.status(201).json({ data: newCla });
  }
}

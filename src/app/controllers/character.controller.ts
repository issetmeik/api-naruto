import { Request, Response } from 'express';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { CharacterService } from '../services/character.service';

@controller('/character')
export class CharacterController {
  constructor(private readonly _service: CharacterService) {}

  @httpPost('/')
  async store(req: Request, res: Response) {
    const newCharacter = await this._service.create(req.body);
    res.status(201).json({ data: newCharacter });
  }

  @httpGet('/')
  async index(req: Request, res: Response) {
    const characters = await this._service.findMany(req.body);
    res.status(201).json({ data: characters });
  }

  @httpGet('/:id')
  async getOne(req: Request, res: Response) {
    const character = await this._service.findOne({ id: req.params.id });
    res.status(201).json({ data: character });
  }
}

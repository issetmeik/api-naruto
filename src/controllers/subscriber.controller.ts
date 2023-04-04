import { Response, Request } from 'express';
import {
  controller,
  httpGet,
  httpPatch,
  httpPost,
} from 'inversify-express-utils';
import { DBService } from '../database/db.service';
import { CreateSubscriberDto, SubscriberDto } from '../dtos';
import { SubscribersService } from '../services/subscriber.service';

@controller('/subscribers')
export class SubscribersController {
  constructor(private readonly _service: SubscribersService) {}

  @httpGet('/')
  async index(req: Request, res: Response) {
    const response = await this._service.all();
    res.json({ data: { response } });
  }

  /*@httpGet('/:id')
  async show(req: Request, res: Response) {
    const response = await this._service.findOne(req.params.id);

    if (!response) {
      const message = `We couldn't find user with id: ${req.params.id}`;
      res.status(404).json({ data: { message } });
    }

    res.json({ data: { response } });
  }*/

  @httpPost('/')
  async store(req: Request, res: Response) {
    const subscriber = await this._service.create(req.body);
    res.status(201).json({ data: { subscriber } });
  }

  /*@httpPatch('/:id')
    async update(req: Request, res: Response) {
        const subscriber = await this._service.findOne(req.params.id)
        
        if(!subscriber) { 
            const message = `We couldn't find subscriber with id: ${req.params.id}`
            res.status(404).json({ data: { message }})
        }

        const { name, subscribedToChannel } = req.body
        const item = {
            name,
            subscribedToChannel
        }
        await this._service.update(req.params.id, item)
        res.sendStatus(200).json({ data: { item }})

    }*/
}

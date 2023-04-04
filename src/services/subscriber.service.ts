import { injectable } from 'inversify';
import {
  CreateSubscriberDto,
  SubscriberDto,
  SubscriberFindOneDto,
} from '../dtos';
import { SubscribersRepository } from '../repositories/subscriber.repository';

@injectable()
export class SubscribersService {
  constructor(private readonly _subscriberRepo: SubscribersRepository) {}

  async all() {
    return this._subscriberRepo.all();
  }

  async findOne(subscriber: SubscriberFindOneDto): Promise<SubscriberDto> {
    const foundSub = await this._subscriberRepo.findOne(subscriber);
    if (!foundSub) throw new Error('Not found Subscriber');
    return SubscriberDto.from(foundSub);
  }

  async create(subscriber: CreateSubscriberDto): Promise<SubscriberDto> {
    const response = await this._subscriberRepo.create(subscriber);
    return this.findOne({ id: response.id });
  }

  /*async update(id: string, item: any) {
        const subscriber = await this._subscriberRepo.findOne(id)         
        if(!subscriber) { 
            const message = `We couldn't find subscriber with id: ${req.params.id}`
            res.status(404).json({ data: { message }})
        }

        return this._subscriberRepo.update(id, item)
    }*/
}

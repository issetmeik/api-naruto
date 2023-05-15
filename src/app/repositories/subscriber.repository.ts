import { PrismaClient, Subscriber } from '@prisma/client';
import { injectable } from 'inversify';
import { CreateSubscriberDto, SubscriberFindOneDto } from '../dtos';
import { ISubscriber } from '../interfaces/subscriber-interface';

@injectable()
export class SubscribersRepository {
  private readonly _db: PrismaClient;

  constructor() {
    this._db = new PrismaClient();
  }

  async all() {
    return this._db.subscriber.findMany();
  }

  async findOne(entity: SubscriberFindOneDto): Promise<ISubscriber | null> {
    return await this._db.subscriber.findFirst({
      where: {
        id: entity.id,
      },
    });
  }

  async create(entity: CreateSubscriberDto): Promise<ISubscriber> {
    return this._db.subscriber.create({
      data: {
        name: entity.name,
        subscribedToChannel: entity.subscribedToChannel,
      },
    });
  }

  async update(id: string, item: any) {
    await this._db.subscriber.update({
      where: { id },
      data: {
        name: item.name,
        subscribedToChannel: item.subscribedToChannel,
      },
    });
  }
}

import { Subscriber } from '@prisma/client';
import { ISubscriber } from '../../interfaces/subscriber-interface';

export class SubscriberDto {
  constructor(
    public readonly id: string | null,
    public readonly name: string,
    public readonly channel: string,
    public readonly createdAt?: Date
  ) {}

  static from(subscriber: Partial<ISubscriber>) {
    if (!subscriber.id) throw new Error('Missing property id');
    if (!subscriber.name) throw new Error('Missing property name');
    if (!subscriber.subscribedToChannel)
      throw new Error('Missing property channel');

    return new SubscriberDto(
      subscriber.id,
      subscriber.name,
      subscriber.subscribedToChannel,
      subscriber.createdAt
    );
  }
}

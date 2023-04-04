export class CreateSubscriberDto {
  constructor(
    public readonly name: string,
    public readonly subscribedToChannel: string
  ) {}

  static from(body: Partial<CreateSubscriberDto>) {
    if (!body.subscribedToChannel) {
      throw new Error('Missing property channel');
    }

    if (!body.name) {
      throw new Error('Missing property name');
    }

    return new CreateSubscriberDto(body.name, body.subscribedToChannel);
  }
}

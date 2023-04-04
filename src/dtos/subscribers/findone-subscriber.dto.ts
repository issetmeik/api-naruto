export class SubscriberFindOneDto {
  constructor(public readonly id: string) {}

  static from(body: Partial<SubscriberFindOneDto>) {
    if (!body.id) throw new Error('Missing Id');

    return new SubscriberFindOneDto(body.id);
  }
}

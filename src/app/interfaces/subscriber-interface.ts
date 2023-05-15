export interface ISubscriber {
  id: string;
  name: string;
  subscribedToChannel: string;
  createdAt?: Date;
}

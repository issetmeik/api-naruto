import { Container } from 'inversify';
import { DBService } from '../database/db.service';
import { SubscribersController } from '../controllers/subscriber.controller';
import { SubscribersRepository } from '../repositories/subscriber.repository';
import { SubscribersService } from '../services/subscriber.service';
import { UserRepository } from '../repositories/user.repository';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { SessionController } from '../controllers/session.controller';
import { SessionService } from '../services/session.service';

export const container = new Container({
  defaultScope: 'Singleton',
});

container.bind(DBService).toSelf();
container.bind(SubscribersRepository).toSelf();
container.bind(SubscribersController).toSelf();
container.bind(SubscribersService).toSelf();
container.bind(UserRepository).toSelf();
container.bind(UserController).toSelf();
container.bind(UserService).toSelf();
container.bind(SessionController).toSelf();
container.bind(SessionService).toSelf();

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
import { ClaRepository } from '../repositories/cla.repository';
import { ClaService } from '../services/cla.service';
import { ClaController } from '../controllers/cla.controller';
import { CharacterController } from '../controllers/character.controller';
import { CharacterService } from '../services/character.service';
import { CharacterRepository } from '../repositories/character.repository';

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
container.bind(ClaRepository).toSelf();
container.bind(ClaService).toSelf();
container.bind(ClaController);
container.bind(CharacterController).toSelf();
container.bind(CharacterService).toSelf();
container.bind(CharacterRepository).toSelf();

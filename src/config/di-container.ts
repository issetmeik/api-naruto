import { Container } from 'inversify';
import { UserRepository } from '../app/repositories/user.repository';
import { UserController } from '../app/controllers/user.controller';
import { UserService } from '../app/services/user.service';
import { SessionController } from '../app/controllers/session.controller';
import { SessionService } from '../app/services/session.service';
import { ClaRepository } from '../app/repositories/cla.repository';
import { ClaService } from '../app/services/cla.service';
import { ClaController } from '../app/controllers/cla.controller';
import { CharacterController } from '../app/controllers/character.controller';
import { CharacterService } from '../app/services/character.service';
import { CharacterRepository } from '../app/repositories/character.repository';
import { FavoriteController } from '../app/controllers/favorite.controller';
import { FavoriteService } from '../app/services/favorite.service';
import { FavoriteRepository } from '../app/repositories/favorite.repository';
import { S3Storage } from '../utils/S3Storage';

export const container = new Container({
  defaultScope: 'Singleton',
});

container.bind(UserRepository).toSelf();
container.bind(UserController).toSelf();
container.bind(UserService).toSelf();
container.bind(SessionController).toSelf();
container.bind(SessionService).toSelf();
container.bind(ClaRepository).toSelf();
container.bind(ClaService).toSelf();
container.bind(ClaController).toSelf();
container.bind(CharacterController).toSelf();
container.bind(CharacterService).toSelf();
container.bind(CharacterRepository).toSelf();
container.bind(FavoriteController).toSelf();
container.bind(FavoriteService).toSelf();
container.bind(FavoriteRepository).toSelf();
container.bind(S3Storage).toSelf();

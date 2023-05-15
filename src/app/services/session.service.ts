import { injectable } from 'inversify';
import { CreateTokenDto, TokenDto } from '../dtos';
import * as Jwt from 'jsonwebtoken';
import config from '../../config/auth';
import { UserService } from './user.service';
import { HttpException } from '../exceptions';

@injectable()
export class SessionService {
  constructor(public readonly userService: UserService) {}
  async generateToken(dto: CreateTokenDto): Promise<TokenDto> {
    const { email, password } = dto;

    const user = await this.userService.findByEmail({ email });
    const { id, name } = user;

    if (!(await this.userService.checkPassword(password, user.password))) {
      throw new HttpException('Wrong password', 400);
    }

    const token = Jwt.sign({ id }, config.secret, {
      expiresIn: config.expiresIn,
    });

    return TokenDto.from({ id, name, email, token });
  }
}

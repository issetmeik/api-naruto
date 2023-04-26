import { injectable } from 'inversify';
import { CreateTokenDto, TokenDto } from '../dtos';
import * as Jwt from 'jsonwebtoken';
import config from '../../config/auth';
import { UserService } from './user.service';

@injectable()
export class SessionService {
  constructor(public readonly userService: UserService) {}
  async generateToken(dto: CreateTokenDto): Promise<TokenDto> {
    const { email, password } = dto;

    const user = await this.userService.findByEmail({ email });
    const { id, name } = user;

    if (!(await this.userService.checkPassword(password, user.password))) {
      throw new Error('wrong password');
    }

    const token = Jwt.sign({ id }, config.secret, {
      expiresIn: config.expiresIn,
    });

    return TokenDto.from({ id, name, email, token });
  }
}

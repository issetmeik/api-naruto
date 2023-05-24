import { injectable } from 'inversify';
import {
  CharacterDto,
  CharacterFindManyDto,
  CharacterFindOneDto,
  CreateCharacterDto,
  UpdateCharacterDto,
} from '../dtos';
import { ICharacter } from '../interfaces/character-interface';
import { CharacterRepository } from '../repositories/character.repository';
import { HttpException } from '../exceptions';
import { UserService } from './user.service';

@injectable()
export class CharacterService {
  constructor(
    public readonly _characterRepo: CharacterRepository,
    private readonly _userService: UserService
  ) {}

  async create(dto: CreateCharacterDto): Promise<ICharacter> {
    const response = await this._characterRepo.create(dto);
    return this.findOne({ id: response.id });
  }

  async findOne(dto: CharacterFindOneDto): Promise<ICharacter> {
    const foundCharacter = await this._characterRepo.findOne(dto);
    if (!foundCharacter) throw new HttpException('character not found', 404);
    return CharacterDto.from(foundCharacter);
  }

  async findMany(dto: CharacterFindManyDto): Promise<Array<ICharacter>> {
    const characters = await this._characterRepo.find(dto);
    if (!characters) throw new Error('characters not found');
    return CharacterDto.fromMany(characters);
  }

  async update(dto: UpdateCharacterDto): Promise<void> {
    await this.findOne({ id: dto.id });
    await this._userService.adminValidate({ id: dto.userId });
    return this._characterRepo.update(dto);
  }
}

import { injectable } from 'inversify';
import { CharacterDto, CharacterFindOneDto, CreateCharacterDto } from '../dtos';
import { ICharacter } from '../interfaces/character-interface';
import { CharacterRepository } from '../repositories/character.repository';
import CharacterFindManyDto from '../dtos/character/findmany-character.dto';

@injectable()
export class CharacterService {
  constructor(public readonly _characterRepo: CharacterRepository) {}

  async create(dto: CreateCharacterDto): Promise<ICharacter> {
    const response = await this._characterRepo.create(dto);
    return this.findOne({ id: response.id });
  }

  async findOne(dto: CharacterFindOneDto): Promise<ICharacter> {
    const foundCharacter = await this._characterRepo.findOne(dto);
    if (!foundCharacter) throw new Error('character not found');
    return CharacterDto.from(foundCharacter);
  }

  async findMany(dto: CharacterFindManyDto): Promise<Array<ICharacter>> {
    console.log(dto);
    const characters = await this._characterRepo.find(dto);
    if (!characters) throw new Error('characters not found');
    return CharacterDto.fromMany(characters);
  }
}

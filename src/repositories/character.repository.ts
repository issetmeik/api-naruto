import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import { ClaFindOneDto, CreateCharacterDto } from '../dtos';
import { ICharacter } from '../interfaces/character-interface';

@injectable()
export class CharacterRepository {
  private readonly _db: PrismaClient;
  constructor() {
    this._db = new PrismaClient();
  }

  async create(dto: CreateCharacterDto): Promise<ICharacter> {
    return await this._db.character.create({
      data: {
        ...dto,
      },
    });
  }

  async findOne(dto: ClaFindOneDto): Promise<ICharacter | null> {
    return await this._db.character.findFirst({
      where: {
        ...dto,
      },
    });
  }
}

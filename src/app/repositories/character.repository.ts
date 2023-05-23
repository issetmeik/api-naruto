import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import {
  CharacterFindManyDto,
  CharacterFindOneDto,
  CreateCharacterDto,
} from '../dtos';
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

  async findOne(dto: CharacterFindOneDto): Promise<ICharacter | null> {
    return await this._db.character.findFirst({
      where: {
        ...dto,
      },
      include: {
        cla: true,
      },
    });
  }

  async find(dto: CharacterFindManyDto): Promise<Array<ICharacter>> {
    return await this._db.character.findMany({
      skip: (dto.page - 1) * dto.pageSize,
      take: dto.pageSize ? dto.pageSize : 10,
      where: {
        alive: dto.alive,
        gender: dto.gender,
        name: { contains: dto.name ? dto.name : undefined },
        claId: dto.claId,
      },
    });
  }
}

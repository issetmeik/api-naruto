import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import { ClaFindOneDto, CreateCharacterDto } from '../dtos';
import { ICharacter } from '../interfaces/character-interface';
import CharacterFindManyDto from '../dtos/character/findmany-character.dto';

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

  async find(dto: CharacterFindManyDto): Promise<Array<ICharacter>> {
    return await this._db.character.findMany({
      skip: (dto.page - 1) * dto.pageSize,
      take: dto.paginate ? dto.pageSize : undefined,
      orderBy: {
        [`${dto.orderBy}`]: dto.orderDescending ? 'desc' : 'asc',
      },
      where: {
        name: { contains: dto.name },
        externalId: { contains: dto.externalId },
        gender: dto.gender,
        birthDate: dto.birthDate,
        age: { contains: dto.age },
        height: { contains: dto.height },
        weight: { contains: dto.weight },
        bloodType: { contains: dto.bloodType },
        claId: dto.claId,
        createdAt: {
          gte: dto.fromDate,
          lte: dto.toDate,
        },
      },
    });
  }
}

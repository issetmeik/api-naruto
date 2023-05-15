import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import { ClaFindManyDto, ClaFindOneDto, CreateClaDto } from '../dtos';
import { ICla } from '../interfaces/cla-interface';

@injectable()
export class ClaRepository {
  private readonly _db: PrismaClient;
  constructor() {
    this._db = new PrismaClient();
  }

  async create(dto: CreateClaDto): Promise<ICla> {
    return this._db.cla.create({
      data: {
        ...dto,
      },
    });
  }

  async findOne(dto: ClaFindOneDto): Promise<ICla | null> {
    return this._db.cla.findFirst({
      where: {
        id: dto.id,
      },
      include: {
        Character: true,
      },
    });
  }

  async find(dto: ClaFindManyDto): Promise<Array<ICla>> {
    return await this._db.cla.findMany({
      skip: (dto.page - 1) * dto.pageSize,
      take: dto.pageSize ? dto.pageSize : 10,
      where: {
        name: { contains: dto.name ? dto.name : undefined },
        externalId: { contains: dto.externalId ? dto.externalId : undefined },
      },
    });
  }
}

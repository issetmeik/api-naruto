import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import { CreateClaDto } from '../dtos';
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

  async findOne(entity: string): Promise<ICla | null> {
    return this._db.cla.findFirst({
      where: {
        id: entity,
      },
    });
  }
}

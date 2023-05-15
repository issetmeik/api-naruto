import { injectable } from 'inversify';
import { ClaDto, ClaFindManyDto, ClaFindOneDto, CreateClaDto } from '../dtos';
import { ICla } from '../interfaces/cla-interface';
import { ClaRepository } from '../repositories/cla.repository';
import { HttpException } from '../exceptions';

@injectable()
export class ClaService {
  constructor(public readonly _claRepo: ClaRepository) {}

  async create(dto: CreateClaDto): Promise<ICla> {
    const response = await this._claRepo.create(dto);
    return this.findOne({ id: response.id });
  }

  async findOne(dto: ClaFindOneDto): Promise<ICla> {
    const foundCla = await this._claRepo.findOne(dto);
    if (!foundCla) throw new HttpException('Cla not found', 404);
    return ClaDto.from(foundCla);
  }

  async findMany(dto: ClaFindManyDto): Promise<Array<ICla>> {
    const clas = await this._claRepo.find(dto);
    return ClaDto.fromMany(clas);
  }
}

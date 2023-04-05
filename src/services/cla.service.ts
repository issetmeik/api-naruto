import { injectable } from 'inversify';
import { ClaDto, ClaFindOneDto, CreateClaDto } from '../dtos';
import { ICla } from '../interfaces/cla-interface';
import { ClaRepository } from '../repositories/cla.repository';

@injectable()
export class ClaService {
  constructor(public readonly _claRepo: ClaRepository) {}

  async create(cla: CreateClaDto): Promise<ICla> {
    const response = await this._claRepo.create(cla);
    return this.findOne({ id: response.id });
  }

  async findOne(dto: ClaFindOneDto): Promise<ICla> {
    const foundCla = await this._claRepo.findOne(dto.id);
    if (!foundCla) throw new Error('cla not found');

    return ClaDto.from(foundCla);
  }
}

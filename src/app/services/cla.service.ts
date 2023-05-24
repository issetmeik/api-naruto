import { injectable } from 'inversify';
import {
  ClaDto,
  ClaFindManyDto,
  ClaFindOneDto,
  ClaUpdateDto,
  CreateClaDto,
} from '../dtos';
import { ICla } from '../interfaces/cla-interface';
import { ClaRepository } from '../repositories/cla.repository';
import { HttpException } from '../exceptions';
import { UserService } from './user.service';

@injectable()
export class ClaService {
  constructor(
    public readonly _claRepo: ClaRepository,
    private readonly _userService: UserService
  ) {}

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

  async update(dto: ClaUpdateDto): Promise<void> {
    await this.findOne({ id: dto.id });
    await this._userService.adminValidate({ id: dto.userId });
    return this._claRepo.update(dto);
  }
}

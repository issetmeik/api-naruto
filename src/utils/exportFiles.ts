import { Parser } from '@json2csv/plainjs';
import * as uuid from 'uuid';
import * as fs from 'fs';
import { FavoriteDto } from '../app/dtos';

export class ExportFiles {
  async exportFavorites(data: FavoriteDto[]) {}

  async createCSV(data: FavoriteDto[]) {}
}

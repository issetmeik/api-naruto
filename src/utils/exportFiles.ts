import { Parser } from '@json2csv/plainjs';
import crypto from 'crypto';
import * as fs from 'fs';
import { FavoriteDto } from '../app/dtos';
import { FavoriteTypes } from '@prisma/client';
import { injectable } from 'inversify';
import { S3Storage } from './S3Storage';
import path from 'path';
import multerConfig from '../config/multer';

@injectable()
export class ExportFiles {
  constructor(private readonly _s3: S3Storage) {}
  async exportFavorites(
    data: FavoriteDto[],
    type: FavoriteTypes
  ): Promise<string> {
    let favorites;

    if (type == FavoriteTypes.character) {
      favorites = data.map((item) => item.character);
    }

    if (type == FavoriteTypes.cla) {
      favorites = data.map((item) => item.cla);
    }

    const filePath = await this.createCSV(favorites, type);
    const url = await this._s3.saveFile(filePath, true);

    return url;
  }

  async createCSV(data: any, type: FavoriteTypes): Promise<string> {
    const filename = `${crypto.randomUUID()}.csv`;
    const originalPath = path.resolve(multerConfig.directory, filename);
    let options;

    if (type == FavoriteTypes.character) {
      options = {
        fields: [
          { label: 'id', value: 'id' },
          { label: 'nome', value: 'name' },
          { label: 'sobre', value: 'about' },
          { label: 'imagens', value: 'images' },
          { label: 'sexo', value: 'gender' },
          { label: 'estado', value: 'alive' },
          { label: 'pagina', value: 'page' },
          { label: 'claId', value: 'claId' },
        ],
      };
    }

    if (type == FavoriteTypes.cla) {
      options = {
        fields: [
          { label: 'id', value: 'id' },
          { label: 'icone', value: 'icon' },
          { label: 'nome', value: 'name' },
          { label: 'pagina', value: 'link' },
        ],
      };
    }

    const parse = new Parser(options);
    const csv = parse.parse(data);
    await fs.promises.writeFile(originalPath, csv);
    return originalPath;
  }
}

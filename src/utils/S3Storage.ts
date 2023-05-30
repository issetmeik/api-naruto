import { HttpException } from '../app/exceptions';
import { S3 } from 'aws-sdk';
import { injectable } from 'inversify';
import path from 'path';
import multerConfig from '../config/multer';
import mime from 'mime';
import fs from 'fs';

@injectable()
export class S3Storage {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: 'us-east-1',
    });
  }

  async saveFile(filename: string, tempFile: boolean = false): Promise<string> {
    const originalPath = path.resolve(multerConfig.directory, filename);
    const contentType = mime.getType(originalPath);
    let options;

    if (!contentType) {
      throw new HttpException('File not found', 404);
    }

    const fileContent = await fs.promises.readFile(originalPath);

    if (tempFile) {
      const expirationDate = new Date();
      expirationDate.setMinutes(expirationDate.getMinutes() + 5);

      const metadata = {
        'x-amz-expiration': `expiry-date="${expirationDate.toISOString()}", rule-id="`,
      };
      options = {
        Bucket: 'api-naruto',
        Key: filename,
        Body: fileContent,
        ContentType: contentType,
        ACL: 'public-read',
        Metadata: metadata,
      };
    }

    await this.client
      .putObject(
        options || {
          Bucket: 'api-naruto',
          Key: filename,
          Body: fileContent,
          ContentType: contentType,
          ACL: 'public-read',
        }
      )
      .promise();

    await fs.promises.unlink(originalPath);

    const url = await this.client.getSignedUrlPromise('getObject', {
      Bucket: 'api-naruto',
      Key: filename,
    });

    return url;
  }
}

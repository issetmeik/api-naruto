import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';



@injectable()
export class DBService{

    user(){
        const db = new PrismaClient()
        
        return db
    }
}
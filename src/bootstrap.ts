import 'dotenv/config'
import 'reflect-metadata'
import { App } from './app'


import './controllers/subscriber.controller'

console.clear()

export async function bootstrap() {
 new App().setup()
}

bootstrap()

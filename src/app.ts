import express from 'express'
import { InversifyExpressServer } from 'inversify-express-utils'
import { DBService } from './database/db.service'
import { container } from './config/di-container'

export class App {
  async setup() {
    const _db = container.get(DBService)
    const server = new InversifyExpressServer(container)
    server.setConfig((app) => {
      app.use(express.json())
    })

    const app = server.build()

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port http://localhost:${process.env.PORT}`)
    })  
  }  
}
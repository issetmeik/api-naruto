import { Container, interfaces, optional } from 'inversify'
export abstract class Application {
    private readonly _container: Container
    constructor(private readonly _options?: interfaces.ContainerOptions) {
        this._container = new Container(_options)
    }
}
import { Service } from "../lib/simpleIoCLib/decorators/ServiceDecorator";

@Service()
export class Foo {
    doFooStuff() {
        console.log('foo');
    }
}
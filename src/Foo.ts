import { Injectable } from "../lib/simpleIoCLib/decorators/InjectableDecorator";
import { Car } from "./Car";

@Injectable()
export class Foo {
    
    constructor( public car: Car ) {

    }

    doFooStuff() {
        console.log('foo');
    }

}
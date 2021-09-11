import { Injectable } from "../lib/simpleIoCLib/decorators/InjectableDecorator";
import { Bar } from "./Bar";
import { Car } from "./Car";
import { Foo } from "./Foo";

@Injectable()
export class FooBar {
    constructor( public foo:Foo, public bar: Bar, public car: Car ) {

    }
}
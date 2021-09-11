import { Service } from "../lib/simpleIoCLib/decorators/ServiceDecorator";
import { Bar } from "./Bar";
import { Foo } from "./Foo";

@Service()
export class FooBar {
    constructor( public foo:Foo, public bar: Bar ) {

    }
}
import { Injectable } from "../lib/simpleIoCLib/decorators/InjectableDecorator";

import { Foo } from "./Foo";

@Injectable()
export class Bar {
    constructor(public foo: Foo) {
    }
  
    doBarStuff() {
      console.log('bar');
    }
}
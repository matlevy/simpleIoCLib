import { Service } from "../lib/simpleIoCLib/decorators/ServiceDecorator";

import { Foo } from "./Foo";

@Service()
export class Bar {
    constructor(public foo: Foo) {
    }
  
    doBarStuff() {
      console.log('bar');
    }
}
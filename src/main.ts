import { SimpleIoC } from "../lib/simpleIoCLib/SimpleIoC";
import { FooBar } from "./FooBar";

import 'reflect-metadata';
import { Car } from "./Car";

export const Main = new class {
    init():void {

        /// This is a simple implementation demonstration
        
        const foobar = SimpleIoC.resolve<FooBar>( FooBar );
        
        foobar.bar.doBarStuff();
        foobar.foo.doFooStuff();
        foobar.bar.foo.doFooStuff();

        foobar.car.setNumber(9876);

        const car = SimpleIoC.resolve<Car>( Car );

        console.log( car.getNumber() );

        foobar.bar.foo.car.setNumber(34554);

        console.log( car.getNumber() );

        car.setNumber(4546);

        console.log( foobar.car.getNumber() );
        console.log( foobar.bar.foo.car.getNumber() );
    }
}

Main.init();
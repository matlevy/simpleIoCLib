import { SimpleIoC } from "../lib/simpleIoCLib/SimpleIoC";
import { FooBar } from "./FooBar";

import 'reflect-metadata';

export const Main = new class {
    init():void {
        const foobar = SimpleIoC.resolve<FooBar>( FooBar );
        foobar.bar.doBarStuff();
        foobar.foo.doFooStuff();
        foobar.bar.foo.doFooStuff();
    }
}

Main.init();
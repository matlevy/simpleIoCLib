import { Container } from "../lib/simpleIoCLib/Container";
import { FooBar } from "./FooBar";

import 'reflect-metadata';

export const Main = new class {
    init():void {
        console.log('hello world');
        const foobar = Container.resolve<FooBar>( FooBar );
        foobar.bar.doBarStuff();
        foobar.foo.doFooStuff();
        foobar.bar.foo.doFooStuff();
    }
}

Main.init();
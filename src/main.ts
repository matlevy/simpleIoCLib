import { Container } from "../lib/simpleIoCLib/container";

export class Main {
    init():void {
        console.log('hello world');
        new Container();
    }
}

new Main().init();
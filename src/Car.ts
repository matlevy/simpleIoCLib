import { Singleton } from "../lib/simpleIoCLib/decorators/SingletonDecorator";

@Singleton()
export class Car {
    private num:number = -1;

    setNumber( value: number ):void {
        this.num = value;
    }

    getNumber():number {
        return this.num;
    }
}
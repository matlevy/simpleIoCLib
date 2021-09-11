import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';
import { mock, instance } from 'ts-mockito';

import { SimpleIoC } from "../lib/simpleIoCLib/SimpleIoC";
import { Injectable } from "../lib/simpleIoCLib/decorators/InjectableDecorator";
import { Singleton } from "../lib/simpleIoCLib/decorators/SingletonDecorator";

_chai.should();

/// Dummy Classes for testing

@Injectable()
class MyClass {
    foo: string = "hello";
}

@Singleton()
class MySingleton {
    private num:number = -1;

    setNumber( value: number ):void {
        this.num = value;
    }

    getNumber():number {
        return this.num;
    }
}

@Injectable()
class MyParentClass {
    constructor( public bar: MyClass, public props: MySingleton ) {}
}

class NonMeta {
    public bar: string = "abc123";
}

// Suite

@suite class SimpleIoCUnitTests {

    container: SimpleIoC;
    containerMock: SimpleIoC;

    before() {
        this.containerMock = mock( SimpleIoC );
        this.container = instance( this.containerMock );
    }

    @test 'should setup correctly'() {
        this.container.should.be.not.undefined;
    }

    @test 'should register a class correctly'() {
        const _reg = SimpleIoC.register( 'myClass', NonMeta );

        expect( _reg ).to.have.property('key');
        expect( _reg ).to.have.property('definition');
        expect( _reg ).to.have.property('dependancies');
        expect( _reg ).to.have.property('singleton');

        const _def:NonMeta = SimpleIoC.resolveByString( 'myClass' );

        expect( _def ).be.not.undefined;
        expect( _def ).to.have.property('bar');
        expect( _def.bar ).to.equal('abc123');
        
    }

    @test 'should register a class correctly using decorators'() {
        const _p = SimpleIoC.resolve<MyParentClass>( MyParentClass );

        expect( _p ).be.not.undefined;
        expect( _p ).to.have.property('props');
        expect( _p ).to.have.property('bar');
        expect( _p.bar ).to.have.property('foo');
    }

    @test 'should register and resolve singltons fine'() {
        const _s = SimpleIoC.resolve<MySingleton>( MySingleton );
        const _p = SimpleIoC.resolve<MyParentClass>( MyParentClass );

        _s.setNumber(23454);

        expect(_s.getNumber()).to.equal(23454);
        expect(_p.props.getNumber()).to.equal(23454);

        _p.props.setNumber(989);
        expect(_s.getNumber()).to.equal(989);
    }

}
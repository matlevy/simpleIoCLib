import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { mock, instance } from 'ts-mockito';

import { Container } from "./../lib/simpleIoCLib/Container";

_chai.should();

@suite class ContainerUnitTests {

    private SUT: Container;
    private containerMock: Container;

    before() {
        this.containerMock = mock( Container );
        this.SUT = instance( this.containerMock );
    }

    @test 'should do something when call a method'() {
        this.SUT.should.be.not.undefined;
    }

}
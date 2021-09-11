import { Type } from "../Type";
import { GenericClassDecorator } from "./GenericClassDecorator";

import 'reflect-metadata';
import { SimpleIoC } from "../SimpleIoC";

export const Injectable = (): GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => {
        const tokens = Reflect.getMetadata( 'design:paramtypes', target ) || [];
        const dependancies = tokens.map( 
            ( token:any ) => { 
                return {
                    key: token.name,
                    definition: token
                }
            } );
        SimpleIoC.register( target.name, target, dependancies );
    };
};
import { Type } from "../Type";
import { GenericClassDecorator } from "./GenericClassDecorator";

import 'reflect-metadata';
import { SimpleIoC } from "../SimpleIoC";

export const Singleton = (): GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => {
        const tokens = Reflect.getMetadata( 'design:paramtypes', target ) || [];
        const dependancies = tokens.map( 
            ( token:any ) => { 
                return {
                    key: token.name,
                    definition: token
                }
            } );
        SimpleIoC.singleton( target.name, target, dependancies );
    };
};
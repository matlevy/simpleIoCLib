import { Type } from "../Type";
import { GenericClassDecorator } from "./GenericClassDecorator";

import 'reflect-metadata';

export const Service = (): GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => {
        console.log(Reflect.getMetadata('design:paramtypes', target));
    };
};
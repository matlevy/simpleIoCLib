import { Type } from "./Type";

export const Container = new class {
    resolve<T>(target: Type<any>): T {
        let tokens = Reflect.getMetadata( 'design:paramtypes', target ) || [],
            injections = tokens.map( ( token:any ) => Container.resolve<any>( token ) );

        return new target( ...injections );
    }
}
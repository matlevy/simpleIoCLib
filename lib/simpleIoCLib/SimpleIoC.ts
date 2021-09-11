import { Type } from "./Type";

export interface RegistryDefinition {
    key: string,
    definition: any,
    dependancies: Array<RegistryDefinition>;
    singleton: boolean;
}

export const SimpleIoC = new class {

    private _registry: Map<string, any> = new Map<string, any>();

    resolve<T>(target: Type<any>): T {

        const definition: RegistryDefinition = this._registry.get( target.name );

        const injections = definition.dependancies.map( (token:RegistryDefinition) => {
            return SimpleIoC.resolve(
                token.definition
            )
        })

        return new target( ...injections );
    }

    /**
     * Registers an item within the IoC container registry.
     * 
     * @param key          Key reffering to the definition
     * @param definition    Class definition
     * @param dependancies  Array of depandancies in relation to the definition object
     */
    register( key: string, definition: Type<any>, dependancies: Array<any> = [] ): RegistryDefinition {
        return this._register( key, definition, dependancies, false );
    }

    /**
     * Registers a Singlton item within the IoC container registry.
     * 
     * @param key          Key reffering to the definition
     * @param definition    Class definition
     * @param dependancies  Array of depandancies in relation to the definition object
     */
    singleton( key: string, definition: Type<any>, dependancies: Array<any> = [] ): RegistryDefinition {
        return this._register( key, definition, dependancies, true );    
    }

    /**  */
    private _register( key: string, definition: Type<any>, dependancies: Array<any> = [], singleton:boolean = false ): RegistryDefinition {
        const registeredItem: RegistryDefinition = {
            key,
            definition,
            dependancies,
            singleton
        }
        this._registry.set( key, registeredItem );
        return registeredItem;
    }
}
import { Type } from "./Type";

export interface RegistryDefinition {
    key: string,
    definition: any,
    dependancies: Array<RegistryDefinition>;
    singleton: boolean;
}

/**
 * A very simple IoC container that allows for classes and singltons
 */
export const SimpleIoC = new class {

    private _registry: Map<string, any> = new Map<string, any>();
    private _singletons: Map<string, any> = new Map<string, any>();

    /**
     * Resolves a target class given the class reference, instantiates and injects
     * dependancies into the conxtructor.
     * 
     * @param target The target class reference
     * @returns Instantiated object instance
     */
    resolve<T>(target: Type<any>): T {
        return this.resolveByString( target.name );
    }

    resolveByString<T>( key:string ): T {

        const definition: RegistryDefinition = this._registry.get( key );

        const injections = definition.dependancies.map( (token:RegistryDefinition) => {
            return SimpleIoC.resolve(
                token.definition
            )
        })

        if (definition.singleton) {
            const _s = this._singletons.get( definition.key );
            if (_s) {
                return _s;
            } else {
                const _i:any = new definition.definition( ...injections );
                this._singletons.set( definition.key, _i );
                return _i;
            }
        }
            
        return new definition.definition( ...injections );
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
/*
    Since we're not dealing with an actual instance at this point we need a type which describes 
    what type we get after invoking our target with new.
*/
export interface Type<T> {
    new(...args: any[]): T;
}
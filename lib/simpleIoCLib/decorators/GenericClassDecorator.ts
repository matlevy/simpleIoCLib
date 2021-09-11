/**
 * Generic class decorator...
 * 
 * See https://nehalist.io/dependency-injection-in-typescript/ for inspiration
 * and logic behind this under the section 'The type of target'
 * 
 * "Since we now do know the type of our object. To get a more flexible and generic type for class decorators:"
 * 
 */

export type GenericClassDecorator<T> = (target: T) => void;
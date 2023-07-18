/**
 * Aqui usamos um generics, pois o evento pode ser de qualquer tipo.
 * Porém, o tipo padrão desse generics, deve ser um EventInterface
 */



import EventInterface from './event.interface';
export default interface EventHandlerInterface<T extends EventInterface=EventInterface> {
    handle(event: T): void;
}
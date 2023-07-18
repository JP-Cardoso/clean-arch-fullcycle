/**
 * Esse cara registra e notifica tudo o que acontece
 */

import EventInterface from "./event.interface";

export default interface EventDispactcherInterface {

    notify(event: EventInterface): void;
    register(eventNname: string, event: EventInterface): void;
    unregister(eventNname: string, event: EventInterface): void;
    unregisterAll(): void;

}
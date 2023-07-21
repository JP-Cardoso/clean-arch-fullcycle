/**
 * Essa entidade é focada no negócio;* 
 * 
 * Para o ORM - você vai ter uma focada em 
 * persistência - MODEL;
 * 
 * dir Entity (interno -  CORE)
 *  - Customer.ts (RN)
 * dir Infra (externo)
 *  - dir Entity / Model
 *      - customer.ts (get, set)
 */

import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notifcation/notification.error";
import CustomerValidatorFactory from "../factory/customer.validator.factory";
import Address from "../value-object/address";


export default class Customer extends Entity {
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(
        id: string, name: string
    ) {
        super();
        this._id = id;
        this._name = name;
        this.validate();

        if (this.notification.hasErrors()) {
            throw new NotificationError(this.notification.getErrors())
        }
    }

    validate() {
        CustomerValidatorFactory.create().validate(this);
    }

    changeName(name: string) {
        this._name = name;
        this.validate()
    }

    changeAddress(addres: Address) {
        this._address = addres;
    }

    isActive(): boolean {
        return this._active
    }

    activate() {
        if (this._address === undefined) {
            throw new Error(`Addresses is mandatory to activate a customer`);
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get name(): string {
        return this._name;
    }

    get Address(): Address {
        return this._address;
    }

    set Address(address: Address) {
        this._address = address
    }
}
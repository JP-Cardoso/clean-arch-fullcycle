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

import Address from "../value-object/address";


export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(
        id: string, name: string
    ) {
        this._id = id;
        this._name = name;
        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("ID is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
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

    get id(): string {
        return this._id;
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
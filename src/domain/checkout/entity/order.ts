/**
 * Se está em diferentes agregados, tu faz referencia por ID;
 * Se estão no mesmo agregedo a relação é pela mesma classe
 */

import OrderItem from "./order_item";

export default class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number

    constructor(
        id: string, customerId: string, items: OrderItem[]
    ) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate()
    }

    validate(): boolean {
        if (this._id.length === 0) {
            throw new Error("ID is required");
        };
        if (this._customerId.length === 0) {
            throw new Error("CustomerId is required")
        };
        if (this._items.length === 0) {
            throw new Error("Item qtd must be greater than 0");
        };
        if (this._items.some(item => item.quantity <= 0)) {
            throw new Error("Quantity must be greater than zero");
        }
        return true;
    }

    get id(): string {
        return this._id;
    }

    get customerId(): string {
        return this._customerId;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }

}
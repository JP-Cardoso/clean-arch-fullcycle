import Product from "../entity/product";
import ProductInterafce from "../entity/product.interface";
import { v4 as uuid } from "uuid";

export default class ProductFactory {
    
    public static create(name: string, price: number): ProductInterafce {
        return new Product(uuid(), name, price);
    }
}



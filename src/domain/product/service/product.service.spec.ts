import Product from "../entity/product"
import ProductService from "./product.service";

describe('Product service unit tests', () => {
    it('should change the prices of all products', () => {
        const products1 = new Product("1", "Product 1", 10);
        const products2 = new Product("2", "Product 2", 20);
        const product = [products1, products2];

        ProductService.increasePrice(product, 100);
        expect(products1.price).toBe(20);
        expect(products2.price).toBe(40);
    })
})
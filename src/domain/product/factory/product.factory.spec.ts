import ProductFactory from "./product.factory";

describe('Product factory unit test', () => {

    it('should create a product type a', () => {
        //Criando o primeiro produto
        const product = ProductFactory.create("Product A", 1);

        
        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product A");
        expect(product.price).toBe(1);
        expect(product.constructor.name).toBe("Product");
        //let

    })
});
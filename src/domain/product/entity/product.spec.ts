import Product from "./product";

describe('Product unit test', () => {
    it('Should throw error when id is empty', () => {
        expect(() => {
            const product = new Product("", "Product 1", 1000);

        }).toThrowError("Id is required");
    })

    it('Should throw error when name is empty', () => {
        expect(() => {
            const product = new Product("1", "", 200);
        }).toThrowError("Name is required");
    })

    it('Should throw error price is less than zero', () => {
        expect(() => {
            const product = new Product("1", "Produto", -1)
        }).toThrowError("Price must be greater tha zero");
    })

    it('Should chamge name', () => {
        let product = new Product("1", "Carrinho", 25);
        product.changeName("Product 2");
       
        expect(product.name).toBe("Product 2");
    })

    it('Should change price', () => {
        let product = new Product("1", "Produto", 150);
        product.changePrice(250);

        expect(product.price).toBe(250);
    })
})
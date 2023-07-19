import Product from "../../../domain/product/entity/product";
import FindProductUseCase from "./find.product.usecase";

const product = new Product("123", "HotWeels", 20);

const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn()
    }
};

describe('Unit test find product use case', () => {

    it('should find a product', async () => {
        const productRepository = MockRepository();
        const productUseCase = new FindProductUseCase(productRepository);

        //Estabelecendo o meu dado entrada para usar a função find
        const input = { id: "123" };

        const output = {
            id: "123",
            name: "HotWeels",
            price: 20
        };

        const result = await productUseCase.execute(input);
        expect(result).toEqual(output)

    });

    it('should not find product', async () => {
        const productRepository = MockRepository();
        productRepository.find.mockImplementation(() => {
            throw new Error("Product not found");            
        })
        const productUseCase = new FindProductUseCase(productRepository);

        const input = {id: "123"};
        expect(() => {
            return productUseCase.execute(input)
        }).rejects.toThrow("Product not found")
    })
})
import CreateCustomerUseCase from "./create.customer.usecase";

const input = {
    name: "John",
    address: {
        street: "Dos bobos",
        city: "São Paulo",
        number: 2546,
        zip: "14482456",
    }
};

const MockRepository = () => {
    return {
        find: jest.fn(),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    }
};

describe("Unit test create customer use case", () => {

    it('should create a customer', async () => {

        const customerRepository = MockRepository();
        const customerCreateUseCase = new CreateCustomerUseCase(customerRepository);

        const output = await customerCreateUseCase.execute(input)

        console.log(output);
        
        expect(output).toEqual({
            id: expect.any(String),
            name: input.name,
            address: {
                street: input.address.street,
                city: input.address.city,
                number: input.address.number,
                zip: input.address.zip,
            }
        })
    })
})
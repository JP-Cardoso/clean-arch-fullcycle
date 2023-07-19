import Customer from "../../../domain/customer/entity/customer";
import Address from "../../../domain/customer/value-object/address";
import FindCustomerUseCase from "./find.customer.usecase";

//Resultado simulado do repositório real
const customer = new Customer("123", "John");
const address = new Address("Dos bobos", 2546, "14482456", "São Paulo");
customer.changeAddress(address);


const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(customer)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn()
    }
}

describe('Unit test find customer use case', () => {

    it('should find a customer', async () => {

        const customerRepository = MockRepository();
        const useCase = new FindCustomerUseCase(customerRepository)

        const input = { id: "123" };

        const output = {
            id: "123",
            name: "John",
            address: {
                street: "Dos bobos",
                city: "São Paulo",
                number: 2546,
                zip: "14482456",
            }
        }

        const result = await useCase.execute(input);
       
        expect(result).toEqual(output);
    });

    it('should not find a customer', () => {

        /**
         * Mocando um erro proposital para testar o comportamento do repository original
         */
        const customerRepository = MockRepository();
        //Usando o mockImplementation para isso
        customerRepository.find.mockImplementation(() => {
            throw new Error("Customer not found");            
        })
        const useCase = new FindCustomerUseCase(customerRepository)

        const input = { id: "123" };

        expect(() => {
            return useCase.execute(input);
        }).rejects.toThrow("Customer not found")

    })
})
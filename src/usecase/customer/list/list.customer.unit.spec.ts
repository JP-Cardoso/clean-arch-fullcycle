import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import Address from "../../../domain/customer/value-object/address";
import ListCustomerUseCase from "./list.customer.usecase";


/**
 * Criando dois customer para suprir a necessidade de criar clentes
 * para retornar uma lista de customer
 */
const customer1 = CustomerFactory.createWithAddress(
    "John Doe", new Address("street", 123, "12345-25", "City")
);

const customer2 = CustomerFactory.createWithAddress(
    "Jane Dow", new Address("street", 456, "22345-26", "City 2")
);

const MockRepository = () => {
    return {
        create: jest.fn(),
        update: jest.fn(),
        find: jest.fn(),
        findAll: jest.fn().mockReturnValue(Promise.resolve([customer1, customer2])),
    }
};

describe('Unit test for listing customer use case', () => {

    it('should list a customer', async () => {
        const repository = MockRepository();
        const useCase = new ListCustomerUseCase(repository);
        const output = await useCase.execute({});

        expect(output.customers.length).toBe(2);
        expect(output.customers[0].id).toBe(customer1.id);
        expect(output.customers[0].name).toBe(customer1.name);
        expect(output.customers[0].address.street).toBe(customer1.Address.street);
        
        expect(output.customers[1].id).toBe(customer2.id);
        expect(output.customers[1].name).toBe(customer2.name);
        expect(output.customers[1].address.street).toBe(customer2.Address.street);
    });
})
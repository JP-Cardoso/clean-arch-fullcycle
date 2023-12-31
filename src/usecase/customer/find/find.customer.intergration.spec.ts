import { Sequelize } from "sequelize-typescript"
import { v4 as UUID } from "uuid"
import CustomerModel from "../../../infrastructure/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../infrastructure/customer/repository/sequelize/cutomer.repository";
import Customer from "../../../domain/customer/entity/customer";
import Address from "../../../domain/customer/value-object/address";
import FindCustomerUseCase from "./find.customer.usecase";

describe('Test find customer use case', () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory",
            logging: false,
            sync: { force: true },
        });

        await sequelize.addModels([CustomerModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should find a customer', async () => {

        const customerRepository = new CustomerRepository();
        const useCase = new FindCustomerUseCase(customerRepository)

        const customer = new Customer("123", "John");
        const address = new Address("Dos bobos", 2546, "14482456", "São Paulo");
        customer.changeAddress(address);

        const customerCreated = await customerRepository.create(customer);     

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
    })
})
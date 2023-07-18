import Address from "../value-object/address";
import Customer from "./customer"

describe('Customer uinit tests', () => {

    it('Should throw error when id is empty', () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrowError("ID is required")
    })

    it('Should throw error when name is empty', () => {
        expect(() => {
            let customer = new Customer("2", "");
        }).toThrowError("Name is required")
    })

    it('Should change name', () => {
        //Arrange
        let customer = new Customer("1", "John");
        //Act
        customer.changeName('Lucas');
        //Assert
        expect(customer.name).toBe('Lucas');
    })

    it('Should activate customer', () => {
        const customer = new Customer('1', 'Jonh');
        const address = new Address('Street 1', 123, '12345-678', 'Franca');

        customer.Address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    })

    it('Should deactivate customer', () => {
        const customer = new Customer('123', 'Customer 1');
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    })

    it('Should throw error when address is undefined when you activate a customer', () => {

        expect(() => {
            const customer = new Customer('1', 'Jon Doe');
            customer.activate();
        }).toThrowError('Addresses is mandatory to activate a customer');
    })

    it('should add reward points', () => {
        const customer = new Customer("1", "Customer 1");

        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    })
})
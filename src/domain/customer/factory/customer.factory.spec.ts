import Address from "../value-object/address";
import CustomerFactory from "./customer.factory"

describe("Customer factory unit tests", () => {

    it("should create a customer", () => {
        let customer = CustomerFactory.create("John");

        expect(customer.id).toBeDefined();
        expect(customer.name).toEqual("John");
        expect(customer.Address).toBeUndefined();

    });

    it("should create a new customer with an address", () => {

        const address = new Address("Street", 1, "13330-250", "São Paulo");
        let customer = CustomerFactory.createWithAddress("John", address);

        expect(customer.id).toBeDefined();
        expect(customer.name).toEqual("John");
        expect(customer.Address).toBe(address);
    })
})
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import { InputCreateCustomerDto, OutputCreateCustomerDto } from "./create.customer.dto";
import {v4 as uuid} from "uuid"

export default class CreateCustomerUseCase {

    private customerRepository: CustomerRepositoryInterface;

    constructor(customer: CustomerRepositoryInterface) {
        this.customerRepository = customer
    };

    async execute(input: InputCreateCustomerDto): Promise<OutputCreateCustomerDto> {
        const cutomerId = uuid();
        const customer = new CustomerFactory
    }
}
import express, { Request, Response } from 'express';
import CreateCustomerUseCase from '../../../usecase/customer/create/create.customer.usecase';
import CustomerRepository from '../../customer/repository/sequelize/cutomer.repository';
import ListCustomerUseCase from '../../../usecase/customer/list/list.customer.usecase';
import CustomerPresenter from '../presenters/cutomer.presenter';

export const customerRoute = express.Router();

customerRoute.post("/", async (req: Request, res: Response) => {
    const usecase = new CreateCustomerUseCase(new CustomerRepository());
    try {
        const customerDto = {
            name: req.body.name,
            address: {
                street: req.body.address.street,
                city: req.body.address.city,
                number: req.body.address.number,
                zip: req.body.address.zip,
            },
        };
        const output = await usecase.execute(customerDto);
        res.send(output);
    } catch (err) {
        res.status(500).send(err);
    }
});

customerRoute.get('/', async (req: Request, res: Response) => {
    const useCase = new ListCustomerUseCase(new CustomerRepository());
    try {
        //A principio estoupartindo do pressuposto que tudo será JSON
        const output = await useCase.execute({});

        res.format({
            json: async () => res.send(output),
            xml: async () => res.send(CustomerPresenter.toXML(output)),
        })

    } catch (error) {

        res.status(500).send();
    }
})
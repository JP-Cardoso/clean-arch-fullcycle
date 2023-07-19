import { app, sequelize } from './../express';
import request from "supertest"

describe('E2E test for customer', () => {

    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });

    beforeAll(async () => {
        await sequelize.close()
    });

    it('should create a new cutomer', async () => {
        const response = await request(app)
            .post("/customer")
            .send({
                name: "John",
                address: {
                    street: "Street",
                    city: "city",
                    number: 123,
                    zip: "12345-67"
                }
            });

        expect(response.status).toBe(200);
        expect(response.body.name).toBe("John");
        expect(response.body.address.street).toBe("John");
        expect(response.body.address.city).toBe("city");
        expect(response.body.address.number).toBe(123);
        expect(response.body.address.zip).toBe("12345-67");
    })
})
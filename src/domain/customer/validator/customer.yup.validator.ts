/**
 * Estamos gerando um acoplamento com a lib devalidação Yup.
 * Mesmo usando algo externo, estamos trabalhando para que não seja 
 * um forte acoplamento
 */

import ValidatorInterface from "../../@shared/validator/validator.interface";
import Customer from "../entity/customer";
import * as yup from "yup";

export default class CustomerYupValidator implements ValidatorInterface<Customer> {

    validate(entity: Customer): void {
        try {
            yup
                .object()
                .shape({
                    id: yup.string().required("Id is required"),
                    name: yup.string().required("Name is required")
                })
                .validateSync(
                    {
                        id: entity.id,
                        name: entity.name
                    }, {
                    //Ele não vai abortar, vai esperar tudo ser validado para depois retornar o erro
                    abortEarly: false
                }
                )
        } catch (errors) {
            //Para cada erro que eu tiver esterei adicionando no notification error
            const e = errors as yup.ValidationError;
            e.errors.forEach((error) => {
                entity.notification.addError({
                    context: "customer",
                    message: error
                })
            });
        }
    }
}
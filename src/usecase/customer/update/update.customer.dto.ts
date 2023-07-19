/**
 * Por estarmos dando um update geral, não precisaremos
 * especificar qual atributo vamos atualizar
 */
export interface InputUpdateCustomerDto {
    id: string;
    name: string;
    address: {
        street: string;
        city: string;
        number: number;
        zip: string;
    }
}

export interface OutputUpdateCustomerDto {
    id: string;
    name: string;
    address: {
        street: string;
        city: string;
        number: number;
        zip: string;
    }
}
export interface Dish {
    id: number
    nome: string
    descricao: string
    preco: number
    foto: string
    porcao: string
}

export interface Restaurant {
    id: number
    titulo: string
    descricao: string
    tipo: string
    capa: string
    destacado: boolean
    avaliacao: number
    cardapio: Dish[]
}

export interface CheckoutPayload {
    products: {
        id: number;
        price: number;
    }[];
    delivery: {
        receiver: string;
        address: {
            description: string;
            city: string;
            zipCode: string;
            number: number;
            complement?: string;
        };
    };
    payment: {
        card: {
            name: string;
            number: string;
            code: number;
            expires: {
                month: number;
                year: number;
            };
        };
    };
}

export interface CheckoutResponse {
    orderId: string;
}

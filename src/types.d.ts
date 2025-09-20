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

class Restaurant {
  id: number;
  titulo: string;
  descricao: string;
  tipo: string;
  capa: string;
  destacado: boolean;
  avaliacao: number;
  cardapio: Dish[];

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    tipo: string,
    capa: string,
    destacado: boolean,
    avaliacao: number,
    cardapio: Dish[]
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.tipo = tipo;
    this.capa = capa;
    this.destacado = destacado;
    this.avaliacao = avaliacao;
    this.cardapio = cardapio;
  }
}

export default Restaurant;

class Dish {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  porcao: string;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    foto: string,
    porcao: string
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.foto = foto;
    this.porcao = porcao;
  }
}

export default Dish;

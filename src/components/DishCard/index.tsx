import { Button, Card, Description, Image, Name } from "./style";
import Dish from "../../models/Dish";

type Props = {
  dish: Dish;
};

const DishCard = ({ dish }: Props) => {
  return (
    <Card>
      <Image src={dish.foto} alt={dish.nome} />
      <Name>{dish.nome}</Name>
      <Description>{dish.descricao}</Description>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  );
};

export default DishCard;

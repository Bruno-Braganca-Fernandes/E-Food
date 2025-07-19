import { Button, Card, Description, Image, Name } from "./style";
import Dish from "../../models/Dish";

type Props = {
  dish: Dish;
};

const DishCard = ({ dish }: Props) => {
  return (
    <Card>
      <Image src={dish.image} alt={dish.name} />
      <Name>{dish.name}</Name>
      <Description>{dish.description}</Description>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  );
};

export default DishCard;

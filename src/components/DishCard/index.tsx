import { useState } from "react";
import { Button, Card, Description, Image, Name } from "./style";

import Modal from "../Modal";
import { Dish } from "../../types";

type Props = {
  dish: Dish;
};

const DishCard = ({ dish }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card>
        <Image src={dish.foto} alt={dish.nome} />
        <Name>{dish.nome}</Name>
        <Description>{dish.descricao}</Description>
        <Button onClick={() => setIsModalOpen(true)}>
          Adicionar ao carrinho
        </Button>
      </Card>

      {isModalOpen && (
        <Modal dish={dish} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default DishCard;

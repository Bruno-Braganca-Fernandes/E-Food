import { useState } from "react";
import { Button, Card, Description, Image, Name } from "./style";

import Dish from "../../models/Dish";
import { Modal } from "../Modal";

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
        <Modal
          image={dish.foto}
          title={dish.nome}
          description={dish.descricao}
          portion={dish.porcao}
          price={dish.preco}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default DishCard;

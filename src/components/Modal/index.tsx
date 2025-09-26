import { useDispatch } from "react-redux";

import {
  AddButton,
  CloseButton,
  DishDescription,
  DishImage,
  DishInfo,
  DishPortion,
  DishTitle,
  ModalContainer,
  Overlay,
} from "./style";

import close from "../../assets/images/close.png";
import { addItem } from "../../store/reducers/cart";
import { Dish } from "../../types";

type Props = {
  dish: Dish;
  onClose: () => void;
};

const Modal = ({ dish, onClose }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(dish));
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src={close} alt="Fechar modal" />
        </CloseButton>
        <DishImage src={dish.foto} alt={dish.nome} />
        <DishInfo>
          <DishTitle>{dish.nome}</DishTitle>
          <DishDescription>{dish.descricao}</DishDescription>
          <DishPortion>Serve: de {dish.porcao}</DishPortion>
          <AddButton onClick={handleAddToCart}>
            Adicionar ao carrinho - R${dish.preco.toFixed(2).replace(".", ",")}
          </AddButton>
        </DishInfo>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

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

type Props = {
  image: string;
  title: string;
  description: string;
  portion: string;
  price: number;
  onClose: () => void;
};

export const Modal = ({
  image,
  title,
  description,
  portion,
  price,
  onClose,
}: Props) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src={close} alt="Fechar modal" />
        </CloseButton>
        <DishImage src={image} alt={title} />
        <DishInfo>
          <DishTitle>{title}</DishTitle>
          <DishDescription>{description}</DishDescription>
          <DishPortion>Serve: de {portion}</DishPortion>
          <AddButton>
            Adicionar ao carrinho - R${price.toFixed(2).replace(".", ",")}
          </AddButton>
        </DishInfo>
      </ModalContainer>
    </Overlay>
  );
};

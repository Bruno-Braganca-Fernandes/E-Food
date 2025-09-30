import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeItem, toggleCart } from "../../store/reducers/cart";
import {
  CartContainer,
  Overlay,
  CartContent,
  CartItems,
  DishItem,
  DishImage,
  DishDetails,
  DishName,
  DishPrice,
  TotalValue,
  ContinueButton,
  Bin,
  CartFooter,
} from "./style";

import bin from "../../assets/images/bin.png";
import { TextBanner } from "../RestaurantHeader/style";

type Props = {
  stageCheckout: () => void;
};

const Cart = ({ stageCheckout }: Props) => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootState) => state.cart);

  const valorTotal = items
    .reduce((acc, item) => acc + item.preco, 0)
    .toFixed(2);

  const goToCheckout = () => {
    stageCheckout();
  };

  return (
    <>
      {isOpen && <Overlay onClick={() => dispatch(toggleCart())} />}
      <CartContainer isOpen={isOpen}>
        <CartContent>
          <CartItems>
            {items.length === 0 ? (
              <TextBanner>Seu carrinho está vazio</TextBanner>
            ) : (
              items.map((item) => (
                <DishItem key={item.cartId}>
                  <DishImage src={item.foto} alt={item.nome} />
                  <DishDetails>
                    <DishName>{item.nome}</DishName>
                    <DishPrice>R$ {item.preco}</DishPrice>
                  </DishDetails>
                  <Bin
                    src={bin}
                    onClick={() => dispatch(removeItem(item.cartId))}
                    alt="bin"
                  />
                </DishItem>
              ))
            )}
          </CartItems>
          <CartFooter>
            {items.length > 0 && (
              <>
                <TotalValue>
                  <span>Valor total</span>
                  <span>R$ {valorTotal}</span>
                </TotalValue>
                <ContinueButton onClick={goToCheckout}>
                  Continuar com a entrega
                </ContinueButton>
              </>
            )}
          </CartFooter>
        </CartContent>
      </CartContainer>
    </>
  );
};

export default Cart;

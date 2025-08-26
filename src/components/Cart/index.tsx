import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { closeCart, remove } from "../../store/reducers/cart";
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

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootState) => state.cart);

  const valorTotal = items
    .reduce((acc, item) => acc + item.preco, 0)
    .toFixed(2);

  return (
    <>
      {isOpen && <Overlay onClick={() => dispatch(closeCart())} />}
      <CartContainer isOpen={isOpen}>
        <CartContent>
          <CartItems>
            {items.length === 0 ? (
              <TextBanner>Seu carrinho está vazio</TextBanner>
            ) : (
              items.map((item) => (
                <DishItem key={item.id}>
                  <DishImage src={item.foto} alt={item.nome} />
                  <DishDetails>
                    <DishName>{item.nome}</DishName>
                    <DishPrice>R$ {item.preco}</DishPrice>
                  </DishDetails>
                  <Bin
                    src={bin}
                    onClick={() => dispatch(remove(item.id))}
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
                <ContinueButton>Continuar com a entrega</ContinueButton>
              </>
            )}
          </CartFooter>
        </CartContent>
      </CartContainer>
    </>
  );
};

export default Cart;

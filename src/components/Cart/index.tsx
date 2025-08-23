import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { closeCart } from "../../store/reducers/cart";
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
} from "./style";

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
              <p>Seu carrinho está vazio</p>
            ) : (
              items.map((item, index) => (
                <DishItem key={index}>
                  <DishImage src={item.foto} alt={item.nome} />
                  <DishDetails>
                    <DishName>{item.nome}</DishName>
                    <DishPrice>R$ {item.preco}</DishPrice>
                  </DishDetails>
                </DishItem>
              ))
            )}
          </CartItems>
          {items.length > 0 && (
            <TotalValue>
              <span>Valor total</span>
              <span>R$ {valorTotal}</span>
            </TotalValue>
          )}
          <ContinueButton>Continuar com a entrega</ContinueButton>
        </CartContent>
      </CartContainer>
    </>
  );
};

export default Cart;

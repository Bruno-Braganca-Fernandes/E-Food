import { Link } from "react-router-dom";
import {
  Background,
  BackgroundText,
  Banner,
  RestaurantName,
  StyledLink,
  TextBanner,
} from "./style";

import logo from "../../assets/images/logo.png";
import { Container } from "../../styles";
import { toggleCart } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Restaurant } from "../../types";

type Props = {
  restaurant: Restaurant;
};

const RestaurantHeader = ({ restaurant }: Props) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <Background>
        <StyledLink to="/">
          <BackgroundText>Restaurantes</BackgroundText>
        </StyledLink>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <BackgroundText onClick={() => dispatch(toggleCart())}>
          {items.length} produto(s) no carrinho
        </BackgroundText>
      </Background>
      <Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <Container>
          <TextBanner>{restaurant.tipo}</TextBanner>
          <RestaurantName>{restaurant.titulo}</RestaurantName>
        </Container>
      </Banner>
    </>
  );
};

export default RestaurantHeader;

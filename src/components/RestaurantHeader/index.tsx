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
import Restaurant from "../../models/Restaurant";

type Props = {
  restaurant: Restaurant;
};

const RestaurantHeader = ({ restaurant }: Props) => (
  <>
    <Background>
      <StyledLink to="/">
        <BackgroundText>Restaurantes</BackgroundText>
      </StyledLink>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <BackgroundText>0 produto(s) no carrinho</BackgroundText>
    </Background>
    <Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <Container>
        <TextBanner>{restaurant.tipo}</TextBanner>
        <RestaurantName>{restaurant.titulo}</RestaurantName>
      </Container>
    </Banner>
  </>
);

export default RestaurantHeader;

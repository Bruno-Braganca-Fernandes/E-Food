import { Link } from "react-router-dom";
import {
  Background,
  BackgroundText,
  Banner,
  RestaurantName,
  TextBanner,
} from "./style";

import logo from "../../assets/images/logo.png";
import { Container } from "../../styles";

const RestaurantHeader = () => (
  <>
    <Background>
      <BackgroundText>Restaurantes</BackgroundText>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <BackgroundText>0 produto(s) no carrinho</BackgroundText>
    </Background>
    <Banner>
      <Container>
        <TextBanner>Italiana</TextBanner>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </Container>
    </Banner>
  </>
);

export default RestaurantHeader;

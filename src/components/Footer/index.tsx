import { FooterStyle, FooterText, ImageContainer } from "./style";

import logo from "../../assets/images/logo.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import X from "../../assets/images/X.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <FooterStyle>
    <Link to="/">
      <img src={logo} alt="Efood" />
    </Link>
    <ImageContainer>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Facebook" />
      <img src={X} alt="X" />
    </ImageContainer>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </FooterStyle>
);

export default Footer;

import { FooterStyle, FooterText, ImageContainer } from "./style";

import logo from "../../assets/images/logo.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import X from "../../assets/images/X.png";

const Footer = () => (
  <FooterStyle>
    <img src={logo} alt="Logo" />
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

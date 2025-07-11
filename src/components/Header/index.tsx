import { HeaderStyle, HeaderText } from "./style";

import logo from "../../assets/images/logo.png";

const Header = () => (
  <HeaderStyle>
    <img src={logo} alt="Logo" />
    <HeaderText>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </HeaderText>
  </HeaderStyle>
);

export default Header;

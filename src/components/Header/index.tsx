import { HeaderStyle, HeaderText } from "./style";

import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => (
  <HeaderStyle>
    <Link to="/">
      <img src={logo} alt="Efood" />
    </Link>
    <HeaderText>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </HeaderText>
  </HeaderStyle>
);

export default Header;

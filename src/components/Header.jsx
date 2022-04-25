import { HeaderStyle } from "../styledComponent/HeaderStyle";
import logo from "../images/logo_sec.svg";

import ShopCart from "./ShopCart";

const Header = () => {
  return (
    <HeaderStyle>
      <img src={logo} alt="Logo" />
      <ShopCart />
    </HeaderStyle>
  );
};

export default Header;

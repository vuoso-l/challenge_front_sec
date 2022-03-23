import React from "react";
import ShopCart from "./ShopCart";
import { HeaderStyle } from "./HeaderStyle";
import logo from "../images/logo_sec.svg";

const Header = () => {
  return (
    <HeaderStyle>
      <img src={logo} alt="Logo"></img>
      <ShopCart />
    </HeaderStyle>
  );
};

export default Header;

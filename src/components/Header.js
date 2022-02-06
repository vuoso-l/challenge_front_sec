import React from "react";
import ShopCart from "./ShopCart";
import { HeaderStyle } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <img
        src="//cdn.shopify.com/s/files/1/0254/2947/5433/t/12/assets/new_logo-black.svg?v=15514233714370248417?nocache=0.4027801373597353"
        alt="Logo"
      ></img>
      <ShopCart />
    </HeaderStyle>
  );
};

export default Header;

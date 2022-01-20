import React from "react";
import { H4ShopCart, DeleteButton } from "./BasicTagsStyle";
import { imgShopCart, imgDeleteCart } from "../fontAwesoneIcon";
import { ShopCartStyle } from "./ShopCartStyle";

const ShopCart = ({ elementCart, setElementCart }) => {
  const handleClickToEmpty = () => {
    localStorage.removeItem("elementCart");
    setElementCart([]);
  };

  return (
    <ShopCartStyle>
      <H4ShopCart>
        {imgShopCart} {elementCart.length}
      </H4ShopCart>
      <DeleteButton del onClick={handleClickToEmpty}>
        {imgDeleteCart}
      </DeleteButton>
    </ShopCartStyle>
  );
};

export default ShopCart;

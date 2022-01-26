import React from "react";
import { H4ShopCart, DeleteButton } from "./BasicTagsStyle";
import { imgShopCart, imgDeleteCart } from "../styleAux/fontAwesoneIcon";
import { ShopCartStyle } from "./ShopCartStyle";

const ShopCart = ({ elementCart, setElementCart }) => {
  const handleClickToEmpty = () => {
    localStorage.removeItem("elementCart");
    setElementCart([]);
  };

  return (
    <ShopCartStyle>
      <H4ShopCart data-testid="counter-elementCart">
        {imgShopCart} {elementCart.length}
      </H4ShopCart>
      <DeleteButton del data-testid="button-del" onClick={handleClickToEmpty}>
        {imgDeleteCart}
      </DeleteButton>
    </ShopCartStyle>
  );
};

export default ShopCart;

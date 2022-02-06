import React, { useContext, useState } from "react";
import { H4ShopCart, DeleteButton } from "./BasicTagsStyle";
import { imgShopCart, imgDeleteCart } from "../styleAux/fontAwesoneIcon";
import { ShopCartStyle } from "./ShopCartStyle";
import ElementCartContext from "../context/ElementCartContext";
import Cart from "./Cart";

const ShopCart = () => {
  const { elementCart, handleClickToEmpty } = useContext(ElementCartContext);
  const [open, setOpen] = useState(false);
  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  return (
    <ShopCartStyle>
      <H4ShopCart onClick={openCart} data-testid="counter-elementCart">
        {imgShopCart} {elementCart.length}
      </H4ShopCart>
      <DeleteButton del data-testid="button-del" onClick={handleClickToEmpty}>
        {imgDeleteCart}
      </DeleteButton>
      <Cart open={open} closeCart={closeCart} />
    </ShopCartStyle>
  );
};

export default ShopCart;

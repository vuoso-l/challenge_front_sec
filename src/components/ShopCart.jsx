import React, { useContext, useState } from "react";
import { H4ShopCart, DeleteButton } from "../styledComponent/BasicTagsStyle";
import { imgShopCart, imgDeleteCart } from "../styleAux/fontAwesoneIcon";
import { ShopCartStyle } from "../styledComponent/ShopCartStyle";
import ElementCartContext from "../context/ElementCartContext";
import Cart from "./Cart";

const ShopCart = () => {
  const { elementCart, handleClickToEmpty } =
    useContext(ElementCartContext) || [];
  const [openCart, setOpenCart] = useState(false);
  const handleCart = () => setOpenCart(!openCart);

  const productsQuantity = elementCart.map(
    (item) => item.quantity > 0 && item.quantity,
  );
  const totalProducts = productsQuantity.reduce((a, b) => a + b, 0);

  return (
    <ShopCartStyle>
      <H4ShopCart onClick={handleCart} data-testid="counter-elementCart">
        {imgShopCart} {totalProducts}
      </H4ShopCart>
      <DeleteButton del data-testid="button-del" onClick={handleClickToEmpty}>
        {imgDeleteCart}
      </DeleteButton>
      <Cart handleCart={handleCart} openCart={openCart} />
    </ShopCartStyle>
  );
};

export default ShopCart;

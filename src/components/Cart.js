import React, { useContext } from "react";
import ElementCartContext from "../context/ElementCartContext";
import { imgDeleteCart } from "../styleAux/fontAwesoneIcon";
import { CartContainer, CartStyle, ImgContainer } from "./CartStyle";

const Cart = ({ open, closeCart }) => {
  const { elementCart, deleteHandleCart } = useContext(ElementCartContext);
  console.log(open);
  return (
    <CartContainer open={open}>
      <button onClick={closeCart}>x</button>
      {elementCart.map((item) => {
        return (
          <CartStyle key={item.product.product_id}>
            <h5>{item.product.name}</h5>
            <ImgContainer>
              {item.product.image_url ? (
                <img src={item.product.image_url} alt="{item.product.name}" />
              ) : (
                <img
                  src="//cdn.shopify.com/s/files/1/0254/2947/5433/t/12/assets/new_logo-black.svg?v=15514233714370248417?nocache=0.4027801373597353"
                  alt="Logo"
                />
              )}
              <div>
                <h5>x {item.quantity}</h5>
                <button
                  className="btn-cart"
                  data-testid="btn-delCart"
                  onClick={() => deleteHandleCart(item.product)}
                >
                  {imgDeleteCart}
                </button>
              </div>
            </ImgContainer>
            <h4>Total: ${item.product.total_price * item.quantity}</h4>
          </CartStyle>
        );
      })}
    </CartContainer>
  );
};

export default Cart;

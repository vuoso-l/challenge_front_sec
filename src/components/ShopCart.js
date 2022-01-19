import React from "react";
import { DeleteButton } from "./Button";

const ShopCart = ({ elementCart, setElementCart }) => {
  const handleClickToEmpty = () => {
    localStorage.removeItem("elementCart");
    setElementCart([]);
  };

  return (
    <div>
      <h3>contador compras: {elementCart.length}</h3>
      <DeleteButton del onClick={handleClickToEmpty}>
        Vaciar
      </DeleteButton>
    </div>
  );
};

export default ShopCart;

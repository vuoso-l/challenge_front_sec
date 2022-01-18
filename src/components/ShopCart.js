import React from "react";

const ShopCart = ({ elementCart, setElementCart }) => {
  const handleClickToEmpty = () => {
    localStorage.removeItem("elementCart");
    setElementCart([]);
  };

  return (
    <div>
      <h3>contador compras: {elementCart.length}</h3>
      <button onClick={handleClickToEmpty}>Vaciar</button>
    </div>
  );
};

export default ShopCart;

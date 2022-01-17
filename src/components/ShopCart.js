import React from "react";

const ShopCart = ({ numCart, setElementCart, setNumCart }) => {
  const handleClickToEmpty = () => {
    console.log("click");
    localStorage.removeItem("numCart");
    localStorage.removeItem("elementCart");
    setNumCart(0);
    setElementCart([]);
  };

  return (
    <div>
      <h3>contador compras: {numCart}</h3>
      <button onClick={handleClickToEmpty}>Vaciar</button>
    </div>
  );
};

export default ShopCart;

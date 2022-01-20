import React from "react";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductsPage = () => {
  const [elementCart, setElementCart] = useLocalStorage("elementCart", []);

  return (
    <div>
      <Header elementCart={elementCart} setElementCart={setElementCart} />
      <CardProduct elementCart={elementCart} setElementCart={setElementCart} />
      <Footer />
    </div>
  );
};

export default ProductsPage;

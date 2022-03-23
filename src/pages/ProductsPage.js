import React from "react";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { ElementCardProvider } from "../context/ElementCartContext";
import { IsOpenElementCardProvider } from "../context/IsOpenElementCardContext";

const ProductsPage = () => {
  return (
    <ElementCardProvider>
      <Header />
      <IsOpenElementCardProvider>
        <Cart />
        <CardProduct />
      </IsOpenElementCardProvider>
      <Footer />
    </ElementCardProvider>
  );
};

export default ProductsPage;

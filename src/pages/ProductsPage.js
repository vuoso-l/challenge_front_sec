import React from "react";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { ElementCardProvider } from "../context/ElementCartContext";
import { IsOpenDetailProductProvider } from "../context/IsOpenDetailProductContext";

const ProductsPage = () => {
  return (
    <ElementCardProvider>
      <Header />
      <IsOpenDetailProductProvider>
        <Cart />
        <CardProduct />
      </IsOpenDetailProductProvider>
      <Footer />
    </ElementCardProvider>
  );
};

export default ProductsPage;

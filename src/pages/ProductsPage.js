import React from "react";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { ElementCardProvider } from "../context/ElementCartContext";
import { IsOpenProvider } from "../context/IsOpenContext";

const ProductsPage = () => {
  return (
    <ElementCardProvider>
      <Header />
      <IsOpenProvider>
        <Cart />
        <CardProduct />
      </IsOpenProvider>
      <Footer />
    </ElementCardProvider>
  );
};

export default ProductsPage;

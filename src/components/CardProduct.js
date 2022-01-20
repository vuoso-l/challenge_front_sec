import React, { useState } from "react";
import CardComposition from "./CardComposition";
import SelectFilter from "./SelectFilter";
import ShopCart from "./ShopCart";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";
import { useFetch } from "../hooks/useFetch";
import { CardStyle } from "./CardStyle";
import ErrorComponent from "./ErrorComponent";
import { H2 } from "./BasicTagsStyle";

const CardProduct = ({ elementCart, setElementCart }) => {
  const [categorySelected, setCategorySelected] = useState("all");

  const url = "http://localhost:3000/";
  const categoriesUrl = "categories";
  const productsUrl = "products";

  const { data, error, isLoaded } = useFetch(`${url}${productsUrl}`);

  const sumHandleCart = (product) => {
    setElementCart([...elementCart, product]);
    SweetAlert.messageOk(
      "Producto agregado al carrito!",
      `Se agregó ${product.name}`
    );
  };

  const restHandleCart = (product) => {
    const index = elementCart.findIndex(
      (elem) => elem.product_id === product.product_id
    );
    if (index >= 0) {
      setElementCart((arr) => arr.filter((elem, ind) => ind !== index));
      SweetAlert.messageOk(
        "Producto eliminado del carrito!",
        `Se eliminó ${product.name}`
      );
    } else {
      SweetAlert.messageError("No tienes ese producto en tu carrito");
    }
  };

  if (error) {
    return SweetAlert.messageError(error);
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <main>
        <H2>Nuestros productos</H2>
        <SelectFilter
          url={`${url}${categoriesUrl}`}
          handleChange={(e) => {
            setCategorySelected(e.target.value);
          }}
        />
        <CardStyle>
          {data ? (
            <CardComposition
              db={data}
              categorySelected={categorySelected}
              sumHandleCart={sumHandleCart}
              restHandleCart={restHandleCart}
            />
          ) : (
            <ErrorComponent />
          )}
        </CardStyle>
      </main>
    );
  }
};

export default CardProduct;

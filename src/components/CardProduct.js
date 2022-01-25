import React, { useState } from "react";
import ElementCard from "./ElementCard";
import SelectFilter from "./SelectFilter";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";
import { useFetch } from "../hooks/useFetch";
import { CardProductStyle } from "./CardProductStyle";
import ErrorComponent from "./ErrorComponent";
import { H2Style, GralButton } from "./BasicTagsStyle";

const CardProduct = ({ elementCart, setElementCart }) => {
  const [categorySelected, setCategorySelected] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const url = "http://localhost:3000/";
  const categoriesUrl = "categories";
  const productsUrl = "products";

  const { data, error, isLoaded } = useFetch(`${url}${productsUrl}`);

  const addHandleCart = (product) => {
    setElementCart([...elementCart, product]);
    SweetAlert.messageOk(
      "Producto agregado al carrito!",
      `Se agregó ${product.name}`
    );
  };

  const deleteHandleCart = (product) => {
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

  const closeCard = () => setIsOpen(false);

  if (error) {
    return (
      <div>
        {SweetAlert.messageError(error)}
        <ErrorComponent />
      </div>
    );
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <main>
        {!isOpen ? (
          <H2Style>Nuestros productos</H2Style>
        ) : (
          <H2Style>Productos que combinan muy bien con tu elección</H2Style>
        )}
        {!isOpen ? (
          <SelectFilter
            url={`${url}${categoriesUrl}`}
            handleChange={(e) => {
              setCategorySelected(e.target.value);
            }}
          />
        ) : (
          <GralButton onClick={closeCard}>Volver</GralButton>
        )}

        <CardProductStyle>
          {data && (
            <ElementCard
              db={data}
              categorySelected={categorySelected}
              addHandleCart={addHandleCart}
              deleteHandleCart={deleteHandleCart}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              closeCard={closeCard}
            />
          )}
        </CardProductStyle>
      </main>
    );
  }
};

export default CardProduct;

import React, { useContext, useState } from "react";
import ElementCard from "./ElementCard";
import SelectFilter from "./SelectFilter";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";
import { useFetch } from "../hooks/useFetch";
import { CardProductStyle } from "./CardProductStyle";
import ErrorComponent from "./ErrorComponent";
import { H2Style, GralButton } from "./BasicTagsStyle";
import IsOpenElementCardContext from "../context/IsOpenElementCardContext";

const CardProduct = () => {
  const { isOpen, closeCard } = useContext(IsOpenElementCardContext) || {};
  const [categorySelected, setCategorySelected] = useState("all");

  const url = "https://backend-challenge-sec.herokuapp.com/";
  const productsUrl = "products";

  const { data, error, isLoaded } = useFetch(`${url}${productsUrl}`);

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
            handleChange={(e) => {
              setCategorySelected(e.target.value);
            }}
          />
        ) : (
          <GralButton onClick={closeCard}>Volver</GralButton>
        )}

        <CardProductStyle>
          {data && (
            <ElementCard db={data} categorySelected={categorySelected} />
          )}
        </CardProductStyle>
      </main>
    );
  }
};

export default CardProduct;

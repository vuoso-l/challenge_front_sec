import React, { useState } from "react";
import DetailsProduct from "./DetailsProduct";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";
import { AddButton, DeleteButton } from "./Button";
import { ElementCardStyle } from "./ElementCardStyle";

const CardComposition = ({
  db,
  categorySelected,
  sumHandleCart,
  restHandleCart,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recommendedImage, setRecommendedImage] = useState([]);

  const url = "http://localhost:3000/";
  const recommendationUrl = "recommendations";
  const { data, error, isLoaded } = useFetch(`${url}${recommendationUrl}`);

  const openCard = (e) => {
    setIsOpen(true);

    data.map(
      (rec) =>
        e.target.id === rec.product_id &&
        setRecommendedImage(rec.recommendations)
    );
  };

  const closeCard = () => setIsOpen(false);

  let filterDb;
  if (categorySelected === "all" || categorySelected === "") {
    filterDb = db.filter((prod) => prod.categories !== categorySelected);
  } else if (categorySelected !== "all") {
    filterDb = db.filter(
      (prod) =>
        prod.categories[0] === categorySelected ||
        prod.categories[1] === categorySelected
    );
  }

  if (error) {
    return SweetAlert.messageError(error);
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <>
        {filterDb.map((product) => {
          return (
            <ElementCardStyle isOpen={isOpen}       
              key={product.product_id}
            >
              <h4>{product.name}</h4>

              <img
                id={product.product_id}
                onClick={openCard}
                src={product.image_url}
                alt={product.name}
              ></img>

              <h4>${product.total_price}</h4>

              <div>
                <AddButton add onClick={() => sumHandleCart(product)}>
                  Agregar al carrito
                </AddButton>
                <DeleteButton del onClick={() => restHandleCart(product)}>
                  Eliminar del carrito
                </DeleteButton>
              </div>
            </ElementCardStyle>
          );
        })}
        <DetailsProduct
          isOpen={isOpen}
          closeCard={closeCard}
          product={filterDb}
          recommendedImage={recommendedImage}
          sumHandleCart={sumHandleCart}
        />
      </>
    );
  }
};

export default CardComposition;

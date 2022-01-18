import React, { useState } from "react";
import DetailsProduct from "./DetailsProduct";
import { useFetch } from "../hooks/useFetch";
import "./CardComposition.css";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";

const CardComposition = ({
  db,
  categorySelected,
  sumHandleCart,
  restHandleCart,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ccIsOpen, setCcIsOpen] = useState(true);
  const [recommendedImage, setRecommendedImage] = useState([]);

  const url = "http://localhost:3000/";
  const recommendationUrl = "recommendations";
  const { data, error, isLoaded } = useFetch(`${url}${recommendationUrl}`);

  const openCard = (e) => {
    setIsOpen(true);
    setCcIsOpen(false);

    data.map((rec) => e.target.id === rec.product_id && setRecommendedImage(rec.recommendations));
  };

  const closeCard = () => {
    setIsOpen(false);
    setCcIsOpen(true);
  };

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
            <section
              className={`elementsCard ${isOpen && "is-open"}`}
              key={product.product_id}
            >
              <h4>{product.name}</h4>

              <img
                id={product.product_id}
                onClick={openCard}
                src={product.image_url}
                alt={product.name}
              ></img>

              <p>${product.total_price}</p>

              <div className="btnGroup">
                <button onClick={() => sumHandleCart(product)}>
                  Agregar al carrito
                </button>
                <button onClick={() => restHandleCart(product)}>
                  Eliminar del carrito
                </button>
              </div>
            </section>
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

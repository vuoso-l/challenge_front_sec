import React, { useState } from "react";
import DetailsProduct from "./DetailsProduct";
import { useFetch } from "../hooks/useFetch";
import "./CardComposition.css";

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
  const { data, error, loading } = useFetch(`${url}${recommendationUrl}`);

  if (!data) return null;

  const openCard = (e) => {
    setIsOpen(true);

    data.map((rec) => {
      if (e.target.id === rec.product_id) {
        console.log("e.target.id = ", e.target.id);
        console.log("product id = ", rec.product_id);
        console.log("recommendations = ", rec.recommendations);
        setRecommendedImage(rec.recommendations);
      }
    });
  };

  const closeCard = () => setIsOpen(false);

  let filterDb = db;
  if (categorySelected === "all" || categorySelected === "") {
    filterDb = db.filter((prod) => prod.categories !== categorySelected);
  } else if (categorySelected !== "all") {
    filterDb = db.filter((prod) => prod.categories == categorySelected);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {filterDb.map((product) => {
          return (
            <section className="elementsCard" key={product.product_id}>
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

              <DetailsProduct
                isOpen={isOpen}
                closeCard={closeCard}
                product={product}
                recommendedImage={recommendedImage}
              />
            </section>
          );
        })}
      </>
    );
  }
};

export default CardComposition;

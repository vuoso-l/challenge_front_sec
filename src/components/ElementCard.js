import React, { useState } from "react";
import DetailsProduct from "./DetailsProduct";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";
import { ElementCardStyle } from "./ElementCardStyle";
import {
  ElementCardImg,
  H4Style,
  AddButton,
  DeleteButton,
} from "./BasicTagsStyle";
import { imgShopCart, imgDeleteCart } from "../styleAux/fontAwesoneIcon";
import ErrorComponent from "./ErrorComponent";

const CardComposition = ({
  db,
  categorySelected,
  addHandleCart,
  deleteHandleCart,
  isOpen,
  setIsOpen,
  closeCard,
}) => {
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

  let filterDb;
  if (categorySelected === "all" || categorySelected === "") {
    filterDb = db.filter((prod) => prod.categories !== categorySelected);
  } else if (categorySelected !== "all") {
    filterDb = db.filter(
      (prod) =>
        prod.categories !== undefined &&
        (prod.categories[0] === categorySelected ||
          prod.categories[1] === categorySelected)
    );
  }

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
      <>
        {filterDb.map((product) => {
          return (
            <ElementCardStyle isOpen={isOpen} key={product.product_id}>
              <H4Style>{product.name}</H4Style>

              {product.image_url ? (
                <ElementCardImg
                  id={product.product_id}
                  onClick={openCard}
                  src={product.image_url}
                  alt={product.name}
                ></ElementCardImg>
              ) : (
                <ElementCardImg
                  id={product.product_id}
                  onClick={openCard}
                  src="//cdn.shopify.com/s/files/1/0254/2947/5433/t/12/assets/new_logo-black.svg?v=15514233714370248417?nocache=0.4027801373597353"
                  alt="Logo"
                ></ElementCardImg>
              )}

              <H4Style>${product.total_price}</H4Style>

              <div>
                <AddButton add onClick={() => addHandleCart(product)}>
                  {imgShopCart}
                </AddButton>
                <DeleteButton del onClick={() => deleteHandleCart(product)}>
                  {imgDeleteCart}
                </DeleteButton>
              </div>
            </ElementCardStyle>
          );
        })}
        <DetailsProduct
          isOpen={isOpen}
          closeCard={closeCard}
          product={db}
          recommendedImage={recommendedImage}
          addHandleCart={addHandleCart}
        />
      </>
    );
  }
};

export default CardComposition;

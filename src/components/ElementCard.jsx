import React, { useContext, useState } from "react";
import DetailsProduct from "./DetailsProduct";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import SweetAlert from "../helpers/SweetAlert";
import { ElementCardStyle } from "../styledComponent/ElementCardStyle";
import {
  ElementCardImg,
  H3Style,
  H4Style,
  AddButton,
  DeleteButton,
} from "../styledComponent/BasicTagsStyle";
import { imgShopCart, imgDeleteCart } from "../styleAux/fontAwesoneIcon";
import ErrorComponent from "./ErrorComponent";
import ElementCartContext from "../context/ElementCartContext";
import IsOpenDetailProductContext from "../context/IsOpenDetailProductContext";
import logo from "../images/logo_sec.svg";

const ElementCard = ({ db, categorySelected }) => {
  const { isOpen, setIsOpen } = useContext(IsOpenDetailProductContext) || {};
  const { addHandleCart, deleteHandleCart } =
    useContext(ElementCartContext) || {};
  const [recommendedImage, setRecommendedImage] = useState([]);

  const url = "https://backend-challenge-sec.herokuapp.com/";
  const recommendationUrl = "recommendations";
  const { data, error, isLoaded } = useFetch(`${url}${recommendationUrl}`);

  const openCard = (e) => {
    setIsOpen(true);

    data.map(
      (rec) =>
        e.target.id === rec.product_id &&
        setRecommendedImage(rec.recommendations),
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
          prod.categories[1] === categorySelected),
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
              <H3Style>{product.name}</H3Style>

              {product.image_url ? (
                <ElementCardImg
                  data-testid="img-openCard"
                  id={product.product_id}
                  onClick={openCard}
                  src={product.image_url}
                  alt={product.name}
                ></ElementCardImg>
              ) : (
                <ElementCardImg
                  id={product.product_id}
                  onClick={openCard}
                  src={logo}
                  alt="Logo"
                ></ElementCardImg>
              )}

              <H4Style>${product.total_price}</H4Style>

              <div>
                <AddButton
                  add
                  data-testid="btn-addCart"
                  onClick={() => addHandleCart(product)}
                >
                  {imgShopCart}
                </AddButton>
                <DeleteButton
                  del
                  data-testid="btn-delCart"
                  onClick={() => deleteHandleCart(product)}
                >
                  {imgDeleteCart}
                </DeleteButton>
              </div>
            </ElementCardStyle>
          );
        })}
        <DetailsProduct product={db} recommendedImage={recommendedImage} />
      </>
    );
  }
};

export default ElementCard;

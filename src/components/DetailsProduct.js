import React, { useContext } from "react";
import { ImgStyle, H4Style, AddButton } from "./BasicTagsStyle";
import {
  DetailsProductStyle,
  DetailsProductContainer,
} from "./DetailsProductStyle";
import { imgShopCart } from "../styleAux/fontAwesoneIcon";
import ElementCartContext from "../context/ElementCartContext";
import IsOpenContext from "../context/IsOpenContext";

const DetailsProduct = ({ product, recommendedImage }) => {
  const { addHandleCart } = useContext(ElementCartContext);
  const { isOpen, closeCard } = useContext(IsOpenContext);
  const handleContainerClick = (e) => e.stopPropagation();

  return (
    <DetailsProductContainer isOpen={isOpen} onClick={closeCard}>
      {recommendedImage.map((imgRec) => {
        return (
          <DetailsProductStyle key={imgRec}>
            {product.map((prod) => {
              return (
                prod.product_id === imgRec && (
                  <div onClick={handleContainerClick} key={prod.product_id}>
                    <H4Style>{prod.name}</H4Style>
                    {prod.image_url ? (
                      <ImgStyle src={prod.image_url} alt={prod.name}></ImgStyle>
                    ) : (
                      <ImgStyle
                        src="//cdn.shopify.com/s/files/1/0254/2947/5433/t/12/assets/new_logo-black.svg?v=15514233714370248417?nocache=0.4027801373597353"
                        alt="Logo"
                      ></ImgStyle>
                    )}
                    <H4Style>${prod.total_price}</H4Style>
                    <AddButton
                      add
                      data-testid="btn-addCart"
                      onClick={() => addHandleCart(prod)}
                    >
                      {imgShopCart}
                    </AddButton>
                  </div>
                )
              );
            })}
          </DetailsProductStyle>
        );
      })}
    </DetailsProductContainer>
  );
};

export default DetailsProduct;

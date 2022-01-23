import React from "react";
import { ImgStyle, H4Style, AddButton } from "./BasicTagsStyle";
import { DetailsProductStyle, DetailsProductContainer } from "./DetailsProductStyle";
import { imgShopCart } from "../styleAux/fontAwesoneIcon";

const DetailsProduct = ({
  isOpen,
  closeCard,
  product,
  recommendedImage,
  sumHandleCart,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <DetailsProductContainer isOpen={isOpen} onClick={closeCard}>
      {recommendedImage.map((imgRec) => {
        return (
          <DetailsProductStyle key={imgRec}>
            {product.map((prod) => {
              return (
                prod.product_id === imgRec && (
                  <div onClick={handleModalContainerClick} key={prod.product_id}>
                    <H4Style>{prod.name}</H4Style>
                    <ImgStyle                    
                      src={prod.image_url}
                      alt={prod.name}
                    ></ImgStyle>
                    <H4Style>${prod.total_price}</H4Style>
                    <AddButton add onClick={() => sumHandleCart(prod)}>
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

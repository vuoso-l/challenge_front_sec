import React from "react";
import { Img, H4, AddButton } from "./BasicTagsStyle";
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
                    <H4>{prod.name}</H4>
                    <Img                    
                      src={prod.image_url}
                      alt={prod.name}
                    ></Img>
                    <H4>${prod.total_price}</H4>
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

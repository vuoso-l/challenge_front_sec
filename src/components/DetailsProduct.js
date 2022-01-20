import React from "react";
import { Img, H2, H4, GralButton, AddButton } from "./BasicTagsStyle";
import { DetailCardStyle, DetailContainer } from "./DetailCardStyle";
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
    <DetailContainer isOpen={isOpen} onClick={closeCard}>
      <H2>te mostramos los productos que combinan muy bien con tu elección</H2>
      <GralButton onClick={closeCard}>Volver</GralButton>
      {recommendedImage.map((imgRec) => {
        return (
          <DetailCardStyle>
            {product.map((prod) => {
              return (
                prod.product_id === imgRec && (
                  <div onClick={handleModalContainerClick}>
                    <H4>{prod.name}</H4>
                    <Img
                      key={prod.product_id}
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
          </DetailCardStyle>
        );
      })}
    </DetailContainer>
  );
};

export default DetailsProduct;

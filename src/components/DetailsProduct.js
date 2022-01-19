import React from "react";
//import "./DetailsProduct.css";
import { GralButton, AddButton } from "./Button";
import { DetailCardStyle, DetailContainer } from "./DetailCardStyle";

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
        <h2>te mostramos los productos que combinan muy bien con tu elección</h2>
        <GralButton onClick={closeCard}>Volver</GralButton>
        {recommendedImage.map((imgRec) => {
          return (
            <DetailCardStyle >
              {product.map((prod) => {
                return (
                  prod.product_id === imgRec && (
                    <div onClick={handleModalContainerClick}>
                      <h4>{prod.name}</h4>
                      <img
                        key={prod.product_id}
                        src={prod.image_url}
                        alt={prod.name}
                      ></img>
                      <h4>${prod.total_price}</h4>
                      <AddButton add onClick={() => sumHandleCart(prod)}>
                        Agregar al carrito
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

import React from "react";
import "./DetailsProduct.css";

const DetailsProduct = ({
  isOpen,
  closeCard,
  product,
  recommendedImage,
  sumHandleCart,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  /* setState(e => !e)
   */
  return (
    <div className={`product ${isOpen && "is-open"}`} onClick={closeCard}>
      <div onClick={handleModalContainerClick}>
        {recommendedImage.map((imgRec) => {
          return (
            <div className="product-container">
              {product.map((prod) => {
                return (
                  prod.product_id === imgRec && (
                    <div>
                      <img
                        key={prod.product_id}
                        src={prod.image_url}
                        alt={prod.name}
                      ></img>
                      <button onClick={() => sumHandleCart(prod)}>
                        Agregar al carrito
                      </button>
                    </div>
                  )
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsProduct;

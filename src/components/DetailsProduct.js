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

  return (
    <div className={`product ${isOpen && "is-open"}`} onClick={closeCard}>
      <div onClick={handleModalContainerClick}>
        <button onClick={closeCard}>Volver</button>
        {recommendedImage.map((imgRec) => {
          return (
            <div className="product-container">
              {product.map((prod) => {
                return (
                  prod.product_id === imgRec && (
                    <div>
                      <h4>{prod.name}</h4>
                      <img
                        key={prod.product_id}
                        src={prod.image_url}
                        alt={prod.name}
                      ></img>
                      <p>${prod.total_price}</p>
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

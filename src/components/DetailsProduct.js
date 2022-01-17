import React from "react";
import "./DetailsProduct.css";

const DetailsProduct = ({ isOpen, closeCard, product, recommendedImage }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <div className={`product ${isOpen && "is-open"}`} onClick={closeCard}>
      <div  onClick={handleModalContainerClick}>        
        {recommendedImage.map((imgRec) => {
          return (
            <div className="product-container">
              {imgRec === product.product_id && 
              <div>
              {console.log(<img
                key={product.product_id}
                src={product.image_url}
                alt={product.name}
              ></img>)}
              <img
                key={product.name}
                src={product.image_url}
                alt={product.name}
              ></img>
              </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsProduct;

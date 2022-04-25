import { useContext } from "react";

import {
  ImgStyle,
  H4Style,
  AddButton,
} from "../styledComponent/BasicTagsStyle";
import { DetailsProductContainer } from "../styledComponent/DetailsProductStyle";
import { imgShopCart } from "../styleAux/fontAwesoneIcon";
import ElementCartContext from "../context/ElementCartContext";
import IsOpenDetailProductContext from "../context/IsOpenDetailProductContext";
import { ElementCardStyle } from "../styledComponent/ElementCardStyle";
import logo from "../images/logo_sec.svg";

const DetailsProduct = ({ product, recommendedImage }) => {
  const { addHandleCart } = useContext(ElementCartContext) || {};
  const { isOpen, closeCard } = useContext(IsOpenDetailProductContext) || {};
  const handleContainerClick = (e) => e.stopPropagation();

  return (
    <DetailsProductContainer isOpen={isOpen} onClick={closeCard}>
      {recommendedImage.map((imgRec) => {
        return product.map((prod) => {
          return (
            prod.product_id === imgRec && (
              <ElementCardStyle
                onClick={handleContainerClick}
                key={prod.product_id}
              >
                <H4Style>{prod.name}</H4Style>
                {prod.image_url ? (
                  <ImgStyle src={prod.image_url} alt={prod.name} />
                ) : (
                  <ImgStyle src={logo} alt="Logo" />
                )}
                <H4Style>${prod.total_price}</H4Style>
                <AddButton
                  add
                  data-testid="btn-addCart"
                  onClick={() => addHandleCart(prod)}
                >
                  {imgShopCart}
                </AddButton>
              </ElementCardStyle>
            )
          );
        });
      })}
    </DetailsProductContainer>
  );
};

export default DetailsProduct;

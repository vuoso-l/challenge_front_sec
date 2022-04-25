import { createContext, useEffect, useReducer } from "react";

import { TYPES } from "../actions/elementCartActions";
import { cartInitialState, cartReducers } from "../reducers/cartReducers";
import SweetAlert from "../helpers/SweetAlert";

const ElementCartContext = createContext();

const ElementCardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, cartInitialState);
  const { elementCart } = state || [];

  console.log(elementCart);

  useEffect(() => {
    localStorage.setItem("elementCart", JSON.stringify(elementCart));
  }, [elementCart]);

  const handleClickToEmpty = () => {
    if (elementCart.length > 0) {
      SweetAlert.messageDelete(`¿Seguro que quieres vaciar el carrito?`, () =>
        dispatch({ type: TYPES.CLEAR_CART }),
      );
    } else {
      SweetAlert.messageError("El carrito está vacío");
    }
  };

  const addHandleCart = (product) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: product });
    SweetAlert.messageOk(
      "Producto agregado al carrito!",
      `Se agregó ${product.name}`,
    );
  };

  const deleteHandleCart = (product) => {
    const similarProduct = elementCart.find(
      (item) => item.product.product_id === product.product_id,
    );

    if (similarProduct) {
      SweetAlert.messageDelete(
        `¿Seguro que quieres eliminar la unidad "${product.name}" del carrito ?`,
        () => dispatch({ type: TYPES.DELETE_FROM_CART, payload: product }),
      );
    } else {
      SweetAlert.messageError("No tienes este producto en tu carrito");
    }
  };

  const data = {
    elementCart,
    handleClickToEmpty,
    addHandleCart,
    deleteHandleCart,
  };

  return (
    <ElementCartContext.Provider value={data}>
      {children}
    </ElementCartContext.Provider>
  );
};

export { ElementCardProvider };
export default ElementCartContext;

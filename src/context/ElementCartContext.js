import React, { createContext, useEffect, useReducer } from "react";
import { TYPES } from "../actions/elementCartActions";
import { cartInitialState, cartReducers } from "../reducers/cartReducers";

const ElementCartContext = createContext();

const ElementCardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, cartInitialState);
  const { elementCart } = state || [];
  console.log(elementCart);

  useEffect(() => {
    localStorage.setItem("elementCart", JSON.stringify(elementCart));
  }, [elementCart]);

  const handleClickToEmpty = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const addHandleCart = (product) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: product });
  };

  const deleteHandleCart = (product) => {
    dispatch({ type: TYPES.DELETE_FROM_CART, payload: product });
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

import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import SweetAlert from "../helpers/SweetAlert";

const ElementCartContext = createContext();

const ElementCardProvider = ({ children }) => {
  const [elementCart, setElementCart] = useLocalStorage("elementCart", []);

  const handleClickToEmpty = () => {
    SweetAlert.messageDelete(`¿Seguro que quieres vaciar el carrito?`, () => {
      localStorage.removeItem("elementCart");
      setElementCart([]);
    });
  };

  const addHandleCart = (product) => {
    const prodFind = elementCart.find(
      (item) => item.product.product_id === product.product_id
    );

    prodFind
      ? setElementCart(
          elementCart.map((item) =>
            item.product.product_id === product.product_id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        )
      : setElementCart([...elementCart, { product, quantity: 1 }]);
    SweetAlert.messageOk(
      "Producto agregado al carrito!",
      `Se agregó ${product.name}`
    );
  };

  const deleteHandleCart = (product) => {
    const prodFind = elementCart.find(
      (item) => item.product.product_id === product.product_id
    );
    const prodIndex = elementCart.findIndex(
      (item) => item.product.product_id === product.product_id
    );

    if (prodFind) {
      SweetAlert.messageDelete(
        `¿Seguro que quieres eliminar la unidad "${product.name}" del carrito?`,
        prodFind.quantity > 1
          ? () =>
              setElementCart(
                elementCart.map((item) =>
                  item.product.product_id === product.product_id
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                      }
                    : item
                )
              )
          : () =>
              setElementCart(
                elementCart.filter((item, index) => index !== prodIndex)
              )
      );
    } else {
      SweetAlert.messageError("No tienes ese producto en tu carrito");
    }
  };

  const data = {
    elementCart,
    handleClickToEmpty,
    addHandleCart,
    deleteHandleCart,
    setElementCart,
  };

  return (
    <ElementCartContext.Provider value={data}>
      {children}
    </ElementCartContext.Provider>
  );
};

export { ElementCardProvider };
export default ElementCartContext;

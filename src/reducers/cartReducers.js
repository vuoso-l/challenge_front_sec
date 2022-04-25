import { TYPES } from "../actions/elementCartActions";

const productCart = JSON.parse(localStorage.getItem("elementCart"));

export const cartInitialState = {
  elementCart: productCart === null ? [] : productCart,
};

export function cartReducers(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const product = action.payload;
      const prodFind = state.elementCart.find(
        (item) => item.product.product_id === product.product_id,
      );

      return prodFind
        ? {
            ...state,
            elementCart: state.elementCart.map((item) =>
              item.product.product_id === product.product_id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            ),
          }
        : {
            ...state,
            elementCart: [...state.elementCart, { product, quantity: 1 }],
          };
    }
    case TYPES.DELETE_FROM_CART: {
      const product = action.payload;
      const prodFind = state.elementCart.find(
        (item) => item.product.product_id === product.product_id,
      );
      const prodIndex = state.elementCart.findIndex(
        (item) => item.product.product_id === product.product_id,
      );

      return prodFind
        ? prodFind.quantity > 1
          ? {
              ...state,
              elementCart: state.elementCart.map((item) =>
                item.product.product_id === product.product_id
                  ? {
                      ...item,
                      quantity: item.quantity - 1,
                    }
                  : item,
              ),
            }
          : {
              ...state,
              elementCart: state.elementCart.filter(
                (item, index) => index !== prodIndex,
              ),
            }
        : state;
    }
    case TYPES.CLEAR_CART: {
      localStorage.removeItem("elementCart");

      return cartInitialState;
    }
    default:
      return state;
  }
}

import CartData from "./../../Data/cart";
import { useCookies } from "react-cookie";

const initialState = {
  cart: CartData,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      
      let flug = false;
      let fisrt = true;


      if (state.cart.length == 0) {
        state.cart.push({
          product_id: action.value,
          product_quantity: action.quantity,
        });
        fisrt = false;
      } 
      else if (flug == false) {
        state.cart.find((ele) => {
          if (ele.product_id == action.value) {
            ele.product_quantity += action.quantity;
            flug = true;
          }
        });
      }

      if (flug == false && fisrt == true) {
        state.cart.push({
          product_id: action.value,
          product_quantity: action.quantity,
        });
      }

      // console.log(state.cart);
      // setCookie("cart_info", JSON.stringify(state.cart));

      localStorage.setItem("cart", JSON.stringify(state.cart));

      return state;
    }

    default:
      return state;
  }
};

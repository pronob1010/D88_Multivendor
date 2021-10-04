import CartData from './../../Data/cart';

const initialState = {
    cart : CartData,
}

export const cartReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_TO_CART':{
            state.cart.push(action.value);

            localStorage.setItem("cart",state.cart);
            console.log(localStorage.getItem("cart"));
            
            return state;
            
        }

        
        default:
            return state;
    }
}
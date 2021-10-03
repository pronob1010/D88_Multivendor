import { combineReducers } from "redux";
// import { userReducer } from './userreducer';
import { productReducer } from './All_Reducers/productsReducer';
import { categoryReducer } from './All_Reducers/categoryReducer';
import { cartReducer } from './All_Reducers/cartReducer';
import { PromotionalProductReducer } from "./All_Reducers/promotionalproductsReducer";


export const rootReducer = combineReducers({
    // user : userReducer, 
    productState : productReducer,
    PromotionalProductState : PromotionalProductReducer,
    categoryState : categoryReducer,
    cartState : cartReducer,
})
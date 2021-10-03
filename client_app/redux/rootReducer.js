import { combineReducers } from "redux";
// import { userReducer } from './userreducer';
import { productReducer } from './All_Reducers/productsReducer';
import { FeaturedProductReducer } from './All_Reducers/featuredproductsReducer';
import { categoryReducer } from './All_Reducers/categoryReducer';
import { cartReducer } from './All_Reducers/cartReducer';


export const rootReducer = combineReducers({
    // user : userReducer, 
    productState : productReducer,
    FeaturedProductState : FeaturedProductReducer,
    categoryState : categoryReducer,
    cartState : cartReducer,
})
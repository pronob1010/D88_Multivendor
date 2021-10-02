import { combineReducers } from "redux";
// import { userReducer } from './userreducer';
import { productReducer } from './All_Reducers/productsReducer';
import { FeaturedProductReducer } from './All_Reducers/featuredproductsReducer';


export const rootReducer = combineReducers({
    // user : userReducer, 
    productState : productReducer,
    FeaturedProductState : FeaturedProductReducer,
})
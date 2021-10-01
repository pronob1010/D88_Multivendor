import { combineReducers } from "redux";
// import { userReducer } from './userreducer';
import { productReducer } from './All_Reducers/productsReducer';


export const rootReducer = combineReducers({
    // user : userReducer, 
    productState : productReducer,
})
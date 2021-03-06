import { combineReducers } from "redux";
import userDataReducer, { userReducer} from './All_Reducers/userReducer'
import { productReducer } from './All_Reducers/productsReducer';
import { categoryReducer } from './All_Reducers/categoryReducer';
import { cartReducer } from './All_Reducers/cartReducer';
import { PromotionalProductReducer } from "./All_Reducers/promotionalproductsReducer";
import { recentReducer } from './All_Reducers/recentReducer';

// console.log(productReducer);





export const rootReducer = combineReducers({

    

    productState : productReducer,
    PromotionalProductState : PromotionalProductReducer,
    categoryState : categoryReducer,
    cartState : cartReducer,
    recentState : recentReducer,
    userReducer: userReducer,
    userDataState: userDataReducer,
    // data,

})
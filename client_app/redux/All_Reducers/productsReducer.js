import ProductsList from './../../Data/products';
import * as actionTypes from './actionTypes';

const initialState = {
    products : ProductsList,
    categories : {},
}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.PRODUCT_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state;
        }
}
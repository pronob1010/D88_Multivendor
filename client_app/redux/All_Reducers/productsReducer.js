import ProductsList from './../../Data/products';
import * as actionTypes from './actionTypes';

const initialState = {
    products : ProductsList,
    categories : {},
    vendors_product : {},
    product_data: {}
}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.PRODUCT_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case actionTypes.PRODUCT_DATA:
            return {
                ...state,
                product_data: action.payload,
            }
        case actionTypes.VENDORS_PRODUCT:
            return {
                ...state,
                vendors_product: action.payload,
            }
        default:
            return state;
        }
}
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const product_categories = (data) => {
    return {
        type: actionTypes.PRODUCT_CATEGORIES,
        payload: data
    }
}

export const productCategories = () => dispatch => {

    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    const authData = {

    }

    let authUrl = 'http://localhost:8000/api/data/categories/'
    axios.get(authUrl, authData, header)
        .then(response => {
            dispatch(product_categories(response.data))
        })
}


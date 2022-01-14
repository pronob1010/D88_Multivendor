import * as actionTypes from './actionTypes';
import axios from 'axios';

export const product_categories = (data) => {
    return {
        type: actionTypes.PRODUCT_CATEGORIES,
        payload: data
    }
}

export const product_data = (data) => {
    return {
        type: actionTypes.PRODUCT_DATA,
        payload: data
    }
}

export const vendors_product = (data) => {
    return {
        type: actionTypes.VENDORS_PRODUCT,
        payload: data
    }
}



export const productCategories = () => dispatch => {

    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    const category_data = {

    }

    let cate_url = 'http://localhost:8000/api/data/categories/'
    axios.get(cate_url, category_data, header)
        .then(response => {
            dispatch(product_categories(response.data))
        })
}


export const productData = (id) => dispatch => {

    if(id){const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    const prod_data = {
        "id":id
    }

    let prod_url = 'http://localhost:8000/api/data/allproducts/'+id+"/"
    axios.get(prod_url, prod_data, header)
        .then(response => {
            dispatch(product_data(response.data))
        })}
}

export const vendorsProduct = (userId) => dispatch => {

    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    const data = {
        "userId": userId,
    }

    let url = 'http://localhost:8000/api/data/vendors-product/';
    axios.get(url, data, header)
        .then(response => {
            let data = response.data.filter((d) =>{
                return d.seller == userId;
            });
            dispatch(vendors_product(data))
        })
}


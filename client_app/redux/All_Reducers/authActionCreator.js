import * as actionTypes from './actionTypes';
import axios from 'axios';
import jwt_decode from 'jwt-decode'


export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId
        }
    }
}


export const authFailed = errMsg => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg
    }
}


const storeLocally = (token) => {
    const decoded = jwt_decode(token)
    const expTime = decoded.exp;
    const user_id = decoded.user_id;
    localStorage.setItem("token", token);
    localStorage.setItem('userId', user_id);
    const expirationTime = new Date(expTime * 1000);
    localStorage.setItem('expirationTime', expirationTime);
    return user_id;
}

export const auth = (email, password, mode) => dispatch => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    let authUrl = null;
    if (mode === "Sign Up") {
        authUrl = "http://localhost:8000/api/auth/";
    }
    else {
        authUrl = "http://localhost:8000/api/token/";
    }

    const header = {
        headers: {
            "content-type": "application/json"
        }
    }


    axios.post(authUrl, authData, header)
        .then(response => {
            if (mode === "Sign Up") {
                return axios.post("http://localhost:8000/api/token/", authData, header)
                    .then(response => {
                        const token = response.data.access;
                        const user_id = storeLocally(token);
                        dispatch(authSuccess(token, user_id));
                        user_details();
                    }
                )

            }
            else {
                const token = response.data.access;
                const user_id = storeLocally(token);
                dispatch(authSuccess(token, user_id));
                user_details();

            }

        })
        .catch(err => {
            const key = Object.keys(err.response.data)[0]
            dispatch(authFailed(`${key.toUpperCase()}: ${err.response.data[key]}`));
        })
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logout())
    }
    else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            dispatch(logout())
        }
        else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
        }
    }
}


// async function user_details(){
//     await axios.get("http://localhost:8000/api/auth/"+1).then(()=>{
//         console.log(response);
//     })
// }
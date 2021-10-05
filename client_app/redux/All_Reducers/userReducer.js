import { user_data } from '../../Data/user_info';
import * as actionTypes from './actionTypes';


const INITIAL_STATE = {
    token: null,
    userId: null,
    authFailedMsg: null,
    user_details : user_data,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        //Auth Cases
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                authFailedMsg: null,
                token: null,
                userId: null,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload
            }
        default:
            return state;
    }
}


export default function userDataReducer(state = INITIAL_STATE, action) {

    return state;
}
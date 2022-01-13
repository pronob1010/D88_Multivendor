import ProductsIdList from './../../Data/recent_visited';

const initialState = {
    recent : ProductsIdList,
}

export const recentReducer = (state = initialState, action) => {

    switch(action.type) {
        case "ADD_TO_RECENT": {

            if(!(action.value in state.recent)){
                state.recent.push(action.value);
            }

            localStorage.setItem("recent_checked", JSON.stringify(state.recent));
            
            return state;
        }

        default:
            return state;
    }
}
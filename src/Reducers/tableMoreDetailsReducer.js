import { FETCH_MORE_ROW_DETAILS } from '../actions/types.js';

const initialState = {
    res:[],
    moreDetails: null
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_MORE_ROW_DETAILS:
            return {
                ...state,
                moreDetails: action.payload + state.moreDetails
            }
        default:
            return state;
    }
}
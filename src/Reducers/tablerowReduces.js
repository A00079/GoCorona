import { FETCH_ROWS } from '../actions/types.js';

const initialState = {
    res:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ROWS:
            console.log("Row Reducer...")
            return {
                ...state,
                response: action.payload
            }
        default:
            return state;
    }
}
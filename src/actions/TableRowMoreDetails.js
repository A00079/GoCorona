import { FETCH_MORE_ROW_DETAILS } from './types.js';

export const TableRowMoreDetails = incrementor => dispatch =>{
    dispatch({type: FETCH_MORE_ROW_DETAILS, payload: incrementor})
}
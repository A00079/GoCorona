import { FETCH_ROWS } from './types.js';

export const  fetchTableRows = () => dispatch => {
    console.log("Actions Fetching...")
    fetch('https://api.covid19india.org/data.json')
    .then(res => res.json())
    .then(data => dispatch({type: FETCH_ROWS, payload: data}))
}
import { combineReducers } from 'redux';
import tablerowReduces from './tablerowReduces.js';
import tableMoreDetailsReducer from './tableMoreDetailsReducer.js'

export default combineReducers({
    response: tablerowReduces,
    rowdetails: tableMoreDetailsReducer
});
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducers = combineReducers({
    auth: authReducer,
    product: productReducer,
});

export default rootReducers;

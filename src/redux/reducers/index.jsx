import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducers = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
});

export default rootReducers;

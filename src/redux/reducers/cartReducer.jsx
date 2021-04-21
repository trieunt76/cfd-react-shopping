import { createSlice } from '../../core';

const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
    listCart: cart?.listCart || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0,
};

const returnCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
};

const { action, reducer, TYPE } = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            let { listCart } = state;

            let index = listCart.findIndex(
                (item) => item._id === action.payload._id
            );

            if (index !== -1) {
                listCart[index].cartNum++;
            } else {
                action.payload.cartNum = 1;
                listCart.push(action.payload);
            }

            return returnCart({
                ...state,
                num: state.num + 1,
                listCart,
            });
        },
        removeCart: (state, action) => {
            let { listCart } = state;

            let index = listCart.findIndex(
                (item) => item._id === action.payload
            );

            if (index !== -1) {
                listCart.splice(index, 1);
            }

            return returnCart({
                ...state,
                num: state.num - 1,
                listCart,
            });
        },
    },
});

export default reducer;
export const addCart = action.addCart;
export const removeCart = action.removeCart;

export const CART = TYPE;

import { createSlice } from '../../core';

const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
    listCart: cart?.listCart || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0,
    shipping_option: cart?.shipping_option || 'free',
    shipping_price: cart?.shipping_price || 0,
    payment_option: cart?.payment_option || 'paypal',
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
            let { listCart, amount } = state;

            let index = listCart.findIndex(
                (item) => item._id === action.payload._id
            );

            if (index !== -1) {
                listCart[index].cartNum++;
                amount += listCart[index].real_price;
            } else {
                let item = Object.assign({}, action.payload);
                item.cartNum = 1;
                listCart.push(item);
                amount += item.real_price;
            }

            return returnCart({
                ...state,
                num: state.num + 1,
                listCart,
                amount,
            });
        },
        removeCart: (state, action) => {
            let { listCart, amount, num } = state;

            let index = listCart.findIndex(
                (item) => item._id === action.payload
            );

            if (index !== -1) {
                amount -= listCart[index].real_price * listCart[index].cartNum;
                num = num - listCart[index].cartNum;
                listCart.splice(index, 1);
            }

            return returnCart({
                ...state,
                num,
                listCart,
                amount,
            });
        },
        increment: (state, action) => {
            let { listCart, amount } = state;

            let index = listCart.findIndex(
                (item) => item._id === action.payload
            );

            if (index !== -1) {
                listCart[index].cartNum++;
                amount += listCart[index].real_price;
            }

            return returnCart({
                ...state,
                num: state.num + 1,
                listCart,
                amount,
            });
        },
        decrement: (state, action) => {
            let { listCart, amount, num } = state;

            let index = listCart.findIndex(
                (item) => item._id === action.payload
            );

            if (index !== -1 && listCart[index].cartNum > 1) {
                listCart[index].cartNum--;
                num = state.num - 1;
                amount -= listCart[index].real_price;
            } else {
                amount -= listCart[index].real_price;
                num = state.num - listCart[index].cartNum;
                listCart.splice(index, 1);
            }

            return returnCart({
                ...state,
                num,
                listCart,
                amount,
            });
        },
        cartUpdate: (state, action) => {
            return returnCart({ ...state, ...action.payload });
        },
    },
});

export default reducer;
export const addCart = action.addCart;
export const removeCart = action.removeCart;
export const incrementItemCart = action.increment;
export const decrementItemCart = action.decrement;
export const cartUpdate = action.cartUpdate;

export const CART = TYPE;

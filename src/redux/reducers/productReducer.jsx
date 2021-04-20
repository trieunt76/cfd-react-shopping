import { createSlice } from '../../core';
import { productAPI } from '../../api';

const initialState = {
    products: [],
};

export function fetchAllProduct() {
    return (dispatch) => {
        productAPI
            .getAll()
            .then((res) => dispatch({ type: TYPE.catalog, payload: res.data }));
    };
}

const { action, reducer, TYPE } = createSlice({
    name: 'product',
    initialState,
    reducers: {
        catalog: (state, action) => {
            return {
                ...state,
                products: action.payload,
            };
        },
    },
});

export default reducer;

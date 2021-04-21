import { createSlice } from '../../core';
import { productAPI } from '../../api';

const initialState = {
    products: [],
    paginate: null,
};

export function fetchAllProduct(page) {
    return (dispatch) => {
        productAPI
            .getAll(page)
            .then((res) => dispatch({ type: TYPE.catalog, payload: res }));
    };
}

const { action, reducer, TYPE } = createSlice({
    name: 'product',
    initialState,
    reducers: {
        catalog: (state, action) => {
            return {
                ...state,
                products: action.payload.data,
                paginate: action.payload.paginate,
            };
        },
    },
});

export default reducer;
export const productGetAll = action.catalog;

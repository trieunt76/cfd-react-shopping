import { createSlice } from '../../core';

const { action, reducer, TYPE } = createSlice({
    name: 'app',
    initialState,
    reducers: {},
});

export default reducer;
export const APP = TYPE;

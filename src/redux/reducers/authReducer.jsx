import { createSlice } from '../../core';

let user = JSON.parse(localStorage.getItem('login'));

const initialState = {
    isLogin: !!user,
    user,
};

/* -------------------------------------------------------------------------- */
/*                                Redux Toolkit                               */
/* -------------------------------------------------------------------------- */
let { action, reducer, TYPE } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: function (state, action) {
            let user = {
                name: 'Nguyen Tuan Trieu',
            };

            localStorage.setItem('login', JSON.stringify(user));
            return {
                ...state,
                isLogin: true,
                user,
            };
        },
        logout: function (state, action) {
            localStorage.removeItem('login');
            return {
                ...state,
                isLogin: false,
                user: null,
            };
        },
    },
});

export default reducer;
export const authLogin = action.login;
export const authLogout = action.logout;
export const AUTH = TYPE;

import { authAPI } from '../../api';
import { createSlice } from '../../core';

let user = JSON.parse(localStorage.getItem('login'));

const initialState = {
    isLogin: !!user,
    user,
    error: null,
};

export const fetchLogin = (data) => {
    return (dispatch) => {
        authAPI.login(data).then((res) => {
            if (res.error) {
                dispatch({ type: TYPE.error, payload: res.error });
            } else {
                dispatch({ type: TYPE.login, payload: res.data });
            }
        });
    };
};
/* -------------------------------------------------------------------------- */
/*                                Redux Toolkit                               */
/* -------------------------------------------------------------------------- */
let { action, reducer, TYPE } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: function (state, action) {
            let user = action.payload;
            let token = action.payload.token;

            localStorage.setItem('login', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(token));
            return {
                ...state,
                isLogin: true,
                user,
            };
        },
        logout: function (state, action) {
            localStorage.removeItem('login');
            localStorage.removeItem('token');
            return {
                ...state,
                isLogin: false,
                user: null,
            };
        },
        error: function (state, action) {
            return {
                ...state,
                error: action.payload,
            };
        },
    },
});

export default reducer;
export const authLogin = action.login;
export const authLogout = action.logout;
export const AUTH = TYPE;

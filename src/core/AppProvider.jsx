import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers =
    typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
        ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
        : compose;

let store;

/* -------------------------------------------------------------------------- */
/*                               Middeware Thunk                              */
/* -------------------------------------------------------------------------- */
const thunkMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};

const AppProvider = ({ children, reducers }) => {
    if (!store) {
        if (!reducers) reducers = () => {};
        store = createStore(
            reducers,
            composeEnhancers(applyMiddleware(thunkMiddleware))
        );
    }

    return (
        <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    );
};

export default AppProvider;

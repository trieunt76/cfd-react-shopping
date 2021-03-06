import React from 'react';
import { AppProvider, renderRouters } from './core';
import './assets/custom.css';
import routers from './routers';
import rootReducers from './redux/reducers';

const App = () => {
    return (
        <AppProvider reducers={rootReducers}>
            {renderRouters(routers)}
        </AppProvider>
    );
};

export default App;

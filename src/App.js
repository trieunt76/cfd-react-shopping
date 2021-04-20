import React from 'react';
import { AppProvider, renderRouter } from './core';
import routers from './routers';

const App = () => {
    return (
        <AppProvider reducers={rootReducers}>
            {renderRouter(routers)}
        </AppProvider>
    );
};

export default App;

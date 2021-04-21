import React from 'react';
import { Footer, Header, ModalCart } from '../components';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <ModalCart />
        </>
    );
};

export default MainLayout;

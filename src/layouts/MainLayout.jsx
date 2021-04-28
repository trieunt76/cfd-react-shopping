import React, { useRef } from 'react';
import { Footer, Header, ModalCart, ModalSizeChart } from '../components';

const MainLayout = ({ children }) => {
    let modalSizeChartRef = useRef();
    return (
        <>
            <Header />
            {children}
            <Footer modalSizeChartRef={modalSizeChartRef} />
            <ModalCart />
            <ModalSizeChart ref={modalSizeChartRef} />
        </>
    );
};

export default MainLayout;

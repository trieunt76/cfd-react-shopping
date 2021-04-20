import React from 'react';
import { Features } from '../../components';
import { Banner, Brand, Pick, Review, TopSell } from './components';

const Home = () => {
    return (
        <>
            <Banner />
            <Features />
            <Pick />
            <TopSell />
            <Review />
            <Brand />
        </>
    );
};

export default Home;

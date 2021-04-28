import React from 'react';
import { Features } from '../../components';
import { WithCountdown } from '../../hoc';
import { Banner, Brand, CountDown, Pick, Review, TopSell } from './components';

const Home = () => {
    return (
        <>
            <Banner />
            <Features />
            <Pick />
            <TopSell />
            <WithCountdown
                WrapperComponent={CountDown}
                initialValue={(1 * 24 + 5) * 60 * 60 + 1800}
            />
            <Review />
            <Brand />
        </>
    );
};

export default Home;

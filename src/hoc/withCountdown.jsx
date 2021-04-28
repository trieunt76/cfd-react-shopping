import React, { useState, useEffect } from 'react';

const WithCountdown = ({ WrapperComponent, initialValue }) => {
    let [time, setTime] = useState(initialValue);

    let day = parseInt(time / 60 / 60 / 24);
    let hours = parseInt(time / 60 / 60 - day * 24);
    let minute = parseInt(time / 60 - (day * 24 + hours) * 60);
    let seconds = time % 60;

    useEffect(() => {
        let timeInterval = setInterval(() => {
            if (time === 0) return clearInterval(timeInterval);

            setTime(--time);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let value = {
        day,
        hours,
        minute,
        seconds,
    };

    return <WrapperComponent {...value} />;
};

export default WithCountdown;

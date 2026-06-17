import { useEffect, useState } from 'react';

export const useTimer = () => {
    const getTimeLeft = () => {
        const now = new Date();

        const tomorrow = new Date();

        tomorrow.setHours(24, 0, 0, 0);

        const difference = tomorrow.getTime() - now.getTime();

        const hours = Math.floor(difference / (1000 * 60 * 60));

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60)) / 1000
        );

        return {
            hours,
            minutes,
            seconds,
        };
    };

    const [time, setTime] = useState(getTimeLeft());

    useEffect(() => {

        const interval = setInterval(() => {

            setTime(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
};
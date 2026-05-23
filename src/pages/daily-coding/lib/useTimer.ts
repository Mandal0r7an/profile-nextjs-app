import { useEffect, useState } from 'react';

export const useTimer = (initialTime: number) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (time <= 0) return;

        const timer = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
        hours,
        minutes,
        seconds
    };
};
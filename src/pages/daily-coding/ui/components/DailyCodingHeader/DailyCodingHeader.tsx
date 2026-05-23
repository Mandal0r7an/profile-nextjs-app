import { useTimer } from "../../../lib/useTimer";

export const DailyCodingHeader = () => {
    const { hours, minutes, seconds } = useTimer(86400); // 24-hour timer

    return (
        <div>
            <h1>Daily Coding</h1>
            <p>
                Ежедневные задачи от ведущих компаний помогут вам 
                улучшить навыки программирования и подготовиться к реальным собеседованиям. 
                Каждый день — новый набор из 10 задач разной сложности.
            </p>
            <p>
                Обновится через: {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>
        </div>
    );
};
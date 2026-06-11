import { useTimer } from "../../../lib/useTimer";
import styles  from "../DailyCodingHeader/DailyCodingHeader.module.css";
import { ReactComponent as Clock } from '@/shared/ui/assets/icons/search/Clock.svg';

export const DailyCodingHeader = () => {
    const { hours, minutes, seconds } = useTimer();

    return (
        <div className={styles.container}>
            <div>

            <h1 className={styles.h1}>
                Daily Coding
            </h1>

            <p className={styles.text}>
                Ежедневные задачи от ведущих компаний помогут вам 
                улучшить навыки программирования и подготовиться к реальным собеседованиям. 
                Каждый день — новый набор из 10 задач разной сложности.
            </p>
            <p className={styles.time}>
                <Clock className={styles.Icon} />
                Обновится через:  
                
                {String(hours).padStart(2, '0')}:

                {String(minutes).padStart(2, '0')}:

                {String(seconds).padStart(2, '0')}
            </p>
            </div>
        </div>
    );
};
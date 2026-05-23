import styles from "./Personality.module.css";
import { ReactComponent as AboutMeIcon } from '@/shared/ui/assets/icons/AboutMe.svg';
import { ReactComponent as StatisticIcon } from '@/shared/ui/assets/icons/Statistic.svg';

export const Personality = () => {
    return (
        <div>
       <div className={styles.Personality}>
            <h1 className={styles.h1}>
                <label className={styles.label}>
                   <AboutMeIcon className={styles.icon} />
                    <span>О себе</span>
                </label>
            </h1>
            <textarea className={styles.AboutMe} placeholder="Расскажите о себе..."></textarea>
        </div>

        <h1 className={styles.h1}>
            <label className={styles.label}>
                <StatisticIcon className={styles.icon} />
                <span>Статистика</span>
            </label>
        </h1>
        </div>
    );
} 
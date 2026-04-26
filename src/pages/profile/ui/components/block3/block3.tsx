import styles from "./block3.module.css";
import { ReactComponent as LevelIcon } from '../../../../../shared/ui/assets/icons/Level.svg';

export const Block3 = () => {
    return (
        <div className={styles.block}>
            <h1 className={styles.h1}>
                <label className={styles.label}>
                    <LevelIcon className={styles.icon} />
                    <span>lvl-уровень</span>
                </label>
            </h1>
            <div className={styles.block3}>
                <div className={styles.text}>
                    <h1 className={styles.pLevel}>Текущий уровень: 1</h1>
                    <p className={styles.pLevel}>Решайте задачи и повышайте свой уровень!</p>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${50}%` }}></div>  
                </div>
                <p className={styles.progressText}>5/10 задач до следующего уровня</p>
            </div>
        </div>
    );
} 
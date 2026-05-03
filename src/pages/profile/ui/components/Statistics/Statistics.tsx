import styles from "./Statistics.module.css";


export const Statistics = () => {
    return (
        <div className={styles.Statistics}>
            <div className={styles.statisticItem}>
                <p className={styles.statisticLabel}>Решенных задач</p>
                <p className={styles.statisticValue}>15</p>
            </div>
            <div className={styles.statisticItem}>
                <p className={styles.statisticLabel}>Собеседований</p>
                <p className={styles.statisticValue}>4</p>
            </div>
            <div className={styles.statisticItem}>
                <p className={styles.statisticLabel}>Дней подряд</p>
                <p className={styles.statisticValue}>30</p>
            </div> 
        </div>
    );
} 
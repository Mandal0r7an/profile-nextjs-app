import styles from './SelectedCompanies.module.css';

export const SelectedCompanies = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Выбрано:</p>

            <div className={styles.tags}>
                <button className={styles.tag}>
                    Озон
                    <span className={styles.close}>×</span>
                </button>
            </div>
        </div>
    );
};
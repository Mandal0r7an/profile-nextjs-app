import styles from "./block2.module.css";
import { ReactComponent as GiftIcon } from '../../../../../shared/ui/assets/icons/Gift.svg';

export const Block2 = () => {
    return (
        <div className={styles.block}>
            <h1 className={styles.h1}>
            <label className={styles.label}>
                <GiftIcon className={styles.icon} />
                <span>Подписка</span>
            </label>
            </h1>
            <div className={styles.block2}>
                <div className={styles.text}>
                    <h1 className={styles.pSubmit}>Нет активной подписки</h1>
                    <p className={styles.pSubmit}>Оформите подписку для доступа ко всем функциям</p>
                </div>    
                <button className={`${styles.button} ${styles.subscribeButton}`}>
                    Оформить
                </button>
            </div>
        </div>
    );
} 
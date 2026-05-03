import styles from "./Subscription.module.css";
import { ReactComponent as GiftIcon } from '../../../../../shared/ui/assets/icons/Gift.svg';

export const Subscription = () => {
    return (
        <div className={styles.block}>
            <h1 className={styles.h1}>
            <label className={styles.label}>
                <GiftIcon className={styles.icon} />
                <span>Подписка</span>
            </label>
            </h1>
            <div className={styles.Subscription}>
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
import styles from "./Links.module.css";
import { ReactComponent as LinkIcon } from '@/shared/ui/assets/icons/profile/Link.svg';

export const Links = () => {
    return (
        <div>
            <h1 className={styles.h1}>
                <label className={styles.label}>
                    <LinkIcon className={styles.icon} />
                    <span>Ссылки</span>
                </label>
            </h1>
                <div className={styles.Links}>
                    <div className={styles.links}>
                        <div className={styles.linkItem}>
                        <input className={styles.linkInput} value="varhalameyko.ru" readOnly></input>
                        <button type="button" className={styles.remove}>✖</button>
                        </div>

                        <div className={styles.linkItem}>
                        <input className={styles.linkInput} value="my-portfolio.com" readOnly></input>
                        <button type="button" className={styles.remove}>✖</button>
                        </div>
                        <button type="button" className={styles.addLink}>+ Добавить сайт</button>
                    </div>
                </div>

                <div className={styles.btnSave}>
                <div className={styles.btn}>
                    <button className={`${styles.button} ${styles.saveButton}`}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
} 
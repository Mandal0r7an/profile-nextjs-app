import styles from './EntrancePage.module.css';
import { ReactComponent as Telegram } from '@/shared/ui/assets/icons/entrance/Telegram.svg';
import { ReactComponent as Github } from '@/shared/ui/assets/icons/entrance/Github.svg';


export const EntrancePage = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.container}>

                <h1 className={styles.h1}>
                    CODE GYM
                </h1>

                <p className={styles.text}>
                    Войдите, чтобы получить доступ
                    к задачам от ведущих компаний
                    и прокачать свои навыки программирования
                </p>

                <button className={styles.button}>
                    <Telegram className={styles.Icon} />
                    Войти через Telegram
                </button>

                <button className={styles.button2}>
                    <Github className={styles.Icon} />
                    Войти через GitHub
                </button>

                <p className={styles.text2}>
                    Нажимая на кнопку входа,
                    вы соглашаетесь с пользовательским соглашением
                    и политикой конфиденциальности
                </p>

            </div>

        </div>
    );
};
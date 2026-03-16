import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerpart1}>
                <div className={styles.logoandtextru}>
                    <div className={styles.logo}>CODE GYM</div>
                    <div className={styles.textru}>
                        <p className={styles.text}>
                            Платформа для подготовки разработчиков к техническим<br /> 
                            собеседованиям и улучшения алгоритмических навыков.
                        </p>
                    </div>
                </div>    
                <div className={styles.navandtext}>
                    <nav className={styles.nav}>
                        <p href="#" className={styles.plink}>Основное</p>
                        <a href="#" className={styles.link}>Задачи</a>
                        <a href="#" className={styles.link}>Вопросы с собеседований</a>
                        <a href="#" className={styles.link}>Daily Coding</a>
                    </nav>
                </div>
            </div>
            <div className={styles.footerpart2}>
                <nav className={styles.nav2}>
                        <p href="#" className={styles.p2link}>@2025 CODE GYM. Все права защищены.</p>
                        <a href="#" className={styles.link2}>Политика конфиденциальности</a>
                        <a href="#" className={styles.link2_2}>Пользовательское соглашение</a>
                </nav>
            </div>
            <div className={styles.footerpart3}>
                <p href="#" className={styles.p3link}>
                    Есть вопросы или предложения? Мы всегда готовы помочь!
                </p>
                <button className={`${styles.button} ${styles.QuestButton}`}>
                    Обратиться в поддержку
                </button>
            </div>
        </footer>
    )
}

export default Footer;
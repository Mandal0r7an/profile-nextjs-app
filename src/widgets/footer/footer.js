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
        </footer>
    )
}

export default Footer;
import { NavLink } from 'react-router-dom';
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
                        <a href="#" className={styles.plink}>Основное</a>
                        <NavLink 
                        to="/tasks" 
                        className={({ isActive }) => 
                            isActive ? styles.activeLink : styles.link}>
                        Задачи
                        </NavLink>
                        <NavLink 
                        to="/questions" 
                        className={({ isActive }) => 
                            isActive ? styles.activeLink : styles.link}>
                        Вопросы с собеседований
                        </NavLink>
                        <NavLink 
                        to="/daily-coding" 
                        className={({ isActive }) => 
                            isActive ? styles.activeLink : styles.link}>
                        Daily Coding
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className={styles.footerpart2}>
                <nav className={styles.nav2}>
                        <a href="#" className={styles.p2link}>@2025 CODE GYM. Все права защищены.</a>
                        <a href="#" className={styles.link2}>Политика конфиденциальности</a>
                        <a href="#" className={styles.link2_2}>Пользовательское соглашение</a>
                </nav>
            </div>
            <div className={styles.footerpart3}>
                <a href="#" className={styles.p3link}>
                    Есть вопросы или предложения? Мы всегда готовы помочь!
                </a>
                <button className={`${styles.button} ${styles.QuestButton}`}>
                    Обратиться в поддержку
                </button>
            </div>
        </footer>
    )
}

export default Footer;
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className ={styles.header}>
            <NavLink 
                to="/general" 
                className={styles.logo}>
                CODE GYM
            </NavLink>
                <nav className={styles.nav}>
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
            <div className={styles.buttons}>
            <NavLink
                to="/entrance"
                className={({ isActive }) =>
                    isActive ? styles.button : styles.loginButton}>
            <button className={`${styles.button} ${styles.loginButton}`}>
                Вход
            </button>
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    isActive ? styles.button : styles.registerButton}>
            <button className={`${styles.button} ${styles.registerButton}`}>
                Регистрация
            </button>
            </NavLink>

            </div>
        </header>
  );
}

export default Header;
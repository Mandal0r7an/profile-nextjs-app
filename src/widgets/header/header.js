import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className ={styles.header}>
            <div className={styles.logo}>CODE GYM</div>
                <nav className={styles.nav}>
                    <a href="#" className={styles.link}>Задачи</a>
                    <Link to="/questions" className={styles.link}>
                    Вопросы с собеседований
                    </Link>
                    <a href="#" className={styles.link}>Daily Coding</a>
                </nav>
            <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.loginButton}`}>
                Вход
            </button>

            <button className={`${styles.button} ${styles.registerButton}`}>
                Регистрация
            </button>
            </div>
        </header>
  );
}

export default Header;
import styles from "./NotFoundPage.module.css";
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '@/shared/ui/assets/icons/not-found/Home.svg';

export const NotFoundPage = () => {
    return (
        <div className={styles.container}>

            <h1 className={styles.code}>
                404
            </h1>

            <p className={styles.message}>
                Cтраница не найдена, но найдена ошибка в коде!
            </p>

            <div className={styles.codeBlock}>
            <pre>
                {`1   function findPage(url) { 
2   const pages = ['home', 'tasks', 'profile', 'leaderboard'];
3   let pageFound = false;
4   // Ищем страницу в массиве
5   for (let i=0; i <= pages.length; i++) {
6   if (pages[i] === url) {
7   }
8   }
9   return pageFound;
10  }`}
            </pre>
            </div>

           

            <div className={styles.variant}>
                
                <h2>
                    Какая ошибка в коде?
                </h2>

                <div className={styles.answers}>

                    <div className={styles.answer}>
                        <p className={styles.text}>
                            Нужен break после
                            pageFound = true
                        </p>
                    </div>

                    <div className={styles.answer}>
                        <p className={styles.text}>
                            i = 1 вместо i = 0 
                        </p>
                    </div>

                    <div className={styles.answer}>
                        <p className={styles.text}>
                            i  pages. length 
                            вместо i = 
                            pages.length 
                        </p>
                    </div>

                </div>
                
                <Link to="/general" className={styles.link}>
                    <button className={styles.back}>
                        <Home className={styles.Icon} />
                        На главную
                    </button>
                </Link>

            </div>
        </div>
    );
}
import styles from './MobileNavigation.module.css'
import {NavLink} from 'react-router-dom'
import { ReactComponent as Tasks } from '@/shared/ui/assets/icons/mobile/Tasks.svg';
import { ReactComponent as Theory } from '@/shared/ui/assets/icons/mobile/Theory.svg';
import { ReactComponent as Daily } from '@/shared/ui/assets/icons/mobile/Daily.svg';
import { ReactComponent as Profile } from '@/shared/ui/assets/icons/mobile/Profile.svg';

export const MobileNavigation = () => {
    return (
        <nav className={styles.mobileNav}>

            <NavLink 
                to='/tasks'
                className={styles.link}
            >
                <Tasks className={styles.icon} />

                <span className={styles.text}>
                    Задачи
                </span>
            </NavLink>

            <NavLink 
                to='/general'
                className={styles.link}
            >
                <Theory className={styles.icon} />

                <span className={styles.text}>
                    Теория
                </span>
            </NavLink>

            <NavLink 
                to='/daily-coding'
                className={styles.link}
            >
                <Daily className={styles.icon} />

                <span className={styles.text}>
                    Daily
                </span>
            </NavLink>

            <NavLink 
                to='/profile'
                className={styles.link}
            >
                <Profile className={styles.icon} />

                <span className={styles.text}>
                    Профиль
                </span>
            </NavLink>
        

        </nav>
    )
}
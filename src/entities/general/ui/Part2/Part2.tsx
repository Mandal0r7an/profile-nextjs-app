import styles from './Part2.module.css';
import { ReactComponent as GeneraPart2_1 } from '@/shared/ui/assets/icons/general/GeneralPart2_1.svg';
import { ReactComponent as GeneraPart2_2 } from '@/shared/ui/assets/icons/general/GeneralPart2_2.svg';
import { ReactComponent as GeneraPart2_3 } from '@/shared/ui/assets/icons/general/GeneralPart2_3.svg';

export const Part2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.h2}>Все необходимое для успешной подготовки</h2>

                <p className={styles.p}>
                    Наша платформа предоставляет полный набор инструментов для всесторонней подготовки к техническим
                    собеседованиям и развития навыков программирования.
                </p>
            </div>

            <div className={styles.content}>

                <div className={styles.item}>
                    
                    <GeneraPart2_1 className={styles.generalimage2} />
                    <h3 className={styles.h3}>Библиотека задач</h3>
                    <p className={styles.p}>
                        Более 300 задач разного уровня сложности. Решайте, проверяйте и улучшайте свои навыки программирования.
                    </p>
                </div>

                <div className={styles.item}>
                    <GeneraPart2_2 className={styles.generalimage2} />
                    <h3 className={styles.h3}>Отслеживание прогресса</h3>
                    <p className={styles.p}>
                        Анализируйте свои результаты, отслеживайте время решения и сравнивайте с другими разработчиками.
                    </p>
                </div>

                <div className={styles.item}>
                    <GeneraPart2_3 className={styles.generalimage2} />
                    <h3 className={styles.h3}>Тренажер собеседований</h3>
                    <p className={styles.p}>
                        Готовьтесь к техническим интервью с реальными вопросами от ведущих IT-компаний.
                    </p>
                </div>
            </div>
                
        </div>
    );
} 
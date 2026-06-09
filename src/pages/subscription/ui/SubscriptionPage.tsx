import styles from './SubscriptionPage.module.css';

import { ReactComponent as Ok } from '@/shared/ui/assets/icons/subscription/Ok.svg';
import { ReactComponent as Star } from '@/shared/ui/assets/icons/subscription/Star.svg';

export const SubscriptionPage = () => {
    return (
        <div className={styles.container}>

            <h1 className={styles.plan}>
                Выберите подходящий план
            </h1>

            <h2 className={styles.h2}>
                Начните с бесплатного плана или получите полный доступ ко всем функциям
            </h2>

            <div className={styles.minicontainer}>

                <div className={styles.switch}>

                    <button className={styles.activeButton}>
                        Месячный
                    </button>

                    <button className={styles.button}>
                        Годовой
                    </button>

                </div>

                <p className={styles.pblue}>
                    Сэкономьте 25% при годовой подписке
                </p>

                <div className={styles.plans}>

                    <div className={styles.planCard}>

                        <h2 className={styles.planTitle}>
                            Базовый
                        </h2>

                        <h3 className={styles.planSubtitle}>
                            Изучайте основы и практикуйтесь
                            с доступом к базовым материалам
                        </h3>

                        <h1 className={styles.cost}>
                            Бесплатно
                        </h1>

                        <p className={styles.planPrice}>
                            Карта не требуется
                        </p>

                        <button className={styles.selectButton}>
                            Начать бесплатно
                        </button>

                        <p className={styles.featuresTitle}>
                            Включено в бесплатный план:
                        </p>

                        <ul className={styles.features}>

                            <li className={styles.featureItem}>
                                <Ok className={styles.Icon} />
                                База знаний по вопросам
                            </li>

                            <li className={styles.featureItem}>
                                <Ok className={styles.Icon} />
                                База знаний по задачам
                            </li>

                            <li className={styles.featureItem}>
                                <Ok className={styles.Icon} />
                                Глобальный поиск вопросов
                            </li>

                            <li className={styles.featureItem}>
                                <Ok className={styles.Icon} />
                                Базовый разбор задачи
                            </li>

                        </ul>

                    </div>

                    {/* PRO ПЛАН */}

                    <div className={styles.planCard}>

                        <h2 className={styles.planTitle}>
                            Профессиональный
                        </h2>

                        <h3 className={styles.planSubtitle}>
                            Разблокируйте полный потенциал
                            с расширенными инструментами
                        </h3>

                        <h1 className={styles.cost}>
                            1190 ₽
                        </h1>

                        <p className={styles.planPrice}>
                            В месяц или 10710 ₽ в год
                            (экономия 25%)
                        </p>

                        <button className={styles.selectButton}>
                            Начать бесплатно
                        </button>

                        <p className={styles.featuresTitle}>
                            Все из базового плана, плюс:
                        </p>

                        <ul className={styles.features}>

                            <li className={styles.featureItem}>
                                <Star className={styles.Icon} />
                                Фильтры по задачам
                                и теории по компаниям
                            </li>

                            <li className={styles.featureItem}>
                                <Star className={styles.Icon} />
                                Продвинутый разбор задач
                            </li>

                            <li className={styles.featureItem}>
                                <Star className={styles.Icon} />
                                Просмотр решений задач
                                без предварительного выполнения
                            </li>

                            <li className={styles.featureItem}>
                                <Star className={styles.Icon} />
                                Задачи и вопросы по компаниям
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
    );
};
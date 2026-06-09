import styles from './Part3.module.css';

export const Part3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.h1}>Осваивайте ключевые технологии</h1>

                <p className={styles.p}>
                    Мы собрали все востребованные технологии, чтобы вы могли построить свою карьеру в IT. Выберите 
                    интересующее направление и начните свой путь в программировании.
                </p>
            </div>

            <div className={styles.content}>

            
                <div className={styles.item}>

                    <div className={styles.topLine}></div>

                    <div className={styles.cardContent}>
                    <h2 className={styles.h2}>Frontend-разработка</h2>

                    <p className={styles.p}>
                        Создавайте современные интерфейсы и интерактивные веб приложения. 
                        Станьте экспертом в области пользовательских интерфейсов и улучшайте опыт взаимодействия пользователей.
                    </p>

                    <div className={styles.tags}>
                        <span className={styles.tag}>JavaScript</span>
                        <span className={styles.tag}>TypeScript</span>
                        <span className={styles.tag}>HTML/CSS</span>
                        <span className={styles.tag}>Next.js</span>
                        <span className={styles.tag}>React</span>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.stats}>
                        
                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>150+</h3>
                            <p className={styles.statLabel}>Задач</p>
                        </div>

                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>100+</h3>
                            <p className={styles.statLabel}>Вопросов</p>
                        </div>
                    </div>
                    </div>
                        
                        <button className={styles.button}>
                            Перейти
                        </button>

                </div>

                <div className={styles.item}>

                    <div className={styles.topLine2}></div>

                    <div className={styles.cardContent}>
                    <h2 className={styles.h2}>Backend-разработка</h2>

                    <p className={styles.p}>
                        Создавайте серверную логику и API для веб-сервисов и приложений. 
                        Изучайте построение эффективных бэкенд-систем и баз данных. 
                        Развивайте навыки масштабирования и оптимизации кода.
                    </p>

                    <div className={styles.tags}>
                        <span className={styles.tag}>Python</span>
                        <span className={styles.tag}>Kafka</span>
                        <span className={styles.tag}>PostgreSQL</span>
                        <span className={styles.tag}>RabbitMQ</span>
                        <span className={styles.tag}>Docker</span>
                        <span className={styles.tag}>Redis</span>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.stats}>
                        
                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>200+</h3>
                            <p className={styles.statLabel}>Задач</p>
                        </div>

                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>100+</h3>
                            <p className={styles.statLabel}>Вопросов</p>
                        </div>
                    </div>
                    </div>
                    
                        <button className={styles.button2}>
                            Перейти
                        </button>

                </div>

            </div>
                
        </div>
    );
} 
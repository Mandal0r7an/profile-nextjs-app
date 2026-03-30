import { useGetUserQuery} from "../../entities/user/api/userApi";
import styles from './ProfilePage.module.css';

function ProfilePage() {
    const { data, isLoading, error} = useGetUserQuery();

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка</p>

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.h1}>Профиль</h1>
                <div className={styles.block}>
                    <div className={styles.profileTop}>
                        <div className={styles.avatar}></div>

                            <div className={styles.form}>
                                <div className={styles.inputGroup}>
                                <label>Фамилия и имя</label>
                                <input value={data.name} readOnly />
                                </div>

                                <div className={styles.inputGroup}>
                                <label>Почта</label>
                                <input value={data.email} readOnly />
                                </div>

                                <div className={styles.inputGroup}>
                                <label>Telegram</label>
                                <input value={data.username} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={styles.right}>
                <div className={styles.tips}>
                    <h3 className={styles.tipsTitle}>Подсказки</h3>
                    <div className={styles.tip}>
                        <h4 className={styles.h4}>Рекомендации по профилю</h4>
                        <ul className={styles.List}>
                            <li>Заполните все поля профиля, чтобы получить максимальную пользу от платформы</li>
                            <li>Укажите реальные навыки для получения персонализированных рекомендаций</li>
                        </ul>
                    </div>
                    <div className={styles.tip}>
                        <h4 className={styles.h4}>Повышение уровня</h4>
                        <ul className={styles.List}>
                            <li>Чтобы повысить уровень, вам необходимо решать задачи. За каждую решенную задачу вы получаете баллы:</li>
                        </ul>
                    </div>
                    <div className={styles.tip}>
                        <p className={styles.p1}>
                            Простые задачи: 1 балл
                        </p>
                        <p className={styles.p1}>
                            Средние задачи: 3 балла
                        </p>
                        <p className={styles.p1}>
                            Сложные задачи: 5 баллов
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
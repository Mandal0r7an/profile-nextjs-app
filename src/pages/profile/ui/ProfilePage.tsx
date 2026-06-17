import { useGetUserQuery } from "@/entities/user/api/userApi";
import styles from './ProfilePage.module.css';
import { ProfileForm } from "@/entities/user"; 
import { Subscription } from "@/entities/user";
import { LevelUp } from "@/entities/user";
import { GandS } from "@/entities/user";
import { Skills } from "@/entities/user";
import { Personality } from "@/entities/user";
import { Statistics } from "@/entities/user";
import { Links } from "@/entities/user";
import { useProfile } from "@/entities/user/model/useProfile";
import { grades, specialties } from "@/entities/user/model/useGrade";
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";

function ProfilePage() {
    const { user, isLoading, error, progress, skills } = useProfile();

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <NotFoundPage />
    if (!user) return null;

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <ProfileForm user={user} />
                <Subscription />
                <LevelUp />
                <GandS grades={grades} specializations={specialties} />
                <Skills skills={skills} />
                <Personality />
                <Statistics />
                <Links />
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
                        <p className={styles.p1}>Простые задачи: 1 балл</p>
                        <p className={styles.p1}>Средние задачи: 3 балла</p>
                        <p className={styles.p1}>Сложные задачи: 5 баллов</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
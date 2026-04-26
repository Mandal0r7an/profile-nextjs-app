import { useGetUserQuery } from "../../../entities/user/api/userApi";
import styles from './ProfilePage.module.css';
import { ReactComponent as AboutMeIcon } from '../../../shared/ui/assets/icons/AboutMe.svg';
import { ReactComponent as StatisticIcon } from '../../../shared/ui/assets/icons/Statistic.svg';
import { ReactComponent as LinkIcon } from '../../../shared/ui/assets/icons/Link.svg';
import { isDate } from "node:util/types";
import { Block1 } from "./components/block1/block1"; 
import { Block2 } from "./components/block2/block2";
import { Block3 } from "./components/block3/block3";
import { Block4 } from "./components/block4/block4";
import { Block5 } from "./components/block5/block5";

function ProfilePage() {
    const { data, isLoading, error} = useGetUserQuery();

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка</p>
    if (!data) return null;

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Block1 user={data} />
                <Block2 />
                <Block3 />
                <Block4 />
                <Block5 />

                <div className={styles.block6}>
                    <h1 className={styles.h1}>
                        <label className={styles.label}>
                            <AboutMeIcon className={styles.icon} />
                            <span>О себе</span>
                        </label>
                    </h1>
                    <textarea className={styles.AboutMe} placeholder="Расскажите о себе..."></textarea>
                </div>

                <h1 className={styles.h1}>
                    <label className={styles.label}>
                        <StatisticIcon className={styles.icon} />
                        <span>Статистика</span>
                    </label>
                </h1>
                <div className={styles.block7}>
                    <div className={styles.statisticItem}>
                        <p className={styles.statisticLabel}>Решенных задач</p>
                        <p className={styles.statisticValue}>15</p>
                    </div>
                    <div className={styles.statisticItem}>
                        <p className={styles.statisticLabel}>Собеседований</p>
                        <p className={styles.statisticValue}>4</p>
                    </div>
                    <div className={styles.statisticItem}>
                        <p className={styles.statisticLabel}>Дней подряд</p>
                        <p className={styles.statisticValue}>30</p>
                    </div> 
                </div>

                <h1 className={styles.h1}>
                    <label className={styles.label}>
                        <LinkIcon className={styles.icon} />
                        <span>Ссылки</span>
                    </label>
                </h1>
                <div className={styles.block8}>
                    <div className={styles.links}>
                        <div className={styles.linkItem}>
                        <input className={styles.linkInput} value="varhalameyko.ru" readOnly></input>
                        <button type="button" className={styles.remove}>✖</button>
                        </div>

                        <div className={styles.linkItem}>
                        <input className={styles.linkInput} value="my-portfolio.com" readOnly></input>
                        <button type="button" className={styles.remove}>✖</button>
                        </div>
                        <button type="button" className={styles.addLink}>+ Добавить сайт</button>
                    </div>
                </div>

                <div className={styles.btnSave}>
                <div className={styles.btn}>
                    <button className={`${styles.button} ${styles.saveButton}`}>
                        Сохранить
                    </button>
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
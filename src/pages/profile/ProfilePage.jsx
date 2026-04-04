import { useGetUserQuery} from "../../entities/user/api/userApi";
import styles from './ProfilePage.module.css';
import { ReactComponent as UserIcon } from '../../assets/icons/User.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/Mail.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/Telegram.svg';
import { ReactComponent as GiftIcon } from '../../assets/icons/Gift.svg';
import { ReactComponent as AvatarIcon } from '../../assets/icons/Avatar.svg';
import { ReactComponent as LevelIcon } from '../../assets/icons/Level.svg';
import { ReactComponent as GradeIcon } from '../../assets/icons/Grade.svg';
import { ReactComponent as SpecializationIcon } from '../../assets/icons/Specialization.svg';
import { ReactComponent as SkillsIcon } from '../../assets/icons/Skills.svg';
import { ReactComponent as AboutMeIcon } from '../../assets/icons/AboutMe.svg';
import { ReactComponent as StatisticIcon } from '../../assets/icons/Statistic.svg';
import { ReactComponent as LinkIcon } from '../../assets/icons/Link.svg';

function ProfilePage() {
    const { data, isLoading, error} = useGetUserQuery();

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка</p>

    return (
        <div className={styles.container}>
            <div className={styles.left}>

                <h1 className={styles.h1}>Профиль</h1>

                <div className={styles.block1}>
                    <div className={styles.profileTop}>

                        <div className={styles.avatar}>
                            <AvatarIcon className={styles.avatarIcon} />
                        </div>

                        <div className={styles.form}>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <UserIcon className={styles.icon} />
                                    <span className={styles.textProfile}>Фамилия и имя</span>
                                </label>
                                <input value={data.name} readOnly />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <MailIcon className={styles.icon} />
                                    <span className={styles.textProfile}>Почта</span>
                                </label>
                                <input value={data.email} readOnly />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <TelegramIcon className={styles.icon} />
                                    <span className={styles.textProfile}>Telegram:</span>
                                    <div className={styles.usernamecontainer}>
                                        <span className={styles.username}>@{data.username}</span>
                                    </div>
                                </label>
                            </div>
                        </div>      
                    </div>
                </div>
                
                <h1 className={styles.h1}>
                    <label className={styles.label}>
                        <GiftIcon className={styles.icon} />
                        <span>Подписка</span>
                    </label>
                </h1>
                <div className={styles.block2}>
                    <div className={styles.text}>
                        <h1 className={styles.pSubmit}>Нет активной подписки</h1>
                        <p className={styles.pSubmit}>Оформите подписку для доступа ко всем функциям</p>
                    </div>    
                    <button className={`${styles.button} ${styles.subscribeButton}`}>
                        Оформить
                    </button>
                </div>

                <h1 className={styles.h1}>
                    <label className={styles.label}>
                        <LevelIcon className={styles.icon} />
                        <span>lvl-уровень</span>
                    </label>
                </h1>
                <div className={styles.block3}>
                    <div className={styles.text}>
                        <h1 className={styles.pLevel}>Текущий уровень: 1</h1>
                        <p className={styles.pLevel}>Решайте задачи и повышайте свой уровень!</p>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill}
                        style={{ width: `${50}%` }}></div>  
                    </div>
                    <p className={styles.progressText}>5/10 задач до следующего уровня</p>
                </div>

                <div className={styles.block4}>
                    <div>
                        <h1 className={styles.h1}>
                        <label className={styles.label}>
                            <GradeIcon className={styles.icon} />
                            <span>Грейд</span>
                        </label>
                        </h1>

                        <div className={styles.selectContainer}>
                            <select className={styles.select}>
                                <option>Junior</option>
                                <option>Middle</option>
                                <option>Senior</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h1 className={styles.h1}>
                        <label className={styles.label}>
                            <SpecializationIcon className={styles.icon} />
                            <span>Специализация</span>
                        </label>
                        </h1>

                        <div className={styles.selectContainer}>
                            <select className={styles.select}>
                                <option>BackEnd</option>
                                <option>FrontEnd</option>
                                <option>FullStack</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles.block5}>
                    <div className={styles.skillsHeader}>
                        <h1 className={styles.h1}>
                        <label className={styles.label}>
                            <SkillsIcon className={styles.icon} />
                            <span>Навыки</span>
                        </label>
                        </h1>
                    </div>
                    <div className={styles.skillsContainer}>
                        <div className={styles.leftBlock5}>
                            <div>
                                <p className={styles.skill}>Python 80%</p>
                                <div className={styles.progressBarBlock5}>
                                    <div className={styles.progressFill} style={{ width: `${80}%` }}></div>  
                                </div>
                            </div>
                            <div>
                                <p className={styles.skill}>Next.js 65%</p>
                                <div className={styles.progressBarBlock5}>
                                    <div className={styles.progressFill} style={{ width: `${65}%` }}></div>  
                                </div>
                            </div>

                        </div>
                        <div className={styles.rightBlock5}>
                            <div>
                                <p className={styles.skill}>TypeScript 30%</p>
                                <div className={styles.progressBarBlock5}>
                                    <div className={styles.progressFill} style={{ width: `${30}%` }}></div>  
                                </div>
                            </div>
                            <div>
                                <p className={styles.skill}>JavaScript 15%</p>
                                <div className={styles.progressBarBlock5}>
                                    <div className={styles.progressFill} style={{ width: `${15}%` }}></div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                        <button className={styles.remove}>✖</button>
                        </div>

                        <div className={styles.linkItem}>
                        <input className={styles.linkInput} value="my-portfolio.com" readOnly></input>
                        <button className={styles.remove}>✖</button>
                        </div>
                        <button className={styles.addLink}>+ Добавить сайт</button>
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
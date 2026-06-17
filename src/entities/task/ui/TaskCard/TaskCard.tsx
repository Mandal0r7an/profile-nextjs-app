import { Task_Task } from '@/entities/task/model/types'
import styles from './TaskCard.module.css';
import { ReactComponent as Bookmark } from '@/shared/ui/assets/icons/task/Bookmark.svg';
import { ReactComponent as Clock } from '@/shared/ui/assets/icons/task/Clock.svg';
import { ReactComponent as Bag } from '@/shared/ui/assets/icons/task/Bag.svg';
import { ReactComponent as Typescript } from '@/shared/ui/assets/icons/task/Typescript.svg';
import { ReactComponent as Python } from '@/shared/ui/assets/icons/task/Python.svg';


type Props = {
    task: Task_Task;
}

export const TaskCard = ({ task }: Props) => {
    return (
            <div className={styles.container}>
        
                <div className={styles.card}>

                    <div className={styles.titleAndMark}>
                        <h2 className={styles.h2}>
                            {task.title}
                        </h2>
                        
                        <Bookmark className={styles.icon} />

                    </div>

                    <p className={styles.p}>
                        {task.task}
                    </p>

                    <div className={styles.parAndBut}>
                    <div className={styles.parameters}>
                        
                        <div className={styles.difficulty}>
                            <span className={styles.dot}></span>
                            <span className={styles.complexity}>{task.complexity}</span>
                        </div>

                        <div className={styles.bank}>
                            <Bag className={styles.icon} />
                            <p className={styles.p1}>
                                {task.bank}
                            </p>
                        </div>
                        
                        <div className={styles.time}>
                            <Clock className={styles.icon} />
                            <p className={styles.p1}>
                                {task.time} мин
                            </p>
                        </div>

                        <div className={styles.lang}>
                            <Typescript className={styles.icon} />
                            <Python className={styles.icon} />
                        </div>

                    </div>

                    <button className={styles.button}>
                        Решить
                    </button>
                    </div>
                </div>

            </div>
    );
}
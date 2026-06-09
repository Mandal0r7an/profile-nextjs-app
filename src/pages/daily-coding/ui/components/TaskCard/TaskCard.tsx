import styles from './TaskCard.module.css';
import { Task } from '../../../model/types';
import { ReactComponent as FavoriteButtonIcon } from '@/shared/ui/assets/icons/profile/FavoriteButton.svg';
import { ReactComponent as PlayInButtonIcon } from '@/shared/ui/assets/icons/profile/PlayInButton.svg';

type Props = {
    task: Task;
};

export const TaskCard = ({ task }: Props) => {
    return (
        <div className={styles.card}>

            <div className={styles.header}>
                <div className={styles.left}> 
                    <span className={styles.id}>
                        {task.id}
                    </span>

                    <h2 className={styles.title}>
                        {task.title}
                    </h2>

                    <span className={styles.difficulty}>
                        {task.difficulty}
                    </span>
                </div>

                <FavoriteButtonIcon className={styles.favorite} />
            </div> 

            <p className={styles.description}>
                {task.description.split(/`(.+?)`/g).map((part, i) =>
                    i % 2 === 1 ? (
                        <span key={i} className={styles.codeHighlight}>
                            {part}
                        </span>
                    ) : (
                        part
                    )
                )}
            </p>
            
            <div className={styles.actions}>
                <button className={styles.run}>
                    <PlayInButtonIcon className={styles.runIcon} />
                    Запустить
                </button>

                <button className={styles.submit}>
                    Отправить
                </button>
            </div>
            
            <textarea 
                className={styles.editor}
                defaultValue={task.code}
            />

            <div className={styles.console}>
                Консоль
            </div>
            
        </div>

    );
};
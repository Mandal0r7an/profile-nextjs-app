import { useGetTodosQuery } from '@/entities/todo/api/todoApi';
import styles from './DailyCodingPage.module.css';
import { useNavigate } from "react-router-dom";
import { TaskCard } from './components';
import { DailyCodingHeader } from './components/DailyCodingHeader/DailyCodingHeader';
import { tasks } from '../model/mock';

function DailyCoding() {
    const navigate = useNavigate();
    const { data, isLoading, error} = useGetTodosQuery();
    
        if (isLoading) return <p>Загрузка...</p>
        if (error) return <p>Ошибка</p>;

    return (
        <div className={styles.container}>
            <DailyCodingHeader />
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))} 
            <div className={styles.ButtonEnd}>
                <button className={styles.endButton}>
                    Завершить
                </button>
            </div>
        </div>
        
    
    )
}

export default DailyCoding;
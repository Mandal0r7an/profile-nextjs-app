import { useGetTodosQuery } from '@/entities/todo/api/todoApi';
import styles from './DailyCodingPage.module.css';
import { useNavigate } from "react-router-dom";
import { TaskCard } from '@/entities/daily-coding';
import { DailyCodingHeader } from '@/entities/task/ui/DailyCodingHeader/DailyCodingHeader';
import { Task_DailyCoding } from '@/entities/daily-coding';
import { NotFoundPage } from '@/pages/not-found/ui/NotFoundPage';

function DailyCoding() {
    const navigate = useNavigate();
    const { data, isLoading, error} = useGetTodosQuery();
    
        if (isLoading) return <p>Загрузка...</p>
        if (error) return <NotFoundPage />;

    return (
        <div className={styles.container}>
            <DailyCodingHeader />
            {Task_DailyCoding.map(Task_Daily => (
                <TaskCard key={Task_Daily.id} task={Task_Daily} />
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
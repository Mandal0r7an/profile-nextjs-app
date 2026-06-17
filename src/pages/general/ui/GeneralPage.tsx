import { useGetTodosQuery } from '@/entities/todo/api/todoApi';
import styles from './GeneralPage.module.css';
import { Part1 } from "@/entities/general";
import { Part2 } from "@/entities/general";
import { Part3 } from "@/entities/general";
import { Part4 } from "@/entities/general";
import { NotFoundPage } from '@/pages/not-found/ui/NotFoundPage';


function General() {
    const { data, isLoading, error} = useGetTodosQuery();
        if (isLoading) return <p>Загрузка...</p>
        if (error) return <NotFoundPage />;

    return (
        <div className={styles.container}>
            <Part1 />
            <Part2 />
            <Part3 />
            <Part4 />
        </div>
    )
}

export default General;
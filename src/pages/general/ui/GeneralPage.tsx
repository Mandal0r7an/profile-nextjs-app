import { useGetTodosQuery } from '@/entities/todo/api/todoApi';
import styles from './GeneralPage.module.css';
import { Part1 } from "./components/Part1/Part1";
import { Part2 } from "./components/Part2/Part2";
import { Part3 } from "./components/Part3/Part3";
import { Part4 } from "./components/Part4/Part4";
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
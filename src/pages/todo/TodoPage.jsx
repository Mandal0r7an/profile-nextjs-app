import {useParams} from "react-router-dom";
import { useGetTodoByIdQuery } from "../../entities/todo/api/todoApi";

function TodoPage() {
    const {id} = useParams();
    const {data, isLoading, error} = useGetTodoByIdQuery(id);

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка</p>;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>ID: {data.id}</p>
            <p>Статус: {data.completed ? "Выполнено" : "Не выполнено"}</p>
        </div>
    );
}

export default TodoPage;
import { useGetTodosQuery } from "../../entities/todo/api/todoApi";
import { useNavigate } from "react-router-dom";

function QuestionsPage() {
    const navigate = useNavigate();
    const { data, isLoading, error} = useGetTodosQuery();

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка</p>;

    return (
        <div>
            <h1>Список вопросов</h1>

            {data.map((todo) => (
                <div key={todo.id} onClick={() => navigate(`/todo/${todo.id}`)}>
                    <p>{todo.title}</p>
                </div>
            ))}
        </div>
    );
}

export default QuestionsPage;
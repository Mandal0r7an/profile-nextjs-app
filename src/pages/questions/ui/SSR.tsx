import { useGetTodosQuery } from "@/entities/todo/api/todoApi";
import { useNavigate } from "react-router-dom";
import styles from './SSR.module.css';

function QuestionsPage() {
    const navigate = useNavigate();
    const { data, isLoading, error} = useGetTodosQuery();

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка</p>;

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>SSR</h1>

            <div className={styles.block1}>
                <h2 className={styles.h2}>Определение</h2>
                <p className={styles.pblock1}>SSR (Server-Side Rendering) - рендеринг на стороне сервера. Благодаря нему можно получить <br/> 
                   доступ к данным, необходимым для построения страницы заранее на сервере, благодаря <br/> 
                   чему ускоряется скорость отклика.
                </p>
            </div>  

            <div className={styles.block2}>
                <h2 className={styles.h2}>Пример кода</h2>
                <pre className={styles.pblock1}>
                    {`export const getServerSideProps: GetServerSideProps = async (context) => {
                        try {
                            let cookies = context.req.cookies;
                            const response = await axios.get('/users');

                        return {
                        props: {
                        userData: response.data
                                }
                            };
                        } catch (err) {
                            console.log(err);
                            return {
                            props: {}
                                };
                            }
                    };`}
                </pre>
            </div> 

            <div className={styles.block3}>
                <h2 className={styles.h2}>Возвращаемый объект</h2>
                <p className={styles.pblock1}>
                    1. props - объект с пропсами для страницы <br/>
                    2. notFound - логическое значение, позволяющее вернуть 404 статус или соответствующую <br/>
                    страницы
                </p>
            </div>

            <div className={styles.block4}>
                <h2 className={styles.h2}>Объект context и его свойства</h2>
                <p className={styles.pblock1}> 
                </p>
            </div>

            <div className={styles.block5}>
                <h2 className={styles.h2}>Другие вопросы по этой теме</h2>
                <p className={styles.pblock1}> 
                </p>
            </div> 


        </div>
    );
}

export default QuestionsPage;
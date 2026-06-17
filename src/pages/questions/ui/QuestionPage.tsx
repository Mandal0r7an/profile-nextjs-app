import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage"
import { useProfile } from "@/entities/user/model/useProfile";
import styles from './QuestionPage.module.css';
import { Search }  from "@/features/question-search";
import { QuestionCard }  from "@/entities/question";
import { useState } from 'react'
import { Questions } from '@/entities/question'

function QuestionPage() {

    const [search, setSearch] = useState('')

    const filteredQuestions = Questions.filter((question) =>
        question.title.toLowerCase().includes(search.toLowerCase())
    );

    const { user, isLoading, error } = useProfile();

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <NotFoundPage />
    if (!user) return null;

    return (
        <div className={styles.container}>

            <Search
                value={search}
                onChange={setSearch}
            />

            <div className={styles.questions}>

                {filteredQuestions.map((question) => 
                    <QuestionCard
                        key={question.id}
                        question={question}
                    />
                )}
            </div>

        </div>
    );
}

export default QuestionPage;
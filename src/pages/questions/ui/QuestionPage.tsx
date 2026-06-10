import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage"
import { useProfile } from "@/pages/profile/lib/useProfile";
import styles from './QuestionPage.module.css';
import { Search }  from "./components/Search/Search";
import { QuestionCard }  from "./components/QuestionCard/QuestionCard";
import { useState } from 'react'
import { questions } from '../model/mock'

function QuestionPage() {

    const [search, setSearch] = useState('')

    const filteredQuestions = questions.filter((question) =>
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
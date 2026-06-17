import { Question } from '@/entities/question/model/types'
import styles from './QuestionCard.module.css';


type Props = {
    question: Question;
}

export const QuestionCard = ({ question }: Props) => {
    return (
            <div className={styles.container}>
        
                <div className={styles.card}>
                    <h2 className={styles.h2}>
                        {question.title}
                    </h2>

                    <p className={styles.p}>
                        {question.answer}
                    </p>

                    <button className={styles.button}>
                        Перейти к теме
                    </button>
                </div>

            </div>
    );
}
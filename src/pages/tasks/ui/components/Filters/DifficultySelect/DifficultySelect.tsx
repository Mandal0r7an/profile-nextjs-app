import styles from '@/pages/tasks/ui/components/Filters/DifficultySelect/DifficultySelect.module.css'

type Props = {
    difficulty: string[];
}

export const DifficultySelect = ({ difficulty }: Props) => {
    
    return (
        <div className={styles.block}>
            <div className={styles.GandS}>

                <div className={styles.grade}>
                    <h1 className={styles.h1}>
                    <label className={styles.label}>
                        <span>Грейд</span>
                    </label>
                    </h1>

                    <div className={styles.selectContainer}>
                        <select className={styles.select}>
                        {difficulty.map((grade) => (
                                    <option key={grade}>{grade}</option>
                                ))}      
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
} 
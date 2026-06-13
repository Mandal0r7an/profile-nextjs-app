import styles from '@/pages/tasks/ui/components/Filters/DifficultySelect/DifficultySelect.module.css'
import { useState } from 'react'

type Props = {
    difficulty: string[];
}

export const DifficultySelect = ({ difficulty }: Props) => {

    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    return (
        <div className={styles.selectContainer}>
            <select 
            className={styles.select}
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
            

                <option value="" disabled hidden>
                    Уровень сложности
                </option>

                {difficulty.map((difficulty) => (
                        <option key={difficulty}>{difficulty}</option>
                    ))}      
            </select>
        </div>
    );
} 
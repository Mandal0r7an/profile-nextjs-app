import styles from '@/features/task-filter/ui/DifficultySelect/DifficultySelect.module.css'
import { useState } from 'react'

type Props = {
    difficulty: string[];
    value: string;
    onChange: (value: string) => void;
};

export const DifficultySelect = ({ difficulty, value, onChange, }: Props) => {

    return (
        <div className={styles.selectContainer}>
            <select 
            className={styles.select}
            value={value}
            onChange={(e) => onChange(e.target.value)}
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
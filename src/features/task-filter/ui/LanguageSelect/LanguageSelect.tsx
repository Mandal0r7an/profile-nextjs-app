import styles from '@/features/task-filter/ui/LanguageSelect/LanguageSelect.module.css'
import { useState } from 'react'

type Props = {
    language: string[];
}

export const LanguageSelect = ({ language }: Props) => {

    const [selectedLanguage, setSelectedLanguage] = useState('');


    return (
        <div className={styles.selectContainer}>
            <select className={styles.select} value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}>

                <option 
                    value=""
                    disabled hidden
                >
                    Язык программирования
                </option>

                {language.map((language) => (
                        <option key={language}>{language}</option>
                    ))}      
            </select>
        </div>
    );
} 
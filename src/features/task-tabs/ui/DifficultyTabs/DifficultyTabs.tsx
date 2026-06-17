import styles from '@/features/task-tabs/ui/DifficultyTabs/DifficultyTabs.module.css'
import { useState } from 'react'
export const DifficultyTabs = () => {

const [activeTab, setActiveTab] = useState('all')

    return (
        <div className={styles.container}>
            <button 
                onClick={() => setActiveTab('all')}
                className={
                    activeTab === 'all'
                    ? styles.activeTab
                    : styles.tab
                }
            >
                Все задачи
            </button>

            <button 
                onClick={() => setActiveTab('solved')}
                className={
                    activeTab === 'solved'
                    ? styles.activeTab
                    : styles.tab
                }
            >
                Решенные
            </button>

            <button 
                onClick={() => setActiveTab('unsolved')}
                className={
                    activeTab === 'unsolved'
                    ? styles.activeTab
                    : styles.tab
                }
            >
                Нерешенные
            </button>

            <button 
                onClick={() => setActiveTab('bookmarks')}
                className={
                    activeTab === 'bookmarks'
                    ? styles.activeTab
                    : styles.tab
                }
            >
                Закладки
            </button>

        </div>

    );
};
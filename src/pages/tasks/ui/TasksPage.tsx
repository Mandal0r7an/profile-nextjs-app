import styles from './TasksPage.module.css';
import { useState } from 'react';
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";
import { useProfile } from "@/pages/profile/lib/useProfile";
import { DifficultyTabs } from './components/DifficultyTabs/DifficultyTabs';
import { TaskSearch } from './components/Filters/TaskSearch/TaskSearch';
import { CompanySearch } from './components/CompanyFilter/CompanySearch/CompanySearch';
import { DifficultySelect } from './components/Filters/DifficultySelect/DifficultySelect';
import { LanguageSelect } from './components/Filters/LanguageSelect/LanguageSelect';
import { SelectAllButton } from './components/CompanyFilter/SelectAllButton/SelectAllButton';
import { SelectedCompanies } from './components/CompanyFilter/SelectedCompanies/SelectedCompanies';
import { CompanyTags } from './components/CompanyFilter/CompanyTags/CompanyTags';
import { difficulty, language } from '@/pages/tasks/lib/useSelect';
import { ResetFilterButton } from './components/Filters/ResetFilterButton/ResetFilterButton';
import { TaskCard } from './components/TaskCard/TaskCard';
import { Tasks } from '../model/mock';

export const TasksPage = () => {
    const { user, isLoading, error } = useProfile();
    const [search, setSearch] = useState('');
    const [companySearch, setCompanySearch] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const filteredTasks = Tasks.filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
        );

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <NotFoundPage />;
    if (!user) return null;

    return (
        <div className={styles.container}>

            <DifficultyTabs />
            
            <div className={styles.filtersRow}>

                <TaskSearch
                    value={search}
                    onChange={setSearch}
                />
                
                <DifficultySelect difficulty={difficulty}/>

                <LanguageSelect language={language}/>

                <ResetFilterButton />

            </div>

            <div className={styles.companySection}>

                <p className={styles.p}>Компании</p>

                <div className={styles.companyRow}>
                    <div className={styles.searchWrapper}>
                        <CompanySearch
                            value={companySearch}
                            onChange={setCompanySearch}
                        />
                    </div>

                    <SelectAllButton />
                </div>

            </div>

            <SelectedCompanies />

            <CompanyTags />

            <div className={styles.tasks}>

                {filteredTasks.map((task) => 
                    <TaskCard
                        key={task.id}
                        task={task}
                    />
                )}
            </div>
        </div>
    );
};

export default TasksPage;
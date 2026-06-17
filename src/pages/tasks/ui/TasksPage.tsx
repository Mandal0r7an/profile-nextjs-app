import styles from './TasksPage.module.css';
import { useState } from 'react';
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";
import { useProfile } from "@/entities/user/model/useProfile";
import { DifficultyTabs } from '@/features/task-tabs';
import { TaskSearch } from '@/features/task-filter';
import { CompanySearch } from '@/features/company-filter';
import { DifficultySelect } from '@/features/task-filter';
import { LanguageSelect } from '@/features/task-filter';
import { SelectAllButton } from '@/features/company-filter';
import { SelectedCompanies } from '@/features/company-filter';
import { CompanyTags } from '@/entities/company';
import { difficulty, language } from '@/entities/task/model/useSelect';
import { ResetFilterButton } from '@/features/task-filter';
import { TaskCard } from '@/entities/task/ui/TaskCard/TaskCard';
import { Tasks } from '@/entities/task/model/mock';

export const TasksPage = () => {
    const { user, isLoading, error } = useProfile();
    const [search, setSearch] = useState('');
    const [companySearch, setCompanySearch] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const filteredTasks = Tasks.filter((task) => {
        const matchesTitle = task.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const mathesCompany = task.bank
            .toLowerCase()
            .includes(companySearch.toLowerCase())

        const mathesDifficulty = 
            selectedDifficulty === '' || 
            task.complexity === selectedDifficulty;

        return (
            matchesTitle &&
            mathesCompany &&
            mathesDifficulty
        );
});

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
                
                <DifficultySelect 
                    difficulty={difficulty}
                    value={selectedDifficulty}
                    onChange={setSelectedDifficulty}
                />

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
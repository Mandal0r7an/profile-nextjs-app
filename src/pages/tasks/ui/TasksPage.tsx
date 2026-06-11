import styles from './TasksPage.module.css';
import { useState } from 'react';
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";
import { useProfile } from "@/pages/profile/lib/useProfile";
import { DifficultyTabs } from './components/DifficultyTabs/DifficultyTabs';
import { TaskSearch } from './components/Filters/TaskSearch/TaskSearch';
import { CompanySearch } from './components/CompanyFilter/CompanySearch/CompanySearch';
import { DifficultySelect } from './components/Filters/DifficultySelect/DifficultySelect';
import { difficulty } from '@/pages/tasks/lib/useSelect';

export const TasksPage = () => {
    const { user, isLoading, error } = useProfile();

    const [search, setSearch] = useState('');
    const [companySearch, setCompanySearch] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <NotFoundPage />;
    if (!user) return null;

    return (
        <div className={styles.container}>

            <DifficultyTabs />

            <TaskSearch
                value={search}
                onChange={setSearch}
            />

            <CompanySearch
                value={companySearch}
                onChange={setCompanySearch}
            />

            <DifficultySelect
                difficulty={difficulty}
            />

        </div>
    );
};

export default TasksPage;
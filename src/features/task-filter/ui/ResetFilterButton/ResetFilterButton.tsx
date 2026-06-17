import styles from "@/features/task-filter/ui/ResetFilterButton/ResetFilterButton.module.css"

export const ResetFilterButton = () => {

    return (
        <div className={styles.container}>
           <button className={styles.button}>
                Сбросить фильтры
            </button>
        </div>
    );
} 
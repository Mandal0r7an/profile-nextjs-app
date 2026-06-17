import styles from "./SelectAllButton.module.css";

export const SelectAllButton = () => {
    return (
        <button className={styles.button}>
            <input
                type="checkbox"
                className={styles.checkbox}
            />
            Выбрать все
        </button>
    );
};
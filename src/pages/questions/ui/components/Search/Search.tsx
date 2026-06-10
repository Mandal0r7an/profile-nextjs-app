import styles from "./Search.module.css";
import { ReactComponent as Lupa } from '@/shared/ui/assets/icons/search/Lupa.svg';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export const Search = ({ value, onChange }: Props) => {
    return (
        <div className={styles.container}>

            <Lupa className={styles.Icon} />
            
            <input
                className={styles.search}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Поиск вопроса"
            />

            {value && (
                <button
                    className={styles.clearButton}
                    onClick={() => onChange('')}
                >
                    ×
                </button>
            )}

        </div>
    );
};
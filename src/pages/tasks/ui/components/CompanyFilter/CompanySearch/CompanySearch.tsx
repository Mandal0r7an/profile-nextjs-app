import styles from "./CompanySearch.module.css";
import { ReactComponent as Lupa } from '@/shared/ui/assets/icons/search/Lupa.svg';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export const CompanySearch = ({ value, onChange }: Props) => {
    return (
        <div className={styles.container}>
        
            <p className={styles.p}>Компании</p>
            <div className={styles.minicontainer}>
            <Lupa className={styles.icon} />
            
            <input
                className={styles.search}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Поиск по названию компании"
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
        </div>

    );
};
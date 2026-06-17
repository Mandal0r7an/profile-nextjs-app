import styles from './CompanyTags.module.css';

const companies = [
    { id: 1, name: 'Озон', count: 6 },
    { id: 2, name: 'Яндекс', count: 4 },
    { id: 3, name: 'VK', count: 12 },
    { id: 4, name: 'Т-Банк', count: 8 },
];

export const CompanyTags = () => {
    return (
        <div className={styles.container}>
            {companies.map((company) => (
                <button
                    key={company.id}
                    className={styles.tag}
                >
                    {company.name} ({company.count})
                </button>
            ))}
        </div>
    );
};
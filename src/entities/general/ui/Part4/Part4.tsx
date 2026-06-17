import styles from './Part4.module.css';
import { ReactComponent as CSS } from '@/shared/ui/assets/icons/tag/CSS.svg';
import { ReactComponent as Python } from '@/shared/ui/assets/icons/tag/Python.svg';
import { ReactComponent as React } from '@/shared/ui/assets/icons/tag/React.svg';
import { ReactComponent as HTML } from '@/shared/ui/assets/icons/tag/HTML.svg';
import { ReactComponent as TypeScript } from '@/shared/ui/assets/icons/tag/TypeScript.svg';
import { ReactComponent as JavaScript } from '@/shared/ui/assets/icons/tag/JavaScript.svg';
import { ReactComponent as Redis } from '@/shared/ui/assets/icons/tag/Redis.svg';
import { ReactComponent as Git } from '@/shared/ui/assets/icons/tag/Git.svg';
import { ReactComponent as Kafka } from '@/shared/ui/assets/icons/tag/Kafka.svg';
import { ReactComponent as PostgreSQL } from '@/shared/ui/assets/icons/tag/PostgreSQL.svg';
import { ReactComponent as RabbitMQ } from '@/shared/ui/assets/icons/tag/RabbitMQ.svg';
import { ReactComponent as Docker } from '@/shared/ui/assets/icons/tag/Docker.svg';
import { ReactComponent as Nextjs } from '@/shared/ui/assets/icons/tag/Nextjs.svg';

export const Part4 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Технологический стек</h1>

            <div className={styles.tags}>
                <span className={styles.tag}>
                    <React className={styles.Icon} />
                    React
                </span>
                <span className={styles.tag}>
                    <Python className={styles.Icon} />
                    Python
                </span>
                <span className={styles.tag}>
                    <HTML className={styles.Icon} />
                    HTML
                </span>
                <span className={styles.tag}>
                    <TypeScript className={styles.Icon} />
                    TypeScript
                </span>
                <span className={styles.tag}>
                    <JavaScript className={styles.Icon} />
                    JavaScript
                </span>
                <span className={styles.tag}>
                    <Redis className={styles.Icon} />
                    Redis
                </span>
                <span className={styles.tag}>
                    <CSS className={styles.Icon} />
                    CSS
                </span>
                <span className={styles.tag}>
                    <Nextjs className={styles.Icon} />
                    Next.js
                </span>
                <span className={styles.tag}>
                    <Git className={styles.Icon} />
                    Git
                </span>
                <span className={styles.tag}>
                    <Kafka className={styles.Icon} />
                    Kafka
                </span>
                <span className={styles.tag}>
                    <PostgreSQL className={styles.Icon} />
                    PostgreSQL
                </span>
                <span className={styles.tag}>
                    <RabbitMQ className={styles.Icon} />
                    RabbitMQ
                </span>
                <span className={styles.tag}>
                    <Docker className={styles.Icon} />
                    Docker
                </span>
            </div>
        </div>
    );
} 
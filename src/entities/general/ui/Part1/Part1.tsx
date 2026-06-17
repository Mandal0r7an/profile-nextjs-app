import styles from './Part1.module.css';
import { ReactComponent as GeneralImage } from '@/shared/ui/assets/icons/general/GeneralImage.svg';

export const Part1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.h2}>
                    Каждая строчка кода -
                    шаг к твоей цели</h2>
                <p className={styles.p}>
                    <span className={styles.blue}>CODE GYM</span> — это современная платформа 
                    для подготовки разработчиков к 
                    техническим собеседованиям и улучшения 
                    алгоритмических навыков через практику.
                </p>
            </div>

            <GeneralImage className={styles.generalimage} />
        </div>
    );
} 
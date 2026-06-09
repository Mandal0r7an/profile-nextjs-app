import styles from "./GandS.module.css";
import { ReactComponent as GradeIcon } from '@/shared/ui/assets/icons/profile/Grade.svg';
import { ReactComponent as SpecializationIcon } from '@/shared/ui/assets/icons/profile/Specialization.svg';

type Props = {
    grades: string[];
    specializations: string[];
}

export const GandS = ({ grades, specializations }: Props) => {
    return (
        <div className={styles.block}>
            <div className={styles.GandS}>

                    <div className={styles.grade}>
                        <h1 className={styles.h1}>
                        <label className={styles.label}>
                            <GradeIcon className={styles.icon} />
                            <span>Грейд</span>
                        </label>
                        </h1>

                        <div className={styles.selectContainer}>
                            <select className={styles.select}>
                                {grades.map((grade) => (
                                    <option key={grade}>{grade}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={styles.specialization}>
                        <h1 className={styles.h1}>
                        <label className={styles.label}>
                            <SpecializationIcon className={styles.icon} />
                            <span>Специализация</span>
                        </label>
                        </h1>

                        <div className={styles.selectContainer}>
                            <select className={styles.select}>
                                {specializations.map((specialization) => (
                                    <option key={specialization}>{specialization}</option>
                                ))}
                            </select>
                        </div>
                </div> 
            </div>
        </div>
    );
} 
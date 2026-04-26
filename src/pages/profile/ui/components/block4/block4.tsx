import styles from "./block4.module.css";
import { ReactComponent as GradeIcon } from '../../../../../shared/ui/assets/icons/Grade.svg';
import { ReactComponent as SpecializationIcon } from '../../../../../shared/ui/assets/icons/Specialization.svg';

export const Block4 = () => {
    return (
        <div className={styles.block}>
            <div className={styles.block4}>
                    <div>
                        <h1 className={styles.h1}>
                        <label className={styles.label}>
                            <GradeIcon className={styles.icon} />
                            <span>Грейд</span>
                        </label>
                        </h1>

                        <div className={styles.selectContainer}>
                            <select className={styles.select}>
                                <option>Junior</option>
                                <option>Middle</option>
                                <option>Senior</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h1 className={styles.h1}>
                        <label className={styles.label}>
                            <SpecializationIcon className={styles.icon} />
                            <span>Специализация</span>
                        </label>
                        </h1>

                        <div className={styles.selectContainer}>
                            <select className={styles.select}>
                                <option>BackEnd</option>
                                <option>FrontEnd</option>
                                <option>FullStack</option>
                            </select>
                        </div>
                    </div>
                </div>
        </div>
    );
} 
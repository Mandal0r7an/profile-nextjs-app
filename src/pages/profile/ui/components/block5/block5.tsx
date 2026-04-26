import styles from "./block5.module.css";
import { ReactComponent as SkillsIcon } from '../../../../../shared/ui/assets/icons/Skills.svg';

export const Block5 = () => {
    return (
        <div className={styles.block5}>
            <div className={styles.skillsHeader}>
                <h1 className={styles.h1}>
                <label className={styles.label}>
                    <SkillsIcon className={styles.icon} />
                    <span>Навыки</span>
                </label>
                </h1>
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.leftBlock5}>
                    <div>
                        <p className={styles.skill}>Python 80%</p>
                        <div className={styles.progressBarBlock5}>
                            <div className={styles.progressFill} style={{ width: `${80}%` }}></div>  
                        </div>
                    </div>
                    <div>
                        <p className={styles.skill}>Next.js 65%</p>
                        <div className={styles.progressBarBlock5}>
                            <div className={styles.progressFill} style={{ width: `${65}%` }}></div>  
                        </div>
                    </div>
                </div>
                <div className={styles.rightBlock5}>
                    <div>
                        <p className={styles.skill}>TypeScript 30%</p>
                        <div className={styles.progressBarBlock5}>
                            <div className={styles.progressFill} style={{ width: `${30}%` }}></div>  
                        </div>
                    </div>
                    <div>
                        <p className={styles.skill}>JavaScript 15%</p>
                        <div className={styles.progressBarBlock5}>
                            <div className={styles.progressFill} style={{ width: `${15}%` }}></div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
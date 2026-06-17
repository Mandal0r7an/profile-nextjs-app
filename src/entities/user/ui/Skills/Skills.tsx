import styles from "./Skills.module.css";
import { ReactComponent as SkillsIcon } from '@/shared/ui/assets/icons/profile/Skills.svg';
import { Skill } from "@/entities/user/model/useProfile";

type Props = {
    skills: Skill[];
};

export const Skills = ({ skills }: Props) => {
    return (
        <div className={styles.Skills}>
            <div className={styles.skillsHeader}>
                <h1 className={styles.h1}>
                    <label className={styles.label}>
                        <SkillsIcon className={styles.icon} />
                        <span>Навыки</span>
                    </label>
                </h1>
            </div>

            <div className={styles.skillsContainer}>

                <div className={styles.leftSkills}>
                    {skills.slice(0,2).map((skill) => (
                        <div key={skill.name}>
                            <p className={styles.skill}>
                                {skill.name} {skill.value}%
                            </p>
                            <div className={styles.progressBarSkills}>
                                <div 
                                    className={styles.progressFill} 
                                    style={{ width: `${skill.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                        
                <div className={styles.rightSkills}>
                    {skills.slice(2).map((skill) => (
                        <div key={skill.name}>
                            <p className={styles.skill}>
                                {skill.name} {skill.value}%
                            </p>
                            <div className={styles.progressBarSkills}>
                                <div 
                                    className={styles.progressFill} 
                                    style={{ width: `${skill.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div> 

        </div>
    );
};
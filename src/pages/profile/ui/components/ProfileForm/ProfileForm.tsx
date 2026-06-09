import { User } from "@/entities/user/model/types";
import styles from "./ProfileForm.module.css";
import { ReactComponent as UserIcon } from '@/shared/ui/assets/icons/profile/User.svg';
import { ReactComponent as AvatarIcon } from '@/shared/ui/assets/icons/profile/Avatar.svg';
import { ReactComponent as MailIcon } from '@/shared/ui/assets/icons/profile/Mail.svg';
import { ReactComponent as TelegramIcon } from '@/shared/ui/assets/icons/profile/Telegram.svg';
type Props = {
    user: User
};

export const ProfileForm = ({ user }: Props) => {
    return (
        
        <div className={styles.ProfileForm}>
            <h1 className={styles.h1}>Профиль</h1>
                <div className={styles.profileTop}>

                <div className={styles.avatar}>
                    <AvatarIcon className={styles.avatarIcon} />
                </div>

                <div className={styles.form}>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>
                            <UserIcon className={styles.icon} />
                            <span className={styles.textProfile}>Фамилия и имя</span>
                        </label>
                        <input value={user?.name || ''} readOnly />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>
                            <MailIcon className={styles.icon} />
                            <span className={styles.textProfile}>Почта</span>
                        </label>
                        <input value={user?.email || ''} readOnly />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>
                            <TelegramIcon className={styles.icon} />
                            <span className={styles.textProfile}>Telegram:</span>
                            <div className={styles.usernamecontainer}>
                                <span className={styles.username}>@{user?.username || ''}</span>
                            </div>
                        </label>
                    </div>
                </div>      
            </div>
        </div>
    );
}
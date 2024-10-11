import styles from './Header.module.css'

import androidLogo from '../assets/android-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={androidLogo} alt='' />
        </header>
    );
}
import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Нумерология</h1>
            <p className={styles.subTitle}>Рассчитайте ваш жизненный путь по имени и дате рождения</p>
        </header>
    );
}

export default Header;

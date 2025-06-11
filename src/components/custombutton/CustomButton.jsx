import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = ({ type = 'button', onClick, variant = 'default', children }) => {
    return (
        <button
            className={`${styles.button} ${variant === 'clear' ? styles.clear : ''}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default CustomButton;

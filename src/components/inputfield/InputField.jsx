import React from 'react';
import styles from './InputField.module.css';

const InputField = ({
    id,
    label,
    name,
    value,
    placeholder,
    onChange,
    type = 'text',
    required = true
}) => {
    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.label}>{label}:</label>
            <div className={styles.inputWrapper}>
                <input
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={styles.input}
                />

                {value && (
                    <button
                        type='button'
                        className={styles.clearButton}
                        onClick={() => onChange({ target: { name, value: '' } })}
                        aria-label='Очистить поле'
                    >
                        x
                    </button>
                )}
            </div>
        </div>
    );
}

export default InputField;

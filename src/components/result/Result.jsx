import React from 'react';
import styles from './Result.module.css';
import ResultList from '../resultlist/ResultList';
import Interpretation from '../interpretation/Interpretation';

const Result = ({ result, error }) => {
    if (error) {
        return <div className={styles.error}>Ошибка: {error}</div>
    }

    if (!result) return null;

    const { numbers, interpretation } = result;

    return (
        <div className={styles.resultBlock}>
            <h2>Результаты</h2>
            <div className={styles.result}>
                <div>
                    <h3>🔢 Ключевые числа:</h3>
                    <ResultList numbers={numbers} />
                </div>

                {interpretation?.description && (
                    <div className={styles.interpretation}>
                        <h3>📖 Интерпретация</h3>
                        <Interpretation description={interpretation.description} />
                    </div>
                )}
            </div>
            <div className={styles.source}>
                Данные предоставлены сервисом: <a href='https://roxyapi.com/' target='_blank' rel='noopener noreferrer'>Roxyapi.com - Numerology</a>
            </div>
        </div>
    );
}

export default Result;

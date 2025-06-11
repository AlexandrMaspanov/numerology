import React, { useEffect, useState } from "react";
import { translateText } from '../../utils/translate'
import styles from './Interpretation.module.css';
import Loader from '../UI/loader/Loader';
import TranslateButton from '../translatebutton/TranslateButton';

const Interpretation = ({ description }) => {
    const [translated, setTranslated] = useState('');
    const [isTranslateSuccess, setIsTranslateSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (description) {
            setIsTranslateSuccess(false);
            setIsLoading(true);
            setError('');

            translateText(description)
                .then(text => {
                    setTranslated(text);
                    setIsTranslateSuccess(text !== description && true);
                    setError('');
                })
                .catch(() => {
                    setError('Ошибка перевода. Попробуйте позже.');
                    setTranslated('');
                    setIsTranslateSuccess(false);
                })
                .finally(() => setIsLoading(false));
        }
    }, [description]);

    return (
        <>
            {isLoading ?
                (
                    <Loader />
                ) : (
                    error ?
                        (
                            <p className={styles.error}>Ошибка: {error}</p>
                        ) : (
                            <div className={styles.description}>
                                <p>
                                    {translated}
                                </p>
                                {isTranslateSuccess ? (
                                <p className={styles.source}>
                                    Переведено с помощью сервиса: <a href={`https://translate.google.com/?sl=en&tl=ru&text=${encodeURIComponent(description)}`} target='_blank' rel='noopener noreferrer'>Google Translate</a>
                                </p>
                                ) : (
                                    <TranslateButton text={translated} />
                                )}
                            </div>
                        )
                )
            }
        </>
    );
}

export default Interpretation;

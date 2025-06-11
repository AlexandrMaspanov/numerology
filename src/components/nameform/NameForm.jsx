import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputField from "../inputfield/InputField";
import CustomButton from "../custombutton/CustomButton";
import styles from './NameForm.module.css';

const API_URL = 'https://roxyapi.com/api/v1/data/astro/numerology/';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const INITIALIZE_FORMDATA = {
    firstName: '',
    lastName: '',
    birthDate: ''
};

const NameForm = ({ setResult, setIsLoading, setError }) => {
    const [formData, setFormData] = useState(INITIALIZE_FORMDATA);

    // Загрузка данных из localStorage при инициализации
    useEffect(() => {
        const savedFormData = localStorage.getItem('savedFormData');

        if (savedFormData) {
            try {
                setFormData(JSON.parse(savedFormData));
            } catch (error) {
                console.error('Ошибка при загрузке localStorage: ', error);
            }
        }
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            localStorage.setItem('savedFormData', JSON.stringify(formData));
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [formData]);

    // Обработка ввода
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Очистка формы
    const handleClearForm = () => {
        setFormData(INITIALIZE_FORMDATA);
        setResult(null);
        setIsLoading(false);
        setError(null);

        localStorage.removeItem('savedFormData');
    }

    // Отправка формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem('savedFormData', JSON.stringify(formData));

        const payload = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            birthdate: formData.birthDate
        };

        await fetchData(payload);
    }

    // Запрос данных с сервера
    const fetchData = async (payload) => {
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const [resBasic, resInterpretation] = await Promise.all([
                axios.post(`${API_URL}key-figures?token=${API_TOKEN}`,
                    payload,
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }),
                axios.post(`${API_URL}interpretations?token=${API_TOKEN}`,
                    payload,
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
            ]);

            setResult({
                numbers: resBasic.data,
                interpretation: resInterpretation.data
            });
        } catch (error) {
            console.error('Ошибка: ', error);
            setError(error.message || 'Неизвестная ошибка');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.formBlock}>
            <h2>Введите ваши данные</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <InputField
                        id="firstName"
                        label="Имя"
                        name="firstName"
                        placeholder="Введите имя"
                        value={formData.firstName || ''}
                        onChange={handleChangeInput}
                    />
                    <InputField
                        id="lastName"
                        label="Фамилия"
                        name="lastName"
                        placeholder="Введите фамилию"
                        value={formData.lastName || ''}
                        onChange={handleChangeInput}
                    />
                    <InputField
                        id="birthDate"
                        label="Дата рождения"
                        name="birthDate"
                        type="date"
                        value={formData.birthDate || ''}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className={styles.buttonsGroup}>
                    <CustomButton type="submit">
                        Отправить
                    </CustomButton>

                    <CustomButton
                        onClick={handleClearForm}
                        variant="clear"
                    >
                        Очистить форму
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default NameForm;

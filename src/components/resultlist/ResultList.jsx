import React from "react";
import styles from './ResultList.module.css';

const ResultList = ({ numbers }) => {
    return (
        <ul className={styles.resultList}>
            <li>
                <h4>Активное число: <strong>{numbers?.active_number ?? '-'}</strong></h4>
                <p>Основное число - число активности, показывает динамику вашей натуры, вашу силу в повседневной жизни.</p>
            </li>
            <li>
                <h4>Число дня рождения: <strong>{numbers?.birthdate_day_num ?? '-'}</strong></h4>
                <p>Указывает конкретные черты характера, таланты и склонности. Иногда - скрытые способности.</p>
            </li>
            <li>
                <h4>Число жизненного пути: <strong>{numbers?.life_path_number ?? '-'}</strong></h4>
                <p>Главная дорога вашей жизни. Указывает, каким образом вы будете идти по ней - через испытания, таланты и ключевые решения.</p>
            </li>
            <li>
                <h4>Число судьбы: <strong>{numbers?.destiny_number ?? '-'}</strong></h4>
                <p>То, что заложено вам свыше. Ваше предназначение и путь самореализации.</p>
            </li>
            <li>
                <h4>Число души: <strong>{numbers?.hearth_desire_number ?? '-'}</strong></h4>
                <p>То, к чему стремится ваша душа. Глубинные желания и мечты.</p>
            </li>
            <li>
                <h4>Число личности: <strong>{numbers?.personality_number ?? '-'}</strong></h4>
                <p>Как вас видят окружающие. Ваш внешний облик и стиль поведения.</p>
            </li>
            <li>
                <h4>Число самовыражения: <strong>{numbers?.expression_number ?? '-'}</strong></h4>
                <p>Как вы общаетесь, проявляетесь, заявляете о себе в мире.</p>
            </li>
            <li>
                <h4>Число силы: <strong>{numbers?.power_number ?? '-'}</strong></h4>
                <p>Ваша внутрення мощь, которую можно направить на достижение целей.</p>
            </li>
            <li>
                <h4>Число наследия: <strong>{numbers?.legacy_number ?? '-'}</strong></h4>
                <p>То, что вы оставите после себя. Ваш вклад и след в жизни других.</p>
            </li>
            <li>
                <h4>Недостающие числа: <strong>{numbers?.full_name_missing_numbers.join(', ') ?? '-'}</strong></h4>
                <p>То, чего вам не хватает. Указывают на то, чему нужно учиться.</p>
            </li>
        </ul>
    );
}

export default ResultList;

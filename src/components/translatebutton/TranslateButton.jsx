import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../custombutton/CustomButton';

const TranslateButton = ({ text }) => {
    const handleTranslate = () => {
        const url = `https://translate.google.com/?sl=en&tl=ru&text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }

    return (
        <CustomButton onClick={handleTranslate}>
            <FontAwesomeIcon icon={faLanguage} /> Перевести
        </CustomButton>
    );
}

export default TranslateButton;

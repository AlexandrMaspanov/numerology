import axios from 'axios';

export async function translateText(text) {
    let translatedText = text;

    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=${encodeURIComponent(text)}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const res = await axios.get(proxyUrl);

        const parsed = JSON.parse(res.data.contents);

        translatedText = parsed[0].map(part => part[0]).join(' ');
    } catch (error) {
        console.error('Ошибка перевода: ', error);
    }

    return translatedText;
}

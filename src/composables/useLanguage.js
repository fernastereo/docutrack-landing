import { ref } from 'vue';
import { useGtag } from 'vue-gtag-next';

const { event } = useGtag();
const language = ref('es');

export const useLanguage = () => {
  const setLanguage = (lang) => {
    language.value = lang;

    event('language-selected', {
      event_category: 'engagement',
      event_label: 'language',
      value: lang,
    });
  };

  return { language, setLanguage };
};
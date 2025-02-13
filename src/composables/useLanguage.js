import { ref } from 'vue';

const language = ref('es');

export const useLanguage = () => {
  
  const setLanguage = (lang) => {
    language.value = lang;
  }

  return { language, setLanguage }
}
import { ref } from 'vue';

const language = ref('es');

export const useLanguage = () => {
  
  const setLanguage = (lang) => {
    language.value = lang
    console.log('Idioma cambiado a:', lang)
  }

  return { language, setLanguage }
}
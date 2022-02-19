export const getLanguage = (defaultLanguage = 'PL') => {
  const language = localStorage.getItem('language');
  if (!language) return defaultLanguage;
  return language === 'PL' ? 'PL' : 'EN';
};

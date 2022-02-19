export const getDarkMode = (defaultTheme = 'light'): string => {
  const theme = localStorage.getItem('theme');
  if (!theme) return defaultTheme;
  return theme === 'dark' ? 'dark' : 'light';
};

import { createTheme, ThemeProvider } from '@mui/material';
import { blue, deepPurple, green, grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { MyAppBar } from './components/AppBar/MyAppBar.component';
import { AppFooter } from './components/AppFooter/AppFooter.component';
import { MainMenu } from './components/MainMenu/MainMenu.component';
import { LOCALES, translate, TranslationsProvider } from './translations/src';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('PL');

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: grey,
      secondary: deepPurple,
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: blue,
      secondary: green,
    },
  });

  const coachMenuItems = [
    'addWorkout',
    'swimmers',
    'dictionary',
    'calendar',
    'timer',
  ];
  const swimmerMenuItems = [
    'workouts',
    'coaches',
    'dictionary',
    'calendar',
    'timer',
  ];
  const adminMenuItems = ['swimmers', 'coaches', 'newsletter'];

  return (
    <TranslationsProvider
      locale={language === 'PL' ? LOCALES.POLISH : LOCALES.ENGLISH}
    >
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <MyAppBar
          title={translate('appName')}
          name="Kacper"
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}
        />
        <MainMenu items={coachMenuItems} />
        <AppFooter />
      </ThemeProvider>
    </TranslationsProvider>
  );
}

export default App;

import { createTheme, ThemeProvider } from '@mui/material';
import { blue, deepPurple, green, grey } from '@mui/material/colors';
import { useContext } from 'react';
import { MyAppBar } from './components/AppBar/MyAppBar.component';
import { AppFooter } from './components/AppFooter/AppFooter.component';
import { UserContext } from './context/UserContext';
import { Routing } from './pages/Routing/Routing.component';
import { LOCALES, translate, TranslationsProvider } from './translations/src';

function App() {
  const { lang, theme } = useContext(UserContext);
  const { language, setLanguage } = { ...lang };
  const { darkMode, setDarkMode } = { ...theme };

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
        <Routing />
        <AppFooter />
      </ThemeProvider>
    </TranslationsProvider>
  );
}

export default App;

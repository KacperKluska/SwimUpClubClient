import { ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { MyAppBar } from './components/AppBar/MyAppBar.component';
import { AppFooter } from './components/AppFooter/AppFooter.component';
import { MySnackBar } from './components/MySnackBar/MySnackBar.component';
import { SnackBarContext } from './context/SnackBarContext';
import { UserContext } from './context/UserContext';
import { Routing } from './pages/Routing/Routing.component';
import { darkTheme, lightTheme } from './theme';
import { LOCALES, TranslationsProvider } from './translations/src';

function App() {
  const { isLogged, lang, theme } = useContext(UserContext);
  const { open, message, status, handleSnackBarClose } =
    useContext(SnackBarContext);
  const { userLogged, setUserLogged } = { ...isLogged };
  const { language, setLanguage } = { ...lang };
  const { darkMode, setDarkMode } = { ...theme };

  return (
    <TranslationsProvider
      locale={language === 'PL' ? LOCALES.POLISH : LOCALES.ENGLISH}
    >
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <MyAppBar
          title="appName"
          userLogged={userLogged}
          setUserLogged={setUserLogged}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}
        />
        <Routing />
        <AppFooter />
        <MySnackBar
          open={open ?? false}
          message={message ?? ''}
          status={status ?? 'error'}
          handleSnackBarClose={handleSnackBarClose}
        />
      </ThemeProvider>
    </TranslationsProvider>
  );
}

export default App;

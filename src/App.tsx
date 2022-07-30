import { ThemeProvider } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MyAppBar } from './components/AppBar/MyAppBar.component';
import { AppFooter } from './components/AppFooter/AppFooter.component';
import { MySnackBar } from './components/MySnackBar/MySnackBar.component';
import { SnackBarContext } from './context/SnackBarContext';
import { UserContext } from './context/UserContext';
import { Routing } from './pages/Routing/Routing.component';
import { darkTheme, lightTheme } from './theme';
import { LOCALES, TranslationsProvider } from './translations/src';

function App() {
  const [userName, setUserName] = useState('');
  const [imageName, setImageName] = useState('');
  const { isLogged, lang, theme } = useContext(UserContext);
  const { open, message, status, handleSnackBarClose } =
    useContext(SnackBarContext);
  const { userLogged, setUserLogged } = { ...isLogged };
  const { language, setLanguage } = { ...lang };
  const { darkMode, setDarkMode } = { ...theme };

  const getUserData = async () => {
    const result = await axios.get('http://localhost:3001/users/user', {
      withCredentials: true,
    });
    if (result.status === 200) {
      setUserName(result.data.name || '');
      setImageName(result.data.photo || '');
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <TranslationsProvider
      locale={language === 'PL' ? LOCALES.POLISH : LOCALES.ENGLISH}
    >
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <MyAppBar
          title="appName"
          name={userName.toUpperCase()}
          imageName={imageName}
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

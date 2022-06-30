/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { getLanguage } from '../utils/getLanguage';
import { getDarkMode } from '../utils/getDarkMode';

interface IsLoggedReturnType {
  userLogged: boolean;
  setUserLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ThemeReturnType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LangReturnType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

interface UserData {
  email: string;
  role: 'USER' | 'COACH' | 'ADMIN';
}

interface UserInterface {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
}

interface UserContextReturnType {
  isLogged: IsLoggedReturnType;
  theme: ThemeReturnType;
  lang: LangReturnType;
  userData: UserInterface;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext<Partial<UserContextReturnType>>({});

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userLogged, setUserLogged] = useState(false);
  const [language, setLanguage] = useState(getLanguage('PL'));
  const [darkMode, setDarkMode] = useState(getDarkMode('light') === 'dark');
  const [user, setUser] = useState<UserData | null>(null);

  const refresh = async () => {
    try {
      const response = await axios.get('http://localhost:3001/auth/refresh', {
        withCredentials: true,
      });
      setUser(response.data.data);
      setUserLogged(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLogged: { userLogged, setUserLogged },
        theme: { darkMode, setDarkMode },
        lang: { language, setLanguage },
        userData: { user, setUser },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

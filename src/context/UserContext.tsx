/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, ReactNode } from 'react';
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

interface UserContextReturnType {
  isLogged: IsLoggedReturnType;
  theme: ThemeReturnType;
  lang: LangReturnType;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext<Partial<UserContextReturnType>>({});

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userLogged, setUserLogged] = useState(false);
  const [language, setLanguage] = useState(getLanguage('PL'));
  const [darkMode, setDarkMode] = useState(getDarkMode('light') === 'dark');

  return (
    <UserContext.Provider
      value={{
        isLogged: { userLogged, setUserLogged },
        theme: { darkMode, setDarkMode },
        lang: { language, setLanguage },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import { useContext, useState } from 'react';
import { SnackBarContext } from '../context/SnackBarContext';

export const useLocalStorage = (key: string, initialValue: object) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const { setSnackBar } = useContext(SnackBarContext);

  const setValue = (value: object) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      setSnackBar(
        'Unknown error occurred. Check useLocalStorage Hook.',
        'error',
      );
    }
  };
  return [storedValue, setValue];
};

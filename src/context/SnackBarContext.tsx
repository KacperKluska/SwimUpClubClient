import { createContext, useState, ReactNode, useMemo } from 'react';

export type SnackBarStatus = 'error' | 'success' | 'warning' | 'info';

interface SnackBarContextReturnType {
  open: boolean;
  message: string;
  status: SnackBarStatus;
  handleSnackBarClose: () => void;
  setSnackBar: (msg: string, msgStatus: SnackBarStatus) => void;
}

interface UserContextProps {
  children: ReactNode;
}

export const SnackBarContext = createContext<SnackBarContextReturnType>(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  undefined!,
);

export const SnackBarContextProvider = ({ children }: UserContextProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SnackBarStatus>('error');

  const handleSnackBarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const setSnackBar = (msg: string, msgStatus: SnackBarStatus) => {
    setMessage(msg);
    setStatus(msgStatus);
    setOpen(true);
  };

  const values = useMemo(
    () => ({
      open,
      message,
      status,
      handleSnackBarClose,
      setSnackBar,
    }),
    [open, message, status],
  );

  return (
    <SnackBarContext.Provider value={values}>
      {children}
    </SnackBarContext.Provider>
  );
};

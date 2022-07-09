import { Alert, Snackbar } from '@mui/material';

type Status = 'success' | 'error' | 'warning' | 'info';

interface Props {
  message: string;
  open: boolean;
  status: Status;
  handleSnackBarClose: (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => void;
}

export const MySnackBar = ({
  message,
  open,
  status,
  handleSnackBarClose,
}: Props) => (
  <Snackbar
    open={open}
    autoHideDuration={10000}
    onClose={handleSnackBarClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert
      onClose={handleSnackBarClose}
      severity={status}
      sx={{ width: '100%' }}
    >
      {message}
    </Alert>
  </Snackbar>
);

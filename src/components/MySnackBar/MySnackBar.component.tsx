import { Alert, Snackbar } from '@mui/material';
import { SnackBarStatus } from '../../context/SnackBarContext';

interface Props {
  message: string;
  open: boolean;
  status: SnackBarStatus;
  handleSnackBarClose?: (
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
    autoHideDuration={5000}
    onClose={handleSnackBarClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    sx={{ minWidth: '250px', maxWidth: '500px', mt: '70px' }}
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

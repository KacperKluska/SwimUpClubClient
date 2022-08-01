import axios from 'axios';
import { SnackBarStatus } from '../context/SnackBarContext';

export const handleAxiosError = (
  error: unknown,
  setSnackBar: (msg: string, msgStatus: SnackBarStatus) => void,
  optionalError: string,
) => {
  if (axios.isAxiosError(error)) {
    setSnackBar(error.response?.data?.message, 'error');
  } else {
    setSnackBar(optionalError, 'error');
  }
};

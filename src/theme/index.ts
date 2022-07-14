import { createTheme } from '@mui/material';
import { blue, grey, indigo } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: blue,
    secondary: indigo,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: grey,
  },
});

import { createTheme } from '@mui/material';
import { blue, grey, indigo } from '@mui/material/colors';
import { css } from 'styled-components';

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

export const minPageHeight = css`
  min-height: calc(100vh - 72px - 205px);
`;

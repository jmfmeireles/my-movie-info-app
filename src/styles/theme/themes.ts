import { createTheme } from '@mui/material/styles';

const lightTheme = {
  primary: '#EDBF17',
  textPrimary: '#666666',
  textSecondary: 'rgba(58,52,51,0.7)',
  header: '#ffffff',
  footer: '#ffffff',
  background: '#F8F8F8',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
};

export const materialUiTheme = createTheme({
  typography: {
    fontFamily: ['"Gruppo"', 'sans-serif'].join(','),
  },
  components: {
    MuiChip: {
      styleOverrides: {
        avatar: {
          backgroundColor: lightTheme.primary,
          color: '#fff',
        },
      },
    },
  },
  palette: {
    primary: { main: lightTheme.primary },
  },
});

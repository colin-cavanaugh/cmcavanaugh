import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2', contrastText: '#ffffff' }, // Strong blue with white contrast
    secondary: { main: '#dc004e', contrastText: '#ffffff' }, // Bright red
    background: { default: 'rgba(255,255,255,1)', paper: '#ffffff', custom: 'rgba(0, 0, 0, 1)' }, // Softer whites for modern UI
    text: { primary: '#212121', secondary: '#616161' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
})

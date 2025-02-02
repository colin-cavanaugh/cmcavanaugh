import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2', contrastText: '#ffffff' }, // Strong blue with white contrast
    secondary: { main: '#dc004e', contrastText: '#ffffff' }, // Bright red
    background: {
      default: 'rgba(255,255,255,1)',
      paper: '#ffffff',
      custom: 'rgba(0, 0, 0, 1)',
      blur: 'rgba(255,255,255,0.7)',
      icon: 'rgb(25, 118, 210)',
    }, // Softer whites for modern UI
    text: { primary: 'rgba(0, 0, 0, 1)', secondary: '#616161' },
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'transparent', // 🔥 Custom tooltip background
          color: 'rgba(0,0,0,1)', // ✅ Ensure text is visible
          fontWeight: 'bold',
          borderRadius: '6px',
          padding: '8px 12px',
        },
        arrow: {
          color: '#FF5733', // ✅ Matches tooltip background
        },
      },
    },
  },
})

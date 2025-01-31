import { createTheme } from '@mui/material'

export const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: 'rgb(132, 140, 207)', contrastText: '#4e342e' },
    secondary: { main: 'rgb(170, 178, 240)', contrastText: '#4e342e' },
    background: { default: 'rgb(170, 178, 240)', paper: 'rgba(255,255,255,1)', custom: 'rgb(25, 118, 210)' },
    text: { primary: 'rgba(0,0,0,1)', secondary: 'rgba(255,255,255,1)' },
  },
  components: {
    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          backgroundColor: 'rgba(255,255,255,1) ', // ✅ Set white background
          color: 'rgb(113, 120, 184) ', // ✅ Set icon color to purple
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          },
          boxShadow: 'none', // ✅ Remove shadow
          border: 'none', // ✅ Remove border
        },
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          position: 'fixed',
          bottom: 16,
          right: 16,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,1)',
          color: 'rgb(113, 120, 184)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          },
          textTransform: 'none',
          borderRadius: '50px',
          boxShadow: 'none',
          border: 'none',
        },
      },
    },
  },
})

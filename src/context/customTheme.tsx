import { createTheme } from '@mui/material'

export const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: 'rgb(132, 140, 207)', contrastText: '#4e342e' },
    secondary: { main: 'rgba(255,255,255,1)', contrastText: '#4e342e' },
    background: {
      default: 'rgba(220, 215, 215, 0.98)',
      paper: 'rgba(255,255,255,1)',
      custom: 'rgb(25, 118, 210)',
      blur: 'rgba(220, 215, 215, 0.7)',
      icon: 'rgb(234, 112, 71)',
    },
    text: { primary: 'rgba(0,0,0,1)', secondary: 'rgba(255,255,255,1)', title: 'rgb(234, 112, 71)' },
  },
  components: {
    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          // backgroundColor: 'rgba(255,255,255,1) ', // ✅ Set white background
          color: 'rgba(255,255,255,1) ', // ✅ Set icon color to purple
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
          // backgroundColor: 'rgba(255,255,255,1)',
          color: 'rgba(255,255,255,1)',
          backgroundColor: 'rgb(234, 112, 71)',
          // color: 'rgb(234, 112, 71)',
          '&:hover': {
            backgroundColor: 'rgb(234, 112, 71, 0.8)',
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

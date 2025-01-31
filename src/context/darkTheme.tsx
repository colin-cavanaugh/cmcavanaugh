import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: 'rgba(255,255,255,1)', contrastText: 'rgba(0,0,0,1)' },
    secondary: { main: 'rgba(255,255,255,1)', contrastText: 'rgba(0,0,0,1)' },
    background: { default: 'rgba(0,0,0,1)', paper: 'rgba(0,0,0,1)', custom: 'rgb(113, 120, 184)' },
    text: { primary: 'rgba(255,255,255,1)', secondary: 'rgba(255,255,255,0.8)' },
  },
  components: {
    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          backgroundColor: 'rgba(255,255,255,1) !important', // ✅ Force white background
          color: 'rgba(0,0,0,1) !important', // ✅ Force black icons/text
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8) !important',
          },
          textTransform: 'none',
          borderRadius: '50px',
          boxShadow: 'none',
        },
        // root: {
        //   '&:first-of-type .MuiFab-root': {
        //     backgroundColor: 'rgb(132, 140, 207) !important', // ✅ First item purple
        //     color: 'rgba(255,255,255,1) !important', // ✅ White icon
        //   },
        // },
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
          color: 'rgba(0,0,0,1)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          },
          textTransform: 'none',
          borderRadius: '50px',
          boxShadow: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,1)',
          color: 'rgba(0,0,0,1)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          },
          textTransform: 'none',
          borderRadius: '25px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,1)',
          color: 'rgba(255,255,255,1)',
          boxShadow: 'none',
        },
      },
    },
  },
})

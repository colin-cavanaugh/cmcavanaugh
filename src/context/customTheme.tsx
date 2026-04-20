import { createTheme } from '@mui/material/styles'

// Harbor Haze palette: #909EAE · #5C8DC5 · #AD9E90 · #736F60
export const customTheme = createTheme({
  shape: { borderRadius: 8 },
  palette: {
    mode: 'light',
    primary: { main: '#5C8DC5', contrastText: '#FFFFFF' },
    secondary: { main: '#736F60', contrastText: '#FFFFFF' },
    background: {
      default: '#F4F6F9',
      paper: '#FFFFFF',
      custom: '#AD9E90',
      blur: 'rgba(244, 246, 249, 0.92)',
      icon: '#5C8DC5',
    },
    text: {
      primary: '#1E2535',
      secondary: '#736F60',
      title: '#1E2535',
    },
    divider: '#D3D8DF',
    icon: {
      primary: '#5C8DC5',
      secondary: '#909EAE',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#1E2535',
          boxShadow: 'none',
          borderBottom: '1px solid #D3D8DF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#1E2535',
          color: '#FFFFFF',
          fontWeight: 500,
          borderRadius: '8px',
          padding: '6px 10px',
        },
      },
    },
  },
})

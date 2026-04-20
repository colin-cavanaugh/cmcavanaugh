import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypeBackground {
    custom?: string
    blur?: string
    icon?: string
  }

  interface TypeText {
    title?: string
  }

  interface Palette {
    icon: {
      primary?: string
      secondary?: string
    }
  }

  interface PaletteOptions {
    icon?: {
      primary?: string
      secondary?: string
    }
  }
}

export const darkTheme = createTheme({
  shape: { borderRadius: 8 },
  palette: {
    mode: 'dark',
    primary: { main: '#5C8DC5', contrastText: '#FFFFFF' },
    secondary: { main: '#AD9E90', contrastText: '#FFFFFF' },
    background: {
      default: 'rgba(36, 48, 73, 1)',
      paper: 'rgba(28, 37, 58, 1)',
      custom: '#AD9E90',
      blur: 'rgba(36, 48, 73, 0.85)',
      icon: '#5C8DC5',
    },
    text: {
      primary: 'rgba(255,255,255,1)',
      secondary: 'rgba(255,255,255,0.65)',
      title: 'rgba(255,255,255,1)',
    },
    divider: 'rgba(255,255,255,0.12)',
    icon: {
      primary: '#5C8DC5',
      secondary: 'rgba(255,255,255,0.65)',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(28, 37, 58, 1)',
          color: '#FFFFFF',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
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
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(28, 37, 58, 1)',
          backgroundImage: 'none',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(28, 37, 58, 0.95)',
          color: '#FFFFFF',
          fontWeight: 500,
          borderRadius: '8px',
          padding: '6px 10px',
        },
      },
    },
  },
})

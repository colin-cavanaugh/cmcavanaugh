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

// Now you can define your custom theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: 'rgba(255,255,255,1)', contrastText: 'rgba(0,0,0,1)' },
    secondary: { main: 'rgba(255,255,255,1)', contrastText: 'rgba(0,0,0,1)' },
    background: {
      default: 'rgba(0,0,0,1)',
      paper: 'rgba(0,0,0,1)',
      custom: 'rgb(234, 112, 71)', // ✅ No TypeScript error
      blur: 'rgba(0, 0, 0, 0.7)',
    },
    text: {
      primary: 'rgba(255,255,255,1)',
      secondary: 'rgba(255,255,255,0.8)',
      title: 'rgba(255,255,255,1)', // ✅ No TypeScript error
    },
    icon: {
      primary: 'rgba(255,255,255,1)',
      secondary: 'rgba(255,255,255,1)',
    },
  },
  components: {
    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          backgroundColor: 'rgba(255,255,255,1) !important',
          color: 'rgba(0,0,0,1) !important',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8) !important',
          },
          textTransform: 'none',
          borderRadius: '50px',
          boxShadow: 'none',
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'transparent', // 🔥 Custom tooltip background
          color: 'rgba(255,255,255,1)', // ✅ Ensure text is visible
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

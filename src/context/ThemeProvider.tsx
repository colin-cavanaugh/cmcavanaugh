import { createContext, useContext, useMemo, useState, ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline, Theme, PaletteMode } from '@mui/material'
import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'
import { customTheme } from './customTheme'

// ✅ Define allowed theme modes
export type ThemeMode = 'light' | 'dark' | 'custom'

interface ThemeContextProps {
  mode: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme,
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('custom')

  // ✅ New: Allow explicitly setting a theme
  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode)
  }

  // ✅ Keep the cycling toggle for convenience
  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : prevMode === 'dark' ? 'custom' : 'light'))
  }

  const muiMode: PaletteMode = mode === 'custom' ? 'light' : mode
  const theme = useMemo(() => themes[mode], [mode])

  return (
    <ThemeContext.Provider value={{ mode, setTheme, toggleTheme }}>
      <MuiThemeProvider theme={{ ...theme, palette: { ...theme.palette, mode: muiMode } }}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useThemeContext must be used within a ThemeProvider')
  return context
}

import {
  Box,
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { Section } from '../library/matter-ui-section'
import { useRouter } from '@tanstack/react-router'
import NavigationIcon from '@mui/icons-material/Navigation'
import NorthIcon from '@mui/icons-material/North'
import { useThemeContext } from '../context/ThemeProvider'
import { Theme } from '@mui/material/styles'
import type { ThemeMode } from '../context/ThemeProvider'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ContrastIcon from '@mui/icons-material/Contrast'
import LightModeIcon from '@mui/icons-material/LightMode'
import HomeIcon from '@mui/icons-material/Home'
import { Letter } from '../library/matter-ui-letter'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'

const getActions = (theme: Theme, currentThemeMode: ThemeMode, isSmallScreen: boolean) => {
  const themeMap: Record<ThemeMode, { icon: JSX.Element; name: string }> = {
    light: {
      icon: (
        <DarkModeIcon
          color='primary'
          style={{
            height: isSmallScreen ? 25 : 35,
            width: isSmallScreen ? 25 : 35,
            color: theme.palette.background.custom,
          }}
        />
      ),
      name: 'Dark',
    },
    dark: {
      icon: (
        <ContrastIcon
          style={{
            height: isSmallScreen ? 25 : 35,
            width: isSmallScreen ? 25 : 35,
            color: theme.palette.background.custom,
          }}
        />
      ),
      name: 'Custom',
    },
    custom: {
      icon: (
        <LightModeIcon
          style={{
            height: isSmallScreen ? 25 : 35,
            width: isSmallScreen ? 25 : 35,
            color: theme.palette.background.custom,
          }}
        />
      ),
      name: 'Light',
    },
  }

  return [
    {
      icon: (
        <HomeIcon
          style={{
            height: isSmallScreen ? 25 : 35,
            width: isSmallScreen ? 25 : 35,
            color: theme.palette.background.icon,
          }}
        />
      ),
      name: 'Home',
      action: 'link',
      link: '/',
    },
    {
      icon: (
        <EmojiPeopleIcon
          style={{
            height: isSmallScreen ? 25 : 35,
            width: isSmallScreen ? 25 : 35,
            color: theme.palette.background.icon,
          }}
        />
      ),
      name: 'Personal Life',
      action: 'link',
      link: '/personallife',
    },
    {
      icon: (
        <LocalLibraryIcon
          style={{
            height: isSmallScreen ? 25 : 35,
            width: isSmallScreen ? 25 : 35,
            color: theme.palette.background.icon,
          }}
        />
      ),
      name: 'Matter UI',
      action: 'link',
      link: '/matterui',
    },
    {
      icon: (
        <AssignmentIcon
          style={{
            height: isSmallScreen ? 25 : 35,
            width: isSmallScreen ? 25 : 35,
            color: theme.palette.background.icon,
          }}
        />
      ),
      name: 'Resumé',
      action: 'download',
    },
    {
      icon: themeMap[currentThemeMode].icon,
      name: themeMap[currentThemeMode].name,
      action: 'toggle',
    }, // ✅ Only one toggle button
  ]
}

const MenuSpeedDial = () => {
  const theme = useTheme()
  const { mode, toggleTheme } = useThemeContext()
  const router = useRouter()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const handleDownload = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <SpeedDial
      ariaLabel='Navigation'
      sx={{
        position: 'absolute',
        bottom: 16, // Keeps it at the bottom
        right: 16, // Changed from right: 16 to left: 16
        '.MuiSpeedDialAction-staticTooltipLabel': {
          bgcolor: 'transparent',
          boxShadow: 'none',
          width: '100%',
          textAlign: 'left',
          minWidth: 100,
          fontWeight: 'bold',
          zIndex: 1000,
        },
      }}
      FabProps={{ style: { height: isSmallScreen ? 50 : 65, width: isSmallScreen ? 50 : 65 } }}
      icon={
        <SpeedDialIcon
          sx={{
            height: isSmallScreen ? 30 : 45,
            width: isSmallScreen ? 30 : 45,
          }}
          icon={
            <NavigationIcon
              sx={{
                height: isSmallScreen ? 30 : 45,
                width: isSmallScreen ? 30 : 45,
              }}
            />
          }
          openIcon={
            <NorthIcon
              sx={{
                height: isSmallScreen ? 30 : 45,
                width: isSmallScreen ? 30 : 45,
              }}
            />
          }
        />
      }
      direction={isSmallScreen ? 'up' : 'left'}
    >
      {getActions(theme, mode, isSmallScreen).map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipPlacement={isSmallScreen ? 'left' : 'top'}
          tooltipTitle={
            <Letter
              look={{
                bgColor: theme.palette.background.blur,
                boxShadow: 'none',
                textAlign: 'center',
                fontWeight: 'bolder',
                fontSize: isSmallScreen ? 16 : 22,
              }}
            >
              {action?.name}
            </Letter>
          }
          sx={{
            fontSize: 34,
          }}
          FabProps={{ style: { height: isSmallScreen ? 45 : 55, width: isSmallScreen ? 45 : 55 }, size: 'large' }}
          onClick={() => {
            if (action.action === 'link') {
              router.navigate({ to: action.link })
            } else if (action.action === 'download') {
              handleDownload()
            } else if (action.action === 'toggle') {
              toggleTheme()
            }
          }}
        />
      ))}
    </SpeedDial>
  )
}

export default MenuSpeedDial

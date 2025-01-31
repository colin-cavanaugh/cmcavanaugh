import { IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, useTheme } from '@mui/material'
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

const getActions = (theme: Theme, currentThemeMode: ThemeMode) => {
  const themeMap: Record<ThemeMode, { icon: JSX.Element; name: string }> = {
    light: {
      icon: <DarkModeIcon color='primary' style={{ height: 35, width: 35, color: theme.palette.background.custom }} />,
      name: 'Dark',
    },
    dark: {
      icon: <ContrastIcon style={{ height: 35, width: 35, color: theme.palette.background.custom }} />,
      name: 'Custom',
    },
    custom: {
      icon: <LightModeIcon style={{ height: 35, width: 35, color: theme.palette.background.custom }} />,
      name: 'Light',
    },
  }

  return [
    {
      icon: <HomeIcon style={{ height: 35, width: 35 }} />,
      name: 'Home',
      action: 'link',
      link: '/',
    },
    {
      icon: <LocalLibraryIcon style={{ height: 35, width: 35 }} />,
      name: 'Matter UI',
      action: 'link',
      link: '/matterui',
    },
    { icon: <AssignmentIcon style={{ height: 35, width: 35 }} />, name: 'View Resume', action: 'download' },
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

  const handleDownload = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <Section>
      <SpeedDial
        ariaLabel='Navigation'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        FabProps={{ style: { height: 65, width: 65 } }}
        icon={
          <SpeedDialIcon
            sx={{ height: 45, width: 45 }}
            icon={<NavigationIcon sx={{ height: 45, width: 45 }} />}
            openIcon={<NorthIcon sx={{ height: 45, width: 45 }} />}
          />
        }
        direction='up'
      >
        {getActions(theme, mode).map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={<Letter>{action.name}</Letter>}
            sx={{ fontSize: 34 }}
            FabProps={{ style: { height: 55, width: 55 }, size: 'large' }}
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
    </Section>
  )
}

export default MenuSpeedDial

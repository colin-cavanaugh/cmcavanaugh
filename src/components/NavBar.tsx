import { AppBar, Toolbar, Button, IconButton, Box, Typography, useMediaQuery, useTheme, Drawer, List, ListItemButton, ListItemText, Divider as MuiDivider } from '@mui/material'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useThemeContext } from '../context/ThemeProvider'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import ContrastIcon from '@mui/icons-material/Contrast'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import type { ThemeMode } from '../context/ThemeProvider'

const NAVBAR_HEIGHT = 64

const themeIcons: Record<ThemeMode, JSX.Element> = {
  light: <DarkModeIcon fontSize="small" />,
  dark: <ContrastIcon fontSize="small" />,
  custom: <LightModeIcon fontSize="small" />,
}

const navLinks = [
  { label: 'About', path: '/' },
  { label: 'Case Study', path: '/casestudy' },
  { label: 'Personal Life', path: '/personallife' },
  { label: 'Matter UI', path: '/matterui' },
  { label: 'LeetCode', path: '/leetcode' },
]

export const NAVBAR_HEIGHT_PX = NAVBAR_HEIGHT

const NavBar = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const { mode, toggleTheme } = useThemeContext()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="default"
        sx={{
          height: NAVBAR_HEIGHT,
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            height: NAVBAR_HEIGHT,
            minHeight: `${NAVBAR_HEIGHT}px !important`,
            px: { xs: 2, sm: 3 },
            flexWrap: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {/* Name only — no logo */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }}
            onClick={() => navigate('/')}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.4px',
                color: theme.palette.text.title,
                fontSize: { xs: '1rem', sm: '1.05rem' },
                whiteSpace: 'nowrap',
              }}
            >
              Colin Cavanaugh
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: theme.palette.text.primary, flexShrink: 0 }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
              {navLinks.map(link => (
                <Button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: isActive(link.path) ? 700 : 500,
                    fontSize: '0.85rem',
                    px: 1.25,
                    whiteSpace: 'nowrap',
                    minWidth: 'unset',
                    borderBottom: isActive(link.path) ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                    borderRadius: 0,
                    transition: 'background-color 0.15s ease, color 0.15s ease',
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}1f`,
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}

              <Button
                variant="outlined"
                size="small"
                startIcon={<FileDownloadOutlinedIcon fontSize="small" />}
                onClick={() => window.open('/resume.pdf', '_blank')}
                sx={{
                  ml: 1,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}1f`,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                Résumé
              </Button>

              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{
                  ml: 0.5,
                  flexShrink: 0,
                  color: theme.palette.text.primary,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}12`,
                  },
                }}
                title="Toggle theme"
              >
                {themeIcons[mode]}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220, pt: 2 }}>
          <List>
            {navLinks.map(link => (
              <ListItemButton
                key={link.path}
                selected={isActive(link.path)}
                onClick={() => { navigate(link.path); setDrawerOpen(false) }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
            <MuiDivider />
            <ListItemButton onClick={() => { window.open('/resume.pdf', '_blank'); setDrawerOpen(false) }}>
              <ListItemText primary="Résumé" />
            </ListItemButton>
            <ListItemButton onClick={() => { toggleTheme(); setDrawerOpen(false) }}>
              <ListItemText primary="Toggle Theme" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default NavBar

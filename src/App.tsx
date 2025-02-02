import React from 'react'
import { GridContainer } from './library/matter-ui-gridcontainer'
import { Section } from './library/matter-ui-section'
import Header from './components/Header'
import MenuSpeedDial from './components/MenuSpeedDial'
import { Outlet } from '@tanstack/react-router' // ✅ Ensure we import Outlet
import { GridItem } from './library/matter-ui-griditem'
import { Letter } from './library/matter-ui-letter'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { router } from './routes/routes'
import { Profile } from './library/matter-ui-profile'

const App = () => {
  const theme = useTheme()

  return (
    <Box p={2} sx={{ height: 'calc(100vh - 25px)' }}>
      <Outlet />
      <MenuSpeedDial />
    </Box>
  )
}

export default App

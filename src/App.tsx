import React from 'react'
import { Outlet } from '@tanstack/react-router'
import { Box } from '@mui/material'
import MenuSpeedDial from './components/MenuSpeedDial'
import { GridContainer } from './library/matter-ui-gridcontainer'

const App = () => {
  return (
    <Box
      sx={{
        height: '100dvh', // Ensures the container covers the full viewport
        display: 'flex',
        overflow: 'hidden', // Prevents double scrollbars
      }}
    >
      {/* Main Content with Scrollability */}
      <Box
        sx={{
          flex: 1, // Takes up remaining space
          width: '100%',
          overflowY: 'auto', // Enables scrolling only for content
        }}
      >
        <Outlet />
      </Box>

      {/* SpeedDial Fixed at Bottom Right */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 1000, // Ensures it's above other content
        }}
      >
        <MenuSpeedDial />
      </Box>
    </Box>
  )
}

export default App

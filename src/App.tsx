import React from 'react'
import { Outlet } from '@tanstack/react-router'
import { Box } from '@mui/material'
import Header from './components/Header'
import MenuSpeedDial from './components/MenuSpeedDial'

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Ensure it takes full screen height
        overflow: 'hidden', // Prevent unintended scrolling
      }}
    >
      <Box
        sx={{
          flexGrow: 1, // Makes content take up remaining space
          overflowY: 'auto', // Allows scrolling within content
          padding: 2, // Adds spacing
        }}
      >
        <Outlet />
      </Box>
      <MenuSpeedDial />
    </Box>
  )
}

export default App

import React from 'react'
import { Outlet } from '@tanstack/react-router'
import { Box } from '@mui/material'
import Header from './components/Header'
import MenuSpeedDial from './components/MenuSpeedDial'
import { Section } from './library/matter-ui-section'

const App = () => {
  return (
    <Section
      look={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Ensure it takes full screen height
        width: '100vw',
        overflow: 'hidden', // Prevent unintended scrolling
      }}
    >
      <Section
        look={{
          flexGrow: 1, // Makes content take up remaining space
          overflowY: 'auto', // Allows scrolling within content
          width: '100%',
          padding: 2, // Adds spacing
        }}
      >
        <Outlet />
      </Section>
      <MenuSpeedDial />
    </Section>
  )
}

export default App

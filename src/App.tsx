import React from 'react'
import { GridContainer } from './library/matter-ui-gridcontainer'
import { Section } from './library/matter-ui-section'
import Header from './components/Header'
import MenuSpeedDial from './components/MenuSpeedDial'
import { Outlet } from '@tanstack/react-router'

const App = () => {
  return (
    <GridContainer
      look={{
        display: 'flex',
        flexDirection: 'column', // ✅ Ensure header is above content
        width: '100%',
        height: '100vh',
        overflow: 'hidden', // ✅ Prevent body from breaking
      }}
    >
      <Header />

      <Section
        look={{
          flex: 1, // ✅ Make content take remaining space
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          overflowY: 'auto', // ✅ Enable scrolling for content
          paddingTop: '80px', // ✅ Prevent content from overlapping with header
        }}
      >
        <Outlet />
      </Section>

      <MenuSpeedDial />
    </GridContainer>
  )
}

export default App

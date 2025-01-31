import React from 'react'
import { GridContainer } from './library/matter-ui-gridcontainer'
import { Section } from './library/matter-ui-section'
import Header from './components/Header'
import MenuSpeedDial from './components/MenuSpeedDial'
import { Outlet } from '@tanstack/react-router' // ✅ Ensure we import Outlet

const App = () => {
  return (
    <>
      <Header />
      <GridContainer
        look={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {/* ✅ This is where the routed pages (AboutMe, MatterUi) will appear */}
        <Section
          look={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Outlet />
        </Section>
        <MenuSpeedDial />
      </GridContainer>
    </>
  )
}

export default App

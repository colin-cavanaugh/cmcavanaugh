import React from 'react'
import { GridContainer } from './library/matter-ui-gridcontainer'
import { Section, GridItem, Profile } from './library/matter-ui-section'
import Header from './components/Header'
import MenuSpeedDial from './components/MenuSpeedDial'
import { Outlet } from '@tanstack/react-router' // ✅ Ensure we import Outlet

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <GridItem
        look={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row', // ✅ Stacks items on small screens
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isSmallScreen ? 6 : 20,
          width: '100%',
        }}
      >
        <Profile
          look={{
            width: isSmallScreen ? 55 : 150,
            height: isSmallScreen ? 55 : 150,
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          src={'/groheadshot.jpg'}
          onClick={() => router.navigate({ to: '/' })}
        />
        <Letter
          look={{ fontSize: isSmallScreen ? 24 : 50, textAlign: 'center' }}
        >
          {headerTitle}
        </Letter>
        <Letter
          look={{ fontSize: isSmallScreen ? 18 : 28, textAlign: 'center' }}
        >
          Colin Cavanaugh
        </Letter>
      </GridItem>
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

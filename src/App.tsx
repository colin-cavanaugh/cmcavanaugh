import React from 'react'
import { GridContainer } from './library/matter-ui-gridcontainer'
import { GridItem } from './library/matter-ui-griditem'
import Grid from '@mui/material/Grid2'
import { Typography } from '@mui/material'
import { Letter } from './library/matter-ui-letter'
import { Section } from './library/matter-ui-section'
import { Activator } from './library/matter-ui-activator'
import BreakpointMarker from './library/matter-ui-breakpoint-marker'
import { Profile } from './library/matter-ui-profile'
import Header from './components/Header'
import MatterUi from './components/MatterUi'
import MenuSpeedDial from './components/MenuSpeedDial'
const App = () => {
  return (
    <>
      {/* <BreakpointMarker breakpoint='xs' label='Extra Small (xs)' color='rgb(255, 82, 0)' />
      <BreakpointMarker breakpoint='sm' label='Small (sm)' color='rgb(54, 209, 93)' />
      <BreakpointMarker breakpoint='md' label='Medium (md)' color='rgb(0, 180, 255)' />
      <BreakpointMarker breakpoint='lg' label='Large (lg)' color='rgb(126, 0, 255)' />
      <BreakpointMarker breakpoint='xl' label='Extra Large (xl)' color='rgb(255, 0, 166)' /> */}

      {/* Matter UI */}

      <Header />
      <GridContainer
        look={{
          display: 'flex',
          width: '100%',
          height: '100vh', // Full viewport height
          boxSizing: 'border-box',
        }}
      >
        <Section
          look={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <MatterUi />
        </Section>
        <MenuSpeedDial />
      </GridContainer>
    </>
  )
}

export default App

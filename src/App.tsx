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
const App = () => {
  const gridItemProps = {
    xs: 12,
    sm: 12,
    mg: 8,
    lg: 6,
    xl: 4,
  }

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
          <Section look={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activator look={{ bgColor: 'rgb(240, 128, 128)' }}>Button 1</Activator>
          </Section>
        </Section>
      </GridContainer>
      <Section>
        <GridContainer look={{ border: '3px solid', borderColor: 'rgb(152, 98, 254)', radius: 10 }}>
          <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
            <Letter look={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>{'Grid Container'}</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(98, 211, 233)' }}>
            <Letter>Grid Item 1</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(144, 238, 144)' }}>
            <Letter>Grid Item 2</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(254, 250, 212)' }}>
            <Letter>Grid Item 3</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(183, 244, 216)' }}>
            <Letter>Grid Item 4</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(227, 186, 143)' }}>
            <Letter>Grid Item 5</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(132, 140, 207)' }}>
            <Letter>Grid Item 6 (Color: Moody Blue)</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(255, 148, 112)' }}>
            <Letter>Grid Item 7</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(205, 209, 228)' }}>
            <Letter>Grid Item 8</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(249, 191, 59)' }}>
            <Letter>Grid Item 9</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(3, 138, 255)' }}>
            <Letter>Grid Item 10</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(0, 181, 204)' }}>
            <Letter>Grid Item 11</Letter>
          </GridItem>
          <GridItem {...gridItemProps} look={{ bgColor: 'rgb(240, 128, 128)' }}>
            <Letter>Grid Item 12</Letter>
          </GridItem>
        </GridContainer>
        {/* Material UI */}
        {/* <Grid container>
          <Grid size={12} sx={{ bgcolor: 'rgb(249, 191, 59)', borderRadius: '8px' }}>
            <Typography>MUI Material</Typography>
          </Grid>
          <Grid size={4} sx={{ bgcolor: 'rgb(249, 191, 59)', borderRadius: '8px' }} />
          <Grid size={4} />
          <Grid size={4} sx={{ bgcolor: 'rgb(98, 211, 233)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(144, 238, 144)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(254, 250, 212)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(183, 244, 216)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(227, 186, 143)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(255, 255, 255)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(255, 148, 112)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(205, 209, 228)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(249, 191, 59)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(3, 138, 255)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(0, 181, 204)', padding: '16px', borderRadius: '8px' }} />
          <Grid size={4} sx={{ bgcolor: 'rgb(240, 128, 128)', padding: '16px', borderRadius: '8px' }} />
        </Grid> */}
      </Section>
    </>
  )
}

export default App

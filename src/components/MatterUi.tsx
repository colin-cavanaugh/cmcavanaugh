import React from 'react'
import { Activator } from '../library/matter-ui-activator'
import { GridContainer } from '../library/matter-ui-gridcontainer'
import { Section } from '../library/matter-ui-section'
import { Letter } from '../library/matter-ui-letter'
import { Profile } from '../library/matter-ui-profile'
import { GridItem } from '../library/matter-ui-griditem'
import { Box, Chip, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const MatterUi = () => {
  const theme = useTheme()
  const gridItemProps = (borderColor: string) => ({
    xs: 12,
    sm: 12,
    mg: 8,
    lg: 6,
    xl: 4,
    look: {
      border: '2px solid',
      borderColor: borderColor,
      display: 'flex',
    },
  })
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }))
  return (
    <GridContainer look={{ border: '3px solid', borderColor: theme.palette.text.primary, radius: 10, gap: 6 }}>
      <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
        <Letter look={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>{'Grid Container'}</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(98, 211, 233)')}>
        <Letter>Grid Item 1</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(144, 238, 144)')}>
        <Letter>Grid Item 2</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(254, 250, 212)')}>
        <Letter>Grid Item 3</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(183, 244, 216)')}>
        <Letter>Grid Item 4</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(227, 186, 143)')}>
        <Letter>Grid Item 5</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(132, 140, 207)')}>
        <Letter>Grid Item 6</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(255, 148, 112)')}>
        <Letter>Grid Item 7</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(205, 209, 228)')}>
        <Letter>Grid Item 8</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(249, 191, 59)')}>
        <Letter>Grid Item 9</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(3, 138, 255)')}>
        <Letter>Grid Item 10</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(0, 181, 204)')}>
        <Letter>Grid Item 11</Letter>
      </GridItem>
      <GridItem {...gridItemProps('rgb(240, 128, 128)')}>
        <Letter>Grid Item 12</Letter>
      </GridItem>

      <Section look={{ border: '3px solid', borderColor: theme.palette.text.primary, radius: 10, marginTop: 5 }}>
        <Letter look={{ fontSize: 28, marginBottom: 15 }}>Section</Letter>
        <Activator look={{ bgColor: 'rgb(240, 128, 128)', height: 45, width: 200 }}>Activator</Activator>
        <Letter look={{ fontStyle: 'italic', fontSize: 20 }}>Letter</Letter>
        <Letter look={{ fontWeight: 'bolder', fontSize: 20 }}>Text</Letter>
        <Letter look={{ fontWeight: 'bolder', fontSize: 20, fontStyle: 'italic', color: 'rgb(3, 138, 255)' }}>
          Typography
        </Letter>
      </Section>
    </GridContainer>
  )
}

export default MatterUi

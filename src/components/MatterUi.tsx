import React, { useState } from 'react'
import { Activator } from '../library/matter-ui-activator'
import { GridContainer } from '../library/matter-ui-gridcontainer'
import { Section } from '../library/matter-ui-section'
import { Letter } from '../library/matter-ui-letter'
import { Profile } from '../library/matter-ui-profile'
import { GridItem } from '../library/matter-ui-griditem'
import { Box, InputLabel, Slider, TextField, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ComponentCustomizer from './ComponentCustomizer'

interface MatterUiProps {
  itemArea: number
  setItemArea: React.Dispatch<React.SetStateAction<number>>
}

const MatterUi: React.FC<MatterUiProps> = () => {
  const [itemArea, setItemArea] = useState<number>(12)
  const [fontSize, setFontSize] = useState<number>(16)
  const [borderColor, setBorderColor] = useState<string>('rgb(98, 211, 233)')
  const [borderWidth, setBorderWidth] = useState<number>(2)
  const [padding, setPadding] = useState<number>(10)
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
    // <GridContainer
    //   look={{
    //     border: '3px solid',
    //     borderColor: theme.palette.text.primary,
    //     radius: 10,
    //     gap: 6,
    //   }}
    // >
    <>
      <Section look={{ padding: 20, border: '2px solid black', radius: 10 }}>
        <Letter look={{ fontSize: 24, fontWeight: 'bold' }}>Customize Grid Item</Letter>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {/* Font Size Slider */}
          <Box>
            <Letter>Font Size: {fontSize}px</Letter>
            <Slider min={10} max={40} value={fontSize} onChange={(e, value) => setFontSize(value as number)} />
          </Box>

          {/* Border Color Picker */}
          <InputLabel sx={{ color: 'black' }}>Border Color</InputLabel>
          <TextField
            // label='Border Color'
            type='text'
            value={borderColor}
            onChange={e => setBorderColor(e.target.value)}
            fullWidth
          />

          {/* Border Width */}
          <Box>
            <Letter>Border Width: {borderWidth}px</Letter>
            <Slider min={1} max={10} value={borderWidth} onChange={(e, value) => setBorderWidth(value as number)} />
          </Box>

          {/* Padding Control */}
          <Box>
            <Letter>Padding: {padding}px</Letter>
            <Slider min={0} max={40} value={padding} onChange={(e, value) => setPadding(value as number)} />
          </Box>

          {/* Grid Item Area */}
          <Box>
            <Letter>Area: {itemArea}</Letter>
            <Slider min={1} max={12} value={itemArea} onChange={(_, value) => setItemArea(value as number)} />
          </Box>
        </Box>

        {/* Live Preview of Grid Item */}
      </Section>
      <GridContainer>
        <GridItem area={12}>
          <Letter look={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>{'Grid Container'}</Letter>
        </GridItem>
        {/* Interactive Section */}
        <GridItem
          area={itemArea}
          look={{ fontSize: fontSize, border: `${borderWidth}px solid`, borderColor: borderColor, padding: padding }}
        >
          Responsive Grid Item {itemArea}
        </GridItem>
        <GridItem area={6} look={{ border: `2px solid rgb(255, 148, 112)` }}>
          Area = 6
        </GridItem>
        <GridItem area={1} look={{ border: `2px solid rgb(255, 148, 112)` }}>
          Area = 1
        </GridItem>
        <GridItem area={2} look={{ border: `2px solid rgb(255, 148, 112)` }}>
          Area = 2
        </GridItem>
        <GridItem area={3} look={{ border: `2px solid rgb(255, 148, 112)` }}>
          Area = 3
        </GridItem>
      </GridContainer>
    </>
  )
}

export default MatterUi

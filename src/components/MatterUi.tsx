import React, { useState } from 'react'
import { Activator } from '../library/matter-ui-activator'
import { GridContainer } from '../library/matter-ui-gridcontainer'
import { Section } from '../library/matter-ui-section'
import { Letter } from '../library/matter-ui-letter'
import { Profile } from '../library/matter-ui-profile'
import { GridItem } from '../library/matter-ui-griditem'
import { Box, InputLabel, Slider, TextField, useMediaQuery, useTheme } from '@mui/material'
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
  const [itemArea2, setItemArea2] = useState<number>(12)
  const [fontSize, setFontSize] = useState<number>(16)
  const [borderColor, setBorderColor] = useState<string>('rgb(98, 211, 233)')
  const [borderWidth, setBorderWidth] = useState<number>(2)
  const [padding, setPadding] = useState<number>(10)
  const [fontSize2, setFontSize2] = useState<number>(16)
  const [borderColor2, setBorderColor2] = useState<string>('rgb(222, 30, 196)')
  const [borderWidth2, setBorderWidth2] = useState<number>(2)
  const [padding2, setPadding2] = useState<number>(10)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <GridContainer>
        <GridItem area={isSmallScreen ? 12 : 6}>
          <Section look={{ border: '2px solid', borderColor: theme.palette.text.primary }}>
            <Letter look={{ fontSize: 24, fontWeight: 'bold' }}>Customize Grid Item</Letter>

            {/* Font Size Slider */}
            <Letter>Font Size: {fontSize}px</Letter>
            <Slider min={10} max={40} value={fontSize} onChange={(e, value) => setFontSize(value as number)} />

            {/* Border Color Picker */}
            <Letter look={{ color: 'black' }}>Border Color</Letter>
            <TextField
              // label='Border Color'
              type='text'
              value={borderColor}
              onChange={e => setBorderColor(e.target.value)}
              fullWidth
            />
            {/* Border Width */}
            <Letter>Border Width: {borderWidth}px</Letter>
            <Slider min={1} max={10} value={borderWidth} onChange={(e, value) => setBorderWidth(value as number)} />

            {/* Padding Control */}
            <Letter>Padding: {padding}px</Letter>
            <Slider min={0} max={40} value={padding} onChange={(e, value) => setPadding(value as number)} />

            {/* Grid Item Area */}
            <Letter>Area: {itemArea}</Letter>
            <Slider min={1} max={12} value={itemArea} onChange={(_, value) => setItemArea(value as number)} />
          </Section>
        </GridItem>
        <GridItem area={isSmallScreen ? 12 : 6}>
          <Section look={{ border: '2px solid', borderColor: theme.palette.text.primary }}>
            <Letter look={{ fontSize: 24, fontWeight: 'bold' }}>Customize Grid Item 2</Letter>

            {/* Font Size Slider */}
            <Letter>Font Size: {fontSize2}px</Letter>
            <Slider
              min={10}
              max={40}
              value={fontSize2}
              onChange={(e, value) => setFontSize2(value as number)}
              sx={{ color: 'rgb(231, 132, 99)' }}
            />

            {/* Border Color Picker */}
            <Letter look={{ color: 'black' }}>Border Color</Letter>
            <TextField
              // label='Border Color'
              type='text'
              value={borderColor2}
              onChange={e => setBorderColor2(e.target.value)}
              fullWidth
            />

            {/* Border Width */}
            <Letter>Border Width: {borderWidth}px</Letter>
            <Slider
              min={1}
              max={10}
              value={borderWidth2}
              onChange={(e, value) => setBorderWidth2(value as number)}
              sx={{ color: 'rgb(231, 132, 99)' }}
            />

            {/* Padding Control */}
            <Letter>Padding: {padding2}px</Letter>
            <Slider
              min={0}
              max={40}
              value={padding2}
              onChange={(e, value) => setPadding2(value as number)}
              sx={{ color: 'rgb(231, 132, 99)' }}
            />

            {/* Grid Item Area */}
            <Letter>Area: {itemArea2}</Letter>
            <Slider
              min={1}
              max={12}
              value={itemArea2}
              onChange={(_, value) => setItemArea2(value as number)}
              sx={{ color: 'rgb(231, 132, 99)' }}
            />
          </Section>
        </GridItem>
      </GridContainer>
      <GridContainer>
        {/* Live Preview of Grid Item */}
        {/* </GridContainer> */}
        {/* <GridContainer> */}
        <GridItem area={12}>
          <Letter look={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>{'Grid Container'}</Letter>
        </GridItem>
        {/* Interactive Section */}
        <GridItem
          area={itemArea}
          look={{
            border: `${borderWidth}px solid`,
            borderColor: borderColor,
            padding: padding,
            overflow: 'hidden', // ✅ Ensures content doesn't overflow its container
            textOverflow: 'ellipsis', // ✅ Enables ellipsis for text overflow
            whiteSpace: 'nowrap', // ✅ Prevents wrapping
            width: '100%', // ✅ Ensures it takes the full width of the container
          }}
        >
          <Letter
            look={{
              fontSize: fontSize,
              whiteSpace: 'nowrap', // ✅ Prevents wrapping
              overflow: 'hidden', // ✅ Hides overflowing content
              textOverflow: 'ellipsis', // ✅ Shows "..." when text overflows
              display: 'block', // ✅ Ensures it behaves as a block element
              width: '100%', // ✅ Ensures the ellipsis works correctly
            }}
          >
            Responsive Grid Item {itemArea}
          </Letter>
        </GridItem>
        <GridItem
          area={itemArea2}
          look={{
            border: `${borderWidth2}px solid`,
            borderColor: borderColor2,
            padding: padding2,
            overflow: 'hidden', // ✅ Ensures content doesn't overflow its container
            textOverflow: 'ellipsis', // ✅ Enables ellipsis for text overflow
            whiteSpace: 'nowrap', // ✅ Prevents wrapping
            width: '100%', // ✅ Ensures it takes the full width of the container
          }}
        >
          <Letter
            look={{
              fontSize: fontSize2,
              whiteSpace: 'nowrap', // ✅ Prevents wrapping
              overflow: 'hidden', // ✅ Hides overflowing content
              textOverflow: 'ellipsis', // ✅ Shows "..." when text overflows
              display: 'block', // ✅ Ensures it behaves as a block element
              width: '100%', // ✅ Ensures the ellipsis works correctly
            }}
          >
            Responsive Grid Item Two {itemArea2}
          </Letter>
        </GridItem>
        {/* <GridItem area={6} look={{ border: `2px solid rgb(255, 148, 112)` }}>
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
        </GridItem> */}
      </GridContainer>
    </>
  )
}

export default MatterUi

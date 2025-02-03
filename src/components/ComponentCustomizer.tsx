import React, { useState } from 'react'
import { Section } from '../library/matter-ui-section'
import { Letter } from '../library/matter-ui-letter'
import { GridItem } from '../library/matter-ui-griditem'
import { Slider, TextField, Box } from '@mui/material'

// ✅ Define the props interface
interface ComponentCustomizerProps {
  itemArea: number
  setItemArea: React.Dispatch<React.SetStateAction<number>>
}

const ComponentCustomizer: React.FC<ComponentCustomizerProps> = ({ itemArea, setItemArea }) => {
  const [fontSize, setFontSize] = useState<number>(16)
  const [borderColor, setBorderColor] = useState<string>('rgb(98, 211, 233)')
  const [borderWidth, setBorderWidth] = useState<number>(2)
  const [padding, setPadding] = useState<number>(10)

  return (
    <Section look={{ padding: 20, border: '2px solid black', radius: 10 }}>
      <Letter look={{ fontSize: 24, fontWeight: 'bold' }}>Customize Grid Item</Letter>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Font Size Slider */}
        <Box>
          <Letter>Font Size: {fontSize}px</Letter>
          <Slider min={10} max={40} value={fontSize} onChange={(e, value) => setFontSize(value as number)} />
        </Box>

        {/* Border Color Picker */}
        <TextField
          label='Border Color'
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
      <GridItem
        area={itemArea}
        look={{
          border: `${borderWidth}px solid`,
          borderColor: borderColor,
          padding: padding,
        }}
      >
        <Letter look={{ fontSize }}>Live Grid Item</Letter>
      </GridItem>
    </Section>
  )
}

export default ComponentCustomizer

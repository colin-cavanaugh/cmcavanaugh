import React, { useState, useEffect, FC } from 'react'
import { Box, Typography } from '@mui/material'

export interface BreakpointMarkerProps {
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' // Responsive breakpoints
  label: string // The label to display for the marker
  color: string // The color of the marker
}

const BreakpointMarker: FC<BreakpointMarkerProps> = ({ breakpoint, label, color }) => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        borderBottom: `4px solid ${color}`,
        display: { [breakpoint]: 'block', xs: 'none' },
        textAlign: 'center',
        backgroundColor: color,
        color: '#fff',
        zIndex: 1000,
        pointerEvents: 'none',
        padding: '4px 0',
      }}
    >
      <Typography variant='caption'>
        {label} - {size.width} x {size.height}
      </Typography>
    </Box>
  )
}

export default BreakpointMarker

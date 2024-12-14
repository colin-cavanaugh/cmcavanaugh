import React, { CSSProperties } from 'react'

export interface Look extends CSSProperties {
  m?: number | string // Margin shorthand
  p?: number | string // Padding shorthand
  flex?: string // Flex display
  flexDirection?: 'row' | 'column' // Flex direction
  border?: string
  bgColor?: string // Background color
  borderColor?: string // Border color
  radius?: number | string // Border radius
  fontSize?: string | number // Font size
  customStyles?: Record<string, string | number> // Additional custom styles
}
// Shared props for components with `look`
export interface BaseProps<T = HTMLElement> extends React.HTMLAttributes<T> {
  look?: Look // For overriding styles
  style?: CSSProperties // Inline styles
  children?: React.ReactNode
}
export interface GridItemProps extends BaseProps<HTMLDivElement> {
  xs?: number // Columns on extra-small screens (e.g., mobile)
  sm?: number // Columns on small screens
  md?: number // Columns on medium screens
  lg?: number // Columns on large screens
  xl?: number // Columns on extra-large screens
}

export interface BreakpointMarkerProps {
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' // Responsive breakpoints
  label: string // The label to display for the marker
  color: string // The color of the marker
}

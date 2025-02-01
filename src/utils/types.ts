import React, { CSSProperties } from 'react'

export interface Look extends CSSProperties {
  m?: number | string // Margin shorthand
  p?: number | string // Padding shorthand
  py?: number | string
  gap?: number | string
  flex?: string | number // Flex value (e.g., flex: 1 or flex: '1 1 auto')
  height?: number | string
  width?: number | string
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' // Flex direction
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' // Alignment along the main axis
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' // Alignment along the cross axis
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' // Overrides alignItems for a specific item
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' // Flex wrapping
  flexGrow?: number // Specifies how much a flex item grows
  flexShrink?: number // Specifies how much a flex item shrinks
  flexBasis?: string | number // Basis size of a flex item
  order?: number // Specifies the order of the flex item
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
export interface ProfileProps extends BaseProps<HTMLImageElement> {
  src: string // Image source URL (required)
  placeholder?: string // Fallback image URL if `src` fails to load
  color?: string
  width?: number | string // Width of the image
  height?: number | string // Height of the image
  borderRadius?: number | string // Border radius (e.g., circle, rounded corners)
  border?: string // Optional border styling
  boxShadow?: string // Optional box-shadow styling
  alt?: string // Alt text for accessibility (optional, default: "Profile image")
}
export interface Action {
  icon: JSX.Element
  name: string
  action: 'link' | 'download' | 'toggle'
  link?: string
}

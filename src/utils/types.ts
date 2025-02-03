import React, { CSSProperties } from 'react'

export interface Look extends CSSProperties {
  // ✅ Margin Shorthand Properties
  m?: number | string
  mx?: number | string
  my?: number | string
  mt?: number | string
  mb?: number | string
  ml?: number | string
  mr?: number | string
  marginX?: number | string
  marginY?: number | string
  // ✅ Padding Shorthand Properties
  p?: number | string
  px?: number | string
  py?: number | string
  pt?: number | string
  pb?: number | string
  pl?: number | string
  pr?: number | string
  paddingX?: number | string
  paddingY?: number | string

  gap?: number | string
  flex?: number | string
  height?: number | string
  width?: number | string
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  flexGrow?: number
  flexShrink?: number
  flexBasis?: string | number
  order?: number
  border?: string
  bgColor?: string
  borderColor?: string
  radius?: number | string
  fontSize?: string | number
  customStyles?: Record<string, string | number>
}

// Shared props for components with `look`
export interface BaseProps<T = HTMLElement> extends React.HTMLAttributes<T> {
  look?: Look // For overriding styles
  style?: CSSProperties // Inline styles
  children?: React.ReactNode
}
export interface GridItemProps extends BaseProps<HTMLDivElement> {
  area?: number
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

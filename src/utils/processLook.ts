// utils/processLook.ts
import { Look } from './types'

export const processLook = (look: Look): Record<string, any> => {
  const { m, p, flex, flexDirection, border, borderColor, bgColor, radius, ...rest } = look

  return {
    flex: flex,
    flexDirection: flexDirection,
    margin: m,
    padding: p,
    backgroundColor: bgColor,
    border: borderColor && border ? `${border.split(' ')[0]} ${border.split(' ')[1]} ${borderColor}` : border, // Ensure borderColor is included
    borderColor: borderColor && !border ? borderColor : undefined, // Only set borderColor if border is not already set
    borderRadius: radius,
    ...rest, // Include any additional custom styles
  }
}

// utils/processLook.ts
import { Look } from './types'

const toSpacing = (value: string | number | undefined) => {
  if (typeof value === 'number') {
    return `${value * 8}px` // Mimic MUI spacing
  }
  return value
}

export const processLook = (look: Look): Record<string, any> => {
  const {
    // Margin shorthand properties
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    // Padding shorthand properties
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    flex,
    flexDirection,
    border,
    borderColor,
    bgColor,
    radius,
    color,
    ...rest
  } = look

  return {
    flex,
    flexDirection,
    // 🟢 Corrected Margin Handling
    margin: m ?? undefined,
    padding: p ?? undefined,
    marginTop: toSpacing(mt ?? marginTop ?? my ?? undefined),
    marginBottom: toSpacing(mb ?? marginBottom ?? my ?? undefined),
    marginLeft: toSpacing(ml ?? marginLeft ?? mx ?? undefined),
    marginRight: toSpacing(mr ?? marginRight ?? mx ?? undefined),
    paddingTop: toSpacing(pt ?? paddingTop ?? py ?? undefined),
    paddingBottom: toSpacing(pb ?? paddingBottom ?? py ?? undefined),
    paddingLeft: toSpacing(pl ?? paddingLeft ?? px ?? undefined),
    paddingRight: toSpacing(pr ?? paddingRight ?? px ?? undefined),
    backgroundColor: bgColor,
    border: borderColor && border ? `${border.split(' ')[0]} ${border.split(' ')[1]} ${borderColor}` : border,
    borderColor: borderColor && !border ? borderColor : undefined,
    borderRadius: radius,
    color: color || 'inherit',
    ...rest,
  }
}

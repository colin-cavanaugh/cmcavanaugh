// utils/mergeStyles.ts
import { css } from '@emotion/react'
import { processLook } from './processLook'

export const mergeStyles = (defaultStyles: any, look: Record<string, any>, style?: React.CSSProperties) => {
  const lookStyles = css(processLook(look))
  const inlineStyles = style ? css(style as Record<string, any>) : undefined

  return [defaultStyles, lookStyles, inlineStyles]
}

/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { BaseProps } from '../utils/types'
import { defaultStyles } from '../utils/defaultStyles'
import { processLook } from '../utils/processLook'

export const GridContainer: React.FC<BaseProps<HTMLDivElement>> = ({ look = {}, style, ...props }) => {
  const defaultGridStyles = defaultStyles.GridContainer // ✅ Always include default grid styles
  const lookStyles = css(processLook(look)) // ✅ Process `look` overrides
  const inlineStyles = style ? css(style as Record<string, any>) : undefined // ✅ Apply inline styles if present

  return (
    <div css={[defaultGridStyles, lookStyles, inlineStyles]} {...props}>
      {props.children}
    </div>
  )
}

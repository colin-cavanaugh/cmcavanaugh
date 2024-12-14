/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { GridItemProps } from '../utils/types'
import { defaultStyles } from '../utils/defaultStyles'
import { processLook } from '../utils/processLook'

export const GridItem: React.FC<GridItemProps> = ({ xs = 12, sm, md, lg, xl, look = {}, style, ...props }) => {
  const responsiveStyles = defaultStyles.GridItem(xs, sm, md, lg, xl)
  const lookStyles = css(processLook(look))
  const inlineStyles = style ? css(style as Record<string, any>) : undefined

  return (
    // <div css={[responsiveStyles, lookStyles, inlineStyles]} {...props}>
    <div css={[responsiveStyles, lookStyles, inlineStyles]} {...props}>
      {props.children}
    </div>
  )
}

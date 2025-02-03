/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react' // Import `css` from Emotion
import { BaseProps } from '../utils/types'
import { defaultStyles } from '../utils/defaultStyles'
import { processLook } from '../utils/processLook'

export const Letter: React.FC<BaseProps<HTMLDivElement>> = ({ look = {}, style, ...props }) => {
  const lookStyles = css(processLook(look))
  const inlineStyles = style ? css(style as Record<string, any>) : undefined

  return (
    <p css={[defaultStyles.Letter, lookStyles, inlineStyles]} {...props}>
      {props.children}
    </p>
  )
}

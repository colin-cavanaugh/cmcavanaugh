/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react' // Import `css` from Emotion
import { BaseProps } from '../utils/types'
import { defaultStyles } from '../utils/defaultStyles'
import { processLook } from '../utils/processLook'

export const Section: React.FC<BaseProps<HTMLDivElement>> = ({ look = {}, style, ...props }) => {
  // Convert styles to Emotion-compatible styles
  const lookStyles = css(processLook(look))
  const inlineStyles = style ? css(style as Record<string, any>) : undefined

  return (
    <div css={[defaultStyles.Section, lookStyles, inlineStyles]} {...props}>
      {props.children}
    </div>
  )
}

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react' // Import `css` from Emotion
import { BaseProps } from '../utils/types'
import { processLook } from '../utils/processLook'
import { defaultStyles } from '../utils/defaultStyles'

export const Activator: React.FC<BaseProps<HTMLButtonElement>> = ({ look = {}, style, ...props }) => {
  // Convert styles to Emotion-compatible styles
  const lookStyles = css(processLook(look))
  const inlineStyles = style ? css(style as Record<string, any>) : undefined

  return (
    <button
      css={[defaultStyles.Activator, lookStyles, inlineStyles]} // Combine default and processed styles
      {...props}
    >
      {props.children}
    </button>
  )
}

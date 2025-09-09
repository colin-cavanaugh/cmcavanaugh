/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ProfileProps } from '../utils/types'
import { defaultStyles } from '../utils/defaultStyles'
import { processLook } from '../utils/processLook'

// ✅ Single import; with assets.d.ts this is typed as `string`
const DefaultPersonIcon = '/matterPersonIcon.png'

export const Profile: React.FC<ProfileProps> = ({
  look = {},
  style,
  src,
  alt,
  placeholder = DefaultPersonIcon, // default to the png path
  ...props
}) => {
  const lookStyles = css(processLook(look))
  const inlineStyles = style ? css(style as Record<string, any>) : undefined

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (placeholder) {
      ;(event.target as HTMLImageElement).src = placeholder // placeholder is a string URL
    }
  }

  return (
    <img
      src={src ?? placeholder}
      alt={alt}
      onError={handleError}
      css={[defaultStyles.Profile, lookStyles, inlineStyles]}
      {...props}
    />
  )
}

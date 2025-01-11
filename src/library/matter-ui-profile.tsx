/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BaseProps, ProfileProps } from '../utils/types'
import { defaultPlaceholder, defaultStyles } from '../utils/defaultStyles'
import { processLook } from '../utils/processLook'
import DefaultPersonIcon from '../img/matterPersonIcon.png'

export const Profile: React.FC<ProfileProps> = ({
  look = {},
  style,
  src,
  alt,
  placeholder = DefaultPersonIcon,
  ...props
}) => {
  const lookStyles = css(processLook(look))
  const inlineStyles = style ? css(style as Record<string, any>) : undefined

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (placeholder) {
      return ((event.target as HTMLImageElement).src = placeholder)
    }
  }

  return (
    <img src={src} alt={alt} onError={handleError} css={[defaultStyles.Profile, lookStyles, inlineStyles]} {...props} />
  )
}

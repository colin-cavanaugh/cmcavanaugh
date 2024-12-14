import styled from '@emotion/styled'
import { Look } from '../utils/types'
import { Section } from './matter-ui-section'

export const StyledSection = styled(Section)<Look>`
  margin: ${props => props.m || props.margin || 0};
  padding: ${props => props.p || props.padding || 0};
  display: ${props => props.flex || 'block'};
  flex-direction: ${props => props.direction || 'row'};
  background-color: ${props => props.bgColor || 'transparent'};
  border-color: ${props => props.borderColor || 'transparent'};
  border-radius: ${props => props.radius || '0'};
  font-size: ${props => props.fontSize || 'inherit'};

  &:hover {
    opacity: 1;
    border: 1px solid;
    border-color: red;
  }
`
// border-color: ${props => props.color || 'transparent'};

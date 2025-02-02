import { GridContainer } from '../library/matter-ui-gridcontainer'
import { Letter } from '../library/matter-ui-letter'
import { GridItem } from '../library/matter-ui-griditem'
import { useTheme } from '@mui/material'

const PersonalLife = () => {
  const theme = useTheme()
  return (
    <GridContainer
      look={{
        border: '3px solid',
        borderColor: theme.palette.text.primary,
        radius: 10,
        gap: 6,
      }}
    >
      <GridItem>
        <Letter>Personal Life</Letter>
      </GridItem>
    </GridContainer>
  )
}

export default PersonalLife

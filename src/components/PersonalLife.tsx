import { GridContainer } from '../library/matter-ui-gridcontainer'
import { Letter } from '../library/matter-ui-letter'
import { GridItem } from '../library/matter-ui-griditem'
import { Box, useTheme } from '@mui/material'
import { NAVBAR_HEIGHT_PX } from './NavBar'

const PersonalLife = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        mt: `${NAVBAR_HEIGHT_PX}px`,
        height: `calc(100dvh - ${NAVBAR_HEIGHT_PX}px)`,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
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
    </Box>
  )
}

export default PersonalLife

import { useRouterState } from '@tanstack/react-router'
import { GridItem } from '../library/matter-ui-griditem'
import { Letter } from '../library/matter-ui-letter'
import { Profile } from '../library/matter-ui-profile'
import { router } from '../routes/routes'
import { Section } from '../library/matter-ui-section'
import { Divider, useTheme, useMediaQuery } from '@mui/material'

const Header = () => {
  const theme = useTheme()
  const { location } = useRouterState()
  const pathName = location.pathname

  // ✅ Responsive adjustments
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')) // `md` and below (tablet & mobile)

  // ✅ Update title based on the current route
  const headerTitle =
    pathName === '/'
      ? 'About'
      : pathName === '/matterui'
      ? 'Matter UI'
      : 'Not Found'

  return (
    <Section
      look={{
        position: 'sticky', // ✅ Keeps it in place
        top: 0, // ✅ Ensures it sticks to the top
        width: '100%',
        zIndex: 1000, // ✅ Keeps it above other elements
        backgroundColor: theme.palette.background.default, // ✅ Matches theme background
        padding: isSmallScreen ? '10px' : '15px 20px',
      }}
    >
      <GridItem
        look={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row', // ✅ Stacks items on small screens
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isSmallScreen ? 6 : 20,
          width: '100%',
        }}
      >
        <Profile
          look={{
            width: isSmallScreen ? 55 : 150,
            height: isSmallScreen ? 55 : 150,
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          src={'/groheadshot.jpg'}
          onClick={() => router.navigate({ to: '/' })}
        />
        <Letter
          look={{ fontSize: isSmallScreen ? 24 : 50, textAlign: 'center' }}
        >
          {headerTitle}
        </Letter>
        <Letter
          look={{ fontSize: isSmallScreen ? 18 : 28, textAlign: 'center' }}
        >
          Colin Cavanaugh
        </Letter>
      </GridItem>
      <Divider
        sx={{
          opacity: 0.2,
          backgroundColor: theme.palette.text.primary,
          height: '1px',
          width: '100%',
        }}
      />
    </Section>
  )
}

export default Header

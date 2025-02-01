import { useRouterState } from '@tanstack/react-router'
import { GridItem } from '../library/matter-ui-griditem'
import { Letter } from '../library/matter-ui-letter'
import { Profile } from '../library/matter-ui-profile'
import { router } from '../routes/routes'
import { Section } from '../library/matter-ui-section'
import { Divider, useTheme } from '@mui/material'

const Header = () => {
  const theme = useTheme()
  const { location } = useRouterState()
  const pathName = location.pathname

  const headerTitle =
    pathName === '/'
      ? 'About Me'
      : pathName === '/matterui'
      ? 'Matter UI'
      : 'Not Found'

  return (
    <Section
      look={{
        width: '100%',
        position: 'fixed', // ✅ Keeps header at the top
        top: 0,
        left: 0,
        zIndex: 1000, // ✅ Ensure header stays above content
        backgroundColor: theme.palette.background.default, // ✅ Keep header visible on scroll
        padding: '10px 20px', // ✅ Adjust padding for spacing
      }}
    >
      <GridItem
        look={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Profile
          look={{ borderRadius: 75, cursor: 'pointer' }}
          src={'src/img/groheadshot.jpg'}
          onClick={() => router.navigate({ to: '/' })}
        />
        <Letter look={{ fontSize: 50 }}>{headerTitle}</Letter>
        <Letter look={{ fontSize: 28, textAlign: 'center' }}>
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

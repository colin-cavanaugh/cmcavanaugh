import { useMediaQuery, useTheme } from '@mui/material'
import { Profile } from '../library/matter-ui-profile'
import { Letter } from '../library/matter-ui-letter'
import { GridContainer } from '../library/matter-ui-gridcontainer'
import { GridItem } from '../library/matter-ui-griditem'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isMed = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()

  return (
    <div
      style={{
        height: '100dvh',
        display: 'grid',
        gridTemplateRows: 'auto 1fr', // header row, scrollable content row
        overflow: 'hidden', // prevent body scroll; delegate to content area
      }}
    >
      {/* --- Header (non-scrolling) --- */}
      <div
        style={{
          position: 'sticky', // sticks if parent ever scrolls (defensive)
          top: 0,
          zIndex: 1,
          background: theme.palette.background.default,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <GridContainer
          look={{
            padding: isSmall ? '12px 12px' : '16px 20px',
          }}
        >
          <GridItem area={isSmall || isMed ? 12 : 12}>
            <Profile
              look={{
                // Fixed size so it doesn't resize with viewport
                width: 175,
                height: 175,
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              src={'groheadshot.jpg'}
              onClick={() => navigate('/')}
            />
          </GridItem>

          <GridItem area={isSmall || isMed ? 12 : 12}>
            <Letter
              look={{
                // Bounded responsive font; won’t get tiny or gigantic
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: theme.palette.text.title,
                fontWeight: 'bold',
              }}
            >
              Colin M. Cavanaugh
            </Letter>
            <Letter
              look={{
                fontSize: 'clamp(16px, 2.6vw, 22px)',
                color: theme.palette.text.title,
                fontWeight: 'bold',
              }}
            >
              Full Stack Developer
            </Letter>
          </GridItem>
        </GridContainer>
      </div>

      {/* --- Scrollable content area --- */}
      <div
        style={{
          overflowY: 'auto',
          // Optional: nice padding for the scroll area
          padding: isSmall ? '8px 12px' : '12px 20px',
        }}
      >
        <GridContainer>
          <GridItem area={12}>
            <Letter
              look={{
                fontSize: isSmall ? 14 : 18,
                lineHeight: 1.75,
                marginTop: 2,
              }}
            >
              I’m a dedicated and versatile software engineer with over two years of full-stack development experience,
              specializing in building scalable, user-centric applications. My journey began with developing a robust
              internal CRM and workflow management system, where I honed my skills in React, Node.js, DynamoDB, and AWS
              services. This project not only solidified my technical expertise but also ignited my passion for crafting
              solutions that make a meaningful impact on both users and teams.
            </Letter>
          </GridItem>

          <GridItem area={12}>
            <Letter
              look={{
                fontSize: isSmall ? 14 : 18,
                lineHeight: 1.75,
                marginTop: 2,
              }}
            >
              Over the past year, I’ve focused on optimizing real-time features like WebSocket integration, notification
              systems, and dynamic data updates while ensuring seamless user experiences across platforms. I’m deeply
              curious and love to learn, whether it’s exploring AI for development optimization or mastering new
              technologies. My approach is grounded in thoughtful planning, iterative improvement, and a strong
              commitment to delivering quality results. I’m a dedicated full-stack developer with over two years of
              experience building scalable, user-centric applications.
            </Letter>
          </GridItem>

          <GridItem area={12}>
            <Letter
              look={{
                fontSize: isSmall ? 14 : 18,
                lineHeight: 1.75,
                marginTop: 2,
              }}
            >
              Recently, I’ve focused on expanding large-scale TypeScript development and architecting high-performance
              caching solutions that keep massive datasets fresh and consistent across users. My journey began with
              building a robust internal CRM and workflow management system, where I mastered React, Node.js, DynamoDB,
              and AWS. Since then, I’ve continuously refined real-time systems, WebSocket integrations, and shared cache
              layers that power seamless collaboration and reliable performance.
            </Letter>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default About

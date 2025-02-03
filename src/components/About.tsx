import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { router } from '../routes/routes'
import { Profile } from '../library/matter-ui-profile'
import { Section } from '../library/matter-ui-section'
import { Letter } from '../library/matter-ui-letter'
import { GridContainer } from '../library/matter-ui-gridcontainer'
import { GridItem } from '../library/matter-ui-griditem'

const About = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <GridContainer
        look={{
          // height: '100dvh', // Ensures the container covers the full viewport
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : isMediumScreen ? 'column' : 'row',
          overflowY: 'auto', // Allows scrolling only if needed
        }}
      >
        <>
          {/* Profile Picture - Left (Desktop), Top (Mobile) */}
          <GridItem area={isSmallScreen ? 12 : 12}>
            <Profile
              look={{
                width: isSmallScreen ? 120 : isMediumScreen ? 180 : 250,
                height: isSmallScreen ? 120 : isMediumScreen ? 180 : 250,
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              src={'/coloradoPicCropped.png'}
              onClick={() => router.navigate({ to: '/' })}
            />
          </GridItem>
        </>
      </GridContainer>
      <GridContainer>
        <GridItem area={isSmallScreen ? 12 : 12}>
          <Letter
            look={{
              fontSize: isSmallScreen ? 32 : 48,
              color: theme.palette.text.title,
              fontWeight: 'bold',
            }}
          >
            Colin M. Cavanaugh
          </Letter>
          <Letter
            look={{
              fontSize: isSmallScreen ? 20 : 28,
              color: theme.palette.text.title,
              fontWeight: 'bold',
            }}
          >
            Full Stack Developer
          </Letter>

          <Letter
            look={{
              fontSize: isSmallScreen ? 14 : 18,
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
          <Letter
            look={{
              fontSize: isSmallScreen ? 14 : 18,
              lineHeight: 1.75,
              marginTop: 2,
            }}
          >
            Over the past year, I’ve focused on optimizing real-time features like WebSocket integration, notification
            systems, and dynamic data updates while ensuring seamless user experiences across platforms. I’m deeply
            curious and love to learn, whether it’s exploring AI for development optimization or mastering new
            technologies. My approach is grounded in thoughtful planning, iterative improvement, and a strong commitment
            to delivering quality results.
          </Letter>
        </GridItem>
      </GridContainer>
    </>
  )
}

export default About

import React from 'react'
import { Letter } from '../library/matter-ui-letter'
import { Section } from '../library/matter-ui-section'
import { Box, Divider, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material'
import { router } from '../routes/routes'
import { Profile } from '../library/matter-ui-profile'
import { GridItem } from '../library/matter-ui-griditem'

const AboutMe = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')) // `md` and below (tablet & mobile)
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')) // `md` and below (tablet & mobile)

  return (
    // <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'calc(100vh - 275px)' }}>
    <Grid2 container spacing={0}>
      <Grid2
        size={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // ✅ Centers items horizontally
          justifyContent: 'center',
          gap: isSmallScreen ? 6 : 10,
          padding: 8,
        }}
      >
        <Profile
          look={{
            width: isSmallScreen ? 150 : isMediumScreen ? 200 : 300,
            height: isSmallScreen ? 150 : isMediumScreen ? 200 : 300,
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          src={'/coloradoPicCropped.png'}
          onClick={() => router.navigate({ to: '/' })}
        />
      </Grid2>

      <Grid2 size={9}>
        <Box py={4}>
          <Typography
            sx={{ fontSize: 48, color: theme.palette.text.title, textAlign: 'left', fontWeight: 'bold' }}
            width={'100%'}
          >
            Colin M. Cavanaugh
          </Typography>
          <Typography
            sx={{
              fontSize: 28,
              color: theme.palette.text.title,
              textAlign: 'left',
              fontWeight: 'bold',
            }}
            width={'100%'}
          >
            Full Stack Developer
          </Typography>
        </Box>
        {/* <Section look={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}> */}
        <Letter look={{ fontSize: 16, width: '85%', lineHeight: 1.75 }}>
          {`I’m a dedicated and versatile software engineer with over two years of full-stack development experience,
          specializing in building scalable, user-centric applications. My journey began with developing a robust
          internal CRM and workflow management system, where I honed my skills in React, Node.js, DynamoDB, and AWS
          services. This project not only solidified my technical expertise but also ignited my passion for crafting
          solutions that make a meaningful impact on both users and teams.  I thrive in collaborative environments,
          where my ability to solve complex problems and think creatively helps drive innovation.`}
        </Letter>
        <Letter look={{ fontSize: 16, width: '85%', lineHeight: 1.75, paddingTop: 10 }}>
          {`Over the past year,
          I’ve focused on optimizing real-time features like WebSocket integration, notification systems, and dynamic
          data updates, while ensuring seamless user experiences across platforms. I’ve also led efforts to implement
          best practices in version control, API design, and frontend architecture. I’m deeply curious and love to
          learn. Whether it’s exploring AI for development optimization or mastering new technologies, I’m always
          looking to grow and contribute to projects that challenge and inspire me. My approach is grounded in a balance
          of thoughtful planning, iterative improvement, and a strong commitment to delivering quality results. I’m
          excited about the opportunity to bring my technical expertise, creative problem-solving, and enthusiasm to
          Twitch, a platform that embodies the intersection of technology and community.`}
        </Letter>
        {/* </Section> */}
      </Grid2>
    </Grid2>
    // </Box>
  )
}

export default AboutMe

import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { router } from '../routes/routes'
import { Profile } from '../library/matter-ui-profile'

const AboutMe = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')) // Small screens
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')) // Tablets & below

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', // ✅ Centers vertically
        justifyContent: 'center', // ✅ Centers horizontally on large screens
        gap: isSmallScreen ? 2 : 6, // Adjusts spacing dynamically
        paddingX: isSmallScreen ? 3 : 10, // Horizontal padding
        paddingY: isSmallScreen ? 6 : 10, // Vertical padding
      }}
    >
      {/* Profile Picture on the Left */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0, // Prevents shrinking
        }}
      >
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
      </Box>

      {/* Right Side Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // ✅ Ensures vertical centering
          maxWidth: '750px', // Prevents stretching on large screens
          textAlign: 'left',
        }}
      >
        {/* Name & Title */}
        <Typography
          sx={{
            fontSize: isSmallScreen ? 32 : 48,
            color: theme.palette.text.title,
            fontWeight: 'bold',
          }}
        >
          Colin M. Cavanaugh
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? 20 : 28,
            color: theme.palette.text.title,
            fontWeight: 'bold',
          }}
        >
          Full Stack Developer
        </Typography>

        {/* About Me Description */}
        <Typography
          sx={{
            fontSize: isSmallScreen ? 14 : 18,
            lineHeight: 1.75,
            marginTop: 2,
          }}
        >
          I’m a dedicated and versatile software engineer with over two years of
          full-stack development experience, specializing in building scalable,
          user-centric applications. My journey began with developing a robust
          internal CRM and workflow management system, where I honed my skills
          in React, Node.js, DynamoDB, and AWS services. This project not only
          solidified my technical expertise but also ignited my passion for
          crafting solutions that make a meaningful impact on both users and
          teams.
        </Typography>

        <Typography
          sx={{
            fontSize: isSmallScreen ? 14 : 18,
            lineHeight: 1.75,
            marginTop: 2,
          }}
        >
          Over the past year, I’ve focused on optimizing real-time features like
          WebSocket integration, notification systems, and dynamic data updates
          while ensuring seamless user experiences across platforms. I’m deeply
          curious and love to learn, whether it’s exploring AI for development
          optimization or mastering new technologies. My approach is grounded in
          thoughtful planning, iterative improvement, and a strong commitment to
          delivering quality results.
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutMe

import React from 'react'
import { Letter } from '../library/matter-ui-letter'
import { Section } from '../library/matter-ui-section'
import { Divider, useTheme } from '@mui/material'

const AboutMe = () => {
  const theme = useTheme()

  return (
    <>
      <Section look={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '58%' }}>
        <Letter look={{ fontSize: 18 }}>
          I’m a dedicated and versatile software engineer with over two years of full-stack development experience,
          specializing in building scalable, user-centric applications. My journey began with developing a robust
          internal CRM and workflow management system, where I honed my skills in React, Node.js, DynamoDB, and AWS
          services. This project not only solidified my technical expertise but also ignited my passion for crafting
          solutions that make a meaningful impact on both users and teams.
        </Letter>
      </Section>

      <Section look={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '58%' }}>
        <Letter look={{ fontSize: 18 }}>
          I thrive in collaborative environments, where my ability to solve complex problems and think creatively helps
          drive innovation. Over the past year, I’ve focused on optimizing real-time features like WebSocket
          integration, notification systems, and dynamic data updates, while ensuring seamless user experiences across
          platforms. I’ve also led efforts to implement best practices in version control, API design, and frontend
          architecture.
        </Letter>
      </Section>

      <Section look={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '58%' }}>
        <Letter look={{ fontSize: 18 }}>
          I’m deeply curious and love to learn. Whether it’s exploring AI for development optimization or mastering new
          technologies, I’m always looking to grow and contribute to projects that challenge and inspire me. My approach
          is grounded in a balance of thoughtful planning, iterative improvement, and a strong commitment to delivering
          quality results.
        </Letter>
      </Section>

      <Section look={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '58%' }}>
        <Letter look={{ fontSize: 18 }}>
          I’m excited about the opportunity to bring my technical expertise, creative problem-solving, and enthusiasm to
          Twitch, a platform that embodies the intersection of technology and community.
        </Letter>
      </Section>
    </>
  )
}

export default AboutMe

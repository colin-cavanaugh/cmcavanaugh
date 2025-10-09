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

          <GridItem area={isSmall || isMed ? 12 : 12}>
            <Letter
              look={{
                fontSize: isSmall ? 16 : 20,
                lineHeight: 1.75,
                marginTop: 2,
                fontWeight: 'bold',
              }}
            >
              I’m a full-stack software engineer who has single-handedly architected and developed a large-scale
              real-time CRM and workflow platform from the ground up. With expertise spanning system design, backend
              infrastructure, frontend engineering, and UI/UX, I thrive on turning complex problems into scalable,
              elegant solutions. I bring both technical depth and product vision—building systems that are not just
              functional, but transformative for teams and users.
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
          {/* <GridItem area={12}>
            <Letter
              look={{
                fontSize: isSmall ? 14 : 18,
                lineHeight: 1.75,
                marginTop: 2,
              }}
            >
              I’m a full-stack software engineer with over three years of experience architecting and building
              large-scale, real-time applications end to end. As the sole developer behind a robust internal CRM and
              workflow management platform, I’ve led every aspect of development—from system architecture and backend
              infrastructure to frontend engineering, UI/UX design, and third-party integrations. This hands-on
              experience has shaped me into a highly autonomous engineer who thrives on solving complex problems across
              the entire stack.
            </Letter>
          </GridItem> */}

          <GridItem area={12}>
            <Letter
              look={{
                fontSize: isSmall ? 14 : 18,
                lineHeight: 1.75,
                marginTop: 2,
              }}
            >
              Over the past two years, I’ve built and scaled real-time features like WebSocket systems, shared caching
              layers, and dynamic data synchronization that keep massive datasets fresh and consistent across users.
              I’ve architected AWS-based infrastructure, integrated both SQL and NoSQL databases, and expanded a growing
              codebase with TypeScript for stronger type safety and long-term maintainability—all while delivering a
              smooth, responsive user experience for the entire organization.
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
              I bring a thoughtful, iterative approach to software development—balancing high-level system design with
              deep technical execution. Whether I’m optimizing backend performance, refining UI interactions, or
              experimenting with AI to accelerate workflows, my focus is on building scalable, reliable solutions that
              make a meaningful impact. I’m excited by opportunities where I can combine hands-on engineering with
              architectural leadership to help teams build powerful, sustainable systems.
            </Letter>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default About
/*

⚡ Alternate (Slightly Punchier / Startup Vibe)

I’m a full-stack engineer who loves building complex systems from scratch. Over the past two years, I’ve single-handedly designed and developed a large-scale CRM and workflow platform—owning everything from architecture to UI. I care deeply about thoughtful design, real-time performance, and building software that genuinely empowers teams.
------------
I’m a full-stack software engineer who has single-handedly architected and developed a large-scale real-time CRM and workflow platform from the ground up. With expertise spanning system design, backend infrastructure, frontend engineering, and UI/UX, I thrive on turning complex problems into scalable, elegant solutions. I bring both technical depth and product vision—building systems that are not just functional, but transformative for teams and users.
------------

✨ LinkedIn About Section (Personal Narrative Variant)

I didn’t join a team to build software — I became the team.

Over the past two years, I’ve single-handedly architected, designed, and developed a large-scale CRM and workflow platform from the ground up. What started as a way to streamline marketing operations turned into a full-fledged, real-time system that powers thousands of records, dynamic updates, and seamless collaboration across an entire organization.

I work across the entire stack — from backend architecture and database design to frontend engineering and UI/UX. Along the way, I’ve mastered tools like React, TypeScript, Node.js, DynamoDB, MySQL, and AWS, and built real-time WebSocket systems and caching layers that keep data fresh and consistent for every user.

But beyond the tech, what drives me is the craft of building something meaningful — the kind of software that’s thoughtfully designed, genuinely useful, and able to scale without losing its soul. I love taking on complex problems, breaking them down, and shipping solutions that feel effortless to use.

I’m excited by opportunities where I can keep building at scale, contribute architectural vision, and collaborate with great teams to create systems that truly empower their users.


#1 Full-Stack Software Engineer | End-to-End System Architect | Real-Time Apps · AWS · React · TypeScript
#2 Full-Stack Software Engineer & Architect | Built and Scaled a Real-Time CRM Platform | React · TypeScript · AWS
#3 Full-Stack Software Engineer & Architect | Built and Scaled a Real-Time CRM Platform | React · TypeScript · AWS
*/

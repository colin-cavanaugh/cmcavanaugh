import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { GridContainer } from '../library/matter-ui-gridcontainer'
import { GridItem } from '../library/matter-ui-griditem'
import { Profile } from '../library/matter-ui-profile'
import { Letter } from '../library/matter-ui-letter'
import { Section } from '../library/matter-ui-section'
import { useNavigate } from 'react-router-dom'
//@ts-ignore
import GroIcon from '../img/gromarketing-white.png'
//@ts-ignore
import LightspeedExpeditingLogo from '../img/lightspeedexpediting-logo.png'

const experience = [
  'Sole engineer and system architect of a large-scale, real-time CRM and workflow platform, delivering end-to-end development across architecture, backend services, frontend engineering, UI/UX, and integrations.',
  'Designed and deployed a scalable backend architecture on AWS, integrating RESTful APIs with both MySQL and DynamoDB to support diverse data models, high throughput, and availability.',
  'Architected a shared caching layer for the platform’s largest dataset, enabling real-time data freshness and consistency across sessions while significantly reducing backend load.',
  'Built real-time WebSocket infrastructure to synchronize live contract and campaign data across distributed users with low latency.',
  'Led a comprehensive TypeScript migration and frontend refactor, enhancing type safety, maintainability, and development velocity across the application.',
  'Optimized React Query caching strategies and invalidation flows to deliver a more responsive and reliable user experience.',
  'Automated critical business workflows, including onboarding, deal management, contract merging, and client communications, reducing manual intervention and increasing operational efficiency.',
  'Implemented structured Git branching and semantic versioning (standard-version), improving release quality and traceability.',
  'Coordinated phased testing and delivered the platform to production within 10 months, establishing a foundation for future engineering team expansion.',
  'Maintained a strong emphasis on system scalability, performance optimization, and long-term maintainability across all components.',
]
const lightspeedExperience = [
  'Founded and operated a freight expediting company for over a decade, overseeing business strategy, operations, and client relationships.',
  'Developed custom pricing and quoting systems using Python, JavaScript, and Excel integrations, improving financial visibility and profitability.',
  'Automated data processing to maintain accurate business records and support year-over-year growth.',
  'Built enduring client relationships through transparent communication and operational reliability.',
]

/** Collapsible wrapper for any tall content */
const CollapsibleSection: React.FC<{
  logoSrc: string
  heading: string
  subheading: string
  items: string[]
  collapsedMaxHeight?: number
}> = ({ logoSrc, heading, subheading, items, collapsedMaxHeight = 260 }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    //     textAlign: 'left',
    //     gap: 1,
    //     // responsive column card
    //     flex: '1 1 520px', // grows, basis ~520px
    //     minWidth: 320, // don’t shrink too small
    //     maxWidth: '100%',
    //   }}
    // >
    <>
      <Profile src={logoSrc} look={{ width: 55, height: 55 }} />
      <Letter look={{ fontSize: 16, fontWeight: 'bold' }}>{heading}</Letter>
      <Letter look={{ fontSize: 13 }}>{subheading}</Letter>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // clamp height when collapsed
          maxHeight: expanded ? 'none' : collapsedMaxHeight,
          overflow: 'hidden',
          pr: 1,
        }}
      >
        {/* gradient fade when collapsed */}
        {!expanded && (
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 56,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.18) 100%)',
              pointerEvents: 'none',
            }}
          />
        )}

        <List dense sx={{ pl: 0 }}>
          {items.map((text, i) => (
            <ListItem key={i} sx={{ alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                <RadioButtonUncheckedIcon fontSize="inherit" />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: 'clamp(16px, 2.6vw, 22px)' }}>{text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

      <Button size="small" onClick={() => setExpanded(v => !v)} sx={{ alignSelf: 'flex-start' }}>
        {expanded ? 'Show less' : 'Read more'}
      </Button>
    </>
  )
}

const About_V2 = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()

  return (
    <div
      style={{
        height: '100dvh',
        display: 'grid',
        gridTemplateColumns: isSmall ? '1fr' : 'minmax(320px,30%) minmax(0,1fr)',
        overflow: 'hidden',
      }}
    >
      {/* LEFT (non-scrolling) */}
      <div
        style={{
          overflow: 'hidden',
          borderRight: isSmall ? 'none' : `1px solid ${theme.palette.divider}`,
          background: theme.palette.background.default,
        }}
      >
        <GridContainer
          look={{ padding: isSmall ? '12px' : '16px 20px', gridTemplateColumns: '1fr', alignItems: 'flex-start' }}
        >
          <GridItem area={12}>
            <Profile
              look={{ width: 175, height: 175, borderRadius: '50%', cursor: 'pointer' }}
              src={'groheadshot.jpg'}
              onClick={() => navigate('/')}
            />
          </GridItem>

          <GridItem area={12}>
            <Letter look={{ fontSize: 'clamp(28px, 4vw, 40px)', color: theme.palette.text.title, fontWeight: 'bold' }}>
              Colin M. Cavanaugh
            </Letter>
            <Letter
              look={{ fontSize: 'clamp(16px, 2.6vw, 22px)', color: theme.palette.text.title, fontWeight: 'bold' }}
            >
              Full-Stack Software Engineer | End-to-End System Architect | Real-Time Apps · AWS · React · TypeScript
            </Letter>
          </GridItem>

          <GridItem area={12}>
            <Letter
              look={{
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                lineHeight: 1.75,
                marginTop: 8,
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

      {/* RIGHT (scrollable) */}
      <div
        style={{
          overflowY: 'auto',
          minWidth: 0,
          padding: isSmall ? '8px 12px' : '12px 20px',
          transition: 'all 0.3s ease',
        }}
      >
        {/* use block (not 12-col grid) and lay out horizontally */}
        <GridContainer look={{ display: 'block', padding: 0 }}>
          <Section
            look={{
              display: 'flex',
              flexDirection: isSmall ? 'column' : 'row', // horizontal on wide, stacked on small
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              textAlign: 'left',
              gap: 24,
              width: '100%',
            }}
          >
            {/* Two horizontal cards */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                gap: 1,
                // responsive column card
                // flex: '1 1 520px', // grows, basis ~520px
                // minWidth: 320, // don’t shrink too small
                maxWidth: '100%',
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Typography variant="h4" sx={{ py: 1 }}>
                  Experience
                </Typography>
              </Box>
              <CollapsibleSection
                logoSrc={GroIcon}
                heading="GRO Marketing"
                subheading="Full Stack Software Engineer • February 2023 – Present"
                items={experience}
                collapsedMaxHeight={330} // tweak as you like
              />

              <CollapsibleSection
                logoSrc={LightspeedExpeditingLogo}
                heading="Lightspeed Expediting, LLC"
                subheading="Owner • January 2010 – March 2023"
                items={lightspeedExperience}
                collapsedMaxHeight={80}
              />
            </Box>
          </Section>
        </GridContainer>
      </div>
    </div>
  )
}

export default About_V2

// import {
//   Divider,
//   Grid2 as Grid,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material'
// import { Profile } from '../library/matter-ui-profile'
// import { Letter } from '../library/matter-ui-letter'
// import { GridContainer } from '../library/matter-ui-gridcontainer'
// import { GridItem } from '../library/matter-ui-griditem'
// import { useNavigate } from 'react-router-dom'
// import { Section } from '../library/matter-ui-section'
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
// import GroIcon from '../img/gromarketing-white.png'
// import LightspeedExpeditingLogo from '../img/lightspeedexpediting-logo.png'

// const experience = [
//   'Sole engineer and system architect of a large-scale, real-time CRM and workflow platform, delivering end-to-end development across architecture, backend services, frontend engineering, UI/UX, and integrations.',
//   'Designed and deployed a scalable backend architecture on AWS, integrating RESTful APIs with both MySQL and DynamoDB to support diverse data models, high throughput, and availability.',
//   'Architected a shared caching layer for the platform’s largest dataset, enabling real-time data freshness and consistency across sessions while significantly reducing backend load.',
//   'Built real-time WebSocket infrastructure to synchronize live contract and campaign data across distributed users with low latency.',
//   'Led a comprehensive TypeScript migration and frontend refactor, enhancing type safety, maintainability, and development velocity across the application.',
//   'Optimized React Query caching strategies and invalidation flows to deliver a more responsive and reliable user experience.',
//   'Automated critical business workflows, including onboarding, deal management, contract merging, and client communications, reducing manual intervention and increasing operational efficiency.',
//   'Implemented structured Git branching and semantic versioning (standard-version), improving release quality and traceability.',
//   'Coordinated phased testing and delivered the platform to production within 10 months, establishing a foundation for future engineering team expansion.',
//   'Maintained a strong emphasis on system scalability, performance optimization, and long-term maintainability across all components.',
// ]
// const lightspeedExperience = [
//   'Founded and operated a freight expediting company for over a decade, overseeing business strategy, operations, and client relationships.',
//   'Developed custom pricing and quoting systems using Python, JavaScript, and Excel integrations, improving financial visibility and profitability.',
//   'Automated data processing to maintain accurate business records and support year-over-year growth.',
//   'Built enduring client relationships through transparent communication and operational reliability.',
// ]

// const About_V2 = () => {
//   const theme = useTheme()
//   const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
//   const isMed = useMediaQuery(theme.breakpoints.down('md'))
//   const navigate = useNavigate()

//   return (
//     <div
//       style={{
//         height: '100dvh',
//         display: 'grid',
//         gridTemplateColumns: isSmall ? '1fr' : 'minmax(320px,30%) minmax(0,1fr)',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Left rail (non-scrolling) */}
//       <div
//         style={{
//           overflow: 'hidden',
//           borderRight: isSmall ? 'none' : `1px solid ${theme.palette.divider}`,
//           background: theme.palette.background.default,
//         }}
//       >
//         <GridContainer
//           look={{
//             padding: isSmall ? '12px' : '16px 20px',
//             gridTemplateColumns: '1fr', // <-- single column, not 12
//             alignItems: 'flex-start',
//           }}
//         >
//           <GridItem area={12}>
//             <Profile
//               look={{ width: 175, height: 175, borderRadius: '50%', cursor: 'pointer' }}
//               src={'groheadshot.jpg'}
//               onClick={() => navigate('/')}
//             />
//           </GridItem>

//           <GridItem area={12}>
//             <Letter look={{ fontSize: 'clamp(28px, 4vw, 40px)', color: theme.palette.text.title, fontWeight: 'bold' }}>
//               Colin M. Cavanaugh
//             </Letter>
//             <Letter
//               look={{ fontSize: 'clamp(16px, 2.6vw, 22px)', color: theme.palette.text.title, fontWeight: 'bold' }}
//             >
//               Full-Stack Software Engineer | End-to-End System Architect | Real-Time Apps · AWS · React · TypeScript
//             </Letter>
//           </GridItem>

//           <GridItem area={12}>
//             <Letter
//               look={{
//                 fontSize: isSmall ? 16 : 20,
//                 lineHeight: 1.75,
//                 marginTop: 8,
//                 fontWeight: 'bold',
//               }}
//             >
//               I’m a full-stack software engineer who has single-handedly architected and developed a large-scale
//               real-time CRM and workflow platform from the ground up. With expertise spanning system design, backend
//               infrastructure, frontend engineering, and UI/UX, I thrive on turning complex problems into scalable,
//               elegant solutions. I bring both technical depth and product vision—building systems that are not just
//               functional, but transformative for teams and users.
//             </Letter>
//           </GridItem>
//         </GridContainer>
//       </div>

//       {/* Right pane (scrollable) */}
//       <div
//         style={{
//           overflowY: 'auto',
//           minWidth: 0,
//           padding: isSmall ? '8px 12px' : '12px 20px',
//         }}
//       >
//         <GridContainer
//           look={{
//             padding: 0,
//             gridTemplateColumns: '1fr',
//             alignItems: 'flex-start',
//           }}
//         >
//           <Section
//             look={{
//               alignItems: 'flex-start',
//               justifyContent: 'flex-start',
//               textAlign: 'left',
//               width: '100%',
//               //   gap: 12,
//             }}
//           >
//             <Typography variant="h4" sx={{ py: 1 }}>
//               Experience
//             </Typography>

//             <Profile src={GroIcon} />
//             <Typography variant="h6">GRO Marketing</Typography>
//             <Typography variant="h5">Full Stack Software Engineer • February 2023 – Present</Typography>

//             {/* <Grid size={isSmall ? 12 : 8}> */}
//             <List dense>
//               {experience.map((text, i) => (
//                 <ListItem key={`gro-${i}`}>
//                   <ListItemIcon>
//                     <RadioButtonUncheckedIcon fontSize="inherit" />
//                   </ListItemIcon>
//                   <ListItemText>{text}</ListItemText>
//                 </ListItem>
//               ))}
//             </List>
//             {/* </Grid> */}

//             <Divider sx={{ my: 2 }} />

//             <Profile src={LightspeedExpeditingLogo} />
//             <Typography variant="h6">Lightspeed Expediting, LLC</Typography>
//             <Typography variant="h5">Owner • January 2010 – March 2023</Typography>

//             {/* <Grid size={isSmall ? 12 : 8}> */}
//             <List dense>
//               {lightspeedExperience.map((text, i) => (
//                 <ListItem key={`lxs-${i}`}>
//                   <ListItemIcon>
//                     <RadioButtonUncheckedIcon fontSize="inherit" />
//                   </ListItemIcon>
//                   <ListItemText>{text}</ListItemText>
//                 </ListItem>
//               ))}
//             </List>
//             {/* </Grid> */}
//           </Section>
//         </GridContainer>
//       </div>
//     </div>
//   )
// }

// export default About_V2

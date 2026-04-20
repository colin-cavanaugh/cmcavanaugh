import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import {
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Letter } from '../library/matter-ui-letter'
import { Profile } from '../library/matter-ui-profile'
import { NAVBAR_HEIGHT_PX } from './NavBar'

//@ts-ignore
import LightspeedExpeditingLogo from '../img/lightspeedexpediting-logo.png'

const outerboxExperience = [
  'Sole architect of a production platform supporting CRM, deal management, and contract automation for a 300+ person organization.',
  'Built the entire stack end-to-end: React/TypeScript frontend, Node.js/Express APIs, DynamoDB data layer (18,000+ records), and real-time WebSocket sync for 40+ concurrent users.',
  'Designed reusable service abstractions enabling rapid third-party integration (Slack, PandaDoc, Google APIs) and long-term extensibility across the platform.',
  'Automated deal workflows from initiation to signed contract in under 90 seconds; integrated PandaDoc, Slack, and Google APIs into a single orchestrated pipeline.',
  'Built an AI-powered conversational agent and strategy recommendation engine using tool calling and prompt caching, reducing API costs by 90%.',
  "Integrated with ClickUp's enterprise API to automate task deployment, workspace auditing, and service delivery tracking across 1,200+ client folders.",
  'Architected semantic deal versioning, role-based notification routing, in-memory search indexing (sub-100ms), and centralized configuration management as reusable platform primitives.',
  'Led cross-org data migration: 27,000+ user ID remappings across 14,000+ records, OAuth migration, and identity matching across workspaces at acquisition.',
]

const lightspeedExperience = [
  'Founded and operated a freight expediting business for 13 years; built custom quoting, pricing, and dispatch automation tooling in Python and JavaScript.',
  'Self-directed engineering in a production business context — instilled the fast-iteration, high-accountability mindset that defines my engineering approach today.',
]

const skillGroups = [
  {
    label: 'Languages & Frameworks',
    skills: ['TypeScript', 'JavaScript', 'React', 'Node', 'Python', 'Next.js'],
  },
  {
    label: 'AI & Agents',
    skills: ['Anthropic Claude', 'Claude Code', 'OpenAI', 'Tool Calling', 'Prompt Engineering', 'Agent Architecture'],
  },
  {
    label: 'Infrastructure',
    skills: ['AWS (EC2, S3)', 'DynamoDB', 'WebSockets', 'REST APIs', 'Event-Driven Arch', 'PM2'],
  },
  {
    label: 'Architecture',
    skills: ['System Design', 'Distributed Systems', 'API Design', 'Real-Time Data Systems', 'Caching Strategies'],
  },
  {
    label: 'Integrations',
    skills: ['Slack', 'ClickUp', 'PandaDoc', 'Google', 'MUI', 'React Query', 'Git'],
  },
]

const CollapsibleSection: React.FC<{
  logoSrc: string
  heading: string
  subheading: string
  items: string[]
  collapsedMaxHeight?: number
}> = ({ logoSrc, heading, subheading, items, collapsedMaxHeight = 260 }) => {
  const [expanded, setExpanded] = useState(false)
  const theme = useTheme()

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
        <Profile src={logoSrc} look={{ width: 40, height: 40, borderRadius: '8px', objectFit: 'contain' }} />
        <Box>
          <Letter look={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{heading}</Letter>
          <Letter look={{ fontSize: 12, color: theme.palette.text.secondary, lineHeight: 1.3 }}>{subheading}</Letter>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxHeight: expanded ? 'none' : collapsedMaxHeight,
          overflow: 'hidden',
        }}
      >
        {!expanded && (
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 48,
              background: `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
              pointerEvents: 'none',
            }}
          />
        )}
        <List dense sx={{ pl: 0, py: 0 }}>
          {items.map((text, i) => (
            <ListItem key={i} sx={{ alignItems: 'flex-start', px: 0, py: 0.25 }}>
              <ListItemIcon sx={{ minWidth: 22, mt: 0.6 }}>
                <RadioButtonUncheckedIcon sx={{ fontSize: 8, color: theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText slotProps={{ primary: { sx: { fontSize: 'clamp(13px, 1.5vw, 15px)', lineHeight: 1.55 } } }}>
                {text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

      <Button
        size="small"
        onClick={() => setExpanded(v => !v)}
        sx={{ alignSelf: 'flex-start', mt: 0.5, fontWeight: 600, fontSize: 12 }}
      >
        {expanded ? 'Show less' : 'Read more'}
      </Button>
    </>
  )
}

const SummaryText = () => {
  const theme = useTheme()
  return (
    <Box sx={{ width: '100%', minWidth: 0 }}>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
          lineHeight: 1.75,
          fontSize: 'clamp(13px, 1.5vw, 14px)',
          whiteSpace: 'normal',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          display: 'block',
        }}
      >
        Senior full-stack engineer who architects and ships production platforms end-to-end. Sole architect of a
        real-time operational platform serving a 300+ person organization — cited as a top-4 strategic factor in company
        acquisition. Specializes in scalable AWS infrastructure, AI-powered tooling, and high-velocity React/TypeScript
        applications. Built for high-intensity, high-stakes environments with an emphasis on clean abstractions and
        long-term maintainability.
      </Typography>
    </Box>
  )
}

const About_V2 = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const OuterBoxLogo = theme.palette.mode === 'dark' ? '/outerbox-logo-white.svg' : '/outerbox-logo-navy.svg'
  const navigate = useNavigate()
  const contentHeight = `calc(100dvh - ${NAVBAR_HEIGHT_PX}px)`

  return (
    <Box
      sx={{
        height: contentHeight,
        mt: `${NAVBAR_HEIGHT_PX}px`,
        display: 'grid',
        gridTemplateColumns: isSmall ? '1fr' : 'minmax(280px, 28%) minmax(0, 1fr)',
        overflow: 'hidden',
      }}
    >
      {/* LEFT — profile panel */}
      <Box
        sx={{
          overflowY: 'auto',
          borderRight: isSmall ? 'none' : `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.mode === 'light' ? '#EEF1F5' : theme.palette.background.paper,
          p: isSmall ? '16px 16px' : '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Profile
          look={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          }}
          src={'groheadshot.jpg'}
          onClick={() => navigate('/')}
        />

        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: theme.palette.text.title, letterSpacing: '-0.5px', lineHeight: 1.2 }}
          >
            Colin M. Cavanaugh
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.primary.main, fontWeight: 600, mt: 0.5, lineHeight: 1.4 }}
          >
            Senior Software Engineer
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.25, fontSize: 13 }}>
            OuterBox · Detroit, MI
          </Typography>
        </Box>

        <SummaryText />

        <Divider />

        {/* Skills */}
        <Box>
          <Typography variant="overline" sx={{ fontWeight: 700, color: theme.palette.text.secondary, fontSize: 10 }}>
            Technical Skills
          </Typography>
          {skillGroups.map(group => (
            <Box key={group.label} sx={{ mt: 1 }}>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.text.secondary, fontWeight: 600, display: 'block', mb: 0.5 }}
              >
                {group.label}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {group.skills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      fontSize: 11,
                      height: 22,
                      backgroundColor: `${theme.palette.primary.main}18`,
                      color: theme.palette.text.primary,
                      border: `1px solid ${theme.palette.primary.main}30`,
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* RIGHT — scrollable content */}
      <Box
        sx={{
          overflowY: 'auto',
          overflowX: 'hidden',
          p: isSmall ? '16px' : '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          minWidth: 0,
        }}
      >
        {/* Experience */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, letterSpacing: '-0.3px' }}>
            Experience
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <CollapsibleSection
              logoSrc={OuterBoxLogo}
              heading="OuterBox (acquired Feb 2026)"
              subheading="Senior Software Engineer · February 2023 – Present · Detroit, MI"
              items={outerboxExperience}
              collapsedMaxHeight={300}
            />
          </Box>

          <Divider sx={{ my: 2.5 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <CollapsibleSection
              logoSrc={LightspeedExpeditingLogo}
              heading="Lightspeed Delivery, LLC"
              subheading="Owner / Operator · January 2010 – March 2023 · Hamburg, MI"
              items={lightspeedExperience}
              collapsedMaxHeight={80}
            />
          </Box>
        </Box>

        <Divider />

        {/* Education */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, letterSpacing: '-0.3px' }}>
            Education
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Washtenaw Community College
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Computer Engineering · 2006 – 2008
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        {/* Case Study CTA */}
        <Box
          sx={{
            p: 3,
            borderRadius: '8px',
            backgroundColor: `${theme.palette.primary.main}0D`,
            border: `1px solid ${theme.palette.primary.main}30`,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Production CRM &amp; AI-Powered Operations Platform
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.5 }}>
              Technical deep-dive: architecture, AI agent layer, real-time infrastructure, and key outcomes — including
              the acquisition cited as a top-4 strategic factor.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1.5, flexWrap: 'wrap' }}>
              {[
                { value: 'Top 4', label: 'Acquisition Factor' },
                { value: '< 90s', label: 'Deal-to-Contract' },
                { value: '90%', label: 'AI Cost Reduction' },
                { value: '67%', label: 'DB Cost Reduction' },
              ].map(m => (
                <Box key={m.label} sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: theme.palette.primary.main, lineHeight: 1 }}>
                    {m.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                    {m.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/casestudy')}
            sx={{ alignSelf: 'flex-start', fontWeight: 600, width: '100%' }}
          >
            View Case Study
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default About_V2

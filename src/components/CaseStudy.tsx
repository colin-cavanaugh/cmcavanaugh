import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
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
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { NAVBAR_HEIGHT_PX } from './NavBar'

const metrics = [
  { value: 'Top 4', label: 'Acquisition Factor', sub: 'Cited by OuterBox (Feb 2026)' },
  { value: '< 90s', label: 'Deal-to-Contract', sub: 'Lead to signed contract' },
  { value: '90%', label: 'AI Cost Reduction', sub: 'Via prompt caching' },
  { value: '67%', label: 'DB Cost Reduction', sub: 'SharedDataStore architecture' },
]

const stackItems = [
  {
    label: 'Stack',
    value: 'TypeScript · React 18 · Node.js/Express · AWS DynamoDB & S3 · WebSocket · Anthropic Claude SDK',
  },
  { label: 'Integrations', value: 'PandaDoc · Slack · ClickUp · Google APIs · Monday.com · OpenAI' },
  { label: 'Scale', value: '40 → 150+ concurrent users · 18,000+ records · 12+ entity types · 1,200+ client folders' },
  {
    label: 'Outcome',
    value: 'Cited top-4 acquisition factor (Feb 2026) · 90% AI cost reduction · 67% DB cost reduction',
  },
]

const architecturePoints = [
  {
    heading: 'Single-table DynamoDB design',
    detail:
      'Composite key scheme (ORG_<uuid> PK, typed SK: DEAL_, PRODUCT_, etc.) across 18,000+ records and 12+ entity types. GSI on masterAgreementId + versionKey enables contractual lineage queries and bulk versioned updates in a single request rather than multi-table joins.',
  },
  {
    heading: 'SharedDataStore service — 67% reduction in DynamoDB read costs',
    detail:
      'Replaced ~17 parallel startup DynamoDB calls (~15,000 RCU) with 6 coordinated parallel fetches (~5,000 RCU) distributed to all sync services simultaneously. Implements stale-while-revalidate caching with prebuilt Maps (organizationsMap, dealsMap, productsMap) and computed aggregations (productsByDealId, dealsByOrgPK, commentsByOrgPK).',
  },
  {
    heading: 'In-memory Fuse.js search indexes — sub-100ms full-dataset search',
    detail:
      'Weighted fuzzy search across organizations (name: 2×, DBA: 1.5×), deals, and products with stop-word normalization and Jaccard similarity scoring. All indexes are rebuilt from the SharedDataStore on each sync cycle, ensuring search reflects live data with zero additional infrastructure.',
  },
  {
    heading: 'Semantic deal versioning (major.minor.patch)',
    detail:
      'Zero-padded GSI keys (v001.002.000) for sortable contractual lineage. Major versions trigger new PandaDoc contracts; minor = date renewals; patch = in-place pricing updates with full audit trail (patchHistory). Batch patch across 2–25 deals in a single agent invocation enables bulk pricing changes with atomic consistency.',
  },
  {
    heading: 'Role-based notification routing',
    detail:
      "Notification delivery is determined at runtime by the deal's ownership and stage metadata — routing Slack messages to the correct account manager, closer, or team channel without hardcoded dispatch logic.",
  },
  {
    heading: 'Centralized configuration management',
    detail:
      'A single configuration layer governs product catalog rules, notification templates, ClickUp task structures, and PandaDoc template mappings. Changes propagate across the entire platform without touching business logic, keeping extensibility high as the platform scaled to support the full OuterBox organization.',
  },
]

const aiPoints = [
  {
    bold: '9 custom tools covering the full deal lifecycle:',
    detail:
      'search_organizations (Jaccard fuzzy), get_organization_deals, create_deal, apply_patch_version, batch_apply_patch_version (2–25 deals), find_deals_by_product, compute_spend_summary, search_products_catalog, get_deal.',
  },
  {
    bold: 'Server-Sent Events (SSE) streaming with multi-turn conversation loop:',
    detail:
      'Each turn streams tokens to the client in real-time. The server maintains conversation history across turns, enabling complex multi-step operations like "find all deals for Acme Corp, batch-renew anything expiring this month, and send me the spend summary."',
  },
  {
    bold: 'Prompt caching on system prompt + tools (~90% cost reduction):',
    detail:
      'The system prompt (comprehensive business context) and all 9 tool definitions are written as cacheable blocks. Cached turns pay a fraction of the base input token cost, making high-frequency agent interactions economically viable at scale.',
  },
  {
    bold: 'Model routing — Sonnet 4.6 for complex reasoning, Haiku 4.5 for lightweight queries:',
    detail:
      'The routing layer classifies incoming requests by complexity before dispatching to the appropriate model, balancing quality and cost across the full request spectrum.',
  },
  {
    bold: 'Per-turn token cost tracking with cache savings metrics:',
    detail:
      'Every agent response includes a cost breakdown showing input tokens, output tokens, cache reads vs. cache misses, and realized savings. This telemetry drove the iterative prompt caching strategy that achieved the 90% reduction.',
  },
]

const realtimePoints = [
  {
    bold: 'WebSocket server (ws v8) — architected for 150+ concurrent users:',
    detail:
      'Tab-level session isolation via userId:tabId composite keys prevents cross-tab ghost events. Ping/pong health monitoring with automatic cleanup removes stale connections without manual intervention.',
  },
  {
    bold: 'Typed event broadcast system:',
    detail:
      'emitDealUpdated, emitProductCreated, emitDealStatusChanged, and 6+ additional typed events push entity changes to all connected clients instantly. Any user viewing a deal sees changes made by another user in real-time without polling.',
  },
  {
    bold: 'Direct-message targeting with tab isolation:',
    detail:
      'User-to-user notifications (e.g., "deal assigned to you") are delivered only to the recipient\'s active tab, not broadcast to all connected sessions.',
  },
  {
    bold: 'DynamoDB-backed page visit analytics (90-day TTL):',
    detail:
      'Lightweight usage instrumentation tracks which screens are accessed and by whom, providing operational visibility without a separate analytics service.',
  },
]

const integrationPoints = [
  {
    bold: 'PandaDoc — full contract automation pipeline:',
    detail:
      'Template population from deal/product data → recipient assignment → webhook-driven status transitions (drafted → sent → viewed → completed). On completion: triggers the Deal Won flow, Monday.com import, Slack notifications, and predecessor deal archival — orchestrated end-to-end in under 90 seconds.',
  },
  {
    bold: 'Slack Bolt v3:',
    detail:
      'Team notification routing by deal stage and ownership. User profile sync keeps Slack identity mapped to platform identity. Stage-change alerts fire when a deal moves through the pipeline, keeping the sales team informed without manual updates.',
  },
  {
    bold: 'ClickUp Enterprise API:',
    detail:
      'Automated task deployment across 1,200+ client folders on deal close. Workspace auditing validates task structure and flags deviations. Service delivery tracking ties platform deal state to ClickUp task completion.',
  },
  {
    bold: 'Google APIs:',
    detail:
      'Drive integration for document storage and sharing. Gmail and Calendar surface in the platform layer for outreach tracking and scheduling context.',
  },
  {
    bold: 'Monday.com webhooks:',
    detail:
      'Deal data is imported and status is synced on contract completion, keeping the Monday.com board current without manual data entry.',
  },
]

const migrationPoints = [
  '27,000+ user ID remappings across 14,000+ records — written as idempotent migration scripts with pre/post validation counts.',
  'OAuth provider migration: all user tokens re-issued and validated against the new identity provider without session interruption.',
  'Cross-workspace identity matching: users appearing in both legacy and new workspaces were deduplicated using email-normalized matching to preserve audit history.',
  'Full rollback plan scoped at the entity level — each migration phase could be independently reversed without affecting adjacent data.',
]

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const theme = useTheme()
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 1.5, color: theme.palette.text.title, letterSpacing: '-0.2px' }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}

const BulletList: React.FC<{ items: string[] }> = ({ items }) => {
  const theme = useTheme()
  return (
    <List dense sx={{ py: 0 }}>
      {items.map((text, i) => (
        <ListItem key={i} sx={{ alignItems: 'flex-start', px: 0, py: 0.25 }}>
          <ListItemIcon sx={{ minWidth: 20, mt: 0.7 }}>
            <RadioButtonUncheckedIcon sx={{ fontSize: 7, color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: 14, lineHeight: 1.65 } }}>{text}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

const DetailList: React.FC<{ items: { bold: string; detail: string }[] }> = ({ items }) => {
  const theme = useTheme()
  return (
    <List dense sx={{ py: 0 }}>
      {items.map((item, i) => (
        <ListItem key={i} sx={{ alignItems: 'flex-start', px: 0, py: 0.5 }}>
          <ListItemIcon sx={{ minWidth: 20, mt: 0.8 }}>
            <RadioButtonUncheckedIcon sx={{ fontSize: 7, color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: 14, lineHeight: 1.65 } }}>
            <Box component="span" sx={{ fontWeight: 700 }}>
              {item.bold}
            </Box>{' '}
            {item.detail}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

const CaseStudy = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        mt: `${NAVBAR_HEIGHT_PX}px`,
        height: `calc(100dvh - ${NAVBAR_HEIGHT_PX}px)`,
        overflowY: 'auto',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box sx={{ maxWidth: 900, mx: 'auto', px: isSmall ? 2 : 4, py: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mb: 3, fontWeight: 600, color: theme.palette.text.secondary, width: '100%' }}
        >
          Back to About
        </Button>

        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="overline"
            sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 1.5 }}
          >
            Technical Case Study
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.5px', mt: 0.5, lineHeight: 1.2 }}>
            Production CRM &amp; AI-Powered Operations Platform
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
            Sole Architect &amp; Engineer — Feb 2023 – Present
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 2 }}>
            {[
              'TypeScript',
              'React 18',
              'Node.js',
              'DynamoDB',
              'WebSocket',
              'Anthropic Claude SDK',
              'AWS S3',
              'Fuse.js',
              'Slack Bolt',
              'PandaDoc',
            ].map(t => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  fontSize: 12,
                  backgroundColor: `${theme.palette.primary.main}15`,
                  color: theme.palette.text.primary,
                  border: `1px solid ${theme.palette.primary.main}30`,
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Metrics */}
        <Box
          sx={{ display: 'grid', gridTemplateColumns: isSmall ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 2, mb: 4 }}
        >
          {metrics.map(m => (
            <Paper
              key={m.label}
              sx={{ p: 2.5, borderRadius: '8px', border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, color: theme.palette.primary.main, lineHeight: 1 }}>
                {m.value}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5 }}>
                {m.label}
              </Typography>
              <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                {m.sub}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Stack info */}
        <Paper sx={{ p: 2.5, borderRadius: '8px', border: `1px solid ${theme.palette.divider}`, mb: 4 }}>
          {stackItems.map((item, i) => (
            <Box
              key={item.label}
              sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: i < stackItems.length - 1 ? 1.5 : 0 }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, minWidth: 100, flexShrink: 0, color: theme.palette.text.secondary }}
              >
                {item.label}
              </Typography>
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          ))}
        </Paper>

        <Divider sx={{ mb: 4 }} />

        {/* Overview */}
        <Section title="Overview">
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            This platform is a full-stack, production-grade SaaS CRM and operations platform built entirely as sole
            engineer and architect. It manages the complete deal lifecycle — from lead acquisition through contract
            execution to active service delivery — for a 300+ person digital marketing organization.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1.5 }}>
            Originally designed to serve 40+ concurrent internal users in real-time, the platform is now being expanded
            by OuterBox (the acquiring company) to replace Freshsales as the full organizational CRM, targeting 150+
            concurrent users. It was a central driver of the February 2026 acquisition, cited as one of the top four
            strategic factors in deal value.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 1.5 }}>
            The platform was not scoped, staffed, or specced by a team — it was conceived, designed, built, tested, and
            shipped end-to-end by a single engineer. Every architectural decision, from the DynamoDB key schema to the
            AI agent tool surface, was made and owned by one person.
          </Typography>
        </Section>

        <Divider sx={{ mb: 4 }} />

        {/* Architecture */}
        <Section title="Architecture &amp; Platform Design">
          {architecturePoints.map(pt => (
            <Box key={pt.heading} sx={{ mb: 2.5 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5, color: theme.palette.text.title }}>
                {pt.heading}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                {pt.detail}
              </Typography>
            </Box>
          ))}
        </Section>

        <Divider sx={{ mb: 4 }} />

        {/* AI Layer */}
        <Section title="Generative AI Agent Layer">
          <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 2 }}>
            Built a production conversational AI agent using the Anthropic Claude SDK with full tool-use orchestration.
            The agent is the primary interface for deal management, financial analysis, and bulk operations — replacing
            what would otherwise be multiple separate admin UIs with a single natural-language interface backed by
            structured, validated tool calls.
          </Typography>
          <DetailList items={aiPoints} />
        </Section>

        <Divider sx={{ mb: 4 }} />

        {/* Real-time */}
        <Section title="Real-Time Collaboration System">
          <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 2 }}>
            150+ sales and operations staff work concurrently in the platform. The WebSocket layer ensures every user
            sees the same state without polling — deal updates, contract status changes, and team notifications
            propagate to all connected clients in milliseconds.
          </Typography>
          <DetailList items={realtimePoints} />
        </Section>

        <Divider sx={{ mb: 4 }} />

        {/* Integrations */}
        <Section title="Third-Party Integration Pipeline">
          <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 2 }}>
            The platform is a <strong>hybrid in-house + vendor architecture</strong> — third-party services are
            orchestrated into a single cohesive workflow, not bolted on as silos. Each integration is abstracted behind
            a typed service layer, making it possible to add or replace vendors without touching business logic.
          </Typography>
          <DetailList items={integrationPoints} />
        </Section>

        <Divider sx={{ mb: 4 }} />

        {/* Migration */}
        <Section title="Cross-Org Data Migration (Acquisition)">
          <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 2 }}>
            When the company was acquired by OuterBox in February 2026, the platform required a full identity and data
            migration across workspaces. This was executed without downtime and with full audit coverage.
          </Typography>
          <BulletList items={migrationPoints} />
        </Section>

        <Divider sx={{ mb: 4 }} />

        {/* Key outcomes */}
        <Section title="Key Outcomes">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {[
              {
                label: 'Cited as a top-4 strategic acquisition factor',
                detail:
                  'OuterBox identified the platform as one of four primary drivers of deal value in the February 2026 acquisition.',
              },
              {
                label: 'Platform is now the OuterBox CRM replacement',
                detail:
                  'The platform is being expanded from 40 internal users to 150+ across the full OuterBox organization, replacing Freshsales.',
              },
              {
                label: '90% reduction in AI API costs',
                detail:
                  'Achieved through system-prompt and tool-definition prompt caching on the Anthropic Claude SDK, making the agent economically viable at production scale.',
              },
              {
                label: '67% reduction in DynamoDB read costs',
                detail:
                  'SharedDataStore architecture replaced 17 parallel startup reads (~15,000 RCU) with 6 coordinated fetches (~5,000 RCU).',
              },
              {
                label: 'Sub-100ms full-dataset search, zero infrastructure',
                detail:
                  'In-memory Fuse.js indexes with weighted fuzzy matching replaced what would otherwise require a dedicated search service (Elasticsearch, Algolia, etc.).',
              },
              {
                label: 'Deal-to-signed-contract in under 90 seconds',
                detail:
                  'The PandaDoc + Slack + Monday.com orchestration pipeline automates the entire post-close workflow end-to-end.',
              },
            ].map(item => (
              <Box key={item.label} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <CheckCircleOutlineIcon
                  sx={{ fontSize: 18, color: theme.palette.primary.main, mt: 0.3, flexShrink: 0 }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.65 }}>
                    {item.detail}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Section>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ pb: 4 }}>
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontStyle: 'italic' }}>
            Full codebase available upon request — proprietary to OuterBox
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CaseStudy

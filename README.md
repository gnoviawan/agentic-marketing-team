# Marketing Agent Team

**Your Complete AI-Powered Marketing Team** - From brand strategy to multi-platform content creation and performance analytics.

Democratizing professional marketing by providing non-marketers with a complete AI-powered marketing team that creates, optimizes, and learns from multi-platform campaigns - transforming what used to take weeks into minutes through intelligent automation and human-AI collaboration.

## Overview

This module provides a comprehensive digital marketing system with 7 specialized AI agents across 3 tiers (Core, Professional, Enterprise):

**Tier 1 (Core)** - Foundation for brand and content
- Brand Archetype Agent - Brand personality and emotional profiling
- Content Creation Agent - Multi-platform video + text generation

**Tier 2 (Professional)** - Market intelligence and analytics
- Market Research Agent - Trend identification and audience intelligence
- Competitor Analysis Agent - Competitive strategy and content repurposing
- Analytics Agent - Performance tracking and RLHF learning

**Tier 3 (Enterprise)** - Business strategy and orchestration
- Business Strategy Agent - Funnel architecture and product guidance
- Campaign Orchestrator - Multi-agent coordination and parallel processing

### Key Features

- **Multi-Platform Support** - TikTok, Instagram Reels, YouTube Shorts, Threads, Facebook, Blog
- **AI Content Generation** - Video via kie.ai API, text via LLMs
- **Brand Personality System** - Emotional value propositions and archetype matching
- **RLHF Learning** - Continuous improvement from user feedback
- **Chrome DevTools MCP** - Market research and performance analytics
- **Semi-Autonomous Workflow** - Human-in-the-loop content creation

## Installation

### For End Users (npm)

Install the module using npx:

```bash
npx marketing-agent-team
```

Or via npm:

```bash
npm install marketing-agent-team
```

> **Note:** This requires BMAD Core to be installed in your project. The module will be installed to `_bmad/marketing-agent-team/`.

### For Developers (Local Setup)

If you're developing or contributing to this module:

```bash
# Clone the repository
git clone https://github.com/gnoviawan/agentic-marketing-team.git
cd agentic-marketing-team

# Run development setup (registers slash commands)
node _bmad-output/bmb-creations/marketing-agent-team/setup-dev.js

# Restart Claude Code to load new commands
```

Or from the module folder:

```bash
cd _bmad-output/bmb-creations/marketing-agent-team
npm run setup
```

**Available Slash Commands After Setup:**

| Command | Agent |
|---------|-------|
| `/bmad:marketing-agent-team:agents:brand-archetype-agent` | 🎭 Brand Archetype |
| `/bmad:marketing-agent-team:agents:content-creation-agent` | ✍️ Content Creation |
| `/bmad:marketing-agent-team:agents:market-research-agent` | 🔍 Market Research |
| `/bmad:marketing-agent-team:agents:competitor-analysis-agent` | 🕵️ Competitor Analysis |
| `/bmad:marketing-agent-team:agents:analytics-agent` | 📊 Analytics |
| `/bmad:marketing-agent-team:agents:business-strategy-agent` | 💼 Business Strategy |
| `/bmad:marketing-agent-team:agents:campaign-orchestrator-agent` | 🎯 Campaign Orchestrator |

See [CONTRIBUTING.md](CONTRIBUTING.md) for full development guide.

During installation, you'll be prompted to:
1. **Select Tier** - Core, Professional, or Enterprise
2. **Choose Platforms** - Which social platforms to enable
3. **Configure kie.ai API** - Optional, for video generation
4. **Set Chrome DevTools MCP** - For research and analytics features
5. **Configure Settings** - Content output directory, language, skill level, content volume

## Components

### Agents (7)

| Agent | Tier | Purpose |
|-------|------|---------|
| **Brand Archetype Agent** | Core | Brand personality discovery and emotional profiling |
| **Content Creation Agent** | Core | Multi-platform video and text content generation |
| **Market Research Agent** | Professional | Trend identification and audience intelligence |
| **Competitor Analysis Agent** | Professional | Competitive strategy and content repurposing |
| **Analytics Agent** | Professional | Performance tracking and learning management |
| **Business Strategy Agent** | Enterprise | Funnel architecture and product guidance |
| **Campaign Orchestrator** | Enterprise | Multi-agent coordination and parallel processing |

### Workflows (9)

| Workflow | Purpose | Status |
|----------|---------|--------|
| **Brand Setup** | Interactive brand personality establishment | Planned |
| **Content Creation** | Multi-platform content generation with RLHF | Planned |
| **Learning & Refinement** | Feedback capture and system learning | Planned |
| **Market Research** | Trend identification using Chrome DevTools MCP | Planned |
| **Competitor Intelligence** | Competitor analysis and content repurposing | Planned |
| **Analytics & Reporting** | Performance tracking and insights | Planned |
| **Business Strategy** | Funnel architecture and product guidance | Planned |
| **Parallel Campaign Factory** | Mass parallel content generation | Planned |
| **Real-Time Optimization** | Dynamic campaign optimization | Planned |

### Tasks (4)

- **Platform Connection Task** - OAuth/Chrome DevTools connection helper
- **Content Validation Task** - Check content against brand guidelines
- **Performance Scrape Task** - Quick metrics extraction via Chrome DevTools
- **Brand Profile Export Task** - Save/export brand configuration

## Quick Start

### 1. Setup Your Brand

Start with the Brand Archetype Agent to establish your brand personality:

```
/bmad:marketing-agent-team:agents:brand-archetype-agent
```

Then use trigger **DB** (Discover Brand Archetype) to begin the interactive brand discovery session.

The agent will guide you through:
- Brand foundation (purpose, vision, values)
- Personality exploration
- Archetype matching
- Voice and tone guidelines
- Visual direction
- Audience profiling

### 2. Generate Your First Content

Once your brand profile is established, use the Content Creation Agent:

```
/bmad:marketing-agent-team:agents:content-creation-agent
```

Use trigger **GC** (Generate Content Batch) to create platform-specific content.

Provide:
- Topic or campaign concept
- Platforms (TikTok, IG, YouTube, Threads, Facebook, Blog)
- Content quantity per platform
- Call to action

### 3. Review and Refine

All generated content goes through human review:
- **Approve** - Content is ready to post
- **Refine** - Request specific changes
- **Reject** - Feedback helps the system learn

Every approval or rejection trains the RLHF system to better match your preferences.

### 4. Track Performance

After posting content, use the Analytics Agent:

```
/bmad:marketing-agent-team:agents:analytics-agent
```

Use trigger **TP** (Track Performance) and provide your live content links.

The agent will:
- Scrape engagement metrics using Chrome DevTools MCP
- Compare against benchmarks
- Identify winning patterns
- Provide optimization recommendations

## Module Structure

```
marketing-agent-team/
├── agents/                           # Agent definitions (.yaml)
│   ├── brand-archetype-agent.yaml
│   ├── content-creation-agent.yaml
│   ├── market-research-agent.yaml
│   ├── competitor-analysis-agent.yaml
│   ├── analytics-agent.yaml
│   ├── business-strategy-agent.yaml
│   ├── campaign-orchestrator-agent.yaml
│   ├── brand-archetype-sidecar/      # Brand memory
│   │   ├── memories.md
│   │   ├── instructions.md
│   │   ├── insights.md
│   │   ├── patterns.md
│   │   └── sessions/
│   └── analytics-sidecar/            # Performance memory
│       ├── performance-history.md
│       └── sessions/
├── workflows/                        # Workflow folders
│   ├── brand-setup/
│   │   └── README.md
│   ├── content-creation/
│   │   └── README.md
│   ├── learning-refinement/
│   │   └── README.md
│   ├── market-research/
│   │   └── README.md
│   ├── competitor-intelligence/
│   │   └── README.md
│   ├── analytics-reporting/
│   │   └── README.md
│   ├── business-strategy/
│   │   └── README.md
│   ├── parallel-campaign-factory/
│   │   └── README.md
│   └── real-time-optimization/
│       └── README.md
├── tasks/                            # Task files
├── templates/                        # Shared templates
│   ├── content-templates/
│   └── report-templates/
├── data/                             # Module data
│   ├── brand-profiles/
│   ├── learning-data/
│   │   ├── content-feedback.md
│   │   └── learning-patterns.md
│   └── platform-configs/
│       ├── tiktok.yaml
│       ├── instagram.yaml
│       └── ...
├── _module-installer/                # Installation
│   ├── installer.js                  # Custom install logic
│   ├── assets/
│   │   └── README.md
│   └── ...
├── module.yaml                       # Installer config
├── module-plan-marketing-agent-team.md
└── README.md                         # This file
```

## Configuration

After installation, configure settings in `_bmad/marketing-agent-team/config.yaml`:

**Key Settings:**

| Setting | Description | Default |
|---------|-------------|---------|
| `tier` | Installed tier (core/professional/enterprise) | From install |
| `enabled_platforms` | Active social platforms | tiktok, instagram, youtube |
| `content.output_dir` | Where content is saved | marketing-content/ |
| `content.language` | Content generation language | English |
| `content.volume_mode` | Content generation aggressiveness | standard |
| `skill_level` | Guidance detail level | intermediate |
| `api_keys.kie_ai` | Video generation API | Optional |

**Platform Configuration:**

Each platform has a config file in `data/platform-configs/`:
- `tiktok.yaml` - 150 char limit, short-form video
- `instagram.yaml` - 2200 char limit, reels + feed
- `youtube.yaml` - 5000 char limit, shorts + long-form
- `threads.yaml` - 500 char limit, conversational
- `facebook.yaml` - 63206 char limit, community-focused
- `blog.yaml` - 5000 char limit, long-form SEO

## Examples

### Example 1: Launch a New Brand

**Scenario:** You're launching a new fitness coaching business.

1. **Establish Brand Personality**
   ```
   /bmad:marketing-agent-team:agents:brand-archetype-agent
   > DB
   ```
   - Go through the brand discovery session
   - Select the "Hero" archetype (achievement-oriented)
   - Define motivational, empowering tone
   - Target fitness enthusiasts seeking transformation

2. **Generate Launch Content**
   ```
   /bmad:marketing-agent-team:agents:content-creation-agent
   > GC
   ```
   - Topic: "Brand launch - 5-day fitness challenge"
   - Platforms: TikTok, Instagram, YouTube Shorts
   - Quantity: 3 pieces per platform
   - CTA: "Join the challenge"

3. **Review and Approve**
   - Review generated content
   - Approve pieces that match your vision
   - Refine any that miss the mark
   - System learns from your feedback

4. **Post and Track**
   - Post approved content to platforms
   - Share live links with Analytics Agent
   - Review performance after 48 hours
   - Adjust strategy based on data

### Example 2: Competitive Content Campaign

**Scenario:** Competitors are crushing it on Threads, you want to engage.

1. **Analyze Competitors**
   ```
   /bmad:marketing-agent-team:agents:competitor-analysis-agent
   > CA
   ```
   - Identify top 3 competitors on Threads
   - Analyze their top-performing content
   - Identify gaps and opportunities

2. **Create Repurposed Content**
   ```
   /bmad:marketing-agent-team:agents:content-creation-agent
   > GC
   ```
   - Topic: Adapt competitor's winning angle to your brand
   - Platform: Threads
   - Apply your brand archetype (differentiation)

3. **Monitor Performance**
   ```
   /bmad:marketing-agent-team:agents:analytics-agent
   > TP
   ```
   - Track engagement against competitor benchmarks
   - Learn what resonates with your audience
   - Refine future content based on data

### Example 3: Enterprise Parallel Campaign

**Scenario:** Launch a product across all platforms simultaneously.

1. **Design Campaign**
   ```
   /bmad:marketing-agent-team:agents:campaign-orchestrator-agent
   > DC
   ```
   - Campaign: "New product launch"
   - Platforms: All 6 platforms
   - Timeline: 2-week campaign
   - Goal: Maximize awareness and conversions

2. **Launch Parallel Factory**
   ```
   > PC
   ```
   - Generate 50+ pieces simultaneously
   - All optimized for platform-native formats
   - Brand consistency enforced across all
   - Organized in approval queue

3. **Real-Time Optimization**
   ```
   > RO
   ```
   - Monitor performance daily
   - Adjust underperforming content
   - Amplify winning content
   - A/B test variations

## Platform-Specific Guidance

### TikTok
- **Length:** 15-60 seconds (sweet spot: 21-34)
- **Hook:** Critical first 3 seconds
- **Style:** Authentic, trend-aware, native
- **Best For:** Viral reach, trend participation

### Instagram Reels
- **Length:** 15-90 seconds
- **Style:** Polished, visually striking
- **Music:** Use trending audio
- **Best For:** Brand building, aesthetic showcase

### YouTube Shorts
- **Length:** 15-60 seconds
- **SEO:** Titles and descriptions matter
- **Style:** Value-forward, educational
- **Best For:** Search discovery, authority building

### Threads
- **Length:** Conversational, thread-format
- **Style:** Authentic, opinionated
- **Engagement:** Ask questions, respond promptly
- **Best For:** Community building, conversations

### Facebook
- **Length:** Medium to long-form
- **Style:** Community-oriented, shareable
- **Media:** Images and videos boost reach
- **Best For:** Community engagement, older demographics

### Blog
- **Length:** 1,000-2,500 words
- **SEO:** Keywords, internal linking
- **Format:** Scannable with headers, bullets
- **Best For:** SEO, deep-dive content, lead magnets

## Development Status

This module is currently:

- [x] Structure created
- [x] Installer configured
- [x] Agents defined (7)
- [x] Workflow plans created (9)
- [ ] Workflows fully implemented
- [ ] Tasks implemented
- [ ] Full testing complete
- [ ] kie.ai integration tested
- [ ] Chrome DevTools MCP integration tested

**Note:** Agents are fully functional with embedded prompts and menu triggers. Workflows are planned with README.md blueprints. Use `/bmad:bmb:workflows:create-workflow` to implement workflows.

## Requirements

- **BMAD Method** version 6.0.0 or higher
- **Node.js** 18+ (for installer.js)
- **kie.ai API** (optional, for video generation)
- **Chrome DevTools MCP** (optional, for research/analytics)

## Troubleshooting

### kie.ai API Not Working

**Problem:** Video generation failing

**Solutions:**
1. Verify API key is correct in config.yaml
2. Check kie.ai service status
3. Ensure API key has sufficient credits
4. Test API key validation during installation

**Workaround:** Use text-only content mode (skip kie.ai key)

### Chrome DevTools MCP Not Connected

**Problem:** Research and analytics features unavailable

**Solutions:**
1. Install chrome-devtools-mcp: `npm install -g @modelcontextprotocol/server-chrome-devtools`
2. Add to Claude MCP config
3. Restart Claude Code
4. Run `chrome-devtools-setup` task

**Workaround:** Manual research and link-based performance tracking

### Brand Profile Not Loading

**Problem:** Content Creation Agent can't find brand profile

**Solutions:**
1. Ensure Brand Archetype Agent workflow completed
2. Check `data/brand-profiles/` for brand files
3. Run Brand Setup workflow again if needed

## Tier Upgrade Path

**Start with Core tier** - Validate brand and content approach

**Upgrade to Professional** when you need:
- Market research and trend tracking
- Competitive intelligence
- Performance analytics

**Upgrade to Enterprise** when you need:
- Business strategy and funnels
- Parallel campaign processing (100+ pieces)
- Real-time optimization

To upgrade:
1. Re-run installer: `npx marketing-agent-team`
2. Select higher tier
3. Additional agents and workflows will be installed

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete contributor guide.

**Quick Start for Contributors:**

```bash
# 1. Clone and setup
git clone https://github.com/gnoviawan/agentic-marketing-team.git
cd agentic-marketing-team
node _bmad-output/bmb-creations/marketing-agent-team/setup-dev.js

# 2. Restart Claude Code

# 3. Test an agent
/bmad:marketing-agent-team:agents:brand-archetype-agent
```

**Key Development Commands:**

- `npm run setup` - Register agents as slash commands
- `/bmad:bmb:agents:agent-builder` - Create/edit agents
- `/bmad:bmb:workflows:create-workflow` - Implement workflows

**Source Code Location:** `_bmad-output/bmb-creations/marketing-agent-team/`

## Author

Created by **Althio** on 2025-12-27

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Module Details

**Module Code:** marketing-agent-team
**Category:** Business (Marketing & Business Growth)
**Type:** Complex Module
**Version:** 1.0.0
**Last Updated:** 2025-12-27

**Brainstorming Method:** Six Thinking Hats, Morphological Analysis, Cross-Pollination
**Elicitation Methods:** Tree of Thoughts, Shark Tank Pitch, First Principles Analysis

---

**Ready to transform your marketing?** Start with: `/bmad:marketing-agent-team:agents:brand-archetype-agent` and trigger **DB**

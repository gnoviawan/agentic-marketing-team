---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
inputDocuments: ['_bmad-output/analysis/brainstorming-session-2025-12-27.md']
module_name: marketing-agent-team
created_date: 2025-12-27
created_by: Althio
module_display_name: Marketing Agent Team
module_category: Business
module_type: Complex
---

# Module Plan: marketing-agent-team

## Module Concept

**Module Name:** Marketing Agent Team
**Module Code:** marketing-agent-team
**Category:** Business (Marketing & Business Growth)
**Type:** Complex Module (7+ agents, 10+ workflows - full marketing platform)

**Purpose Statement:**
To democratize professional marketing by providing non-marketers with a complete AI-powered marketing team that creates, optimizes, and learns from multi-platform campaigns - transforming what used to take weeks into minutes through intelligent automation and human-AI collaboration.

**Target Audience:**

- **Primary:** Solo entrepreneurs, content creators, small businesses who can't afford marketing teams
- **Secondary:** Consultants, freelancers, agencies wanting to scale their services

**Scope Definition:**

**In Scope:**
- Brand setup and personality system (emotional value propositions)
- Market research (trend identification, emerging content opportunities)
- Competitor analysis (analyze competitor strategies and high-engagement content)
- AI content generation (video via kie.ai, text via LLMs)
- Multi-platform campaign creation (TikTok, IG, YouTube Shorts, Threads, Facebook, Blog)
- Performance analytics and reporting (Chrome DevTools MCP integration)
- Learning system from user feedback (RLHF for continuous improvement)
- Semi-autonomous execution workflow (human in the loop)

**Out of Scope:**
- Full API integrations with all platforms (starting with OAuth + Chrome DevTools approach)
- Real-time bid management for paid ads
- Email marketing automation
- CRM integration
- Website/landing page builder
- Customer service chatbots
- (Can be added in future versions)

**Success Criteria:**
- Brand setup completed in <10 minutes
- 50+ pieces of content generated across 5+ platforms in one session
- 80%+ user approval rate for generated content
- Measurable quality improvement over time through learning system
- Full workflow completion (research → create → post → analyze) in <1 hour

**Value Proposition:**
- **Democratization:** Non-marketers get professional marketing capabilities
- **Speed:** 40x faster content creation
- **Collaboration:** Human-AI team (not replacement)
- **Intelligence:** Data-driven + emotionally intelligent content

---

## Advanced Elicitation Insights

**Analysis Methods Applied:** Tree of Thoughts, Shark Tank Pitch, First Principles Analysis

### **Implementation Strategy: Tiered Release Architecture**

Based on Tree of Thoughts analysis, the module will be built and released in three tiers:

**Tier 1: Core (4-6 weeks)**
- Brand Archetype Agent (personality & emotional profiling)
- Content Creation Agent (video via kie.ai, text via LLMs)
- Basic learning system (RLHF from approvals)
- Manual posting workflow
- **Target:** Foundation validation, early user feedback

**Tier 2: Professional (+4 weeks)**
- Market Research Agent (trend identification, emerging content)
- Competitor Analysis Agent (strategy analysis, content repurposing)
- Analytics Agent (performance tracking, insights)
- Semi-auto posting (OAuth + Chrome DevTools MCP)
- Basic reporting (weekly summaries)
- **Target:** Value expansion, monetization ready

**Tier 3: Enterprise (+4 weeks)**
- Business Strategy Agent (funnel optimization, product guidance)
- Real-time performance optimization
- Full API integrations (Meta Ads, Google Ads, GA4)
- Parallel content processing factory
- White-label options
- **Target:** Premium market, agency scaling

**Rationale:** Balances "build everything" philosophy with risk mitigation through tiered validation. Users can start simple and upgrade as needs grow.

---

### **Business Viability (Shark Tank Validated)**

**Strong ROI Proposition:**
- Traditional marketing team: ~$17,000/month
- Marketing Agent Team: ~$200/month equivalent
- **98% cost reduction** with superior speed

**Competitive Moat:**
1. **Brand DNA Learning System** - Gets smarter with YOUR brand daily
2. **Platform-Specific Intelligence** - TikTok ≠ Threads psychology
3. **Emotional Value Proposition Engine** - Content that connects, not just exists
4. **Full Workflow Orchestration** - Research → Create → Optimize loop

**Target Market with Money:**
- Consultants with expertise but no marketing skills
- SaaS founders needing growth without agency costs
- E-commerce brands drowning in operations
- *(Not struggling creators - businesses with revenue)*

**Technical Risk Mitigation:**
- Multi-path integration strategy: API → OAuth → Chrome DevTools → Manual guidance
- If one path gets blocked, three alternatives exist

---

### **First Principles Design Philosophy**

**Challenged Assumptions → Fundamental Truths:**

| Assumption Challenged | Fundamental Truth | Design Principle |
|----------------------|-------------------|------------------|
| "Users want automation" | Users want **business results** | Optimize for outcomes, not features |
| "More content = better" | **Quality beats quantity 10x** | 10 perfect pieces > 100 mediocre |
| "AI replaces marketers" | Humans provide **strategic judgment** | Human = strategy, AI = execution |
| "All platforms equal" | Each has **unique psychology** | Platform-specific intelligence |

**Core Design Principles:**
1. **Business Outcome Focus** - Success = revenue growth, not "content generated"
2. **Quality Over Quantity** - Optimize for content quality and strategic fit
3. **Human-as-Strategist** - Preserve human judgment, automate execution
4. **Platform Intelligence** - Different psychology per platform, not generic posting

---

## Enhanced Success Criteria

**Tier 1 (Core):**
- Brand setup completed in <10 minutes
- 20+ pieces of content generated per session
- 70%+ user approval rate
- Learning system shows improvement within 2 weeks

**Tier 2 (Professional):**
- 50+ pieces of content across 5+ platforms
- 80%+ user approval rate
- Full workflow (research → create → analyze) in <1 hour
- Measurable ROI improvement (user-reported)

**Tier 3 (Enterprise):**
- Parallel processing (100+ pieces simultaneously)
- Real-time optimization based on performance
- Business strategy insights (funnel, product, positioning)
- Agency-scale capabilities

---

## Component Architecture

### Agents (7 planned)

**Tier 1 (Core) Agents:**

1. **Brand Archetype Agent** - Interactive brand personality setup and emotional profiling
   - Type: Specialist
   - Role: Conducts brand interview to establish personality, emotional value propositions, platform positioning, and communication style. Creates and maintains the Brand Knowledge Base that all other agents reference.

2. **Content Creation Agent** - Video (kie.ai) + text (LLM) generation for multiple platforms
   - Type: Primary
   - Role: Primary user interface. Generates short-form video content via kie.ai API and text-based content via LLMs. Creates platform-specific content for TikTok, IG Reels, YouTube Shorts, Threads, Facebook, and blogs. Incorporates learning from RLHF system.

**Tier 2 (Professional) Agents:**

3. **Market Research Agent** - Trend identification and emerging content opportunities
   - Type: Specialist
   - Role: Uses Chrome DevTools MCP to browse trending content on TikTok, YouTube, Reddit, and industry platforms. Identifies emerging trends, viral topics, and cultural shifts before competitors catch on. Feeds insights to Content Creation Agent.

4. **Competitor Analysis Agent** - Strategy analysis and content repurposing
   - Type: Specialist
   - Role: Analyzes competitor strategies and high-engagement content. Identifies what's working for competitors, extracts structural patterns and themes, and suggests content repurposing opportunities while maintaining brand authenticity.

5. **Analytics Agent** - Performance tracking and insights
   - Type: Specialist
   - Role: Uses Chrome DevTools MCP to scrape real-time engagement metrics from posted content links. Tracks performance across platforms, identifies winning patterns, and feeds data back to learning system.

**Tier 3 (Enterprise) Agents:**

6. **Business Strategy Agent** - Funnel optimization and product guidance
   - Type: Specialist
   - Role: Applies business frameworks (PLG, Blue Ocean, JTBD, SWOT) to optimize funnels, guide product development for content creators, and provide strategic business intelligence. Works with Content Agent to align marketing with business objectives.

7. **Campaign Orchestrator** - Parallel processing and real-time optimization
   - Type: Specialist
   - Role: Coordinates parallel content generation (100+ pieces simultaneously), manages real-time performance monitoring, and dynamically adjusts strategy based on live performance data. Orchestrates multi-agent workflows at scale.

---

### Workflows (9 planned)

**Tier 1 (Core) Workflows:**

1. **Brand Setup Workflow** - Interactive interview to establish brand personality
   - Type: Interactive
   - Primary user: New users (brand owners, entrepreneurs)
   - Key output: Complete Brand Knowledge Base (personality, emotional positioning, platform-specific tones)

2. **Content Creation Workflow** - Generate video + text content across platforms
   - Type: Action
   - Primary user: Content creators, marketers
   - Key output: Platform-specific content pieces (video + text) ready for human review

3. **Learning & Refinement Workflow** - RLHF system to learn from approvals/modifications
   - Type: Action
   - Primary user: System (automated)
   - Key output: Improved content quality over time, user preference profile

**Tier 2 (Professional) Workflows:**

4. **Market Research Workflow** - Identify trends using Chrome DevTools MCP
   - Type: Action
   - Primary user: Content strategists
   - Key output: Trend reports, emerging content opportunities, viral topic identification

5. **Competitor Intelligence Workflow** - Analyze competitor strategies and content
   - Type: Action
   - Primary user: Marketing strategists
   - Key output: Competitor analysis reports, content repurposing recommendations

6. **Analytics & Reporting Workflow** - Weekly performance reports with strategic recommendations
   - Type: Document
   - Primary user: Business owners, marketers
   - Key output: PDF performance reports with strategic insights and next week's content plan

**Tier 3 (Enterprise) Workflows:**

7. **Business Strategy Workflow** - Funnel optimization and product development guidance
   - Type: Interactive
   - Primary user: Business founders, product teams
   - Key output: Strategic business recommendations, product monetization strategies, funnel optimization plans

8. **Parallel Campaign Factory** - Mass content generation (100+ pieces simultaneously)
   - Type: Action
   - Primary user: Agencies, enterprise marketers
   - Key output: Large volume of platform-specific content generated in parallel

9. **Real-Time Optimization Workflow** - Monitor performance and adjust strategy dynamically
   - Type: Action
   - Primary user: System (automated with human oversight)
   - Key output: Dynamic strategy adjustments based on live performance data

---

### Tasks (4 planned)

1. **Platform Connection Task** - OAuth/Chrome DevTools connection helper
   - Used by: All workflows requiring platform access

2. **Content Validation Task** - Check content against brand guidelines
   - Used by: Content Creation Workflow, Learning & Refinement Workflow

3. **Performance Scrape Task** - Quick metrics extraction via Chrome DevTools
   - Used by: Analytics Agent, Analytics & Reporting Workflow

4. **Brand Profile Export Task** - Save/export brand configuration
   - Used by: Brand Setup Workflow, for backup/migration

---

### Component Integration

**Agent Collaboration Flow:**
```
Brand Archetype Agent establishes Brand Knowledge Base
              ↓
Market Research Agent provides trend context
              ↓
Competitor Analysis Agent provides competitive intelligence
              ↓
Content Creation Agent generates informed, on-brand content
              ↓
Human reviews and approves
              ↓
Analytics Agent tracks performance
              ↓
Learning System captures feedback
              ↓
All agents improve over time
              ↓
Business Strategy Agent provides high-level guidance (Tier 3)
              ↓
Campaign Orchestrator coordinates at scale (Tier 3)
```

**Workflow Dependencies:**
- Brand Setup Workflow must complete before Content Creation Workflow (establishes brand identity)
- Market Research and Competitor Intelligence Workflows inform Content Creation Workflow
- Analytics & Reporting Workflow provides data to Learning & Refinement Workflow
- Business Strategy Workflow (Tier 3) uses aggregated data from all Tier 2 workflows
- Parallel Campaign Factory (Tier 3) orchestrates all workflows simultaneously

**Task Usage Patterns:**
- Platform Connection Task: Called by workflows needing platform access
- Content Validation Task: Integrated into Content Creation and Learning workflows
- Performance Scrape Task: Used by Analytics Agent and Reporting workflow
- Brand Profile Export Task: Used in Brand Setup and for system maintenance

---

### Development Priority

**Phase 1 (Tier 1 - MVP):**
- Brand Archetype Agent
- Content Creation Agent
- Brand Setup Workflow
- Content Creation Workflow
- Learning & Refinement Workflow
- Platform Connection Task
- Content Validation Task

**Phase 2 (Tier 2 - Professional):**
- Market Research Agent
- Competitor Analysis Agent
- Analytics Agent
- Market Research Workflow
- Competitor Intelligence Workflow
- Analytics & Reporting Workflow
- Performance Scrape Task
- Brand Profile Export Task

**Phase 3 (Tier 3 - Enterprise):**
- Business Strategy Agent
- Campaign Orchestrator
- Business Strategy Workflow
- Parallel Campaign Factory
- Real-Time Optimization Workflow

---

## Module Structure

**Module Type:** Complex
**Location:** {project-root}/_bmad-output\bmb-creations\marketing-agent-team

**Directory Structure Created:**
- ✅ agents/ (7 agent definitions)
- ✅ workflows/ (9 workflow folders with workflow-plan.md and README.md each)
- ✅ tasks/ (4 task files)
- ✅ templates/ (shared templates for brand profiles, content, reports)
- ✅ data/ (brand profiles, learning data, platform configurations)
- ✅ _module-installer/ (installation configuration and assets)
- ✅ README.md (placeholder with basic info)

**Rationale for Type:**
This is a **Complex Module** because:
- **7 agents** exceeds the 4+ threshold for complex modules
- **9 workflows** exceeds the 8+ threshold for complex modules
- **Complex integrations** with kie.ai API, Chrome DevTools MCP, OAuth for multiple platforms (TikTok, IG, YouTube, Threads, Facebook)
- **High interdependencies** - agents collaborate in sophisticated workflows, workflows depend on each other's outputs, learning system crosses all components
- **Tiered release architecture** (Core → Professional → Enterprise) adds structural complexity

The module requires careful orchestration across multiple specialized agents, each with distinct responsibilities but interconnected through shared Brand Knowledge Base and learning systems.

---

## Configuration Planning

### Required Configuration Fields

1. **kie_api_key** (OPTIONAL)
   - Type: INTERACTIVE
   - Purpose: API key for kie.ai video/image generation service
   - Default: null (optional - skip to use only text content)
   - Input Type: text
   - Prompt: "Enter your kie.ai API key (optional - skip to use only text content generation)"

2. **chrome_devtools_setup**
   - Type: INTERACTIVE
   - Purpose: Confirm Chrome DevTools MCP configuration for research/analytics
   - Default: 'not-configured'
   - Input Type: single-select
   - Prompt: Chrome DevTools MCP setup instructions with confirmation
   - Options: 'configured' / 'not-configured'

3. **tier_selection**
   - Type: INTERACTIVE
   - Purpose: Select which tier to install (upgradable later)
   - Default: 'core'
   - Input Type: single-select
   - Prompt: "Which tier do you want to install? (You can upgrade later)"
   - Options: 'core' / 'professional' / 'enterprise'

4. **enabled_platforms**
   - Type: INTERACTIVE
   - Purpose: Multi-select which platforms to enable
   - Default: ['tiktok', 'instagram', 'youtube']
   - Input Type: multi-select
   - Prompt: "Which platforms do you want to enable?"
   - Options: tiktok, instagram, youtube, threads, facebook, blog

5. **content_output_dir**
   - Type: INTERACTIVE
   - Purpose: Where generated content is saved
   - Default: '{project-root}/marketing-content'
   - Input Type: text
   - Prompt: "Where should generated content be saved?"

6. **default_language**
   - Type: INTERACTIVE
   - Purpose: Language for content generation
   - Default: 'English'
   - Input Type: text
   - Prompt: "What language should content be generated in?"

7. **skill_level**
   - Type: INTERACTIVE (nice to have)
   - Purpose: Affects how much guidance is shown
   - Default: 'intermediate'
   - Input Type: single-select
   - Prompt: "What is your marketing experience level?"
   - Options: 'beginner' / 'intermediate' / 'advanced'

8. **content_volume_mode**
   - Type: INTERACTIVE
   - Purpose: How aggressive content generation should be
   - Default: 'standard'
   - Input Type: single-select
   - Prompt: "How aggressive should content generation be?"
   - Options: 'conservative' / 'standard' / 'aggressive'

### Static Configuration Values

- **module_version:** "1.0.0"
- **chrome_devtools_instructions:** Setup guide for MCP configuration
- **brand_profiles_dir:** '{project-root}/marketing-content/brand-profiles'
- **learning_data_dir:** '{project-root}/marketing-content/learning-data'
- **reports_dir:** '{project-root}/marketing-content/reports'

### Installation Questions Flow

1. Tier Selection (Core/Professional/Enterprise)
2. Platform Selection (Multi-select)
3. kie.ai API Key (Optional)
4. Chrome DevTools MCP Confirmation
5. Content Output Directory
6. Default Language
7. Skill Level (nice to have)
8. Content Volume Mode

### Result Configuration Structure

The module.yaml installer will generate:
- Module configuration at: `_bmad/marketing-agent-team/config.yaml`
- User settings stored as: YAML configuration with all interactive responses
- Directory structure created based on user paths
- Platform-specific configurations based on selection

---

## Agents Created

### 1. Brand Archetype Agent (Tier 1 - Core)

**File:** [brand-archetype-agent.yaml](agents/brand-archetype-agent.yaml)

**Features:**
- Sidecar memory for persistent brand profiles
- 4 embedded prompts for brand discovery and archetype matching
- 1 workflow route: Brand Setup Workflow

**Structure:**
- Sidecar: Yes (brand-archetype-sidecar/ with memories.md, instructions.md, insights.md, patterns.md, sessions/)
- Prompts: 4 (discover-brand-archetype, brand-personality-exploration, archetype-matching, save-brand-profile)
- Workflows: brand-setup/

**Menu Items:**
- [CH] Chat about brand archetypes
- [DB] Discover Brand Archetype
- [EP] Explore Brand Personality
- [SV] Save Brand Profile
- [PM] Profile Memory
- [VE] View Existing Brand
- [setup-brand] Full Brand Setup Workflow

**Status:** Created with hybrid architecture (embedded prompts + sidecar memory + workflow)

---

### 2. Content Creation Agent (Tier 1 - Core)

**File:** [content-creation-agent.yaml](agents/content-creation-agent.yaml)

**Features:**
- No persistent memory needed (relies on Brand Archetype Agent for brand data)
- 4 embedded prompts for content generation and refinement
- 1 workflow route: Content Creation Workflow
- RLHF learning integration

**Structure:**
- Sidecar: No (references Brand Archetype Agent's memory)
- Prompts: 4 (generate-content-batch, refine-content, platform-strategy-advice, record-feedback-learning)
- Workflows: content-creation/

**Menu Items:**
- [CH] Chat content strategy
- [GC] Generate Content Batch
- [RF] Refine Content
- [PS] Platform Strategy
- [VF] View Feedback History
- [TC] Trending Now
- [create-campaign] Content Creation Workflow

**Status:** Created with hybrid architecture (embedded prompts + workflow + RLHF integration)

---

### 3. Market Research Agent (Tier 2 - Professional)

**File:** [market-research-agent.yaml](agents/market-research-agent.yaml)

**Features:**
- No persistent memory needed (uses data storage for research findings)
- 4 embedded prompts for research and intelligence
- 1 workflow route: Market Research Workflow
- Chrome DevTools MCP integration for web research

**Structure:**
- Sidecar: No (uses ../data/market-research/ for storage)
- Prompts: 4 (trend-discovery, audience-intelligence, topic-research, save-research)
- Workflows: market-research/

**Menu Items:**
- [CH] Chat market intelligence
- [TD] Trend Discovery
- [AI] Audience Intelligence
- [TR] Topic Research
- [VH] View Research History
- [QT] Quick Trend Check
- [market-research-wf] Market Research Workflow

**Status:** Created with hybrid architecture (embedded prompts + workflow + data storage)

---

### 4. Competitor Analysis Agent (Tier 2 - Professional)

**File:** [competitor-analysis-agent.yaml](agents/competitor-analysis-agent.yaml)

**Features:**
- No persistent memory needed (uses data storage for intelligence)
- 4 embedded prompts for competitive analysis
- 1 workflow route: Competitor Intelligence Workflow
- Chrome DevTools MCP integration for competitor research

**Structure:**
- Sidecar: No (uses ../data/competitor-intelligence/ for storage)
- Prompts: 4 (competitor-content-analysis, campaign-reverse-engineering, content-repurposing-intelligence, save-competitor-intel)
- Workflows: competitor-intelligence/

**Menu Items:**
- [CH] Chat competitive strategy
- [CA] Content Analysis
- [CR] Campaign Reverse-Engineer
- [GR] Gap Analysis
- [VC] View Competitor Data
- [QT] Quick Competitor Check
- [competitor-intel-wf] Competitor Intelligence Workflow

**Status:** Created with hybrid architecture (embedded prompts + workflow + data storage)

---

### 5. Analytics Agent (Tier 2 - Professional)

**File:** [analytics-agent.yaml](agents/analytics-agent.yaml)

**Features:**
- Sidecar memory for performance history tracking
- 4 embedded prompts for analytics and reporting
- 1 workflow route: Analytics & Reporting Workflow
- Manages RLHF learning system
- Chrome DevTools MCP integration for performance scraping

**Structure:**
- Sidecar: Yes (analytics-sidecar/ with performance-history.md, sessions/)
- Prompts: 4 (track-performance, learning-analysis, generate-report, optimization-recommendations)
- Workflows: analytics-reporting/

**Menu Items:**
- [CH] Chat analytics
- [TP] Track Performance
- [LA] Learning Analysis
- [GR] Generate Report
- [VH] View Performance History
- [QT] Quick Metrics Check
- [analytics-wf] Analytics & Reporting Workflow

**Status:** Created with hybrid architecture (embedded prompts + sidecar memory + workflow + learning data management)

---

### 6. Business Strategy Agent (Tier 3 - Enterprise)

**File:** [business-strategy-agent.yaml](agents/business-strategy-agent.yaml)

**Features:**
- No persistent memory needed (transactional strategic guidance)
- 4 embedded prompts for business strategy
- 1 workflow route: Business Strategy Workflow
- Business framework application

**Structure:**
- Sidecar: No
- Prompts: 4 (funnel-strategy, product-guidance, business-framework-analysis, business-optimization)
- Workflows: business-strategy/

**Menu Items:**
- [CH] Chat business strategy
- [FS] Funnel Strategy
- [PG] Product Guidance
- [BF] Framework Analysis
- [SW] SWOT Analysis
- [PLG] Product-Led Growth
- [business-strategy-wf] Business Strategy Workflow

**Status:** Created with hybrid architecture (embedded prompts + workflow)

---

### 7. Campaign Orchestrator Agent (Tier 3 - Enterprise)

**File:** [campaign-orchestrator-agent.yaml](agents/campaign-orchestrator-agent.yaml)

**Features:**
- No persistent memory needed (orchestrates other agents)
- 4 embedded prompts for campaign coordination
- 1 workflow route: Parallel Campaign Factory
- Multi-agent orchestration capabilities

**Structure:**
- Sidecar: No
- Prompts: 4 (design-campaign, parallel-campaign-factory, real-time-optimization, campaign-coordination)
- Workflows: parallel-campaign-factory/

**Menu Items:**
- [CH] Chat campaigns
- [DC] Design Campaign
- [PC] Parallel Campaign Factory
- [RO] Real-Time Optimization
- [LC] Launch Campaign
- [CC] Campaign Check-in
- [VA] View Campaign History
- [QT] Quick Campaign Brief

**Status:** Created with hybrid architecture (embedded prompts + workflow + multi-agent orchestration)

---

## Workflow Plans Reviewed

All 9 workflow plans have been reviewed and validated. Each workflow folder contains a README.md with clear implementation guidance.

### Workflow-Agent Mappings Verified:

| Workflow | Agent | Trigger | Status |
|----------|-------|---------|--------|
| brand-setup | Brand Archetype Agent | setup-brand | Ready for implementation |
| content-creation | Content Creation Agent | create-campaign | Ready for implementation |
| learning-refinement | Content Creation Agent | Auto | Ready for implementation |
| market-research | Market Research Agent | market-research-wf | Ready for implementation |
| competitor-intelligence | Competitor Analysis Agent | competitor-intel-wf | Ready for implementation |
| analytics-reporting | Analytics Agent | analytics-wf | Ready for implementation |
| business-strategy | Business Strategy Agent | business-strategy-wf | Ready for implementation |
| parallel-campaign-factory | Campaign Orchestrator | LC | Ready for implementation |
| real-time-optimization | Campaign Orchestrator | RO | Ready for implementation |

### Implementation Path:

To implement these workflows, use `/bmad:bmb:workflows:create-workflow` command for each workflow folder. The README.md files serve as implementation blueprints.

---

## Installer Configuration

### Install Configuration

- **File:** [module.yaml](module.yaml)
- **Module code:** marketing-agent-team
- **Default selected:** false
- **Configuration fields:** 8 (1 optional)

### Configuration Fields

| Field | Type | Default | Purpose |
|-------|------|---------|---------|
| tier_selection | single-select | core | Core/Professional/Enterprise tier |
| enabled_platforms | multi-select | tiktok,instagram,youtube | Platforms to enable |
| kie_api_key | text (optional) | empty | kie.ai API for video generation |
| chrome_devtools_setup | single-select | not-configured | MCP configuration status |
| content_output_dir | text | {project-root}/marketing-content | Where content is saved |
| default_language | text | English | Content generation language |
| skill_level | single-select | intermediate | User marketing experience |
| content_volume_mode | single-select | standard | Content generation aggressiveness |

### Custom Installation Logic

- **installer.js:** Created with custom setup logic
- **Custom Features:**
  - kie.ai API key validation (test request during installation)
  - Creates folder structure for brand profiles, learning data, platform configs, reports
  - Tier-specific agent setup (installs only agents for selected tier)
  - Platform configuration template generation for enabled platforms
  - Content output directory creation with subdirectories
  - Agent sidecar folder initialization
  - Module config.yaml generation with all user settings
  - README.md generation in installed module directory

### Assets Directory

- **Location:** _module-installer/assets/
- **Contents:** README.md (placeholder for future assets)
- **Purpose:** Store files to copy during installation (templates, examples, guides)

### Installation Process

1. User runs: `bmad install marketing-agent-team`
2. Installer asks:
   - Tier selection (Core/Professional/Enterprise)
   - Platform multi-select (TikTok, IG, YouTube, Threads, Facebook, Blog)
   - kie.ai API key (optional, with validation)
   - Chrome DevTools MCP status
   - Content output directory
   - Default language
   - Marketing skill level
   - Content volume mode
3. Creates: _bmad/marketing-agent-team/ with:
   - config.yaml (user settings)
   - tier-config.yaml (installed agents list)
   - data/ folders (brand-profiles, learning-data, platform-configs, reports)
   - agents/ sidecar folders
4. Generates: Platform-specific configuration templates

### Validation

- ✅ YAML syntax valid
- ✅ All 8 fields defined (1 optional)
- ✅ Paths use proper templates ({project-root}, {value})
- ✅ Custom logic ready with kie.ai API validation
- ✅ Tier-based installation logic implemented

---

## Documentation

### README.md Created

- **Location:** [README.md](README.md)
- **Status:** Complete
- **Sections:** 17 comprehensive sections

### Content Highlights

**Documentation Sections:**
1. **Overview** - Tier structure and key features
2. **Installation** - BMAD install command with configuration walkthrough
3. **Components** - Full listing of 7 agents, 9 workflows, 4 tasks
4. **Quick Start** - 4-step getting started guide
5. **Module Structure** - Complete directory tree
6. **Configuration** - Key settings and platform configs
7. **Examples** - 3 detailed usage scenarios
8. **Platform-Specific Guidance** - Best practices for each platform
9. **Development Status** - Implementation checklist
10. **Requirements** - Dependencies and integrations
11. **Troubleshooting** - Common issues and solutions
12. **Tier Upgrade Path** - Migration guidance
13. **Contributing** - Extension guidelines
14. **Module Details** - Technical metadata

### Key Features

- Clear installation instructions with tier selection guidance
- Comprehensive agent and workflow reference tables
- Three real-world examples (Brand Launch, Competitive Campaign, Enterprise Parallel Campaign)
- Platform-specific best practices for all 6 platforms
- Troubleshooting section for common issues
- Tier upgrade path documentation
- Development status with honest implementation state

### Documentation Quality

- ✅ Installation instructions clear and correct
- ✅ Component overview complete with tier breakdown
- ✅ Quick start guide provides 4-step onboarding
- ✅ Configuration details all settings from installer
- ✅ Usage examples demonstrate primary use cases
- ✅ Development status honestly represents current state (structure done, workflows planned)

---

## Development Roadmap

### TODO.md Created

- **Location:** [TODO.md](TODO.md)
- **Phases defined:** 4 (Core, Professional, Enterprise, Polish)
- **Immediate tasks prioritized**

### Development Phases

**Phase 1: Core Tier (MVP)**
- Brand Setup Workflow (HIGH priority)
- Content Creation Workflow (HIGH priority)
- Learning & Refinement Workflow (MEDIUM priority)
- Content Validation Task
- Core tier testing

**Phase 2: Professional Tier**
- Market Research Workflow (HIGH priority)
- Competitor Intelligence Workflow (HIGH priority)
- Analytics & Reporting Workflow (HIGH priority)
- Performance Scrape Task
- Chrome DevTools MCP integration testing

**Phase 3: Enterprise Tier**
- Business Strategy Workflow (MEDIUM priority)
- Parallel Campaign Factory (HIGH priority)
- Real-Time Optimization Workflow (HIGH priority)
- Multi-agent orchestration testing

**Phase 4: Polish & Launch**
- Comprehensive testing across all tiers
- Documentation enhancements
- Performance optimization
- Release preparation

### Next Steps Priority Order

1. **Implement Brand Setup Workflow** - Foundation for everything
2. **Implement Content Creation Workflow** - Core value delivery
3. **Test Core Flow** - Brand → Content → Feedback
4. **Implement Professional Workflows** - Intelligence layer
5. **Implement Enterprise Workflows** - Orchestration layer
6. **Comprehensive Testing** - All tiers, all workflows

### Quick Reference Commands

- `/bmad:bmb:workflows:create-workflow` - Implement workflows from README plans
- `bmad install marketing-agent-team` - Test installation
- `agent [agent-name]` - Run specific agents
- `workflow [workflow-name]` - Run implemented workflows

### Development Notes

- **Tiered Architecture:** Each tier functions independently
- **RLHF Learning:** Accumulates across sessions in learning-data/
- **Chrome DevTools MCP:** Optional but recommended for full functionality
- **kie.ai API:** Optional for text-only mode, required for AI video
- **Iterative Development:** Complete Core tier before expanding

---

## Legacy Reference

This module is being created based on an extensive brainstorming session conducted on 2025-12-27. The brainstorming session explored the module concept through multiple creative thinking techniques (Six Thinking Hats, Morphological Analysis, Cross-Pollination) and generated comprehensive insights into the module's architecture, capabilities, and implementation strategy.

**Source Document:** `brainstorming-session-2025-12-27.md`

## Session Overview

**Topic:** Complete Digital Marketing Module - Full-stack marketing system from funnel strategy to multi-channel campaign execution

**Goals:** End-to-end funnel creation and optimization, campaign execution across social media/blogs/video/paid ads, coordinated multi-channel marketing workflows, agent-based automation for marketing tasks

**Brainstorming Techniques Used:**
- Six Thinking Hats (comprehensive analysis from multiple perspectives)
- Morphological Analysis (systematic exploration of parameter combinations)
- Cross-Pollination (innovative orchestration patterns from other industries)

## Initial Concept Summary

Based on the brainstorming session, this module will be a comprehensive AI-powered digital marketing system featuring:

1. **Multi-Agent Architecture** - Specialized agents for:
   - Market Research (trend identification, emerging content opportunities)
   - Competitor Analysis (analyze competitor strategies and content)
   - Content Creation (video + text generation for multiple platforms)
   - Analytics (performance tracking and insights)
   - Reporting (strategic PDF reports)
   - Brand Archetype (brand personality and emotional profiling)
   - Business Strategy (funnel optimization, product development guidance)

2. **Platform Support**:
   - TikTok, Instagram Reels, YouTube Shorts (short-form video)
   - Threads, Facebook, Blog (text-based content)

3. **Key Capabilities**:
   - AI content generation using kie.ai API
   - Chrome DevTools MCP for research and analytics
   - Brand personality system with emotional value propositions
   - Learning system that improves from user feedback
   - Real-time performance monitoring
   - Semi-autonomous execution (human in the loop)

4. **Value Proposition**:
   - Democratizes professional marketing for non-marketers
   - 40x faster content creation
   - Human-AI collaboration model
   - Data-driven + emotionally intelligent content

**Next Steps:** Proceeding to define the detailed module concept, architecture, and implementation plan.

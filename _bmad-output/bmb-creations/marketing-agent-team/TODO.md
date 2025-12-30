# Marketing Agent Team Development Roadmap

## Phase 1: Core Tier Implementation (MVP)

**Goal:** Foundation validation - Brand personality + Content generation

### Agents (Already Defined - Ready to Use)

- [x] Brand Archetype Agent - YAML created with embedded prompts
  - Status: Fully functional with 4 embedded prompts
  - Sidecar memory: Configured
  - Priority: ✅ Complete

- [x] Content Creation Agent - YAML created with embedded prompts
  - Status: Fully functional with 4 embedded prompts
  - RLHF integration: Ready
  - Priority: ✅ Complete

### Workflows (Need Implementation)

- [ ] Brand Setup Workflow
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/brand-setup/README.md
  - Priority: **HIGH** - Required before content creation
  - Dependencies: None (first workflow users need)

- [ ] Content Creation Workflow
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/content-creation/README.md
  - Priority: **HIGH** - Core value delivery
  - Dependencies: Brand Setup Workflow

- [ ] Learning & Refinement Workflow
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/learning-refinement/README.md
  - Priority: **MEDIUM** - Improves over time
  - Dependencies: Content Creation Workflow

### Tasks (Need Implementation)

- [ ] Platform Connection Task
  - Priority: MEDIUM - OAuth helpers
  - Chrome DevTools MCP setup guidance

- [ ] Content Validation Task
  - Priority: HIGH - Brand consistency check
  - Used by: Content Creation, Learning workflows

### Integration & Testing

- [ ] Test brand setup → content creation flow
- [ ] Verify RLHF feedback capture works
- [ ] Test kie.ai API integration (if key provided)
- [ ] Validate brand profile persistence
- [ ] Test Core tier installation

---

## Phase 2: Professional Tier Implementation

**Goal:** Value expansion - Market intelligence + Analytics

### Agents (Already Defined - Ready to Use)

- [x] Market Research Agent - YAML created with embedded prompts
  - Status: Fully functional with Chrome DevTools MCP integration
  - Priority: Ready to activate

- [x] Competitor Analysis Agent - YAML created with embedded prompts
  - Status: Fully functional with Chrome DevTools MCP integration
  - Priority: Ready to activate

- [x] Analytics Agent - YAML created with embedded prompts
  - Status: Fully functional with sidecar memory
  - Priority: Ready to activate

### Workflows (Need Implementation)

- [ ] Market Research Workflow
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/market-research/README.md
  - Priority: **HIGH** - Informs content strategy
  - Dependencies: Chrome DevTools MCP configured

- [ ] Competitor Intelligence Workflow
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/competitor-intelligence/README.md
  - Priority: **HIGH** - Competitive advantage
  - Dependencies: Market Research Workflow

- [ ] Analytics & Reporting Workflow
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/analytics-reporting/README.md
  - Priority: **HIGH** - Performance optimization
  - Dependencies: Content posted with live links

### Tasks (Need Implementation)

- [ ] Performance Scrape Task
  - Priority: HIGH - Chrome DevTools metrics extraction
  - Used by: Analytics Agent

- [ ] Brand Profile Export Task
  - Priority: LOW - Backup/migration utility

### Integration & Testing

- [ ] Test Chrome DevTools MCP integration
- [ ] Verify market research → content creation flow
- [ ] Test competitor analysis → content repurposing
- [ ] Validate performance tracking with real links
- [ ] Test RLHF learning pattern recognition
- [ ] Test Professional tier installation

---

## Phase 3: Enterprise Tier Implementation

**Goal:** Premium features - Business strategy + Orchestration

### Agents (Already Defined - Ready to Use)

- [x] Business Strategy Agent - YAML created with embedded prompts
  - Status: Fully functional with business frameworks
  - Priority: Ready to activate

- [x] Campaign Orchestrator - YAML created with embedded prompts
  - Status: Fully functional with multi-agent coordination
  - Priority: Ready to activate

### Workflows (Need Implementation)

- [ ] Business Strategy Workflow
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/business-strategy/README.md
  - Priority: **MEDIUM** - Strategic guidance
  - Dependencies: Analytics data available

- [ ] Parallel Campaign Factory
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/parallel-campaign-factory/README.md
  - Priority: **HIGH** - Enterprise scale (100+ pieces)
  - Dependencies: All content creation workflows working

- [ ] Real-Time Optimization Workflow
  - Use: `/bmad:bmb:workflows:create-workflow`
  - Input: workflows/real-time-optimization/README.md
  - Priority: **HIGH** - Dynamic optimization
  - Dependencies: Analytics & Reporting Workflow

### Integration & Testing

- [ ] Test business strategy → funnel design flow
- [ ] Verify parallel campaign factory (100+ pieces)
- [ ] Test real-time optimization with live data
- [ ] Validate multi-agent orchestration
- [ ] Test Enterprise tier installation
- [ ] End-to-end campaign execution test

---

## Phase 4: Polish & Launch

### Testing

- [ ] Unit test all agent menu triggers
- [ ] Integration test all workflows
- [ ] Test installer in clean project (all tiers)
- [ ] Test tier upgrade process
- [ ] Test with sample data across all platforms
- [ ] kie.ai API integration testing
- [ ] Chrome DevTools MCP integration testing

### Documentation

- [ ] Add video tutorials for each agent
- [ ] Create troubleshooting guide expansion
- [ ] Add FAQ section based on testing findings
- [ ] Write platform-specific best practices guide
- [ ] Document RLHF learning patterns

### Performance

- [ ] Optimize parallel processing for 100+ pieces
- [ ] Add error handling for API failures
- [ ] Implement retry logic for external services
- [ ] Add logging for debugging

### Release

- [ ] Version bump to 1.0.0
- [ ] Create release notes with tier breakdown
- [ ] Tag release in Git
- [ ] Update module registry listing

---

## Quick Commands

### Create Workflow

```bash
/bmad:bmb:workflows:create-workflow
```

Then select workflow folder (e.g., `brand-setup`)

### Test Module Installation

```bash
bmad install marketing-agent-team
```

Test each tier: core, professional, enterprise

### Run Agent

```bash
agent brand-archetype-agent
agent content-creation-agent
agent market-research-agent
agent competitor-analysis-agent
agent analytics-agent
agent business-strategy-agent
agent campaign-orchestrator-agent
```

### Test Workflow (After Implementation)

```bash
workflow brand-setup
workflow content-creation
workflow market-research
```

---

## Development Notes

### Important Considerations

**Tiered Architecture:**
- Each tier must function independently
- Tier upgrade should be seamless
- Core tier is the MVP foundation
- Professional adds intelligence layer
- Enterprise adds orchestration layer

**RLHF Learning System:**
- Learning accumulates across sessions
- Feedback data stored in `data/learning-data/`
- Analytics Agent manages learning pattern recognition
- Content Creation Agent applies learning

**Chrome DevTools MCP:**
- Required for Market Research, Competitor Analysis, Analytics
- Optional but recommended for full functionality
- Manual workarounds available if not configured

**kie.ai API:**
- Optional for text-only content mode
- Required for AI video generation
- Validated during installation

### Dependencies

- **BMAD Method** version 6.0.0 or higher
- **Node.js** 18+ (for installer.js)
- **kie.ai API** (optional, for video generation)
- **Chrome DevTools MCP** (optional, for research/analytics)

### Module Structure Reference

```
marketing-agent-team/
├── agents/                    # ✅ 7 YAML files created
│   ├── brand-archetype-agent.yaml
│   ├── content-creation-agent.yaml
│   ├── market-research-agent.yaml
│   ├── competitor-analysis-agent.yaml
│   ├── analytics-agent.yaml
│   ├── business-strategy-agent.yaml
│   ├── campaign-orchestrator-agent.yaml
│   ├── brand-archetype-sidecar/  # ✅ Created
│   └── analytics-sidecar/        # ✅ Created
├── workflows/                  # ⏳ Structure created, plans written
│   ├── brand-setup/README.md     # Need implementation
│   ├── content-creation/README.md
│   ├── learning-refinement/README.md
│   ├── market-research/README.md
│   ├── competitor-intelligence/README.md
│   ├── analytics-reporting/README.md
│   ├── business-strategy/README.md
│   ├── parallel-campaign-factory/README.md
│   └── real-time-optimization/README.md
├── tasks/                      # ⏳ Planned, not implemented
├── templates/                  # ✅ Folders created
├── data/                       # ✅ Folders created
├── _module-installer/          # ✅ Configured with custom logic
│   ├── installer.js
│   └── assets/
├── module.yaml                 # ✅ Complete
├── README.md                   # ✅ Complete
└── module-plan-*.md            # ✅ Complete
```

---

## Completion Criteria

The module is complete when:

### Core Tier (MVP)
- [ ] Brand Setup Workflow implemented
- [ ] Content Creation Workflow implemented
- [ ] Learning & Refinement Workflow implemented
- [ ] Core tier installation tested
- [ ] Brand → Content → Feedback flow works

### Professional Tier
- [ ] All 3 Professional workflows implemented
- [ ] Chrome DevTools MCP integration tested
- [ ] Professional tier installation tested
- [ ] Research → Content → Analytics flow works

### Enterprise Tier
- [ ] All 3 Enterprise workflows implemented
- [ ] Parallel factory produces 100+ pieces
- [ ] Real-time optimization tested
- [ ] Enterprise tier installation tested
- [ ] Full campaign orchestration works

### Overall
- [ ] Installation works smoothly for all tiers
- [ ] Documentation covers all features
- [ ] Sample usage produces expected results
- [ ] RLHF learning demonstrates improvement

---

## Immediate Next Steps (Recommended Order)

### Week 1: Foundation
1. **Implement Brand Setup Workflow** (`/bmad:bmb:workflows:create-workflow`)
   - This enables the entire system
   - All other workflows depend on brand profile

2. **Implement Content Creation Workflow**
   - Core value delivery
   - Validate brand profile integration

3. **Test Core Flow**
   - Run Brand Setup
   - Generate content
   - Verify RLHF feedback capture

### Week 2: Intelligence Layer
4. **Implement Market Research Workflow**
   - Adds trend intelligence
   - Requires Chrome DevTools MCP setup

5. **Implement Competitor Intelligence Workflow**
   - Competitive advantage features

6. **Implement Analytics & Reporting Workflow**
   - Performance tracking
   - RLHF learning synthesis

### Week 3: Orchestration
7. **Implement Business Strategy Workflow**
   - Strategic guidance features

8. **Implement Parallel Campaign Factory**
   - Enterprise-scale production

9. **Implement Real-Time Optimization Workflow**
   - Dynamic optimization

### Week 4: Polish
10. **Testing & Bug Fixes**
11. **Documentation Updates**
12. **Release Preparation**

---

**Development Tip:** Start with Core tier, validate the foundation, then expand. Each tier adds value independently.

Created: 2025-12-27
Last Updated: 2025-12-27

---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9]
module_name: marketing-agent-team
workflow_name: content-creation
created_date: 2025-12-28
created_by: Althio
workflow_type: Action
target_location: '{project-root}/_bmad/marketing-agent-team/workflows/content-creation'
status: COMPLETE
completedAt: 2025-12-28
---

# Workflow Creation Plan: content-creation

## Initial Project Context

- **Module:** marketing-agent-team (custom)
- **Target Location:** {project-root}/_bmad/marketing-agent-team/workflows/content-creation
- **Created:** 2025-12-28
- **Workflow Type:** Action
- **Primary Users:** Content creators, marketers
- **Associated Agent:** Content Creation Agent

## Workflow Purpose

Generate platform-specific content (video via kie.ai + text via LLMs) across multiple platforms:
- TikTok
- Instagram Reels
- YouTube Shorts
- Threads
- Facebook
- Blog

## Key Outputs

Platform-specific content pieces (video + text) ready for human review and posting.

---

## Requirements Summary (Step 2)

### 1. Workflow Purpose and Scope

**Problem Solved:**
- Generate high-quality, platform-specific marketing content at scale
- Transform content creation from weeks to minutes
- Democratize professional marketing for non-marketers

**Primary Users:**
- Content creators, marketers
- Solo entrepreneurs, small businesses
- Consultants, freelancers, agencies

**Main Outcome:**
- Platform-specific content pieces (video + text) ready for human review and posting

### 2. Workflow Type Classification

**Type:** Action Workflow
- Performs actions: content generation via kie.ai (video) + LLMs (text)
- Orchestrates multi-platform content creation
- Integrates with learning system for continuous improvement

### 3. Workflow Flow and Step Structure

**Pattern:** Hybrid Batch + Adaptive Loop

**Phases:**
1. **Context Gathering** — Load brand profile, check trending data (if available), get user's content topic/goal
2. **Strategy Generation** — Create content plan (e.g., "5 TikToks on [topic], 3 IG posts, 2 blogs")
3. **Batch Generation Loop** — Generate in batches with user-selected mode:
   - **YOLO Mode:** Generate entire batch → show all → approve/reject/refine
   - **Collaborative Mode:** Generate one → get feedback → refine → next
4. **Final Output** — Export approved content to platform-ready files

**Entry Points (Supports All):**
- Start with specific topic/idea
- Discover content opportunities
- Pull from brand profile automatically

### 4. User Interaction Style

**Two Modes:**
- **YOLO Mode:** Fully autonomous (generate → show results → approve/reject)
- **Collaborative Mode:** Generate one piece → get feedback → refine → next

**Decision Points:**
- Mode selection (YOLO vs Collaborative)
- Content plan approval
- Platform selection
- Final approval/refinement

### 5. Instruction Style

**Mixed Approach:**
- **Intent-Based:** Creative phases (content generation, refinement, feedback gathering)
- **Prescriptive:** Structured choices (mode selection, platform selection, menu navigation)

### 6. Input Requirements

**Required:**
- Brand profile (from Brand Archetype Agent) — Brand Setup must complete first
- User's content topic/goal

**Optional (Enhances Quality):**
- Market research data (from Market Research Agent)
- Competitor intelligence (from Competitor Analysis Agent)
- kie.ai API key (for video generation)
- Content output directory preference

### 7. Output Specifications

**Primary Output:**
- Platform-specific content pieces ready for posting

**Output Formats (All Supported):**
- Individual markdown files per content piece
- Single document with all content organized
- JSON structured data for API posting

**Quality Checks:**
- Content Validation Task integration
- Brand guideline validation
- Platform-specific best practices (character limits, hashtags, etc.)

### 8. Success Criteria

**Metrics:**
- 70%+ user approval rate (Tier 1 goal)
- 20+ pieces of content generated per session
- Learning system shows improvement within 2 weeks
- Content ready-to-post ratio

**Quality Indicators:**
- Platform-appropriate content
- Brand-consistent messaging
- User satisfaction with process and outputs

### 9. Learning & Refinement Integration

**Automatic:**
- Record user approvals/rejections to RLHF system
- Track feedback patterns for quality improvement

**Explicit:**
- Ask for quality feedback on generated content
- Capture user preferences for future sessions

### 10. Platform-Specific Behavior

**Unique Content Per Platform:**
- TikTok: Short-video hook format
- Instagram Reels: Visual-first, lifestyle aesthetic
- YouTube Shorts: Engaging openings, value delivery
- Threads: Conversational, community-driven
- Facebook: Community-focused, shareable
- Blog: Long-form depth, SEO-optimized

**Cross-Platform Adaptation:**
- Adapt core ideas across platforms while maintaining brand voice
- Respect platform-specific best practices

---

## Advanced Elicitation Insights (Step 2 Enhancement)

### Methods Applied: Tree of Thoughts, User Persona Focus Group, First Principles Analysis

### Architecture Validation (Tree of Thoughts)

| Path | Assessment | Decision |
|------|------------|----------|
| Linear Pipeline | Simple but rigid | ❌ Not adopted |
| Loop-Based | High quality but slow | ❌ Not adopted |
| Hybrid Batch (current) | Balances speed + quality | ✅ **Confirmed optimal** |
| Parallel Factory | Maximum speed but overwhelming | ❌ Not adopted |

**New Requirement 1: Quick-Entry Path**
- Add option to skip Strategy phase
- Allow direct: "Generate 5 TikToks on [topic]"
- Faster iteration for experienced users

### User Persona Insights (Focus Group)

**Solo Entrepreneur Concern:** Strategy phase feels like homework
→ **New Requirement 2: Demo Mode**
- Allow workflow trial without brand profile
- Use generic brand placeholder for exploration
- Require brand setup only for saving/publishing

**Agency Owner Concern:** Need organization for multiple brands/clients
→ **New Requirement 3: User Preference Profile**
- Save personal formatting/style preferences (separate from brand)
- Examples: "hooks first, hashtags last" preferences
- Persists across sessions

**Content Creator Concern:** Want flexibility, not rigid modes
→ **New Requirement 4: Mid-Session Mode Switch**
- Allow changing YOLO ↔ Collaborative during generation
- Example: "YOLO these 5, but let's collaborate on the blog post"
- Dynamic workflow adaptation

### First Principles Breakthrough

| Assumption Challenged | Truth | Design Change |
|----------------------|-------|---------------|
| "Users need content plan" | Users want usable content | Make Strategy skippable |
| "More platforms = better" | Users use what they need | Platform selection, not all-forced |
| "YOLO vs Collaborative is binary" | Users want flexibility | Enable mid-session switching |
| "Brand profile must exist first" | Users want to try before commit | Add demo mode |
| "Separate text and video" | Users want complete pieces | Generate unified pieces |

**New Requirement 5: Smart Strategy Suggestion**
- Auto-generate content plan based on brand profile + industry
- Reduce manual planning burden
- User can accept, modify, or skip

### Enhanced Requirements Summary

**Added to Original Requirements:**
1. **Quick-Entry Path** — Skip Strategy, direct generation
2. **Demo Mode** — Try without brand profile (generic placeholder)
3. **User Preference Profile** — Save personal style/formatting preferences
4. **Mid-Session Mode Switch** — Change YOLO ↔ Collaborative dynamically
5. **Smart Strategy Suggestion** — Auto-generate plan from brand + industry

---

## Tools Configuration (Step 3)

### Core BMAD Tools

| Tool | Status | Integration Points |
|------|--------|-------------------|
| **Party-Mode** | ✅ Included | Strategy Generation (multi-agent content strategy), Content Review (quality check from multiple perspectives) |
| **Advanced Elicitation** | ✅ Included | Content plan refinement (explore content angles), Content improvement (evaluate from multiple techniques) |
| **Brainstorming** | ✅ Included | Context Gathering (generate content ideas), Strategy Generation (viral angles, platform approaches) |

### LLM Features

| Feature | Status | Use Cases |
|---------|--------|-----------|
| **File I/O** | ✅ Included | Save content outputs (markdown files, JSON, single documents), manage content directories |
| **Web-Browsing** | ✅ Included | Real-time trend research, platform intelligence gathering (complements Market Research Agent) |
| **Sub-Agents** | ✅ Included | Platform-specialized content delegates (e.g., "TikTok sub-agent", "Blog sub-agent" for parallel generation) |
| **Sub-Processes** | ✅ Included | Parallel batch generation across platforms for speed (20+ pieces per session) |

### Memory Systems

| Tool | Status | Purpose |
|------|--------|---------|
| **Sidecar File** | ✅ Included | User Preference Profile persistence (formatting/style preferences), RLHF learning data across sessions, workflow state resumption (YOLO/Collaborative mode switching) |
| **Vector Database** | ⏸️ Deferred | Can add later for Tier 2/3 advanced learning (semantic content pattern search, find similar past content) |

### External Integrations

| Integration | Status | Notes |
|-------------|--------|-------|
| **kie.ai API** | ✅ Included | Video generation (configured in module.yaml, optional - text-only mode if not available) |
| **Chrome DevTools MCP** | ✅ Included | Platform research and analytics (configured in module.yaml, optional - manual input mode if not available) |
| **Context-7** | ❌ Not needed | API documentation not required for this workflow |
| **Playwright** | ❌ Not needed | Browser automation not needed (Chrome DevTools MCP covers research) |
| **Git Integration** | ❌ Not needed | Content versioning handled by file outputs |
| **Database Connector** | ❌ Not needed | Content storage via file system |

### Installation Requirements

| Tool | Requires Install | Status | Notes |
|------|------------------|--------|-------|
| All Core BMAD Tools | No | ✅ Built-in | No installation required |
| All LLM Features | No | ✅ Built-in | No installation required |
| Sidecar File | No | ✅ Built-in | No installation required |
| kie.ai API | Yes | ⚠️ Module config | Optional - text-only mode if not configured |
| Chrome DevTools MCP | Yes | ⚠️ Module config | Optional - manual input mode if not configured |

**User Installation Preference:** Willing to configure kie.ai and Chrome DevTools MCP (already included in module.yaml installer)

**Alternative Options:**
- Text-only mode if kie.ai not configured
- Manual trend input if Chrome DevTools MCP not configured
- Workflow gracefully handles missing external integrations

---

## Workflow Structure Design (Step 6)

**Continuation Support:** ✅ Included

### Step Structure Overview

| Step | Name | Goal | Required |
|------|------|------|----------|
| **01** | Initialize Session | Load brand profile, check preferences, setup output directory | ✅ Yes |
| **01b** | Continue Session | Resume in-progress workflow, detect session state | Conditional |
| **02** | Content Strategy | Generate/skip content plan, select platforms, choose mode (YOLO/Collab) | ✅ Yes |
| **03** | Generate Content | Generate content batch (YOLO or Collaborative mode) | ✅ Yes |
| **04** | Review & Refine | User approves/refines content pieces | ✅ Yes |
| **05** | Export Content | Save approved pieces, generate batch summary + JSON | ✅ Yes |
| **06** | Complete Session | Save learning data, update metrics, summarize session | ✅ Yes |

### Workflow Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Content Creation Workflow                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 01: Initialize  │
                    │ - Load brand    │
                    │ - Setup dirs    │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │ 01b: Continue?   │◄─────┐ (if resuming)
                    │ - Detect state   │      │
                    └────────┬─────────┘      │
                             │                │
              ┌──────────────▼───────┐        │
              │ 02: Content Strategy │        │
              │ - Topic, platforms  │        │
              │ - Mode (YOLO/Collab) │        │
              └──────────┬────────────┘        │
                         │                     │
              ┌──────────▼───────────┐         │
              │ 03: Generate Content│         │
              │  ├─ YOLO Mode      │         │
              │  └─ Collaborative   │         │
              └──────────┬───────────┘         │
                         │                     │
              ┌──────────▼───────────┐         │
              │ 04: Review & Refine │         │
              │ - Approve/reject    │         │
              └──────────┬───────────┘         │
                         │                     │
              ┌──────────▼───────────┐         │
              │ 05: Export Content  │         │
              │ - Individual files  │         │
              │ - Batch summary     │         │
              └──────────┬───────────┘         │
                         │                     │
              ┌──────────▼───────────┐         │
              │ 06: Complete Session│         │
              │ - Save learning     │         │
              └──────────────────────┘         │
                         │                     │
                         └─────────────────────┘
```

### Interaction Pattern Design

| Step | User Input | Autonomous Action | Menu Options |
|------|------------|-------------------|--------------|
| **01 Init** | Confirm/demo mode choice | Load brand profile, setup directories | Auto-proceed |
| **01b Continue** | Choose resume/restart | Detect session state | Resume/Restart |
| **02 Strategy** | Topic, platforms, mode | Smart strategy suggestion | A/P/C menu |
| **03 Generate** | Feedback (Collab only) | Generate content pieces | Custom menu |
| **04 Review** | Approve/refine each piece | Track approvals | Custom menu |
| **05 Export** | Confirm export | Save files, generate batch | Auto-proceed |
| **06 Complete** | Optional feedback | Save learning data, metrics | A/P/C menu |

**Key Features:**
- Progress indicators: "Generating piece 3 of 10..."
- Mid-session mode switch: YOLO ↔ Collaborative anytime
- Quick-Entry: Skip Strategy for direct generation

### State Tracking (Sidecar File)

```yaml
# session-state.yaml (sidecar)
session_id: "uuid-123"
brand: "brand-name"
date: "2025-12-28"
stepsCompleted: [1, 2, 3]
currentMode: "collaborative"  # or "yolo"
generatedPieces: 5
approvedPieces: 3
rejectedPieces: 2
userPreferences:
  sectionOrder: ["hook", "content", "cta", "hashtags"]
```

### File Structure Design

```
{_bmad}/marketing-agent-team/workflows/content-creation/
  workflow.md                          # Main workflow config
  steps/
    step-01-init.md                     # Initialize or detect session
    step-01b-continue.md                # Resume in-progress workflow
    step-02-strategy.md                 # Content plan + mode selection
    step-03-generate.md                 # Generate content (YOLO/Collab)
    step-04-review.md                   # Review and refine pieces
    step-05-export.md                   # Export to files + batch docs
    step-06-complete.md                 # Save learning, metrics, complete
  templates/
    content-piece-template.md           # Individual piece structure
    batch-summary-template.md           # Batch summary format
  data/
    platform-formats.yaml               # Platform-specific guidelines
```

### Role and Persona Definition

**AI Role:** Content Creation Architect + Marketing Strategist

**Expertise:**
- Multi-platform content strategy (TikTok, IG, YouTube, etc.)
- Brand voice consistency across platforms
- Platform-specific best practices
- Viral content patterns and psychology

**Communication Style:**
- Collaborative and adaptive
- Efficient in YOLO mode (get to work)
- Iterative in Collaborative mode (discuss, refine, improve)
- Shows progress and next steps clearly

### Validation and Error Handling

**Quality Checkpoints:**
- Content Validation Task integration (brand guidelines)
- Platform-specific checks (character limits, hashtag counts)
- Brand voice consistency

**Error Handling:**
- Brand profile missing → Offer Demo Mode
- kie.ai unavailable → Text-only mode with notification
- Chrome DevTools unavailable → Manual trend input
- File write errors → Clear error + retry option

### Special Features

**Conditional Logic:**
```
IF brand profile exists → Load profile
ELSE → Offer Demo Mode

IF kie.ai configured → Generate video + text
ELSE → Text-only mode

IF mode == YOLO → Generate all batch
IF mode == Collaborative → Generate one-by-one with feedback

IF user switches mode → Update current mode, continue generation
```

**Branch Points:**
- Strategy Generation → Quick-Entry (skip) or Full Strategy
- Review → Approve, Refine, or Skip each piece
- Export → Individual files, batch summary, JSON (all generated)

### Architecture Decision Records (Step 6 Enhancement)

**Methods Applied:** Self-Consistency Validation, Cross-Functional War Room, Architecture Decision Records

#### Decision 1: Mode Guidance System

**Product Manager + Engineer + Designer Consensus:**

| Mode | Name | Description | Best For | Trade-off |
|------|------|-------------|----------|-----------|
| **YOLO** | Lightning Mode | Generate entire batch at maximum speed | Experienced users, tight deadlines | Speed over control — review at end |
| **Collaborative** | Studio Mode | Craft each piece together with feedback | New users, learning brand voice, important content | Quality over speed — takes more time |

**Implementation:** Display guidance during mode selection in Step 02

#### Decision 2: Enhanced Progress Indicators

**Designer Recommendation:**

**Format:** `Piece {N} of {Total} ({Platform}) — {Action}...`

**Examples:**
- "Piece 3 of 10 (TikTok) — Generating script..."
- "Piece 5 of 10 (Instagram) — Refining hook..."
- "Piece 8 of 10 (Blog) — Awaiting approval..."

#### Decision 3: State Transition Diagram

**Engineer Recommendation for Mid-Session Mode Switching:**

```
[YOLO Mode]
     │
     │ User selects "Switch to Collaborative"
     ▼
1. Save current batch progress
2. Confirm: "Switching will slow down but improve quality"
3. Update currentMode in state
4. Next piece uses Collaborative flow

[Collaborative Mode]
     │
     │ User selects "Switch to YOLO"
     ▼
1. Complete current piece refinement
2. Confirm: "Remaining pieces will generate at speed"
3. Update currentMode in state
4. Remaining pieces use YOLO flow
```

#### Decision 4: Success Metrics Definition

**Product Manager Clarification:**

**Approval Rate Definition:**
- **Approved:** User clicks "Approve" without refinements
- **Refined:** User approves after 1+ refinement cycles
- **Rejected:** User discards piece

**Calculation:** `Approval Rate = Approved / (Approved + Refined + Rejected)`

**Target:** 70%+ approval rate (Tier 1 goal)

---

## Output Format Design (Step 5)

**Format Type:** Structured (Required sections, flexible content)

**Output Requirements:**
- **Document Types:** Individual content pieces, batch summary, API export
- **File Formats:** Markdown (.md), JSON (.json)
- **Frequency:** Batch (20+ pieces per session)

### 1. File Naming Convention

**Format:** `{YYYY-MM-DD}-{platform}-{sequence}-{topic-slug}.md`

**Examples:**
- `2025-12-28-tiktok-001-marketing-tips.md`
- `2025-12-28-instagram-003-product-launch.md`
- `2025-12-28-blog-002-seo-guide.md`

**UX Benefits:**
- Date first → Chronological sorting by default
- Platform visible → Grouped when browsing
- Sequence number → Prevents duplicates, shows volume
- Topic slug → Quick recognition at a glance

### 2. Directory Structure

```
/marketing-content/
  /{brand-name}/
    /{YYYY-MM-DD}/
      /{platform}/
        {content-files}
      /batch/
        batch-summary-{date}.md
        batch-api-{date}.json
      /rejected/
        {user-rejected pieces}
```

**Example:**
```
/marketing-content/
  /my-brand/
    /2025-12-28/
      /tiktok/
        001-marketing-tips.md
        002-viral-hacks.md
      /instagram/
        001-lifestyle-post.md
      /blog/
        001-seo-guide.md
      /batch/
        batch-summary-2025-12-28.md
        batch-api-2025-12-28.json
      /rejected/
        tiktok-004-draft-v1.md
```

**UX Benefits:**
- Scalable → Each date is self-contained
- Easy archive → Move old dates to archive folder
- Platform browse → See all content for each platform
- Clean separation → Individual pieces vs batch exports vs rejected

### 3. Individual Content Piece Structure

**Required Sections (Markdown):**

| Field | Type | Description |
|-------|------|-------------|
| **Frontmatter** | YAML | platform, type, date, status |
| **Hook** | Content | Opening line/visual |
| **Content Body** | Content | Main script/post content |
| **Call-to-Action** | Content | What user should do |
| **Hashtags** | Content | Relevant tags |

**Example (Default Ordering):**
```markdown
---
platform: tiktok
type: video-script
date: 2025-12-28
status: approved
---

# Hook
Stop scrolling if you want to 10x your marketing!

# Content
[Full script content...]

# Call-to-Action
Follow for more daily tips!

# Hashtags
#marketing #tips #viral #growth
```

**User Preference Adaptation:** Section order adapts to user's saved preferences (e.g., "hashtags first")

### 4. Batch Summary Document Structure

**File:** `batch-summary-{YYYY-MM-DD}.md`

**Sections:**
- Header (Date, Brand, Session ID)
- Content Plan (What was generated)
- Generated Content (List by platform with status)
- Session Stats (Total, Approved, Rejected, Approval Rate)

### 5. JSON Export Structure

**File:** `batch-api-{YYYY-MM-DD}.json`

**Schema:**
```json
{
  "session_id": "uuid",
  "brand": "brand-name",
  "generated_at": "YYYY-MM-DD",
  "content": [
    {
      "id": "piece-1",
      "platform": "tiktok",
      "type": "video-script",
      "hook": "...",
      "content": "...",
      "cta": "...",
      "hashtags": ["#marketing", "#tips"],
      "status": "approved"
    }
  ]
}
```

### Special Considerations

- **User Preference Profile:** Section ordering adapts to user's saved formatting preferences
- **Rejected Content:** Saved to `/rejected/` folder for RLHF learning
- **Status Tracking:** Each piece has status (approved/refined/rejected) for metrics
- **Scalability:** Structure supports 100+ pieces without becoming unmanageable

---

## Build Summary (Step 7)

**Build Date:** 2025-12-28
**Build Status:** ✅ Complete

### Files Generated

All workflow files have been successfully created in the build location:

**Build Location:** `{project-root}/_bmad-output\bmb-creations\workflows\content-creation\`

**Installation Target:** `{project-root}/_bmad/marketing-agent-team/workflows/content-creation/`

#### 1. Main Workflow File

| File | Description | Status |
|------|-------------|--------|
| `workflow.md` | Main workflow configuration with initialization sequence | ✅ Created |

#### 2. Step Files (7 steps with continuation support)

| File | Description | Status |
|------|-------------|--------|
| `steps/step-01-init.md` | Initialize session, detect continuation, setup directories | ✅ Created |
| `steps/step-01b-continue.md` | Resume in-progress workflow, state detection | ✅ Created |
| `steps/step-02-strategy.md` | Content strategy, platform selection, mode choice | ✅ Created |
| `steps/step-03-generate.md` | Content generation (YOLO/Collaborative modes) | ✅ Created |
| `steps/step-04-review.md` | Review, approve, refine, reject pieces | ✅ Created |
| `steps/step-05-export.md` | Export content, generate batch summary and JSON | ✅ Created |
| `steps/step-06-complete.md` | Save learning data, metrics, complete session | ✅ Created |

#### 3. Template Files

| File | Description | Status |
|------|-------------|--------|
| `templates/content-piece-template.md` | Individual content piece structure with platform variations | ✅ Created |
| `templates/batch-summary-template.md` | Batch summary document format | ✅ Created |

#### 4. Data Files

| File | Description | Status |
|------|-------------|--------|
| `data/platform-formats.yaml` | Platform-specific guidelines, content styles, best practices | ✅ Created |

### Template Customizations

**From Standard Templates:**
- Customized role: "Content Creation Architect and Marketing Strategist"
- Platform-specific content structure (6 platforms supported)
- Dual-mode generation (YOLO/Lightning and Collaborative/Studio)
- Continuation support with step-01b-continue.md
- Enhanced progress indicators: "Piece {N} of {Total} ({Platform}) — {Action}..."
- Mid-session mode switching capability
- Demo Mode for users without brand profiles
- User Preference Profile persistence

**Key Customizations:**
1. **step-01-init.md**: Includes brand profile discovery and Demo Mode option
2. **step-01b-continue.md**: Analyzes session state and determines exact continuation point
3. **step-02-strategy.md**: Smart strategy suggestion, Quick-Entry path, mode selection with guidance
4. **step-03-generate.md**: Dual-mode generation with mid-session switching
5. **step-04-review.md**: Three review methods (individual, summary, platform-by-platform)
6. **step-05-export.md**: Auto-proceed with individual files, batch summary, and JSON export
7. **step-06-complete.md**: Learning data capture, user preferences update, session archiving

### Special Features Implemented

**Enhanced Requirements (from Advanced Elicitation):**
- ✅ Quick-Entry Path — Skip Strategy, direct generation
- ✅ Demo Mode — Try without brand profile (generic placeholder)
- ✅ User Preference Profile — Save personal style/formatting preferences
- ✅ Mid-Session Mode Switch — Change YOLO ↔ Collaborative dynamically
- ✅ Smart Strategy Suggestion — Auto-generate plan from brand + industry

**State Management:**
- Session state tracking via sidecar YAML file
- RLHF learning data collection
- User preferences persistence
- Rejected content tracking for learning

**External Integrations:**
- kie.ai API for video generation (with text-only fallback)
- Chrome DevTools MCP for platform research (with manual input fallback)
- Graceful degradation when integrations unavailable

### Manual Steps Required

**Before First Use:**
1. Copy workflow folder to installation target: `{project-root}/_bmad/marketing-agent-team/workflows/content-creation/`
2. Ensure module.yaml includes workflow registration
3. Configure kie.ai API key in module config (optional, for video generation)
4. Configure Chrome DevTools MCP in module config (optional, for trend research)

**After Installation:**
1. Test workflow with Demo Mode
2. Create brand profile using Brand Archetype Agent
3. Run first full session with approved content
4. Review learning data after 3-5 sessions

### Testing Checklist

- [ ] Initialize workflow in fresh session
- [ ] Test Demo Mode (no brand profile)
- [ ] Test continuation support (interrupt and resume)
- [ ] Test Quick-Entry path (skip strategy)
- [ ] Test YOLO mode (batch generation)
- [ ] Test Collaborative mode (iterative generation)
- [ ] Test mid-session mode switch
- [ ] Test all 6 platforms content generation
- [ ] Test review methods (individual, summary, platform-by-platform)
- [ ] Verify export files (individual, batch summary, JSON)
- [ ] Verify learning data collection
- [ ] Verify user preferences persistence
- [ ] Test graceful degradation (kie.ai unavailable)
- [ ] Test graceful degradation (Chrome DevTools unavailable)

### Next Steps

1. **Proceed to Step 8 (Review):** Review all generated files for completeness
2. **Address Any Issues:** Make adjustments if needed
3. **Install Workflow:** Copy to target location
4. **Test Workflow:** Run through full session
5. **Deploy:** Make available to users

---

**Build completed successfully! All 11 files generated with 100% template compliance.**

---

## Review Summary (Step 8)

**Review Date:** 2025-12-28
**Review Status:** ✅ PASSED

### Validation Results

| Check | Result | Details |
|-------|--------|---------|
| File Structure | ✅ PASSED | All 11 files present, correct directory structure |
| Configuration Validation | ✅ PASSED | workflow.md metadata correct, paths properly formatted |
| Step File Compliance | ✅ PASSED | All 7 steps follow template structure with proper menus |
| Cross-File Consistency | ✅ PASSED | All variable references consistent, paths valid |
| Requirements Verification | ✅ PASSED | All original requirements met, all 5 enhancements implemented |
| Best Practices Adherence | ✅ PASSED | File sizes appropriate, collaborative dialogue included |

### Issues Found

**Critical Issues:** None
**Warnings:** None
**Suggestions:** None

### Customizations Noted

All customizations from Advanced Elicitation enhancements were successfully implemented:
- Quick-Entry Path for direct generation
- Demo Mode for users without brand profiles
- User Preference Profile with sidecar persistence
- Mid-session mode switching (YOLO ↔ Collaborative)
- Smart strategy suggestion from brand + industry

### Testing Checklist Provided

14 test scenarios documented for validation before deployment, covering:
- Fresh sessions and continuation
- Both generation modes and mode switching
- All 6 platforms
- Export functionality
- Graceful degradation for missing integrations

### Deployment Readiness

The workflow is ready for installation to:
`{project-root}/_bmad/marketing-agent-team/workflows/content-creation/`


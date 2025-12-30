---
workflowName: content-creation
creationDate: 2025-12-28
module: marketing-agent-team
status: COMPLETE
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9]
---

# Workflow Creation Summary

## Workflow Information

- **Name:** Content Creation
- **Module:** marketing-agent-team (custom)
- **Created:** 2025-12-28
- **Created By:** Althio
- **Type:** Action Workflow
- **Location:** `{project-root}/_bmad-output\bmb-creations\workflows\content-creation\`
- **Installation Target:** `{project-root}/_bmad/marketing-agent-team/workflows/content-creation/`

## Generated Files (11 Total)

### Main Configuration
- `workflow.md` - Main workflow configuration with initialization sequence

### Step Files (7 steps with continuation support)
- `steps/step-01-init.md` - Initialize session, detect continuation, setup directories
- `steps/step-01b-continue.md` - Resume in-progress workflow, state detection
- `steps/step-02-strategy.md` - Content strategy, platform selection, mode choice
- `steps/step-03-generate.md` - Content generation (YOLO/Collaborative modes)
- `steps/step-04-review.md` - Review, approve, refine, reject pieces
- `steps/step-05-export.md` - Export content, generate batch summary and JSON
- `steps/step-06-complete.md` - Save learning data, metrics, complete session

### Templates (2 files)
- `templates/content-piece-template.md` - Individual content piece structure with platform variations
- `templates/batch-summary-template.md` - Batch summary document format

### Data Files (1 file)
- `data/platform-formats.yaml` - Platform-specific guidelines, content styles, best practices

## Quick Start Guide

### Installation

1. Copy the workflow folder to your module:
   ```
   From: {project-root}/_bmad-output\bmb-creations\workflows\content-creation\
   To:   {project-root}/_bmad/marketing-agent-team/workflows/content-creation/
   ```

2. Ensure module.yaml registers this workflow

3. Optional: Configure external integrations:
   - kie.ai API key (for video generation)
   - Chrome DevTools MCP (for platform research)

### Running the Workflow

**First-time users:**
- Can try **Demo Mode** without brand profile
- For full experience, create brand profile first

**Access:** Through workflow menu or Skill invocation

### Supported Platforms

1. TikTok - Short-video hooks (15-60 seconds)
2. Instagram Reels - Visual-first lifestyle (15-90 seconds)
3. YouTube Shorts - Value delivery (60 seconds)
4. Threads - Conversational text posts
5. Facebook - Community-focused posts
6. Blog - Long-form SEO content (500-1500 words)

### Generation Modes

**Lightning Mode (YOLO):**
- Generate entire batch at maximum speed
- Review all content at the end
- Best for: Experienced users, tight deadlines

**Studio Mode (Collaborative):**
- Craft each piece together with feedback
- Generate one → refine → next
- Best for: New users, important content, learning brand voice

## Key Features

✅ **Continuation Support** - Pause and resume sessions anytime
✅ **Demo Mode** - Try workflow without brand profile
✅ **Quick-Entry Path** - Skip strategy for direct generation
✅ **Smart Strategy Suggestion** - Auto-generate content plans
✅ **Mid-Session Mode Switch** - Change YOLO ↔ Collaborative anytime
✅ **User Preference Profile** - Persistent formatting/style preferences
✅ **RLHF Learning** - Improves from your approvals and rejections
✅ **Graceful Degradation** - Works without optional integrations

## Testing Checklist

Before deploying, test these scenarios:

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

## Compliance Check

**Before deploying, validate your workflow meets BMAD standards:**

1. **Start a new Claude conversation** (fresh context)
2. **Use this command:** `/bmad:bmm:workflows:workflow-compliance-check`
3. **Provide the path:** `{project-root}/_bmad/marketing-agent-team/workflows/content-creation/workflow.md`
4. **Follow the validation process** to identify and fix any violations

## Next Steps

1. **Install:** Copy workflow to target location
2. **Test:** Run through testing checklist
3. **Validate:** Run compliance check in fresh context
4. **Deploy:** Make available to users
5. **Monitor:** Track usage and collect feedback

---
*Workflow creation completed successfully on 2025-12-28*
*Generated with BMAD Workflow Builder*

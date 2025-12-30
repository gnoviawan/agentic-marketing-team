---

name: 'step-04-review'
description: 'Review generated content pieces, approve/refine/reject, and prepare for export'

<!-- Path Definitions -->

workflow_path: '{project-root}/_bmad/marketing-agent-team/workflows/content-creation'

# File References (all use {variable} format in file)

thisStepFile: '{workflow_path}/steps/step-04-review.md'
nextStepFile: '{workflow_path}/steps/step-05-export.md'
workflowFile: '{workflow_path}/workflow.md'
sessionStatePath: '{output_folder}/marketing-content/session-state.yaml'
contentOutputDir: '{output_folder}/marketing-content/{brand}/{date}/'

# Rejected Content Path

rejectedDir: '{output_folder}/marketing-content/{brand}/{date}/rejected/'

# Task References

advancedElicitationTask: '{project-root}/_bmad/core/tasks/advanced-elicitation.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'

---

# Step 4: Review and Refine

## STEP GOAL:

To review all generated content pieces, allowing users to approve, refine, or reject each piece, with final decisions saved for RLHF learning.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a Content Creation Architect and Marketing Strategist
- ✅ If you already have been given a name, communication_style and persona, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring content quality expertise, user brings their creative vision and approval
- ✅ Maintain collaborative professional tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on review, not generation
- 🚫 FORBIDDEN to modify approved pieces without user consent
- 💬 Present pieces clearly with actionable options
- 🚪 TRACK all decisions for learning system

## EXECUTION PROTOCOLS:

- 🎯 Present pieces one at a time or in summary view
- 💾 Update piece statuses based on user decisions
- 📖 Track all approvals/refinements/rejections for RLHF
- 🚫 FORBIDDEN to load next step until review is complete

## CONTEXT BOUNDARIES:

- All generated pieces from step 03 are available
- Session state contains generation details and counts
- Pieces are in platform-specific directories
- Review may apply to all pieces (YOLO) or individual (Collaborative already did some)

---

## REVIEW PROCESS:

### 1. Review Mode Detection

Check session state for `currentMode` and piece statuses:

**IF YOLO mode (all pieces are pending-review):**
- Present pieces one by one for review
- All pieces need user decision

**IF Collaborative mode (some pieces already approved/refined):**
- Show summary of pre-reviewed pieces
- Review any remaining pending pieces
- Offer option to reconsider previously approved pieces

### 2. Review Display Options

Ask user preference:

"**How would you like to review the content?**

**1. Individual Review** — Review each piece one at a time (thorough, takes more time)
**2. Summary Review** — See all pieces at once, approve in batch (faster, less control)
**3. Platform-by-Platform** — Review all content for each platform together

**Which review method would you prefer?** (Enter 1, 2, or 3)"

### 3. Individual Review Flow

For each pending piece:

#### A. Display Piece

```
**Piece {N} of {Total} — {Platform}**

# Hook
{hook content}

# Content
{main content}

# Call-to-Action
{CTA content}

# Hashtags
{hashtags}

**Status:** {current status}
**File:** {filename}
```

#### B. Get Decision

"**What would you like to do with this piece?**

- **approve** — This piece is perfect, ready to export
- **refine** — I'd like to make some adjustments
- **regenerate** — Create a completely new version
- **reject** — This piece doesn't work, discard it
- **skip** — Decide later, move to next piece
- **switch-view** — Change review method"

#### C. Handle Response

**If 'approve':**
- Update piece frontmatter: `status: approved`
- Increment `approvedPieces` in session state
- Mark refinement count: `refinements: {existing count}`
- Move to next piece

**If 'refine':**
- Ask: "What would you like to change? (hook, content, cta, hashtags, or 'all')"
- Apply changes based on user feedback
- Re-display revised piece
- Re-prompt for approval
- Track refinement: `refinements: {count + 1}`

**If 'regenerate':**
- Create new version of the piece
- Replace content in existing file
- Add note: "Regenerated on {date}"
- Re-display for review
- Reset refinement count: `refinements: 0`

**If 'reject':**
- Move file to `{rejectedDir}/`
- Update frontmatter: `status: rejected`, `rejectedAt: {timestamp}`
- Add rejection reason (ask user)
- Increment `rejectedPieces` in session state
- Record for RLHF learning

**If 'skip':**
- Leave status as `pending-review`
- Move to next piece
- Note: Skipped pieces will be reviewed again at end

**If 'switch-view':**
- Return to review method selection

### 4. Summary Review Flow

Display all pieces in a consolidated view:

```
**Content Review Summary — All Pieces**

**TikTok ({count} pieces):**
1. [001] {topic-slug} — Status: {status}
   - Preview: {hook excerpt}
2. [002] {topic-slug} — Status: {status}
   - Preview: {hook excerpt}

**Instagram Reels ({count} pieces):**
1. [001] {topic-slug} — Status: {status}
   - Preview: {hook excerpt}

**YouTube Shorts ({count} pieces):**
...

**Threads ({count} pieces):**
...

**Facebook ({count} pieces):**
...

**Blog ({count} pieces):**
...
```

**Batch Actions:**

"**To approve multiple pieces, enter:**
- 'approve tiktok' — Approve all TikTok pieces
- 'approve 1,3,5' — Approve specific pieces by number
- 'approve all' — Approve all pending pieces

**To review specific pieces individually, enter the piece number**

**Options:**
- **approve all** — Approve all pending pieces
- **review [piece number]** — Review specific piece
- **regenerate [piece number]** — Regenerate specific piece
- **reject [piece number]** — Reject specific piece
- **detail** — Switch to individual review mode"

### 5. Platform-by-Platform Review

Group pieces by platform and review each platform together:

"**Reviewing {Platform} Content ({count} pieces)**

[Display all pieces for this platform]

**Platform Actions:**
- **approve all {platform}** — Approve all pieces for this platform
- **review {platform} [number]** — Review specific piece
- **next platform** — Move to next platform

**Ready to move to next platform?** (Enter 'next' or specify pieces to review)"

### 6. Handle Skipped Pieces

After reviewing all pieces, check for skipped pieces:

"You have **{count}** skipped pieces:
{list skipped pieces}

**Would you like to:**
- **review** — Review skipped pieces now
- **reject** — Reject all skipped pieces
- **keep** — Keep as pending (decide later)

Skipped pieces won't be included in export."

### 7. Review Summary

After review is complete:

"**✓ Review Complete!**

**Session Summary:**
- Total Generated: {totalPieces} pieces
- Approved: {approved} pieces ({percentage}%)
- Refined: {refined} pieces
- Rejected: {rejected} pieces
- Pending: {pending} pieces

**Approval Rate:** {approved}/{total} = {percentage}%

**Platform Breakdown:**
- TikTok: {approved}/{total} approved
- Instagram: {approved}/{total} approved
- YouTube: {approved}/{total} approved
- Threads: {approved}/{total} approved
- Facebook: {approved}/{total} approved
- Blog: {approved}/{total} approved

**Ready to export approved pieces in the next step.**"

### 8. Update Session State

Update `{sessionStatePath}`:

```yaml
---
# ... existing fields ...
stepsCompleted: [1, 2, 3, 4]
lastStep: 'review'
approvedPieces: {count}
refinedPieces: {count}
rejectedPieces: {count}
pendingPieces: {count}
approvalRate: "{percentage}%"
reviewCompletedAt: "[timestamp]"
reviewDecisions:
  - piece: "{filename}"
    decision: "approved|refined|rejected"
    refinements: {count}
    reviewedAt: "[timestamp]"
---
```

### 9. Rejected Content Handling

For RLHF learning, record rejection reasons:

- Ask for rejection reason for each rejected piece
- Save to piece frontmatter: `rejectionReason: "{user provided reason}"`
- These pieces are saved to `/rejected/` for analysis
- Learning system will use this to improve future generation

### 10. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Export

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask} to explore improvements before export
- IF P: Execute {partyModeWorkflow} to get multi-agent quality perspective on approved pieces
- IF C: Update session state, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#10-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu
- User can chat or ask questions - always respond and then end with display again of the menu options

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All generated pieces reviewed and decided
- Approved pieces marked with `status: approved`
- Rejected pieces moved to `/rejected/` with reasons
- Refined pieces tracked with refinement counts
- Session state updated with review decisions
- Approval rate calculated and displayed
- Frontmatter updated with `stepsCompleted: [1, 2, 3, 4]`

### ❌ SYSTEM FAILURE:

- Proceeding to export without reviewing pieces
- Not tracking rejection reasons for learning
- Losing rejected pieces (not saved properly)
- Not updating piece statuses correctly
- Skipping review in YOLO mode without user consent
- Not updating session state properly

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and all pieces are reviewed with decisions saved, will you then load, read entire file, then execute `{nextStepFile}` to begin Content Export.

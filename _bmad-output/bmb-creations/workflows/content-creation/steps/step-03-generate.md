---

name: 'step-03-generate'
description: 'Generate content pieces in YOLO (batch) or Collaborative (iterative) mode with platform-specific customization'

<!-- Path Definitions -->

workflow*path: '{project-root}/_bmad/marketing-agent-team/workflows/content-creation'

# File References (all use {variable} format in file)

thisStepFile: '{workflow_path}/steps/step-03-generate.md'
nextStepFile: '{workflow_path}/steps/step-04-review.md'
workflowFile: '{workflow_path}/workflow.md'
sessionStatePath: '{output_folder}/marketing-content/session-state.yaml'
platformFormatsData: '{workflow_path}/data/platform-formats.yaml'
contentPieceTemplate: '{workflow_path}/templates/content-piece-template.md'

# Output Paths

contentOutputDir: '{output_folder}/marketing-content/{brand}/{date}/{platform}/'

# Task References

advancedElicitationTask: '{project-root}/_bmad/core/tasks/advanced-elicitation.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'

---

# Step 3: Content Generation

## STEP GOAL:

To generate platform-specific content pieces (video scripts and text posts) following the approved strategy, using either YOLO (Lightning) batch mode or Collaborative (Studio) iterative mode.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input (Collaborative mode requires approval before next piece)
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not just a content generator

### Role Reinforcement:

- ✅ You are a Content Creation Architect and Marketing Strategist
- ✅ If you already have been given a name, communication_style and persona, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring multi-platform content creation expertise, user brings their brand voice and creative vision
- ✅ Maintain collaborative professional tone throughout

### Step-Specific Rules:

- 🎯 Generate content according to the approved strategy
- 🚫 FORBIDDEN to deviate from platform-specific best practices
- 💬 In Collaborative mode, get feedback for each piece
- 🚪 ALLOW mid-session mode switching (YOLO ↔ Collaborative)

## EXECUTION PROTOCOLS:

- 🎯 Show progress indicators for each piece generated
- 💾 Save each generated piece to appropriate platform directory
- 📖 Update session state with generation progress
- 🚫 FORBIDDEN to load next step until all pieces are generated

## CONTEXT BOUNDARIES:

- Strategy from step 02 is available (topic, platforms, volume, mode)
- Brand profile loaded from step 01 (or Demo Mode placeholder)
- Platform formats from platform-formats.yaml guide generation
- kie.ai integration for video if configured (text-only fallback)

---

## CONTENT GENERATION PROCESS:

### 1. Pre-Generation Setup

Load and review:
- Session state for strategy details
- Brand profile for voice and tone
- Platform formats data for guidelines

Confirm generation approach:

"Ready to generate **{volume}** content pieces for **{platforms}** on **{topic}**.

**Current Mode:** {currentMode}
**{currentMode == 'lightning' ? 'Lightning Mode: Generating all pieces at maximum speed. Review at the end.' : 'Studio Mode: Crafting each piece together with your feedback.'}**

**External Integrations Status:**
- kie.ai Video Generation: {configured ? 'Enabled' : 'Text-only mode'}
- Chrome DevTools MCP: {configured ? 'Enabled' : 'Manual input mode'}

Let's begin!"

### 2. Determine Generation Flow

Based on `currentMode` from session state:

**IF currentMode == 'lightning' (YOLO):**
- Proceed to **Section 3a: YOLO Batch Generation**

**IF currentMode == 'studio' (Collaborative):**
- Proceed to **Section 3b: Collaborative Iterative Generation**

### 3a. YOLO Batch Generation (Lightning Mode)

#### A. Generate All Pieces

For each piece in the content plan (1 to {volume}):

1. **Display Progress:**
   "Piece {N} of {Total} ({Platform}) — Generating..."

2. **Generate Content:**
   - Load platform-specific format guidelines
   - Create hook, content body, CTA, hashtags
   - If kie.ai configured: Generate video script + visual prompts
   - Apply brand voice consistently

3. **Save Piece:**
   - Create file: `{YYYY-MM-DD}-{platform}-{sequence}-{topic-slug}.md`
   - Save to: `{contentOutputDir}/{platform}/`
   - Set initial status: `pending-review`

4. **Update Session State:**
   - Increment `generatedPieces`
   - Track piece metadata in session state

5. **Display Completion:**
   "Piece {N} of {Total} ({Platform}) — ✓ Generated"

#### B. Batch Summary

After all pieces generated:

"**✓ Batch Generation Complete!**

Generated **{total}** pieces across **{platform count}** platforms:
- TikTok: {count} pieces
- Instagram: {count} pieces
- YouTube: {count} pieces
- Threads: {count} pieces
- Facebook: {count} pieces
- Blog: {count} pieces

All pieces saved to: `{contentOutputDir}`

Ready for review in the next step."

#### C. Mid-Session Mode Switch Option

"Before proceeding to review, would you like to:
- **C** — Continue to Review (YOLO batch complete)
- **S** — Switch to Collaborative (regenerate remaining pieces in Studio Mode)
- **A** — Advanced Elicitation (improve batch before review)"

**Menu Handling:**
- IF C: Proceed to step 04 with all pieces
- IF S: Update `currentMode: 'studio'` in session state, offer to regenerate specific pieces
- IF A: Execute advanced elicitation on batch

### 3b. Collaborative Iterative Generation (Studio Mode)

For each piece in the content plan (1 to {volume}):

#### A. Generate Single Piece

1. **Display Progress:**
   "Piece {N} of {Total} ({Platform}) — Generating..."

2. **Generate Content:**
   - Load platform-specific format guidelines
   - Create hook, content body, CTA, hashtags
   - If kie.ai configured: Generate video script + visual prompts
   - Apply brand voice consistently

3. **Save Draft:**
   - Create file: `{YYYY-MM-DD}-{platform}-{sequence}-{topic-slug}.md`
   - Save to: `{contentOutputDir}/{platform}/`
   - Set initial status: `draft`

4. **Display for Review:**
   ```
   **Piece {N} of {Total} ({Platform})**

   # Hook
   {generated hook}

   # Content
   {generated content}

   # Call-to-Action
   {generated CTA}

   # Hashtags
   {generated hashtags}
   ```

5. **Get Feedback:**
   "**What do you think?**
   - **approve** — This looks great, move to next piece
   - **refine** — I'd like to adjust this piece
   - **regenerate** — Create a completely new version
   - **skip** — Skip this piece and move to next
   - **switch** — Switch to YOLO mode for remaining pieces"

6. **Handle Response:**
   - **approve**: Update status to `approved`, increment `approvedPieces`, continue to next piece
   - **refine**: Ask what to refine, apply changes, re-display for approval
   - **regenerate**: Create new version, replace draft, re-display
   - **skip**: Move to next piece without saving
   - **switch**: Update `currentMode: 'lightning'`, generate remaining pieces in batch

7. **Update Session State:**
   - Track piece status and decisions
   - Continue iteration until all pieces complete

#### B. Collaborative Summary

After all pieces generated and reviewed:

"**✓ Collaborative Generation Complete!**

Generated **{total}** pieces with your input:
- Approved: {count} pieces
- Refined: {count} pieces
- Skipped: {count} pieces

All pieces saved to: `{contentOutputDir}`

Ready for final review and export in the next step."

### 4. Platform-Specific Generation Guidelines

Load and apply from `{platformFormatsData}`:

**TikTok:**
- Hook: 3-5 seconds, stop-the-scroll format
- Content: Fast-paced, 15-60 seconds
- CTA: Clear and direct action
- Hashtags: 3-5 relevant tags

**Instagram Reels:**
- Hook: Visual-first, aesthetic opening
- Content: Lifestyle-focused, 15-90 seconds
- CTA: Engagement-driven
- Hashtags: 5-10 mix of broad and niche

**YouTube Shorts:**
- Hook: Value proposition upfront
- Content: Educational or entertaining, 60 seconds
- CTA: Subscribe-focused
- Hashtags: 3-5 descriptive tags

**Threads:**
- Hook: Conversational opener
- Content: Community-driven, text + optional image
- CTA: Reply or share focused
- Hashtags: 1-3, minimal usage

**Facebook:**
- Hook: Shareable statement or question
- Content: Community-focused, varied formats
- CTA: Engagement or action
- Hashtags: 2-5, strategic usage

**Blog:**
- Hook: Compelling headline + intro
- Content: Long-form, 500-1500 words, SEO-optimized
- CTA: Conversion or comment focused
- Hashtags: N/A (use keywords instead)

### 5. Video Generation (kie.ai Integration)

**IF kie.ai is configured:**
- Generate video script with visual prompts
- Include scene descriptions, transitions, music suggestions
- Save script in content piece file

**ELSE (Text-Only Mode):**
- Generate text-based script only
- Note: "Video generation requires kie.ai configuration"
- User can add visuals manually

### 6. Update Session State

After all pieces generated, update `{sessionStatePath}`:

```yaml
---
# ... existing fields ...
stepsCompleted: [1, 2, 3]
lastStep: 'generate'
generatedPieces: {total count}
approvedPieces: {count}
pendingPieces: {count}
currentMode: "{final mode}"
piecesGeneratedAt: "[timestamp]"
---
```

### 7. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue to Review

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask} to improve generated content before review
- IF P: Execute {partyModeWorkflow} to get multi-agent quality check on generated pieces
- IF C: Update session state, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#7-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution, return to this menu
- User can chat or ask questions - always respond and then end with display again of the menu options

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All planned content pieces generated
- Platform-specific guidelines applied
- Brand voice consistency maintained
- Pieces saved to correct directories
- Session state updated with generation progress
- Frontmatter updated with `stepsCompleted: [1, 2, 3]`

### ❌ SYSTEM FAILURE:

- Generating pieces without platform context
- Not following brand voice guidelines
- Skipping pieces without user awareness
- Not saving pieces to correct locations
- Not updating session state properly
- Proceeding without completing generation

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and all pieces are generated and saved, will you then load, read entire file, then execute `{nextStepFile}` to begin Review and Refinement.

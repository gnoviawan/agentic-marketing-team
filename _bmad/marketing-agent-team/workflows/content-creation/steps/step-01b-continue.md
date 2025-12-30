---

name: 'step-01b-continue'
description: 'Handle workflow continuation from previous session'

<!-- Path Definitions -->

workflow_path: '{project-root}/_bmad/marketing-agent-team/workflows/content-creation'

# File References (all use {variable} format in file)

thisStepFile: '{workflow_path}/steps/step-01b-continue.md'
sessionStatePath: '{output_folder}/marketing-content/session-state.yaml'
workflowFile: '{workflow_path}/workflow.md'

# Step References (for continuation routing)

step02Strategy: '{workflow_path}/steps/step-02-strategy.md'
step03Generate: '{workflow_path}/steps/step-03-generate.md'
step04Review: '{workflow_path}/steps/step-04-review.md'
step05Export: '{workflow_path}/steps/step-05-export.md'
step06Complete: '{workflow_path}/steps/step-06-complete.md'

# Task References

# (No task references for this step)

---

# Step 1B: Workflow Continuation

## STEP GOAL:

To resume the Content Creation workflow from where it was left off, ensuring smooth continuation without loss of context or progress.

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
- ✅ You bring multi-platform content strategy expertise, user brings their brand identity and creative vision
- ✅ Maintain collaborative professional tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on analyzing and resuming workflow state
- 🚫 FORBIDDEN to modify content completed in previous steps
- 💬 Maintain continuity with previous sessions
- 🚪 DETECT exact continuation point from frontmatter of session state file

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis of current state before taking action
- 💾 Keep existing `stepsCompleted` values intact
- 📖 Review the session state and any generated content
- 🚫 FORBIDDEN to modify content that was completed in previous steps
- 📝 Update frontmatter with continuation timestamp when resuming

## CONTEXT BOUNDARIES:

- Session state file is already loaded
- Previous context = complete session state + any generated content
- Brand profile and user preferences already gathered in previous sessions
- Last completed step = last value in `stepsCompleted` array from frontmatter

---

## CONTINUATION SEQUENCE:

### 1. Analyze Current State

Review the frontmatter of {sessionStatePath} to understand:

- `stepsCompleted`: Which steps are already done (the rightmost value is the last step completed)
- `lastStep`: Name/description of last completed step (if exists)
- `date`: Original workflow start date
- `session_id`: Unique identifier for this session
- `currentMode`: YOLO or Collaborative mode
- `generatedPieces`, `approvedPieces`, `rejectedPieces`: Progress metrics
- `demoMode`: Whether this is a demo session

Example: If `stepsCompleted: [1, 2, 3]`, then step 3 (Strategy) was the last completed step.

### 2. Read All Completed Step Files

For each step number in `stepsCompleted` array (excluding step 1, which is init):

1. **Construct step filename**: `step-[N]-[name].md`
2. **Read the complete step file** to understand:
   - What that step accomplished
   - What the next step should be (from nextStep references)
   - Any specific context or decisions made

Example: If `stepsCompleted: [1, 2, 3]`:
- Read `step-02-strategy.md`
- Read `step-03-generate.md`
- The last file will tell you what step-04 should be

### 3. Review Previous Session Work

Review what was accomplished:

- **Strategy**: What content plan was approved?
- **Generation**: What pieces were generated and in what mode?
- **Review**: What pieces were approved/refined/rejected?
- **Export**: Was content exported yet?

Check the generated content directory at `{output_folder}/marketing-content/{brand}/{date}/` to see:
- Which platforms have content
- How many pieces exist
- What's the status of each piece

### 4. Determine Next Step

Based on the last completed step file and session state:

| Last Step | Next Step |
|-----------|-----------|
| **01 (init)** | step-02-strategy.md |
| **02 (strategy)** | step-03-generate.md |
| **03 (generate)** | step-04-review.md |
| **04 (review)** | step-05-export.md |
| **05 (export)** | step-06-complete.md |
| **06 (complete)** | Workflow finished - offer to start new session |

### 5. Welcome Back Dialog

Present a warm, context-aware welcome:

"Welcome back! Here's where we left off:

**Session Details:**
- Brand: {brand_name}
- Started: {original_date}
- Mode: {currentMode}
- Progress: {generatedPieces} pieces generated, {approvedPieces} approved

**Last Step Completed:** {lastStep name}

**Ready to continue with:** {next step description}

Has anything changed since our last session that might affect our approach?"

### 6. Validate Continuation Intent

Ask confirmation questions:

"Would you like to:
- **C** — Continue where we left off
- **R** — Review what we've accomplished so far
- **N** — Start a new session instead

### 7. Present MENU OPTIONS

Display: "**Resuming workflow - Select an Option:** [C] Continue to [Next Step Name] [R] Review Progress [N] New Session"

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and then end with display again of the menu options
- Update session state frontmatter with continuation timestamp when 'C' is selected

#### Menu Handling Logic:

- IF C:
  1. Update session state frontmatter: add `lastContinued: [current date]`
  2. Load, read entire file, then execute the appropriate next step file (determined in section 4)
- IF R:
  1. Show detailed summary of all generated content with statuses
  2. Show approval rate and other metrics
  3. Re-display menu options
- IF N:
  1. Ask for confirmation: "Start new session? Current session will be saved."
  2. If confirmed, archive current session state and return to step-01-init.md
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#7-present-menu-options)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Correctly identified last completed step from `stepsCompleted` array
- Read and understood all previous step contexts
- User confirmed readiness to continue
- Session state updated with continuation timestamp
- Workflow resumed at appropriate next step

### ❌ SYSTEM FAILURE:

- Skipping analysis of existing state
- Modifying content from previous steps
- Loading wrong next step file
- Not updating session state with continuation info
- Proceeding without user confirmation

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and continuation analysis is complete, will you then:

1. Update session state frontmatter with continuation timestamp
2. Load, read entire file, then execute the next step file determined from the analysis

Do NOT modify any other content in the output documents during this continuation step.

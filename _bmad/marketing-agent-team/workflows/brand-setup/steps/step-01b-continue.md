---

name: 'step-01b-continue'
description: 'Resume in-progress brand setup workflow'

# Path Definitions
workflow_path: '{project-root}/_bmad/marketing-agent-team/custom/src/workflows/brand-setup'

# File References
thisStepFile: '{workflow_path}/steps/step-01b-continue.md'
nextStep02: '{workflow_path}/steps/step-02-core-discovery.md'
nextStep03: '{workflow_path}/steps/step-03-layered-articulation.md'
nextStep04: '{workflow_path}/steps/step-04-spiral-validation.md'
nextStep05: '{workflow_path}/steps/step-05-multi-format-synthesis.md'
nextStep06: '{workflow_path}/steps/step-06-final-review.md'

# Output file - will be determined from detected workflow
brandDataFile: '{content_output_dir}/brand-profiles/{brand_name}/brand-data.md'

# Task References
brainstormingTask: '{project-root}/_bmad/core/tasks/brainstorming.xml'
advancedElicitationTask: '{project-root}/_bmad/core/tasks/advanced-elicitation.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step 1b: Resume Workflow

## STEP GOAL:

To detect and resume in-progress brand setup workflows, presenting the user with options to continue, review, or restart their brand creation journey.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a Brand Strategist & Creative Facilitator
- ✅ Continue using established identity while playing this new role
- ✅ Welcome user back to their workflow
- ✅ Maintain continuity from previous session

### Step-Specific Rules:

- 🎯 Focus on detecting and routing to appropriate next step
- 🚫 FORBIDDEN to modify existing brand data without user consent
- 💬 Present options clearly for workflow resumption

## EXECUTION PROTOCOLS:

- 🎯 Read brand-data.md frontmatter to determine workflow state
- 💾 Continue without re-initializing brand-data.md
- 📖 Route to appropriate next step based on stepsCompleted
- 🚫 FORBIDDEN to progress without user confirmation

## CONTEXT BOUNDARIES:

- brand-data.md already exists with partial progress
- `stepsCompleted` array indicates where to resume
- `userMode` already set, maintain it
- `brandName` already defined

## Sequence of Instructions (Do not deviate, skip, or optimize)

### 1. Detect Workflow State

Read the frontmatter from the detected brand-data.md:

```
Load: {content_output_dir}/brand-profiles/{detected_brand}/brand-data.md

Extract from frontmatter:
- stepsCompleted: [current array]
- userMode: {stored mode}
- brandName: {stored name}
- workflowComplete: {status}
```

### 2. Welcome Back

"**Welcome back to your Brand Setup!** 🎨

I see you've been working on **{brandName}**. Let's review where we are."

Display progress:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROGRESS: Step {last_completed} of 6 completed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Completed:
{list completed steps based on stepsCompleted array}

⏳ Next: {name of next step}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 3. Present Resumption Options

**What would you like to do?**

| Option | Description |
|--------|-------------|
| **[C] Continue** | Resume from where you left off |
| **[R] Review** | See what we've created so far |
| **[S] Start Over** | Begin fresh with same brand name |

### 4. Handle User Choice

**IF C (Continue):**
- Load next step based on `stepsCompleted` array:
  - IF `[1]` → Load step-02-core-discovery.md
  - IF `[1, 2]` → Load step-03-layered-articulation.md
  - IF `[1, 2, 3]` → Load step-04-spiral-validation.md
  - IF `[1, 2, 3, 4]` → Load step-05-multi-format-synthesis.md
  - IF `[1, 2, 3, 4, 5]` → Load step-06-final-review.md
- "Continuing to {next step name}..."
- Load, read entire file, then execute appropriate nextStep

**IF R (Review):**
- Read brand-data.md body content
- Present summary of what's been created:
  - Brand essence (if collected)
  - Brand elements (if collected)
  - Validation status (if applicable)
- After review, redisplay options

**IF S (Start Over):**
- Confirm: "This will reset your progress. Are you sure? (Y/N)"
  - IF Y: Delete brand-data.md, route to step-01-init.md
  - IF N: Redisplay options

### 5. Present MENU OPTIONS

Display: "**Select an Option:** [C] Continue [R] Review [S] Start Over"

#### Menu Handling Logic:

- IF C: Load appropriate next step based on stepsCompleted
- IF R: Read and display brand-data.md content, then redisplay menu
- IF S: Confirm reset, then either reset or redisplay menu
- IF Any other comments or queries: help user respond then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- User can chat or ask questions - always respond and then end with menu display again
- Only load next step when user explicitly confirms Continue

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected will you load the appropriate next step file to resume workflow execution. The next step is determined by reading the `stepsCompleted` array from brand-data.md frontmatter.

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Detected workflow state correctly from brand-data.md
- Progress displayed accurately to user
- Resumption options presented clearly
- Next step loaded correctly based on stepsCompleted

### ❌ SYSTEM FAILURE:

- Not reading brand-data.md frontmatter
- Incorrectly determining next step
- Proceeding without user confirmation
- Losing track of userMode or brandName

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

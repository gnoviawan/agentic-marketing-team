---

name: 'step-01-init'
description: 'Initialize the Content Creation workflow by detecting continuation state and setting up session'

<!-- Path Definitions -->

workflow*path: '{project-root}/_bmad/marketing-agent-team/workflows/content-creation'

# File References (all use {variable} format in file)

thisStepFile: '{workflow_path}/steps/step-01-init.md'
nextStepFile: '{workflow_path}/steps/step-02-strategy.md'
workflowFile: '{workflow_path}/workflow.md'
continueFile: '{workflow_path}/steps/step-01b-continue.md'
brandProfilePath: '{output_folder}/brand-profile-{brand_name}.md'
sessionStatePath: '{output_folder}/marketing-content/session-state.yaml'

# Task References

advancedElicitationTask: '{project-root}/_bmad/core/tasks/advanced-elicitation.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'

# Template References

# This step doesn't use content templates - templates are loaded in later steps

---

# Step 1: Workflow Initialization

## STEP GOAL:

To initialize the Content Creation workflow by detecting continuation state, loading brand profile and user preferences, setting up the session state and output directory structure, and preparing for content strategy planning.

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

- 🎯 Focus ONLY on initialization and setup
- 🚫 FORBIDDEN to look ahead to future steps or generate content
- 💬 Handle initialization professionally with clear communication
- 🚪 DETECT existing workflow state and handle continuation properly

## EXECUTION PROTOCOLS:

- 🎯 Show analysis before taking any action
- 💾 Initialize session state and update frontmatter
- 📖 Set up frontmatter `stepsCompleted: [1]` before loading next step
- 🚫 FORBIDDEN to load next step until setup is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = session state + any existing brand profile
- Don't assume knowledge from other steps
- Brand profile discovery happens in this step

---

## INITIALIZATION SEQUENCE:

### 1. Check for Existing Session

First, check if a session state file already exists:

- Look for file at `{output_folder}/marketing-content/session-state.yaml`
- If exists and has `stepsCompleted` in frontmatter, **STOP and load continueFile immediately**
- If not exists or incomplete, this is a fresh or resumable workflow

### 2. Handle Continuation (If Session Exists)

If the session state file exists and has valid `stepsCompleted` array:

- **STOP here** and load `./step-01b-continue.md` immediately
- Do not proceed with any initialization tasks
- Let step-01b handle the continuation logic

### 3. Fresh Session Setup

If no valid session state exists:

#### A. Brand Profile Discovery

Check for existing brand profile:

- Look for: `{output_folder}/brand-profile-{brand_name}.md`
- If found: Load completely for brand context
- If not found: Offer Demo Mode option

#### B. User Preference Profile Discovery

Check for existing user preferences:

- Look for: `{output_folder}/marketing-content/user-preferences.yaml`
- If found: Load for formatting/style preferences
- If not found: Will create during session

#### C. Create Output Directory Structure

Create the marketing-content directory structure:

```
{output_folder}/marketing-content/
  /{brand_name}/
    /{YYYY-MM-DD}/
      /{platform}/
      /batch/
      /rejected/
```

#### D. Initialize Session State

Create `{output_folder}/marketing-content/session-state.yaml`:

```yaml
---
session_id: "[generate-uuid]"
brand: "{brand_name or 'demo'}"
date: "[current-date]"
stepsCompleted: [1]
lastStep: 'init'
generatedPieces: 0
approvedPieces: 0
rejectedPieces: 0
currentMode: "collaborative"  # default, can change in step-02
platforms: []
userPreferences:
  sectionOrder: ["hook", "content", "cta", "hashtags"]
  includeTimestamp: true
demoMode: false
---
```

#### E. Welcome Message and Mode Selection

Present the welcome based on brand profile status:

**If brand profile found:**
"Welcome back to Content Creation! I found your brand profile for **{brand_name}**.

I'm ready to help you generate platform-specific marketing content. I can create content for:

• TikTok • Instagram Reels • YouTube Shorts • Threads • Facebook • Blog

**Quick Question:** Do you have a specific topic or content idea in mind for this session, or would you like me to help you discover content opportunities?"

**If no brand profile (Demo Mode):**
"Welcome to Content Creation!

I notice you don't have a brand profile set up yet. Would you like to:

1. **Demo Mode** — Try the workflow with a generic brand placeholder (great for exploring!)
2. **Set Up Brand First** — Create your brand profile before generating content

Enter **1** for Demo Mode or **2** to set up your brand profile first."

#### F. Handle Demo Mode Selection

If user selects Demo Mode:

- Set `demoMode: true` in session state
- Use generic brand placeholder for content generation
- Note: "You can create a brand profile later to save your preferences"

If user selects brand setup:

- Direct them to Brand Archetype Agent workflow
- Pause workflow until brand profile exists

### 4. Present MENU OPTIONS

Display: **Proceeding to Content Strategy...**

#### EXECUTION RULES:

- This is an initialization step - auto-proceed after welcome and topic collection
- Use menu handling logic section below

#### Menu Handling Logic:

- After setup completion and welcome, collect user's initial topic/idea if they have one
- Immediately load, read entire file, then execute `{nextStepFile}` to begin Content Strategy planning

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Session state file created with proper frontmatter
- Output directory structure established
- Brand profile loaded or Demo Mode activated
- User welcomed and initial topic collected (if provided)
- Frontmatter initialized with `stepsCompleted: [1]`
- Proceeding to step 02 OR existing session properly routed to step-01b-continue.md

### ❌ SYSTEM FAILURE:

- Proceeding to step 02 without session state initialization
- Not checking for existing sessions properly
- Creating duplicate session states
- Skipping welcome message
- Not routing to step-01b-continue.md when appropriate

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN initialization setup is complete and session state is created (OR continuation is properly routed), will you then immediately load, read entire file, then execute `{nextStepFile}` to begin Content Strategy planning.

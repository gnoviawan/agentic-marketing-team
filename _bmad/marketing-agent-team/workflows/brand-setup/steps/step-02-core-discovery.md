---

name: 'step-02-core-discovery'
description: 'Discover brand essence through values, mission, and purpose exploration'

# Path Definitions
workflow_path: '{project-root}/_bmad/marketing-agent-team/custom/src/workflows/brand-setup'

# File References
thisStepFile: '{workflow_path}/steps/step-02-core-discovery.md'
nextStepFile: '{workflow_path}/steps/step-03-layered-articulation.md'
workflowFile: '{workflow_path}/workflow.md'

# Output file
brandDataFile: '{content_output_dir}/brand-profiles/{brand_name}/brand-data.md'

# Task References
brainstormingTask: '{project-root}/_bmad/core/tasks/brainstorming.xml'
advancedElicitationTask: '{project-root}/_bmad/core/tasks/advanced-elicitation.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'

# Data References
archetypesData: '{workflow_path}/data/brand-archetypes.csv'
toneData: '{workflow_path}/data/tone-spectrum.csv'
---

# Step 2: Core Discovery

## STEP GOAL:

To discover the brand's core essence through collaborative exploration of values, mission, purpose, and vision - the foundation upon which all other brand elements will be built.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a Brand Strategist & Creative Facilitator
- ✅ Adapt communication style based on stored userMode
- ✅ Guided: Warm, explanatory, patient with examples
- ✅ Express: Efficient, direct, respects expertise
- ✅ Hybrid: Adaptive, reads cues and adjusts
- ✅ We engage in collaborative dialogue to discover authentic brand essence

### Step-Specific Rules:

- 🎯 Focus ONLY on core essence discovery (values, mission, purpose)
- 🚫 FORBIDDEN to move to personality/voice/visuals in this step
- 💬 Use mode-adaptive questioning approach
- 📋 Offer Brainstorming or Party Mode when user is stuck

## EXECUTION PROTOCOLS:

- 🎯 Guide user through essence discovery conversationally
- 💾 Append discovered essence to brand-data.md
- 📖 Update frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until user approves discovered essence

## CONTEXT BOUNDARIES:

- Available context: userMode, brandName from Step 01
- Focus: Core essence only - values, mission, purpose, vision
- Limits: Don't advance to personality, voice, or visual elements
- Dependencies: Step 01 must be complete

## Sequence of Instructions (Do not deviate, skip, or optimize)

### 1. Display Progress and Set Context

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 OF 6: CORE DISCOVERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we'll discover your brand's core essence - the foundational
values and purpose that will guide everything else.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

"**Core Discovery Phase** 🌱

Every great brand starts with knowing who you are and why you exist. Let's discover your brand's core essence together."

### 2. Mission Discovery

"**Let's start with your mission.** Your mission is your brand's 'why' - the reason you exist beyond making money."

**Mode-Adaptive Approach:**

**IF userMode == "guided":**
- Provide examples: "For example:
  - Google: 'To organize the world's information and make it universally accessible and useful'
  - Tesla: 'To accelerate the world's transition to sustainable energy'
  - Patagonia: 'We're in business to save our home planet'"
- Ask: "What problem does your brand solve? What change do you want to see in the world?"

**IF userMode == "express":**
- Direct question: "What is your brand's mission? Keep it to 1-2 sentences."
- Allow skip-ahead if already defined

**IF userMode == "hybrid":**
- "Do you have an existing mission statement, or would you like to craft one together?"
- IF existing: Validate and refine
- IF none: Use guided approach

**Capture mission** from user. If unclear or stuck, offer Brainstorming.

### 3. Vision Exploration

"**Now let's look at your vision.** Your vision is where you're headed - the future you want to help create."

**Mode-Adaptive Approach:**

**IF guided:** "Think 5-10 years out. What does success look like for your brand? What impact will you have?"

**IF express:** "What's your long-term vision for this brand?"

**IF hybrid:** "Do you have a vision statement, or should we craft one?"

**Capture vision** from user.

### 4. Core Values Discovery

"**Time for your core values.** These are the principles that guide every decision your brand makes - your non-negotiables."

**Mode-Adaptive Approach:**

**IF guided:**
- "Great brands typically have 3-5 core values. Let me give you some examples:"
  - "Nike: Innovation, Inspiration, Authenticity"
  - "Apple: Innovation, Privacy, Environmental Responsibility"
  - "Ben & Jerry's: Social Justice, Quality, Fun"
- "What values matter most to you and your brand?"
- If stuck: Offer Brainstorming workflow

**IF express:**
- "List 3-5 core values that guide your brand. One word or short phrase each."

**IF hybrid:**
- "What values do you already have defined? Let's validate and refine them."

**Capture values** as a bulleted list.

### 5. Brand Purpose Statement

"**Let's craft your purpose statement.** This connects your mission to the difference you make for your customers."

**Mode-Adaptive Approach:**

**IF guided:**
- Guide user through: "The purpose statement typically follows: 'To [what you do] for [who you serve] so that [the difference you make]'"
- Work through it collaboratively

**IF express:**
- "What's your purpose statement? Connect your mission to customer impact."

**IF hybrid:**
- "Do you have a purpose statement? Let's review and refine."

**Capture purpose** from user.

### 6. Competitive Context (Optional, Web-Browsing)

"**It helps to understand your competitive context.** Would you like to briefly explore how similar brands position themselves?"

**Options:**
- [Y] Yes, do competitive research
- [N] Skip this

**IF Y:**
- Use Web-Browsing to research 2-3 competitor brands
- Identify their missions, values, positioning
- "Notice any patterns? What makes your brand different?"

### 7. Refine and Validate Essence

"**Let's review your brand essence.** Here's what we've discovered:"

Display captured essence:

```markdown
## Brand Essence

**Mission:** {mission}

**Vision:** {vision}

**Core Values:**
- {value 1}
- {value 2}
- {value 3}
- {value 4} (if applicable)
- {value 5} (if applicable)

**Purpose:** {purpose}
```

"Does this capture who you are and why you exist? Does it feel authentic?"

**IF user wants refinement:**
- Use Advanced Elicitation to dig deeper
- "What feels off? What's missing?"
- Iterate until user approves

### 8. Append to Brand Data File

Append discovered essence to brand-data.md:

```markdown
## Brand Essence

### Mission
{mission}

### Vision
{vision}

### Core Values
- {value 1}
- {value 2}
- {value 3}
- {value 4}
- {value 5}

### Purpose
{purpose}
```

Update frontmatter:
```yaml
stepsCompleted: [1, 2]
```

### 9. Present MENU OPTIONS

Display: "**Select an Option:** [B] Brainstorming [P] Party Mode [C] Continue"

#### Menu Handling Logic:

- IF B: Execute {brainstormingTask} to generate/refine essence elements, then redisplay menu
- IF P: Execute {partyModeWorkflow} to get multiple perspectives on brand essence, then redisplay menu
- IF C: Save essence to {brandDataFile}, update frontmatter `stepsCompleted: [1, 2]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution completes, redisplay the menu
- User can chat or ask questions - always respond when conversation ends, redisplay the menu

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and essence is saved to brand-data.md and stepsCompleted updated to [1, 2], will you then load and read fully `{workflow_path}/steps/step-03-layered-articulation.md` to execute and begin layered brand element articulation.

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Mission, vision, 3-5 values, and purpose discovered
- Essence feels authentic to user
- Essence appended to brand-data.md
- `stepsCompleted: [1, 2]` set
- Menu presented and user input handled correctly

### ❌ SYSTEM FAILURE:

- Skipping essence discovery
- Not getting 3-5 core values from user
- Proceeding without user approval of essence
- Not updating brand-data.md or stepsCompleted

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

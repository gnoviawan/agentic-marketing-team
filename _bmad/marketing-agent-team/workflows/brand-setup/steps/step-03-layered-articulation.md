---

name: 'step-03-layered-articulation'
description: 'Build brand elements layer by layer - personality, voice, visuals, positioning'

# Path Definitions
workflow_path: '{project-root}/_bmad/marketing-agent-team/custom/src/workflows/brand-setup'

# File References
thisStepFile: '{workflow_path}/steps/step-03-layered-articulation.md'
nextStepFile: '{workflow_path}/steps/step-04-spiral-validation.md'
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
colorData: '{workflow_path}/data/color-psychology.csv'
---

# Step 3: Layered Articulation

## STEP GOAL:

To build brand elements layer by layer, starting from the core essence and progressing outward through personality, voice, visual direction, and positioning - each layer informing and building upon the previous.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a Brand Strategist & Creative Facilitator
- ✅ Maintain mode-adaptive communication style
- ✅ Guide user through layered brand building
- ✅ Each element builds on previous elements
- ✅ Collaborative creation with tools support when needed

### Step-Specific Rules:

- 🎯 Focus ONLY on layered element articulation (personality → voice → visuals → positioning)
- 🚫 FORBIDDEN to skip layers or build them in parallel
- 💬 Use examples and references to illustrate abstract concepts
- 📋 Offer Advanced Elicitation or Party Mode for depth and perspective

## EXECUTION PROTOCOLS:

- 🎯 Build elements in dependency order: personality → voice → visuals → positioning
- 💾 Append each layer to brand-data.md as completed
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until all layers are articulated

## CONTEXT BOUNDARIES:

- Available context: userMode, brandName, brand essence from Step 02
- Focus: Build brand elements layer by layer
- Limits: Follow dependency order - don't jump ahead
- Dependencies: Steps 01-02 must be complete

## Sequence of Instructions (Do not deviate, skip, or optimize)

### 1. Display Progress and Set Context

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 OF 6: LAYERED ARTICULATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we'll build your brand layer by layer, starting from your
essence and moving outward through personality, voice, and visuals.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

"**Layered Articulation Phase** 🎨

Great brands are built from the inside out. Your essence (mission, values, purpose) now informs everything else. Let's articulate your brand's personality, voice, visual direction, and positioning - each layer building on the last."

### 2. Brand Personality & Archetype

"**First layer: Brand Personality.** Based on your values and mission, what kind of 'character' is your brand?"

**Load archetypes reference:**
```
Read: {archetypesData}
```

**Mode-Adaptive Approach:**

**IF guided:**
- "Let me introduce brand archetypes - universal character patterns that help define personality:"
  - Present 5-6 relevant archetypes with descriptions
  - "Which archetype resonates most with your brand?"
  - Use real examples: "Nike is the Hero - always striving, overcoming obstacles"

**IF express:**
- "Select your brand archetype from the 12 Jungian archetypes:"
  - List all 12 with brief descriptions
  - User selects primary archetype

**IF hybrid:**
- "What archetype do you currently align with? Let's validate and refine."

**Capture archetype and personality traits:**
- Primary archetype
- 5-7 personality adjectives (e.g., "innovative, bold, inspiring, authentic, determined")

### 3. Target Audience Profile

"**Who is your brand for?** Let's define your target audience based on your essence and personality."

**Mode-Adaptive Approach:**

**IF guided:**
- Guide through: "Who most needs what you offer? Be specific - demographics are good, but psychographics (values, attitudes, lifestyle) are better."
- Example: "Instead of 'women 25-45', think 'ambitious professionals who value quality over quantity'"

**IF express:**
- "Define your target audience in 1-2 sentences. Focus on who, not how many."

**IF hybrid:**
- "Do you have a defined target audience? Let's validate and refine."

**Capture target audience:**
- Demographic profile (brief)
- Psychographic profile (values, attitudes, lifestyle)
- Pain points your brand addresses

### 4. Brand Voice & Tone

"**How does your brand speak?** Your voice should reflect your personality and resonate with your audience."

**Load tone reference:**
```
Read: {toneData}
```

**Mode-Adaptive Approach:**

**IF guided:**
- "Your brand voice has two dimensions:"
  - "Personality: What tone fits your archetype? (e.g., 'confident but approachable')"
  - "Language: How do you express yourself? (e.g., 'simple and direct' vs 'expressive and storytelling')"
- Provide examples: Compare Mailchimp's friendly/witty voice vs. Apple's clean/inspiring voice

**IF express:**
- "Define your brand voice in 3-5 words. (e.g., 'friendly, professional, slightly witty')"

**IF hybrid:**
- "What's your current voice guidelines? Let's validate."

**Capture voice and tone:**
- Voice descriptors (3-5 words)
- Tone examples: "When X, speak like Y"
- Do's and don'ts for voice

### 5. Visual Direction

"**How should your brand look?** Visual identity flows from personality, voice, and audience."

**Load color psychology reference:**
```
Read: {colorData}
```

**Mode-Adaptive Approach:**

**IF guided:**
- "Let's explore visual direction in three parts:"
  - "Colors: What colors represent your personality? Consider color psychology - blue = trust, red = energy, green = growth"
  - "Typography: Should your fonts feel traditional, modern, playful, or serious?"
  - "Overall aesthetic: What mood should your visuals create?"
- Show examples: "Think of the difference between Coca-Cola's bold/red/energetic vs. Apple's clean/minimal/innovative"

**IF express:**
- "Define visual direction: Primary colors, typography style, aesthetic mood."

**IF hybrid:**
- "What visual direction do you have? Let's validate and refine."

**Capture visual direction:**
- Color palette (primary + secondary with hex if known, or mood descriptions)
- Typography style (modern, traditional, playful, serious, etc.)
- Aesthetic mood (minimal, bold, elegant, rugged, etc.)

### 6. Brand Positioning

"**Finally, where do you fit in the market?** Your positioning is how you're different from competitors."

**Mode-Adaptive Approach:**

**IF guided:**
- "Positioning has three elements:"
  - "Your category: What industry/market are you in?"
  - "Your differentiation: What makes you unique?"
  - "Your positioning statement: 'For [target audience], [brand name] is the [category] that [key differentiation] unlike [competitors] who [alternative approach]'"
- Work through positioning statement collaboratively

**IF express:**
- "What's your positioning? Complete: 'For [audience], we're the [category] that [unique difference]'"

**IF hybrid:**
- "What's your current positioning? Let's refine."

**Capture positioning:**
- Market category
- Key differentiators
- Positioning statement

### 7. Review All Layers

"**Let's review your articulated brand elements.** Everything builds from your essence:"

Display captured elements:

```markdown
## Brand Elements

### Personality & Archetype
**Archetype:** {archetype}
**Personality Traits:** {traits}

### Target Audience
{audience description}

### Brand Voice & Tone
**Voice:** {voice descriptors}
**Tone:** {tone guidelines}

### Visual Direction
**Colors:** {color palette}
**Typography:** {typography style}
**Aesthetic:** {aesthetic mood}

### Positioning
**Category:** {category}
**Differentiation:** {differentiators}
**Positioning Statement:** {statement}
```

"Does this feel cohesive? Does each layer connect to the ones before it?"

**IF user wants refinement:**
- Offer Advanced Elicitation for deeper exploration
- Offer Party Mode for multiple perspectives
- Iterate until user approves

### 8. Append to Brand Data File

Append brand elements to brand-data.md:

```markdown
## Brand Elements

### Personality & Archetype
**Archetype:** {archetype}
**Personality:** {traits}

### Target Audience
{audience profile}

### Brand Voice & Tone
**Voice:** {voice}
**Tone Guidelines:** {tone}

### Visual Direction
**Color Palette:** {colors}
**Typography:** {typography}
**Aesthetic:** {aesthetic}

### Positioning
**Category:** {category}
**Differentiators:** {differentiators}
**Positioning Statement:** {statement}
```

Update frontmatter:
```yaml
stepsCompleted: [1, 2, 3]
```

### 9. Present MENU OPTIONS

Display: "**Select an Option:** [A] Advanced Elicitation [P] Party Mode [C] Continue"

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask} to deepen any brand element, then redisplay menu
- IF P: Execute {partyModeWorkflow} to get multiple perspectives on brand elements, then redisplay menu
- IF C: Save elements to {brandDataFile}, update frontmatter `stepsCompleted: [1, 2, 3]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- After other menu items execution completes, redisplay the menu
- User can chat or ask questions - always respond when conversation ends, redisplay the menu

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and brand elements are saved to brand-data.md and stepsCompleted updated to [1, 2, 3], will you then load and read fully `{workflow_path}/steps/step-04-spiral-validation.md` to execute and begin spiral validation phase.

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All brand elements articulated (personality, audience, voice, visual, positioning)
- Elements connect logically to essence and to each other
- Elements appended to brand-data.md
- `stepsCompleted: [1, 2, 3]` set
- Menu presented and user input handled correctly

### ❌ SYSTEM FAILURE:

- Skipping layers or building out of order
- Not capturing all required elements
- Elements don't connect to essence (personality doesn't match values, etc.)
- Proceeding without user approval
- Not updating brand-data.md or stepsCompleted

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

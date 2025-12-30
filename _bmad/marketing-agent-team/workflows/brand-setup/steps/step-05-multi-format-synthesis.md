---

name: 'step-05-multi-format-synthesis'
description: 'Generate all four brand output format files from validated brand data'

# Path Definitions
workflow_path: '{project-root}/_bmad/marketing-agent-team/custom/src/workflows/brand-setup'

# File References
thisStepFile: '{workflow_path}/steps/step-05-multi-format-synthesis.md'
nextStepFile: '{workflow_path}/steps/step-06-final-review.md'
workflowFile: '{workflow_path}/workflow.md'

# Input/Output files
brandDataFile: '{content_output_dir}/brand-profiles/{brand_name}/brand-data.md'
fullProfileOutput: '{content_output_dir}/brand-profiles/{brand_name}/brand-profile.md'
summaryOutput: '{content_output_dir}/brand-profiles/{brand_name}/brand-summary.md'
deckOutput: '{content_output_dir}/brand-profiles/{brand_name}/brand-deck.md'
briefOutput: '{content_output_dir}/brand-profiles/{brand_name}/design-brief.md'
---
# Step 5: Multi-Format Synthesis

## STEP GOAL:

To generate all four brand output format files (full profile, one-page summary, presentation deck, design brief) from the validated brand data - transforming the brand essence and elements into actionable deliverables.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a Brand Strategist & Creative Facilitator
- ✅ Your role is synthesizer and document generator
- ✅ Transform validated brand data into multiple formats
- ✅ Ensure all outputs reference the same brand core

### Step-Specific Rules:

- 🎯 Focus ONLY on generating the four output files
- 🚫 FORBIDDEN to modify validated brand data
- 💬 Generate all formats from brand-data.md
- 📋 Each output format follows its specific template structure

## EXECUTION PROTOCOLS:

- 🎯 Read all brand data from brand-data.md
- 💾 Generate all four output files in sequence
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` before loading next step
- 🚫 FORBIDDEN to load next step until all outputs are generated

## CONTEXT BOUNDARIES:

- Available context: All validated brand data from Steps 02-04
- Focus: Generate output files only
- Limits: Don't modify brand data - just format it
- Dependencies: Steps 01-04 must be complete with validated: true

## Sequence of Instructions (Do not deviate, skip, or optimize)

### 1. Display Progress and Set Context

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 OF 6: MULTI-FORMAT SYNTHESIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we transform your validated brand into four distinct
output formats for different use cases.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

"**Multi-Format Synthesis Phase** 📄

Your brand is validated and ready! Now I'll generate four different outputs from your brand data:

1. **Full Brand Profile** - Comprehensive reference document (semi-structured)
2. **One-Page Summary** - Quick reference (strict template)
3. **Presentation Deck** - Stakeholder buy-in format (structured)
4. **Design Asset Brief** - Designer specifications (structured)

All outputs reference the same brand core data for consistency."

### 2. Read Brand Data

```
Read: {brandDataFile}

Extract ALL brand data:
- Frontmatter: stepsCompleted, userMode, brandName, validated
- Brand Essence: mission, vision, values, purpose
- Brand Elements: personality, audience, voice, visual, positioning
- Validation status
```

### 3. Generate Full Brand Profile (Semi-Structured)

**Display:** "Generating **Full Brand Profile**..."

Create {fullProfileOutput}:

```markdown
---
brandName: "{brand_name}"
generated: {date}
workflowComplete: true
---

# Brand Profile: {brand_name}

## Executive Summary

{mission}

---

## Brand Overview

### Brand Identity
**Name:** {brand_name}
**Tagline:** {tagline or generate from mission}

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

---

## Brand Archetype & Personality

### Archetype
**Primary Archetype:** {archetype}
**Description:** {archetype description}

### Personality Traits
{personality traits list}

---

## Target Audience Profile

### Demographics
{demographic profile}

### Psychographics
{psychographic profile}

### Pain Points Addressed
{pain points}

---

## Brand Voice & Tone Guidelines

### Voice Descriptors
{voice descriptors}

### Tone Guidelines
**Do:**
{voice do's}

**Don't:**
{voice don'ts}

### Sample Language
{example phrases showing the voice in action}

---

## Visual Direction

### Color Palette
**Primary:** {primary colors with hex if known}
**Secondary:** {secondary colors}
**Accent:** {accent colors}
**Color Psychology:** {why these colors fit the brand}

### Typography
**Headings:** {heading font style}
**Body:** {body font style}
**Rationale:** {why this typography fits}

### Aesthetic Direction
{aesthetic mood description}

### Imagery Guidelines
{imagery do's and don'ts}

---

## Brand Messaging Framework

### Key Messages
{key message points}

### Value Proposition
{value proposition statement}

### Brand Story
{narrative brand story if captured}

---

## Brand Positioning

### Market Category
{category}

### Differentiation
{differentiators}

### Positioning Statement
{positioning statement}

### Competitive Position
{competitive context}

---

## Implementation Guidelines

### Brand Applications
{how to apply the brand}

### Touchpoints
{key customer touchpoints}

### Consistency Guidelines
{how to maintain consistency}

---

*Generated by BMAD Brand Setup Workflow*
*Generated: {date}*
```

### 4. Generate One-Page Brand Summary (Strict Template)

**Display:** "Generating **One-Page Summary**..."

Create {summaryOutput}:

```markdown
---
brandName: "{brand_name}"
generated: {date}
format: "strict-template"
---

# {brand_name}

**Tagline:** {tagline or generate from mission}

---

## WHO WE ARE

**Mission:** {mission (max 150 characters)}

**Core Values:**
- {value 1 (max 25 chars)}
- {value 2 (max 25 chars)}
- {value 3 (max 25 chars)}
- {value 4 (max 25 chars)}
- {value 5 (max 25 chars)}

---

## WHO WE SERVE

**Target Audience:** {audience (1-2 sentences)}

---

## HOW WE SOUND

**Personality:** {3-5 personality adjectives}

**Voice:** {voice description (brief)}

---

## HOW WE LOOK

**Visual Essence:** {visual description (2-3 sentences)}

---

*Brand Summary - {date}*
```

### 5. Generate Stakeholder Presentation Deck (Structured)

**Display:** "Generating **Presentation Deck**..."

Create {deckOutput}:

```markdown
---
brandName: "{brand_name}"
generated: {date}
format: "presentation-deck"
theme: "{brand_name} Brand Presentation"
---

# {brand_name}
## Brand Presentation

*Generated: {date}*

---

## Slide 1: Title

**{brand_name}**

{tagline}

---

## Slide 2: Brand Overview

### Who We Are

**Mission:** {mission}

**Vision:** {vision}

---

## Slide 3: Core Values

### Our Values

- {value 1}
- {value 2}
- {value 3}
- {value 4}
- {value 5}

---

## Slide 4: Target Audience

### Who We Serve

{target audience description}

**What They Need:** {pain points addressed}

---

## Slide 5: Brand Personality

### Our Character

**Archetype:** {archetype}

**Personality Traits:** {traits}

**Emotional Connection:** {how the brand makes people feel}

---

## Slide 6: Brand Voice

### How We Speak

**Voice:** {voice descriptors}

**Examples:** {sample language}

---

## Slide 7: Visual Direction

### How We Look

**Colors:** {color palette}

**Typography:** {typography style}

**Aesthetic:** {aesthetic mood}

---

## Slide 8: Brand Positioning

### Where We Fit

**Category:** {category}

**Differentiation:** {what makes us unique}

**Positioning Statement:** {statement}

---

## Slide 9: Next Steps

### Moving Forward

{how to use this brand}

**Implementation:** {next actions}

---

*Presentation Deck - {brand_name} - {date}*
```

### 6. Generate Design Asset Brief (Structured)

**Display:** "Generating **Design Asset Brief**..."

Create {briefOutput}:

```markdown
---
brandName: "{brand_name}"
generated: {date}
format: "design-brief"
---

# Design Asset Brief: {brand_name}

*For designers and agencies*

---

## Brand Basics

**Brand Name:** {brand_name}

**Tagline:** {tagline}

**Mission:** {mission}

---

## Color Palette

### Primary Colors
{primary colors with hex codes}

### Secondary Colors
{secondary colors with hex codes}

### Accent Colors
{accent colors with hex codes}

### Usage Guidelines
{when to use each color category}

---

## Typography

### Heading Font
{heading font specification}

### Body Font
{body font specification}

### Font Pairing Rationale
{why these fonts work together}

### Size Hierarchy
{typographic scale}

---

## Visual Style

### Mood
{aesthetic mood description}

### Aesthetic Direction
{visual direction details}

### Imagery Guidelines
**Do:**
{imagery do's}

**Don't:**
{imagery don'ts}

---

## Voice Guidelines

### Tone Descriptors
{tone keywords}

### Copywriting Guidelines
**Do:**
{copy do's}

**Don't:**
{copy don'ts}

### Example Phrases
{sample language showing voice}

---

## Logo Usage

### Clearspace Requirements
{logo clearspace specification}

### Logo Variations
{logo versions needed}

### Usage Rules
{when and how to use logo}

### Misuse Examples
{what to avoid}

---

## Additional Notes

{any additional specifications for designers}

---

*Design Asset Brief - {brand_name} - {date}*
```

### 7. Verify All Outputs Generated

**Display:**
```
✅ Full Brand Profile: {fullProfileOutput}
✅ One-Page Summary: {summaryOutput}
✅ Presentation Deck: {deckOutput}
✅ Design Asset Brief: {briefOutput}
```

"All four outputs generated successfully! Each file contains your brand information in a different format for different use cases."

### 8. Update Brand Data File

Update brand-data.md with output generation status:

```markdown
## Output Files Generated

- Full Brand Profile: {path}
- One-Page Summary: {path}
- Presentation Deck: {path}
- Design Asset Brief: {path}
```

Update frontmatter:
```yaml
stepsCompleted: [1, 2, 3, 4, 5]
outputsGenerated: true
```

### 9. Present MENU OPTIONS

Display: "**Outputs Generated - Select an Option:** [C] Continue to Final Review"

#### Menu Handling Logic:

- IF C: Update {brandDataFile} frontmatter `stepsCompleted: [1, 2, 3, 4, 5]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- User can chat or ask questions - always respond and then end with menu display again

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected and all four outputs are generated and stepsCompleted updated to [1, 2, 3, 4, 5], will you then load and read fully `{workflow_path}/steps/step-06-final-review.md` to execute and begin final review phase.

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All four output files generated in correct locations
- Each output follows its format specification
- All outputs reference consistent brand core data
- `stepsCompleted: [1, 2, 3, 4, 5]` set
- `outputsGenerated: true` set

### ❌ SYSTEM FAILURE:

- Not generating all four output files
- Outputs don't follow format specifications
- Inconsistent data across outputs
- Not updating brand-data.md or stepsCompleted

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

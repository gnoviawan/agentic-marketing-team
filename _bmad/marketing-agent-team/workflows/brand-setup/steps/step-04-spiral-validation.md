---

name: 'step-04-spiral-validation'
description: 'Validate brand cohesion and authenticity, with loop-back to refine if needed'

# Path Definitions
workflow_path: '{project-root}/_bmad/marketing-agent-team/custom/src/workflows/brand-setup'

# File References
thisStepFile: '{workflow_path}/steps/step-04-spiral-validation.md'
nextStepFile: '{workflow_path}/steps/step-05-multi-format-synthesis.md'
refineStepFile: '{workflow_path}/steps/step-03-layered-articulation.md'
workflowFile: '{workflow_path}/workflow.md'

# Output file
brandDataFile: '{content_output_dir}/brand-profiles/{brand_name}/brand-data.md'

# Task References
advancedElicitationTask: '{project-root}/_bmad/core/tasks/advanced-elicitation.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---
# Step 4: Spiral Validation

## STEP GOAL:

To validate the brand's cohesion and authenticity, ensuring all elements align and feel true to the user's vision. This is the spiral point where we may loop back to refine elements that don't quite fit.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a Brand Strategist & Creative Facilitator
- ✅ Maintain mode-adaptive communication style
- ✅ Your role is validator and quality gate
- ✅ Be honest about misalignment - don't sugarcoat
- ✅ Guide refinement without being prescriptive

### Step-Specific Rules:

- 🎯 Focus ONLY on validating brand cohesion and authenticity
- 🚫 FORBIDDEN to approve misaligned brand - must refine or loop back
- 💬 Use Party Mode for diverse validation perspectives
- 📋 Offer Advanced Elicitation to dig deeper into misalignment

## EXECUTION PROTOCOLS:

- 🎯 Validate each brand element against essence and each other
- 💾 If validation passes, update brand-data.md with approved status
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to proceed with misaligned brand elements

## CONTEXT BOUNDARIES:

- Available context: All brand elements from Steps 02-03
- Focus: Validation and quality gate
- Limits: Don't generate new content - validate what exists
- Dependencies: Steps 01-03 must be complete

## Sequence of Instructions (Do not deviate, skip, or optimize)

### 1. Display Progress and Set Context

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 OF 6: SPIRAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we validate your brand's cohesion and authenticity.
This is your checkpoint - if something doesn't feel right,
we spiral back and refine.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

"**Spiral Validation Phase** 🔄

This is an important checkpoint. We've built your brand layer by layer. Now we need to validate that everything works together cohesively and feels authentic to your vision."

### 2. Read Brand Data for Validation

```
Read: {brandDataFile}

Extract from frontmatter:
- stepsCompleted: should be [1, 2, 3]
- userMode, brandName

Extract from body:
- Brand Essence (mission, vision, values, purpose)
- Brand Elements (personality, audience, voice, visual, positioning)
```

### 3. Validate Brand Cohesion

"**Let me check how your brand elements connect...**"

**Validation Checklist:**

| Connection | Validation Check | Status |
|------------|------------------|--------|
| **Values → Personality** | Does archetype align with core values? | {assess} |
| **Personality → Voice** | Does voice reflect personality traits? | {assess} |
| **Audience → Voice** | Does voice resonate with target audience? | {assess} |
| **Personality → Visual** | Do visuals match personality aesthetic? | {assess} |
| **Essence → Positioning** | Does positioning reflect mission/values? | {assess} |

**For each connection:**
- Analyze the relationship
- Note any misalignment
- Provide specific feedback

**Examples of validation feedback:**

✅ **Aligned:** "Your archetype is 'The Sage' (wisdom, truth), your values include 'knowledge' and 'integrity', and your voice is 'authoritative yet approachable' - this creates a cohesive brand that consistently represents expertise."

❌ **Misaligned:** "Your archetype is 'The Jester' (playful, spontaneous), but your voice is described as 'formal and professional' - these contradict each other. The Joker/Jester archetype should have a more playful, witty voice."

### 4. Present Validation Results

"**Validation Results:**"

**IF all aligned:**
```
✅ BRAND COHESION: STRONG

Your brand elements connect beautifully:
- Values align with personality
- Voice reflects personality
- Visuals match the aesthetic
- Positioning reflects your essence

Everything feels cohesive and authentic!
```

**IF misalignments found:**
```
⚠️ BRAND COHESION: NEEDS REFINEMENT

I found some areas where brand elements don't quite connect:

{list specific misalignments}

These elements don't align because {explain why}.
We should refine these before proceeding.
```

### 5. Validate Authenticity

"**Beyond cohesion, let's check authenticity.** Does this brand feel true to you and your business?"

**Ask user directly:**
"On a scale of 1-10, how authentic does this brand feel to you?"
- If 8-10: "Excellent! Your brand feels genuine."
- If 5-7: "What feels inauthentic? Let's explore."
- If 1-4: Use Advanced Elicitation to discover what's wrong

**Authenticity Check Questions:**
1. "Does this brand represent who you truly are, or who you think you should be?"
2. "Would you be proud to put this brand on everything you do?"
3. "Does this brand attract the right customers for you?"

### 6. Handle Validation Outcomes

**IF validation passes AND authenticity confirmed:**

"**🎉 Validation Complete!** Your brand is cohesive, authentic, and ready for output generation."

Proceed to Section 7.

**IF validation fails OR authenticity concerns:**

"**We need to refine some elements.** Here's what we should adjust:"

- List specific elements to refine
- Explain why and how to fix
- Offer: "Let's spiral back to Layered Articulation and refine these elements."

**Loop-back Logic:**
- IF user agrees to refine: Load, read entire file, then execute {refineStepFile}
- Focus only on elements that failed validation
- After refinement, return to validation
- Repeat until validation passes

### 7. Update Brand Data File with Validation

**IF validation passed:**

Append validation status to brand-data.md:

```markdown
## Validation Status

✅ Validated: {date}
- Cohesion: Strong
- Authenticity: Confirmed
- Approved for output generation
```

Update frontmatter:
```yaml
stepsCompleted: [1, 2, 3, 4]
validated: true
```

### 8. Present MENU OPTIONS

**IF validation passed:**

Display: "**Validation Complete - Select an Option:** [C] Continue to Output Generation"

**IF validation failed:**

Display: "**Needs Refinement - Select an Option:** [R] Refine Elements [A] Advanced Elicitation [P] Party Mode"

#### Menu Handling Logic (Validation Passed):

- IF C: Save validation to {brandDataFile}, update frontmatter `stepsCompleted: [1, 2, 3, 4]`, then load, read entire file, then execute {nextStepFile}
- IF Any other comments or queries: help user respond then redisplay menu

#### Menu Handling Logic (Validation Failed):

- IF R: Load, read entire file, then execute {refineStepFile} - focus on failed elements only
- IF A: Execute {advancedElicitationTask} to explore why elements feel inauthentic
- IF P: Execute {partyModeWorkflow} to get perspectives on how to fix misalignment
- After refinement, re-run validation checks

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when validation passes AND user selects 'C'
- User can chat or ask questions - always respond and then end with menu display again

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN C is selected AND validation has passed AND stepsCompleted updated to [1, 2, 3, 4], will you then load and read fully `{workflow_path}/steps/step-05-multi-format-synthesis.md` to execute and begin multi-format output generation.

**CRITICAL:** Do NOT proceed to next step if validation has failed. Must loop back to refine elements until validation passes.

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All brand cohesion connections validated
- Authenticity confirmed by user
- Validation status appended to brand-data.md
- `stepsCompleted: [1, 2, 3, 4]` set
- `validated: true` set

### ❌ SYSTEM FAILURE:

- Skipping validation checks
- Proceeding with misaligned brand elements
- Not offering refinement when validation fails
- Proceeding without user confirming authenticity

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

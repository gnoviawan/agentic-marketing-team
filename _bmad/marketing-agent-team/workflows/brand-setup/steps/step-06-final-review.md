---

name: 'step-06-final-review'
description: 'Final review, user approval, and workflow completion'

# Path Definitions
workflow_path: '{project-root}/_bmad/marketing-agent-team/custom/src/workflows/brand-setup'

# File References
thisStepFile: '{workflow_path}/steps/step-06-final-review.md'
workflowFile: '{workflow_path}/workflow.md'

# Output files
brandDataFile: '{content_output_dir}/brand-profiles/{brand_name}/brand-data.md'
fullProfileOutput: '{content_output_dir}/brand-profiles/{brand_name}/brand-profile.md'
summaryOutput: '{content_output_dir}/brand-profiles/{brand_name}/brand-summary.md'
deckOutput: '{content_output_dir}/brand-profiles/{brand_name}/brand-deck.md'
briefOutput: '{content_output_dir}/brand-profiles/{brand_name}/design-brief.md'
---
# Step 6: Final Review

## STEP GOAL:

To present all generated outputs for final user review, obtain explicit approval, mark the workflow as complete, and provide a satisfying conclusion to the brand creation journey.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: Read complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a Brand Strategist & Creative Facilitator
- ✅ Celebrate the completion of the brand journey
- ✅ Ensure user feels satisfied and confident
- ✅ Provide clear guidance on next steps

### Step-Specific Rules:

- 🎯 Focus ONLY on final review and completion
- 🚫 FORBIDDEN to mark workflow complete without user approval
- 💬 Celebrate success and validate user satisfaction
- 📋 Offer final refinements if user is not satisfied

## EXECUTION PROTOCOLS:

- 🎯 Present all outputs for user review
- 💾 Get explicit user approval before marking complete
- 📖 Update frontmatter `workflowComplete: true` only after approval
- 🚫 FORBIDDEN to end workflow without user satisfaction

## CONTEXT BOUNDARIES:

- Available context: All brand data and outputs from Steps 01-05
- Focus: Final review and completion only
- Limits: No new brand creation work - review only
- Dependencies: Steps 01-05 must be complete

## Sequence of Instructions (Do not deviate, skip, or optimize)

### 1. Display Progress and Set Context

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 6 OF 6: FINAL REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Congratulations! Your brand is complete. Let's review everything
and make sure you're satisfied with the results.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

"**Final Review Phase** 🎉

You've done it! Your brand identity is complete. Let's review all the outputs we've created and make sure everything meets your needs."

### 2. Present Output Files

"**Your Brand Outputs:**"

Display all generated files with paths:

```
📁 BRAND LOCATION
{content_output_dir}/brand-profiles/{brand_name}/

📄 OUTPUT FILES

1. Full Brand Profile (comprehensive reference)
   {fullProfileOutput}

2. One-Page Brand Summary (quick reference)
   {summaryOutput}

3. Stakeholder Presentation Deck (for buy-in)
   {deckOutput}

4. Design Asset Brief (for designers/agency)
   {briefOutput}

5. Brand Data File (source of truth)
   {brandDataFile}
```

### 3. Present Brand Summary

"**Here's your brand at a glance:**"

Display summary of key brand elements:

```markdown
# {brand_name}

**Tagline:** {tagline}

**Mission:** {mission}

**Values:** {values}

**Archetype:** {archetype}

**Target Audience:** {audience}

**Voice:** {voice}

**Visual Essence:** {visual}
```

### 4. Final Satisfaction Check

"**Before we complete the workflow, I want to make sure you're satisfied.**"

**Ask:**
"On a scale of 1-10, how satisfied are you with your brand?"

**IF 8-10:**
- "Excellent! I'm so glad you love your brand!"

**IF 5-7:**
- "What could be better? Let's see if we can make any final adjustments."

**IF 1-4:**
- "I hear you - let's figure out what's not working and fix it."
- Use Advanced Elicitation to identify issues
- Offer to loop back to specific steps for refinement

### 5. Next Steps Guidance

"**Now that your brand is complete, here's how to use it:**"

**Provide actionable guidance:**

1. **Start with the One-Page Summary** - Use this for quick reference and sharing
2. **Review the Full Profile** - Read through to fully understand your brand
3. **Share the Presentation Deck** - Use with stakeholders for buy-in
4. **Give the Design Brief to Designers** - They'll create your visual assets
5. **Live Your Brand** - Apply your values and voice in everything you do

### 6. Get Final Approval

"**Are you ready to complete this workflow?**"

"By confirming, you're approving all four brand outputs and marking the workflow complete."

**Options:**
- [Y] Yes, complete this workflow
- [N] I need refinements

**IF Y (Yes):**
- Proceed to Section 7

**IF N (No):**
- "What refinements do you need?"
- Address specific concerns
- If minor: Offer to edit outputs directly
- If major: Discuss whether to loop back to specific steps
- Re-offer approval when refinements complete

### 7. Mark Workflow Complete

**IF final approval received:**

Update brand-data.md frontmatter:
```yaml
stepsCompleted: [1, 2, 3, 4, 5, 6]
workflowComplete: true
completedAt: {date}
```

Update all output files with completion timestamp:

For each output file, add to frontmatter if not present:
```yaml
brandName: "{brand_name}"
generated: {date}
workflowComplete: true
```

### 8. Celebrate and Close

"**🎉 Congratulations! Your Brand Setup Workflow is Complete!**"

Display success message:

```
╔════════════════════════════════════════════════════════╗
║                                                      ║
║   ✅ BRAND SETUP COMPLETE                             ║
║                                                      ║
║   Brand: {brand_name}                               ║
║   Completed: {date}                                  ║
║                                                      ║
║   Your brand identity is ready to use!             ║
║                                                      ║
╚════════════════════════════════════════════════════════╝
```

**What's Next:**

1. **Review your outputs** - Open each file and familiarize yourself
2. **Apply your brand** - Start using your brand guidelines consistently
3. **Share with your team** - Use the presentation deck for buy-in
4. **Work with designers** - Give them the design brief
5. **Live your brand** - Let your values guide every decision

**Thank you for creating your brand with me!** 🎨✨

"It's been a privilege to help you build something authentic and meaningful. Your brand has a strong foundation - now go out and make your mark on the world!"

---

### 9. Workflow End

This is the final step. When approval is received and workflowComplete is set to true, the workflow session ends.

No further steps to load. The user can now:
- Use their brand outputs
- Start a new brand setup workflow (for a different brand)
- Use other marketing-agent-team workflows

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All outputs presented and reviewed
- User satisfaction confirmed (8/10 or higher, or refinements addressed)
- Explicit approval received
- `workflowComplete: true` set in brand-data.md
- All output files marked complete
- Celebratory closing provided

### ❌ SYSTEM FAILURE:

- Marking workflow complete without user approval
- Not addressing user concerns about outputs
- Not updating workflowComplete status
- Ending without celebration/acknowledgment

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

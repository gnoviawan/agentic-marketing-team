---

name: 'step-06-complete'
description: 'Complete the session by saving learning data, updating metrics, and providing session summary'

<!-- Path Definitions -->

workflow_path: '{project-root}/_bmad/marketing-agent-team/workflows/content-creation'

# File References (all use {variable} format in file)

thisStepFile: '{workflow_path}/steps/step-06-complete.md'
workflowFile: '{workflow_path}/workflow.md'
sessionStatePath: '{output_folder}/marketing-content/session-state.yaml'
userPreferencesPath: '{output_folder}/marketing-content/user-preferences.yaml'

# Learning Data Path

learningDataPath: '{output_folder}/marketing-content/learning-data-{YYYY-MM}.json'

# Task References

advancedElicitationTask: '{project-root}/_bmad/core/tasks/advanced-elicitation.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'

---

# Step 6: Session Completion

## STEP GOAL:

To complete the Content Creation workflow by saving learning data for RLHF, updating user preferences, recording session metrics, and providing a comprehensive session summary.

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
- ✅ You bring content analytics and learning expertise, user brings their satisfaction and feedback
- ✅ Maintain collaborative professional tone throughout

### Step-Specific Rules:

- 🎯 Focus ONLY on completion and learning data capture
- 🚫 FORBIDDEN to modify approved content pieces
- 💬 Collect feedback for continuous improvement
- 🚪 SAVE all learning data for RLHF system
- 💾 ALWAYS save learning data and metrics

## EXECUTION PROTOCOLS:

- 🎯 Collect optional user feedback
- 💾 Save learning data for future improvement
- 📖 Update user preferences if changes were made
- 🚫 END workflow gracefully with clear next steps

## CONTEXT BOUNDARIES:

- Complete session data from all steps is available
- All approved content has been exported
- Session state contains all decisions and metrics
- Learning data improves future generations

---

## SESSION COMPLETION PROCESS:

### 1. Session Summary Display

Present comprehensive session summary:

"**🎉 Content Creation Session Complete!**

**Session Overview:**
- Brand: {brand_name}
- Topic: {topic}
- Date: {YYYY-MM-DD}
- Mode: {mode}
- Session ID: {session_id}

**Content Results:**
- Total Generated: {total} pieces
- Approved: {approved} pieces ✓
- Refined: {refined} pieces (improved together)
- Rejected: {rejected} pieces (saved for learning)
- Approval Rate: {percentage}%

**Platform Breakdown:**
| Platform | Generated | Approved | Rate |
|----------|-----------|----------|------|
| TikTok | {total} | {approved} | {rate}% |
| Instagram | {total} | {approved} | {rate}% |
| YouTube | {total} | {approved} | {rate}% |
| Threads | {total} | {approved} | {rate}% |
| Facebook | {total} | {approved} | {rate}% |
| Blog | {total} | {approved} | {rate}% |

**Output Location:**
`{contentOutputDir}`

**Export Files:**
- Batch Summary: `{batchSummaryFile}`
- JSON Export: `{batchApiFile}`

---

Your content is ready to post! Each approved piece has been saved as an individual file, plus you have the batch summary and JSON export for easy sharing."

### 2. Collect Optional Feedback

Ask for user feedback to improve future sessions:

"**Help Me Improve Future Sessions**

I'd love your feedback on this session (optional but appreciated!):

1. **Overall Satisfaction:** (1-5, or describe)
   How satisfied are you with the generated content?

2. **Mode Experience:** (Lightning/Studio)
   Did the generation mode work well for you?

3. **Quality Feedback:** (optional)
   What worked well? What could be better?

4. **Feature Requests:** (optional)
   Any features or improvements you'd like to see?

**Type your feedback or press Enter to skip**"

### 3. Save Learning Data

Create or append to `{learningDataPath}`:

```json
{
  "month": "{YYYY-MM}",
  "sessions": [
    {
      "session_id": "{session_id}",
      "date": "{YYYY-MM-DD}",
      "brand": "{brand_name}",
      "topic": "{topic}",
      "goal": "{goal}",
      "mode": "{mode}",
      "metrics": {
        "total_pieces": {total},
        "approved_pieces": {approved},
        "refined_pieces": {refined},
        "rejected_pieces": {rejected},
        "approval_rate": "{percentage}%"
      },
      "platform_performance": {
        "tiktok": { "generated": N, "approved": N, "rate": "%" },
        "instagram": { "generated": N, "approved": N, "rate": "%" },
        "youtube": { "generated": N, "approved": N, "rate": "%" },
        "threads": { "generated": N, "approved": N, "rate": "%" },
        "facebook": { "generated": N, "approved": N, "rate": "%" },
        "blog": { "generated": N, "approved": N, "rate": "%" }
      },
      "user_feedback": {
        "satisfaction": "{rating or null}",
        "mode_experience": "{feedback or null}",
        "quality_feedback": "{feedback or null}",
        "feature_requests": "{feedback or null}"
      },
      "rejection_patterns": [
        {
          "piece": "{filename}",
          "reason": "{rejection_reason}",
          "platform": "{platform}"
        }
      ],
      "refinement_patterns": {
        "most_refined_sections": ["hook", "content", "cta", "hashtags"],
        "average_refinements_per_piece": {decimal}
      }
    }
  ]
}
```

### 4. Update User Preferences

Check if user made any preference changes during session:

- Section ordering preferences
- Hashtag style preferences
- Platform preferences
- Mode preferences

Update `{userPreferencesPath}`:

```yaml
---
user: {user_name}
updated_at: "[timestamp]"
preferences:
  sectionOrder: ["hook", "content", "cta", "hashtags"]
  includeTimestamp: true
  defaultMode: "{mode}"
  preferredPlatforms: [{platforms}]
  hashtagStyle: "minimal|moderate|extensive"
  hookPreference: "stop-the-scroll|value-first|question"
contentStyle:
  tone: "{observed tone}"
  lengthPreference: "short|medium|long"
  ctaStyle: "{observed CTA style}"
learning_insights:
  strongTopics: [{topics that performed well}]
  weakTopics: [{topics that were rejected}]
  successfulFormats: [{formats that were approved}]
---
```

### 5. Archive Session State

Rename and archive current session state:

- Move `{sessionStatePath}` to `{output_folder}/marketing-content/sessions/session-{session_id}.yaml`
- This creates a permanent record of the session

### 6. Update Metrics

Calculate and display improvement trends:

"**Your Content Creation Journey**

**This Session:**
- Approval Rate: {percentage}%
- Pieces Created: {total}

**Cumulative Stats:** {if historical data exists}
- Total Sessions: {count}
- Total Pieces: {count}
- Average Approval Rate: {percentage}%
- Trend: {improving/stable}

You're making great progress! The learning system will use this session's data to improve future content generation."

### 7. Final Session State Update

Before archiving, update session state:

```yaml
---
# ... existing fields ...
stepsCompleted: [1, 2, 3, 4, 5, 6]
lastStep: 'complete'
completedAt: "[timestamp]"
sessionStatus: "completed"
learningDataSaved: true
userFeedbackCollected: {true/false}
---
```

### 8. Next Steps and Options

Present options for next actions:

"**What's Next?**

**Immediate Actions:**
1. **Post Content** — Your approved pieces are ready to publish
2. **Review Export** — Check batch summary or JSON export
3. **Start New Session** — Create more content for the same or different topic

**Future Improvements:**
4. **Brand Profile** — Update your brand profile with new insights
5. **Market Research** — Gather trending data for your industry
6. **Competitor Analysis** — See what competitors are doing

**Workflow Options:**
- **N** — Start a new content creation session
- **B** — Return to workflow menu
- **Q** — Quit

**What would you like to do?**"

### 9. Present MENU OPTIONS

Display: **Select an Option:** [A] Advanced Elicitation [P] Party Mode [N] New Session [C] Close Session

#### Menu Handling Logic:

- IF A: Execute {advancedElicitationTask} to explore insights from this session
- IF P: Execute {partyModeWorkflow} to celebrate with other agents
- IF N: Confirm, then return to step-01-init.md for new session
- IF C: Save all final data, provide completion message, end workflow
- IF Any other comments or queries: help user respond then [Redisplay Menu Options](#9-present-menu-options)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- This is the final step - handle completion gracefully
- After other menu items execution, return to this menu
- User can chat or ask questions - always respond and then end with display again of the menu options

### 10. Session Close (When C Selected)

When user selects Close:

"**✓ Session Closed Successfully**

**Session ID:** {session_id}
**Completed:** {timestamp}

**All data saved:**
- Learning data: `{learningDataPath}`
- User preferences: `{userPreferencesPath}`
- Session archive: `{output_folder}/marketing-content/sessions/session-{session_id}.yaml`

**Content Location:** `{contentOutputDir}`

Thank you for using the Content Creation Workflow! Your content is ready to post, and I've learned from this session to improve future generations.

See you next time! 🎉"

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Session summary displayed with complete metrics
- Learning data saved for RLHF improvement
- User preferences updated if changes detected
- Session state archived for historical record
- All export files confirmed accessible
- User provided with clear next steps
- Workflow closed gracefully

### ❌ SYSTEM FAILURE:

- Not saving learning data
- Losing session data (not archived)
- Not collecting or saving user feedback
- Not updating user preferences
- Closing without proper completion message
- Losing track of export file locations

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

## CRITICAL STEP COMPLETION NOTE

This is the final step of the workflow. When user selects [C] to close, ensure all data is saved, session is archived, and user receives confirmation with content location and next steps.

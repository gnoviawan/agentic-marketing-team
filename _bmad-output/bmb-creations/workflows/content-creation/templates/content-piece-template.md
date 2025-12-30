---

# Content Piece Template

This template provides the standard structure for individual content pieces across all platforms.

<!-- TEMPLATE START -->

---
platform: {platform}
type: {video-script | text-post | blog-post}
date: {YYYY-MM-DD}
status: {draft | pending-review | approved | rejected}
created_at: {timestamp}
session_id: {session_id}
sequence: {number}
topic: {content-topic}
refinements: 0
---

# Content Piece: {topic-slug}

**Platform:** {platform}
**Type:** {type}
**Created:** {YYYY-MM-DD}

<!-- Section order may vary based on user preferences -->

## Hook

{Opening line or visual that stops the scroll}

**Video hook:** {If video, describe opening scene/text}
**Text hook:** {If text, the opening line}

## Content

{Main content body - script for video, post content for text}

**Video Script:**
- Scene 1: {description}
- Scene 2: {description}
- Scene 3: {description}

**Visual Prompts (for kie.ai):**
- Style: {visual style description}
- Mood: {mood/tone}
- Colors: {color palette}
- Transitions: {transition types}

**Text Content:**
{For non-video platforms, the main post content}

## Call-to-Action

{Clear action for the audience to take}

**CTA Type:** {follow | like | comment | share | visit-link | purchase}

## Hashtags

{Platform-appropriate hashtags}

{For video platforms: 3-5 relevant tags}
{For Instagram: 5-10 mix of broad and niche}
{For text platforms: 1-3 minimal usage}

---

## Notes

{Any additional notes for the user or posting considerations}

**Character Count:** {if applicable}
**Recommended Posting Time:** {suggestion}
**Cross-Platform Opportunities:** {related platforms}

<!-- TEMPLATE END -->

## Platform-Specific Variations

### TikTok

```markdown
---
platform: tiktok
type: video-script
duration: 15-60 seconds
---

## Hook
{3-5 second stop-the-scroll opening}

## Content
{Fast-paced script with clear scene changes}

## Call-to-Action
{Direct: "Follow for more!" or "Link in bio!"}

## Hashtags
#tiktok #viral #fyp #niche
```

### Instagram Reels

```markdown
---
platform: instagram
type: video-script
duration: 15-90 seconds
---

## Hook
{Visual-first aesthetic opening}

## Content
{Lifestyle-focused with clear visual storytelling}

## Call-to-Action
{Engagement-driven: "Save this!" or "Share with a friend!"}

## Hashtags
#instagram #reels #aesthetic #niche #lifestyle #viral
```

### YouTube Shorts

```markdown
---
platform: youtube
type: video-script
duration: 60 seconds
---

## Hook
{Value proposition upfront}

## Content
{Educational or entertaining content}

## Call-to-Action
{Subscribe-focused}

## Hashtags
#shorts #youtube #niche #topic
```

### Threads

```markdown
---
platform: threads
type: text-post
---

## Hook
{Conversational opener or question}

## Content
{Community-driven text content, optionally add image}

## Call-to-Action
{Reply or share focused}

## Hashtags
#topic (minimal - 1-3 tags max)
```

### Facebook

```markdown
---
platform: facebook
type: text-post | video-script
---

## Hook
{Shareable statement or question}

## Content
{Community-focused, varied formats}

## Call-to-Action
{Engagement or action-oriented}

## Hashtags
#topic #community (2-5 strategic tags)
```

### Blog

```markdown
---
platform: blog
type: blog-post
word_count: 500-1500
---

## Hook
{Compelling headline + introduction paragraph}

## Content
{Long-form, SEO-optimized content with headers}

## Call-to-Action
{Conversion or comment focused}

## Hashtags
N/A - Use keywords in content instead
```

## Usage Notes

1. **User Preference Adaptation:** Section order adapts to user's saved preferences (e.g., hashtags first)
2. **Status Tracking:** Update `status` field as piece moves through workflow
3. **Refinement Tracking:** Increment `refinements` count each time user requests changes
4. **Rejection Handling:** When rejected, add `rejectionReason` field before moving to rejected folder
5. **Brand Voice:** All content should reflect the brand's established voice and tone
6. **Platform Best Practices:** Follow platform-formats.yaml for specific guidelines

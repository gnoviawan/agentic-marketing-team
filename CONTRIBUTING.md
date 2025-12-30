# Contributing to Marketing Agent Team

Welcome, collaborator! This guide will help you get set up and start contributing to the Marketing Agent Team module.

## Quick Start (5 minutes)

### 1. Clone the Repository

```bash
git clone https://github.com/gnoviawan/agentic-marketing-team.git
cd agentic-marketing-team
```

### 2. Run Development Setup

This registers all 7 marketing agents as Claude Code slash commands:

```bash
node _bmad-output/bmb-creations/marketing-agent-team/setup-dev.js
```

Or from the module folder:

```bash
cd _bmad-output/bmb-creations/marketing-agent-team
npm run setup
```

### 3. Restart Claude Code

Close and reopen Claude Code (or start a new conversation) to load the new commands.

### 4. Test an Agent

Try running a marketing agent:

```
/bmad:marketing-agent-team:agents:brand-archetype-agent
```

---

## Project Structure

```
agentic-marketing-team/
├── _bmad/                          # BMAD Core + installed modules
│   ├── core/                       # BMAD Core (don't modify)
│   ├── bmb/                        # BMAD Module Builder (don't modify)
│   ├── marketing-agent-team/       # Installed module (auto-generated)
│   └── _config/                    # BMAD manifests
│       ├── manifest.yaml           # Module registry
│       └── agent-manifest.csv      # Agent registry
│
├── _bmad-output/                   # Build outputs
│   └── bmb-creations/
│       └── marketing-agent-team/   # ⭐ SOURCE CODE - Edit here!
│           ├── agents/             # Agent definitions (.yaml)
│           ├── workflows/          # Workflow folders
│           ├── data/               # Module data
│           ├── setup-dev.js        # Dev setup script
│           ├── install.js          # npm distribution installer
│           ├── module.yaml         # Installer configuration
│           └── README.md           # Module documentation
│
├── .claude/                        # Claude Code configuration
│   └── commands/                   # Slash commands
│       └── bmad/
│           └── marketing-agent-team/  # Agent command files
│
└── .gitignore                      # Git exclusions
```

### Key Principle: Edit Source, Run Setup

1. **Source of truth:** `_bmad-output/bmb-creations/marketing-agent-team/`
2. **After changes:** Run `setup-dev.js` to sync to `_bmad/` and `.claude/commands/`

---

## Development Workflow

### Making Changes to Agents

1. Edit the agent file in `_bmad-output/bmb-creations/marketing-agent-team/agents/`
2. Run `node _bmad-output/bmb-creations/marketing-agent-team/setup-dev.js`
3. Restart Claude Code
4. Test the agent

### Making Changes to Workflows

1. Edit workflow files in `_bmad-output/bmb-creations/marketing-agent-team/workflows/`
2. Run the setup script to sync
3. Test the workflow

### Creating New Agents

Use the BMAD agent builder:

```
/bmad:bmb:agents:agent-builder
```

Then select `[CA] Create Agent` and follow the workflow.

### Creating New Workflows

Use the BMAD workflow builder:

```
/bmad:bmb:workflows:create-workflow
```

---

## Agent Architecture

Each agent follows this structure:

```yaml
agent:
  metadata:
    name: 'agent-name'
    title: 'Display Title'
    icon: '🎭'
    module: 'marketing-agent-team'

  persona:
    role: 'Short role description'
    identity: |
      Multi-line identity description...
    communication_style: |
      How the agent communicates...
    principles:
      - 'Principle 1'
      - 'Principle 2'

  critical_actions:  # Optional: for agents with sidecar memory
    - 'Load memory files...'

  prompts:
    - id: 'prompt-id'
      content: |
        Prompt content...

  menu:
    - multi: '[A] Action A [B] Action B'
      triggers:
        - trigger-a:
            input: A
            action: '#prompt-id'
            type: action
```

### Agent Types

| Type | Has Sidecar | Examples |
|------|-------------|----------|
| Simple | No | content-creation, market-research |
| Expert | Yes | brand-archetype, analytics |

---

## Testing Agents

### Manual Testing

1. Run the agent: `/bmad:marketing-agent-team:agents:<agent-name>`
2. Test each menu option
3. Verify prompts execute correctly
4. Check persona consistency

### Validation Checklist

- [ ] Agent loads without errors
- [ ] Menu displays correctly
- [ ] All triggers work
- [ ] Prompts produce expected output
- [ ] Persona is consistent throughout
- [ ] Sidecar files load/save correctly (Expert agents)

---

## Coding Standards

### YAML Files

- Use 2-space indentation
- Quote strings that contain special characters
- Use `|` for multi-line strings

### Persona Guidelines

- **Identity:** 3-5 paragraphs describing expertise and background
- **Communication Style:** 1-2 paragraphs on tone and approach
- **Principles:** 4-6 bullet points of core values

### Menu Patterns

- Use 2-letter codes (e.g., `[DB]`, `[GC]`)
- Group related actions with `multi` syntax
- Always include `[CH]` for chat mode

### File References

- Use `{project-root}` for absolute paths
- Use relative paths from agent location for sidecar files
- Example: `./agent-sidecar/memories.md`

---

## Git Workflow

### Branch Naming

- `feature/agent-name` - New agents
- `feature/workflow-name` - New workflows
- `fix/description` - Bug fixes
- `docs/description` - Documentation

### Commit Messages

Follow conventional commits:

```
feat(agent): add new competitor analysis prompts
fix(workflow): correct brand-setup step sequence
docs: update installation instructions
```

### Pull Request Process

1. Create feature branch from `main`
2. Make changes and test locally
3. Run `setup-dev.js` to verify setup works
4. Commit with descriptive message
5. Push and create PR
6. Request review

---

## Common Tasks

### Adding a New Prompt to an Agent

1. Open the agent YAML file
2. Add to the `prompts` array:

```yaml
prompts:
  - id: 'new-prompt-id'
    content: |
      Your prompt content here...
```

3. Add a menu trigger:

```yaml
menu:
  - trigger: 'new-trigger'
    action: '#new-prompt-id'
    description: 'Description of action'
```

4. Run setup and test

### Adding a Sidecar to an Agent

1. Add `critical_actions`:

```yaml
critical_actions:
  - 'Load COMPLETE file ./agent-sidecar/memories.md'
  - 'ONLY read/write files in ./agent-sidecar/'
```

2. Create the sidecar folder and files
3. Update `setup-dev.js` if needed to copy the folder

### Updating Agent Icons

1. Edit the `icon` field in the agent YAML
2. Update `setup-dev.js` agent definitions to match
3. Run setup script

---

## Troubleshooting

### "Agent not found" Error

- Did you run `setup-dev.js`?
- Did you restart Claude Code?
- Check `.claude/commands/bmad/marketing-agent-team/agents/` for the command file

### "Module not registered" Error

- Check `_bmad/_config/manifest.yaml` includes `marketing-agent-team`
- Run `setup-dev.js` to update manifests

### Changes Not Appearing

1. Run `setup-dev.js` again
2. Restart Claude Code completely
3. Start a new conversation

### YAML Syntax Errors

- Use a YAML validator
- Check for:
  - Incorrect indentation
  - Missing quotes on special characters
  - Improper multi-line string syntax

---

## Resources

### BMAD Documentation

- Agent Architecture: `_bmad/bmb/docs/agents/`
- Workflow Architecture: `_bmad/bmb/docs/workflows/`
- Menu Patterns: `_bmad/bmb/docs/agents/agent-menu-patterns.md`

### Example Agents

- Simple: `_bmad/bmb/reference/agents/simple-examples/`
- Expert: `_bmad/bmb/reference/agents/expert-examples/`

### Tools

- `/bmad:bmb:agents:agent-builder` - Create/edit agents
- `/bmad:bmb:workflows:create-workflow` - Create workflows
- `/bmad:bmb:workflows:edit-agent` - Modify existing agents

---

## Questions?

- Open an issue for bugs or feature requests
- Use discussions for questions
- Tag maintainers for urgent items

---

**Happy contributing!** Your work helps democratize professional marketing for everyone.

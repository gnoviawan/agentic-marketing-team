#!/usr/bin/env node

/**
 * Marketing Agent Team - Development Setup Script
 *
 * This script sets up the marketing-agent-team module for local development and testing.
 * It handles:
 * 1. Copying agents to _bmad/marketing-agent-team/
 * 2. Registering slash commands in .claude/commands/
 * 3. Updating BMAD manifests
 *
 * Usage:
 *   node setup-dev.js
 *   OR from project root:
 *   node _bmad-output/bmb-creations/marketing-agent-team/setup-dev.js
 */

const fs = require('fs');
const path = require('path');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function banner() {
  console.log('');
  log('═══════════════════════════════════════════════════════════════', 'cyan');
  log('        Marketing Agent Team - Development Setup', 'cyan');
  log('═══════════════════════════════════════════════════════════════', 'cyan');
  console.log('');
}

/**
 * Find project root by looking for _bmad folder
 */
function findProjectRoot() {
  let currentDir = __dirname;

  // Walk up the directory tree looking for _bmad
  for (let i = 0; i < 10; i++) {
    const bmadPath = path.join(currentDir, '_bmad');
    if (fs.existsSync(bmadPath)) {
      return currentDir;
    }
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) break; // Reached filesystem root
    currentDir = parentDir;
  }

  // Fallback to current working directory
  if (fs.existsSync(path.join(process.cwd(), '_bmad'))) {
    return process.cwd();
  }

  return null;
}

/**
 * Copy directory recursively
 */
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Agent definitions with metadata
 */
const agents = [
  { name: 'brand-archetype-agent', title: 'Brand Archetype Agent', desc: 'Brand Personality Architect and Emotional Profiling Specialist', icon: '🎭' },
  { name: 'content-creation-agent', title: 'Content Creation Agent', desc: 'Multi-Platform Content Strategist and AI Content Generation Specialist', icon: '✍️' },
  { name: 'market-research-agent', title: 'Market Research Agent', desc: 'Digital Trend Hunter and Market Intelligence Specialist', icon: '🔍' },
  { name: 'competitor-analysis-agent', title: 'Competitor Analysis Agent', desc: 'Competitive Intelligence Specialist and Content Strategy Analyst', icon: '🕵️' },
  { name: 'analytics-agent', title: 'Analytics Agent', desc: 'Performance Analytics Specialist and Learning Intelligence Manager', icon: '📊' },
  { name: 'business-strategy-agent', title: 'Business Strategy Agent', desc: 'Business Strategist and Marketing Funnel Architect', icon: '💼' },
  { name: 'campaign-orchestrator-agent', title: 'Campaign Orchestrator', desc: 'Campaign Director and Multi-Agent Orchestration Specialist', icon: '🎯' },
];

/**
 * Create Claude Code command file for an agent
 */
function createCommandFile(agent, commandsDir) {
  const commandContent = `---
name: '${agent.name}'
description: '${agent.title} - ${agent.desc} (project)'
---

You must fully embody this agent's persona and follow all activation instructions exactly as specified. NEVER break character until given an exit command.

<agent-activation CRITICAL="TRUE">
1. LOAD the FULL agent file from @_bmad/marketing-agent-team/agents/${agent.name}.yaml
2. READ its entire contents - this contains the complete agent persona, menu, and instructions
3. Execute ALL activation steps exactly as written in the agent file
4. Follow the agent's persona and menu system precisely
5. Stay in character throughout the session
</agent-activation>
`;

  const filePath = path.join(commandsDir, `${agent.name}.md`);
  fs.writeFileSync(filePath, commandContent, 'utf8');
  return filePath;
}

/**
 * Update manifest.yaml to include marketing-agent-team module
 */
function updateManifest(projectRoot) {
  const manifestPath = path.join(projectRoot, '_bmad', '_config', 'manifest.yaml');

  if (!fs.existsSync(manifestPath)) {
    log(`  ⚠️  Manifest not found at ${manifestPath}`, 'yellow');
    return false;
  }

  let content = fs.readFileSync(manifestPath, 'utf8');

  if (content.includes('marketing-agent-team')) {
    log('  ✓ Module already registered in manifest.yaml', 'green');
    return true;
  }

  // Add marketing-agent-team to modules list
  content = content.replace(
    /modules:\n((?:  - \w+\n)+)/,
    (match, moduleList) => {
      return `modules:\n${moduleList}  - marketing-agent-team\n`;
    }
  );

  fs.writeFileSync(manifestPath, content, 'utf8');
  log('  ✓ Added marketing-agent-team to manifest.yaml', 'green');
  return true;
}

/**
 * Update agent-manifest.csv with marketing agents
 */
function updateAgentManifest(projectRoot) {
  const manifestPath = path.join(projectRoot, '_bmad', '_config', 'agent-manifest.csv');

  if (!fs.existsSync(manifestPath)) {
    log(`  ⚠️  Agent manifest not found at ${manifestPath}`, 'yellow');
    return false;
  }

  let content = fs.readFileSync(manifestPath, 'utf8');

  // Check if already registered
  if (content.includes('marketing-agent-team')) {
    log('  ✓ Agents already registered in agent-manifest.csv', 'green');
    return true;
  }

  // Add marketing agents
  const newAgents = agents.map(agent => {
    return `"${agent.name}","${agent.title}","${agent.title}","${agent.icon}","${agent.desc}","Marketing agent for ${agent.title.toLowerCase()}.","Professional and strategic communication style.","- Focus on results - Brand consistency - Data-driven decisions","marketing-agent-team","_bmad/marketing-agent-team/agents/${agent.name}.yaml"`;
  }).join('\n');

  content = content.trim() + '\n' + newAgents + '\n';
  fs.writeFileSync(manifestPath, content, 'utf8');
  log(`  ✓ Added ${agents.length} agents to agent-manifest.csv`, 'green');
  return true;
}

/**
 * Main setup function
 */
async function main() {
  banner();

  // Find project root
  const projectRoot = findProjectRoot();
  if (!projectRoot) {
    log('❌ Could not find BMAD project root (_bmad folder not found)', 'red');
    log('   Run this script from within a BMAD project directory', 'yellow');
    process.exit(1);
  }

  log(`📁 Project root: ${projectRoot}`, 'blue');
  console.log('');

  // Determine source directory (where this script is located)
  const sourceDir = path.dirname(__filename);
  const sourceAgentsDir = path.join(sourceDir, 'agents');

  // Step 1: Copy agents to _bmad/marketing-agent-team/
  log('1️⃣  Copying agents to _bmad/marketing-agent-team/...', 'yellow');

  const targetAgentsDir = path.join(projectRoot, '_bmad', 'marketing-agent-team', 'agents');

  if (fs.existsSync(sourceAgentsDir)) {
    copyDir(sourceAgentsDir, targetAgentsDir);
    log(`  ✓ Copied agents to ${targetAgentsDir}`, 'green');
  } else {
    log(`  ⚠️  Source agents directory not found: ${sourceAgentsDir}`, 'yellow');
  }

  // Also copy workflows and data if they exist
  const dirsToCopy = ['workflows', 'data'];
  for (const dir of dirsToCopy) {
    const srcDir = path.join(sourceDir, dir);
    const destDir = path.join(projectRoot, '_bmad', 'marketing-agent-team', dir);
    if (fs.existsSync(srcDir)) {
      copyDir(srcDir, destDir);
      log(`  ✓ Copied ${dir}/ to ${destDir}`, 'green');
    }
  }

  console.log('');

  // Step 2: Create Claude Code command files
  log('2️⃣  Creating Claude Code slash commands...', 'yellow');

  const commandsDir = path.join(projectRoot, '.claude', 'commands', 'bmad', 'marketing-agent-team', 'agents');
  fs.mkdirSync(commandsDir, { recursive: true });

  for (const agent of agents) {
    createCommandFile(agent, commandsDir);
    log(`  ✓ /bmad:marketing-agent-team:agents:${agent.name}`, 'green');
  }

  console.log('');

  // Step 3: Update BMAD manifests
  log('3️⃣  Updating BMAD manifests...', 'yellow');

  updateManifest(projectRoot);
  updateAgentManifest(projectRoot);

  console.log('');

  // Success summary
  log('═══════════════════════════════════════════════════════════════', 'cyan');
  log('                    Setup Complete! 🎉', 'green');
  log('═══════════════════════════════════════════════════════════════', 'cyan');
  console.log('');

  log('Your marketing agents are now available as slash commands:', 'green');
  console.log('');

  for (const agent of agents) {
    log(`  ${agent.icon} /bmad:marketing-agent-team:agents:${agent.name}`, 'cyan');
  }

  console.log('');
  log('⚡ Restart Claude Code to load the new commands', 'yellow');
  console.log('');
}

// Run setup
main().catch(error => {
  log(`❌ Setup failed: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
});

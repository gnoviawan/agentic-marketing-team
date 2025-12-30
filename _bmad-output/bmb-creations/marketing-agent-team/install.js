#!/usr/bin/env node

/**
 * Marketing Agent Team - npx Installation Entry Point
 *
 * Usage:
 *   npx marketing-agent-team
 *   OR
 *   npm install marketing-agent-team
 *
 * This script:
 * 1. Welcomes the user
 * 2. Checks BMAD compatibility
 * 3. Copies module to _bmad/marketing-agent-team/
 * 4. Runs the custom installer
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function banner() {
  console.log('');
  log('╔════════════════════════════════════════════════════════════════╗', 'cyan');
  log('║                                                              ║', 'cyan');
  log('║        Marketing Agent Team - AI Marketing Module             ║', 'cyan');
  log('║                                                              ║', 'cyan');
  log('║   Your Complete AI-Powered Marketing Team                     ║', 'cyan');
  log('║                                                              ║', 'cyan');
  log('╚════════════════════════════════════════════════════════════════╝', 'cyan');
  console.log('');
}

async function checkBMAD() {
  log('📋 Checking BMAD installation...', 'yellow');

  const bmadPath = path.join(process.cwd(), '_bmad');
  if (!fs.existsSync(bmadPath)) {
    log('⚠️  BMAD structure not found in current directory!', 'yellow');
    log('   This module requires BMAD to be installed.', 'yellow');
    log('');
    log('   To install BMAD:', 'cyan');
    log('   1. Visit: https://github.com/your-org/bmad', 'cyan');
    log('   2. Follow installation instructions', 'cyan');
    log('   3. Run this installer again from a BMAD project', 'cyan');
    return false;
  }

  log('✅ BMAD structure detected', 'green');
  return true;
}

async function copyModule() {
  log('📦 Copying module files to _bmad/marketing-agent-team/...', 'yellow');

  const sourceDir = __dirname;
  const targetDir = path.join(process.cwd(), '_bmad', 'marketing-agent-team');

  // Create target directory
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Copy main module files
  const filesToCopy = [
    'module.yaml',
    'README.md',
    'package.json',
    'TODO.md',
    'module-plan-marketing-agent-team.md'
  ];

  for (const file of filesToCopy) {
    const src = path.join(sourceDir, file);
    const dest = path.join(targetDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      log(`   ✅ ${file}`, 'green');
    }
  }

  // Copy directories
  const dirsToCopy = ['agents', 'workflows', 'tasks', 'templates', 'data', '_module-installer'];

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

  for (const dir of dirsToCopy) {
    const src = path.join(sourceDir, dir);
    const dest = path.join(targetDir, dir);
    if (fs.existsSync(src)) {
      copyDir(src, dest);
      log(`   ✅ ${dir}/`, 'green');
    }
  }

  log('✅ Module files copied successfully', 'green');
}

async function runCustomInstaller() {
  log('⚙️  Running custom installer...', 'yellow');

  const installerPath = path.join(__dirname, '_module-installer', 'installer.js');

  if (!fs.existsSync(installerPath)) {
    log('⚠️  Custom installer not found - skipping configuration', 'yellow');
    return;
  }

  try {
    // Require and run the installer
    const installer = require(installerPath);

    // Simulate installation options
    const options = {
      projectRoot: process.cwd(),
      config: {}, // Will be populated by interactive prompts
      installedIDEs: [],
      logger: {
        log: (msg) => log(`   ${msg}`, 'blue'),
        warn: (msg) => log(`   ⚠️  ${msg}`, 'yellow'),
        error: (msg) => log(`   ❌ ${msg}`, 'red')
      }
    };

    const success = await installer.install(options);

    if (success) {
      log('✅ Custom installer completed successfully', 'green');
    } else {
      log('⚠️  Custom installer had issues - module may need manual configuration', 'yellow');
    }
  } catch (error) {
    log(`⚠️  Installer error: ${error.message}`, 'yellow');
  }
}

async function showNextSteps() {
  console.log('');
  log('════════════════════════════════════════════════════════════════', 'cyan');
  log('                    Installation Complete! 🎉', 'green');
  log('════════════════════════════════════════════════════════════════', 'cyan');
  console.log('');
  log('Your Marketing Agent Team module is now installed!', 'green');
  console.log('');
  log('Next Steps:', 'yellow');
  log('');
  log('1. Start with Brand Archetype Agent:', 'cyan');
  log('   agent brand-archetype-agent', 'bright');
  log('   Then use trigger: DB (Discover Brand Archetype)', 'bright');
  console.log('');
  log('2. Generate your first content:', 'cyan');
  log('   agent content-creation-agent', 'bright');
  log('   Then use trigger: GC (Generate Content Batch)', 'bright');
  console.log('');
  log('3. Read the documentation:', 'cyan');
  log('   _bmad/marketing-agent-team/README.md', 'bright');
  console.log('');
  log('4. Check your TODO:', 'cyan');
  log('   _bmad/marketing-agent-team/TODO.md', 'bright');
  console.log('');
  log('For full documentation, visit:', 'cyan');
  log('https://github.com/gnoviawan/agentic-marketing-team', 'bright');
  console.log('');
}

async function main() {
  banner();

  log('Welcome to Marketing Agent Team!', 'green');
  console.log('');

  // Check if we're being run via npm install (npm will set npm_config_root)
  const isNpmInstall = process.env.npm_config_root !== undefined;

  if (isNpmInstall) {
    log('Detected npm install - skipping interactive setup', 'yellow');
    log('Run "npx marketing-agent-team" after npm install completes', 'yellow');
    process.exit(0);
  }

  // Check BMAD
  const hasBMAD = await checkBMAD();
  if (!hasBMAD) {
    process.exit(1);
  }

  // Copy module files
  await copyModule();

  // Run custom installer
  await runCustomInstaller();

  // Show next steps
  await showNextSteps();
}

// Run the installer
main().catch(error => {
  log(`❌ Installation failed: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
});

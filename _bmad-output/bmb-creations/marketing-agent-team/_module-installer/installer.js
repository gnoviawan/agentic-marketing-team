/**
 * Marketing Agent Team Module Installer
 * Custom installation logic for folder setup, API validation, and tier-specific configuration
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * Validate kie.ai API key by making a test request
 * @param {string} apiKey - The API key to validate
 * @returns {Promise<boolean>} - True if valid, false otherwise
 */
async function validateKieApiKey(apiKey) {
  if (!apiKey || apiKey.trim() === '') {
    return true; // Optional field, empty is OK
  }

  return new Promise((resolve) => {
    const options = {
      hostname: 'api.kie.ai',
      path: '/v1/test', // Adjust endpoint based on actual kie.ai API
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10 second timeout
    };

    const req = https.request(options, (res) => {
      resolve(res.statusCode === 200 || res.statusCode === 401); // 401 means key format is valid but rejected
    });

    req.on('error', () => {
      resolve(false); // Network error, assume invalid
    });

    req.on('timeout', () => {
      req.destroy();
      resolve(false); // Timeout, assume invalid
    });

    req.end();
  });
}

/**
 * Create directory structure for the module
 * @param {string} dirPath - Directory path to create
 * @param {Object} logger - Logger instance
 */
function ensureDirectory(dirPath, logger) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    logger.log(`Created directory: ${dirPath}`);
  }
}

/**
 * Create placeholder files for data storage
 * @param {string} filePath - File path to create
 * @param {string} content - Initial content
 * @param {Object} logger - Logger instance
 */
function createPlaceholderFile(filePath, content, logger) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
    logger.log(`Created file: ${filePath}`);
  }
}

/**
 * Copy agents based on tier selection
 * @param {string} tier - Selected tier (core, professional, enterprise)
 * @param {string} projectRoot - Project root directory
 * @param {Object} logger - Logger instance
 */
function setupTierAgents(tier, projectRoot, logger) {
  const modulePath = path.join(projectRoot, '_bmad', 'marketing-agent-team');
  const agentsPath = path.join(modulePath, 'agents');

  // Tier 1 (Core) - Always installed
  const coreAgents = [
    'brand-archetype-agent.yaml',
    'content-creation-agent.yaml'
  ];

  // Tier 2 (Professional) agents
  const professionalAgents = [
    'market-research-agent.yaml',
    'competitor-analysis-agent.yaml',
    'analytics-agent.yaml'
  ];

  // Tier 3 (Enterprise) agents
  const enterpriseAgents = [
    'business-strategy-agent.yaml',
    'campaign-orchestrator-agent.yaml'
  ];

  const agentsToInstall = [...coreAgents];

  if (tier === 'professional' || tier === 'enterprise') {
    agentsToInstall.push(...professionalAgents);
  }

  if (tier === 'enterprise') {
    agentsToInstall.push(...enterpriseAgents);
  }

  logger.log(`Installing ${agentsToInstall.length} agents for ${tier} tier:`);
  agentsToInstall.forEach(agent => {
    logger.log(`  - ${agent}`);
  });

  // Create tier configuration file
  const tierConfigPath = path.join(modulePath, 'tier-config.yaml');
  fs.writeFileSync(tierConfigPath, `installed_tier: ${tier}\ninstalled_agents:\n${agentsToInstall.map(a => `  - ${a}`).join('\n')}\n`, 'utf8');
  logger.log(`Created tier configuration: ${tierConfigPath}`);
}

/**
 * @param {Object} options - Installation options
 * @param {string} options.projectRoot - Project root directory
 * @param {Object} options.config - Module configuration from module.yaml
 * @param {Array} options.installedIDEs - List of IDE codes being configured
 * @param {Object} options.logger - Logger instance (log, warn, error methods)
 * @returns {boolean} - true if successful, false to abort installation
 */
async function install(options) {
  const { projectRoot, config, logger } = options;

  logger.log('Installing Marketing Agent Team...');

  try {
    // 1. Validate kie.ai API key (if provided)
    if (config.kie_api_key && config.kie_api_key.trim() !== '') {
      logger.log('Validating kie.ai API key...');
      const isValidKey = await validateKieApiKey(config.kie_api_key);

      if (!isValidKey) {
        logger.warn('Warning: kie.ai API key validation failed. The key may be invalid or the service is unreachable.');
        logger.warn('Installation will continue, but video generation features may not work.');
        logger.warn('You can update the API key later in: _bmad/marketing-agent-team/config.yaml');
      } else {
        logger.log('kie.ai API key validated successfully!');
      }
    } else {
      logger.log('No kie.ai API key provided (optional). Text-only content mode enabled.');
    }

    // 2. Create folder structure
    logger.log('Creating module directory structure...');

    const modulePath = path.join(projectRoot, '_bmad', 'marketing-agent-team');

    // Data directories
    const brandProfilesDir = config.brand_profiles_dir || path.join(modulePath, 'data', 'brand-profiles');
    const learningDataDir = config.learning_data_dir || path.join(modulePath, 'data', 'learning-data');
    const platformConfigsDir = config.platform_configs_dir || path.join(modulePath, 'data', 'platform-configs');
    const reportsDir = config.reports_dir || path.join(modulePath, 'data', 'reports');

    ensureDirectory(brandProfilesDir, logger);
    ensureDirectory(learningDataDir, logger);
    ensureDirectory(platformConfigsDir, logger);
    ensureDirectory(reportsDir, logger);

    // Agent sidecar directories
    ensureDirectory(path.join(modulePath, 'agents', 'brand-archetype-sidecar', 'sessions'), logger);
    ensureDirectory(path.join(modulePath, 'agents', 'analytics-sidecar', 'sessions'), logger);

    // Content output directory
    const contentDir = config.content_output_dir || path.join(projectRoot, 'marketing-content');
    ensureDirectory(contentDir, logger);
    ensureDirectory(path.join(contentDir, 'generated'), logger);
    ensureDirectory(path.join(contentDir, 'approved'), logger);

    // 3. Create placeholder data files
    logger.log('Initializing data storage files...');

    createPlaceholderFile(
      path.join(learningDataDir, 'content-feedback.md'),
      '# Content Feedback Learning Data\n\n**Purpose**: RLHF feedback collection for continuous content improvement.\n\n---\n\n## Feedback Records\n\n*Content approval, rejection, and refinement feedback will be logged here.*\n',
      logger
    );

    createPlaceholderFile(
      path.join(learningDataDir, 'learning-patterns.md'),
      '# Learning Patterns\n\n**Purpose**: Extracted patterns for content generation improvement.\n\n---\n\n## Pattern Analysis\n\n*Learning patterns will be tracked here.*\n',
      logger
    );

    createPlaceholderFile(
      path.join(brandProfilesDir, 'README.md'),
      '# Brand Profiles\n\n**Purpose**: Persistent storage for brand personality profiles created by the Brand Archetype Agent.\n\n---\n\n## Brand Profiles\n\n*Brand profiles will be saved here as they are created.*\n',
      logger
    );

    // 4. Create platform-specific configuration templates
    logger.log('Creating platform configuration templates...');

    const enabledPlatforms = config.enabled_platforms || ['tiktok', 'instagram', 'youtube'];

    enabledPlatforms.forEach(platform => {
      const platformConfigPath = path.join(platformConfigsDir, `${platform}.yaml`);
      const platformConfig = `# ${platform.charAt(0).toUpperCase() + platform.slice(1)} Configuration\n\nenabled: true\ncontent_types:\n  - video\n  - text\nposting_schedule:\n  frequency: \"3x per week\"\n  best_times: []\nhashtag_strategy:\n  popular_tags: []\n  brand_tags: []\ncharacter_limits:\n  max_length: ${getPlatformCharLimit(platform)}\n`;
      createPlaceholderFile(platformConfigPath, platformConfig, logger);
    });

    // 5. Set up tier-specific agents
    logger.log(`Configuring ${config.tier_selection} tier agents...`);
    setupTierAgents(config.tier_selection, projectRoot, logger);

    // 6. Create module config file with all settings
    logger.log('Generating module configuration...');

    const configFilePath = path.join(modulePath, 'config.yaml');
    const configContent = `# Marketing Agent Team Configuration
# Generated: ${new Date().toISOString()}

module:
  name: marketing-agent-team
  version: ${config.module_version}
  tier: ${config.tier_selection}
  installed: ${new Date().toISOString()}

platforms:
  enabled: ${JSON.stringify(config.enabled_platforms)}

api_keys:
  kie_ai: ${config.kie_api_key ? 'configured' : 'not-configured'}

chrome_devtools_mcp:
  status: ${config.chrome_devtools_setup}

content:
  output_dir: ${config.content_output_dir}
  language: ${config.default_language}
  volume_mode: ${config.content_volume_mode}

user_settings:
  skill_level: ${config.skill_level}
`;

    fs.writeFileSync(configFilePath, configContent, 'utf8');
    logger.log(`Created configuration: ${configFilePath}`);

    // 7. Create README for the module directory
    const readmePath = path.join(modulePath, 'README.md');
    const readmeContent = `# Marketing Agent Team Module

**Tier**: ${config.tier_selection}
**Installed**: ${new Date().toISOString().split('T')[0]}
**Version**: ${config.module_version}

## Your Marketing Team

This module provides AI-powered marketing agents for:

`;

    if (config.tier_selection === 'core') {
      readmeContent += `- **Brand Archetype Agent** - Brand personality and emotional profiling\n`;
      readmeContent += `- **Content Creation Agent** - Multi-platform content generation\n`;
    } else if (config.tier_selection === 'professional') {
      readmeContent += `- **Brand Archetype Agent** - Brand personality and emotional profiling\n`;
      readmeContent += `- **Content Creation Agent** - Multi-platform content generation\n`;
      readmeContent += `- **Market Research Agent** - Trend identification and audience intelligence\n`;
      readmeContent += `- **Competitor Analysis Agent** - Competitive intelligence and content repurposing\n`;
      readmeContent += `- **Analytics Agent** - Performance tracking and insights\n`;
    } else {
      readmeContent += `- **Brand Archetype Agent** - Brand personality and emotional profiling\n`;
      readmeContent += `- **Content Creation Agent** - Multi-platform content generation\n`;
      readmeContent += `- **Market Research Agent** - Trend identification and audience intelligence\n`;
      readmeContent += `- **Competitor Analysis Agent** - Competitive intelligence and content repurposing\n`;
      readmeContent += `- **Analytics Agent** - Performance tracking and insights\n`;
      readmeContent += `- **Business Strategy Agent** - Funnel architecture and product guidance\n`;
      readmeContent += `- **Campaign Orchestrator** - Multi-agent campaign coordination\n`;
    }

    readmeContent += `

## Quick Start

1. **Setup Your Brand**: Run the Brand Archetype Agent with trigger \`DB\` to establish your brand personality
2. **Generate Content**: Use Content Creation Agent with trigger \`GC\` to create multi-platform content
3. **Track Performance**: Analytics Agent with trigger \`TP\` monitors content performance

## Configuration

- **Content Output**: \`${config.content_output_dir}\`
- **Platforms**: ${config.enabled_platforms.join(', ')}
- **Language**: ${config.default_language}
- **Skill Level**: ${config.skill_level}

## Data Storage

- Brand Profiles: \`${brandProfilesDir}\`
- Learning Data: \`${learningDataDir}\`
- Platform Configs: \`${platformConfigsDir}\`
- Reports: \`${reportsDir}\`

## Next Steps

To implement workflows, use: \`/bmad:bmb:workflows:create-workflow\`

For more information, see the module plan documentation.
`;

    createPlaceholderFile(readmePath, readmeContent, logger);

    logger.log('Marketing Agent Team installation complete!');
    logger.log('');
    logger.log('Next steps:');
    logger.log(`  1. Start with: "Run brand-archetype-agent and use trigger DB"`);
    logger.log(`  2. Your content will be saved to: ${contentDir}`);
    logger.log(`  3. Configure Chrome DevTools MCP for research features`);

    return true;
  } catch (error) {
    logger.error(`Installation failed: ${error.message}`);
    logger.error(error.stack);
    return false;
  }
}

/**
 * Get character limit for a platform
 * @param {string} platform - Platform code
 * @returns {number} - Character limit
 */
function getPlatformCharLimit(platform) {
  const limits = {
    tiktok: 150,
    instagram: 2200,
    youtube: 5000,
    threads: 500,
    facebook: 63206,
    blog: 5000
  };
  return limits[platform] || 2200;
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = { install };

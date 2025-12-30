/**
 * Marketing Agent Team Module
 *
 * A complete AI-powered marketing team for BMAD
 *
 * @module marketing-agent-team
 * @version 1.0.0
 */

module.exports = {
  name: 'marketing-agent-team',
  version: '1.0.0',
  description: 'Your Complete AI-Powered Marketing Team',

  /**
   * Module information
   */
  info: {
    agents: 7,
    workflows: 9,
    tasks: 4,
    tiers: ['Core', 'Professional', 'Enterprise']
  },

  /**
   * Agent list
   */
  agents: [
    'brand-archetype-agent',
    'content-creation-agent',
    'market-research-agent',
    'competitor-analysis-agent',
    'analytics-agent',
    'business-strategy-agent',
    'campaign-orchestrator-agent'
  ],

  /**
   * Supported platforms
   */
  platforms: [
    'tiktok',
    'instagram',
    'youtube',
    'threads',
    'facebook',
    'blog'
  ]
};

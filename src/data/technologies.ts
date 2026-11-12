import type { Dictionary } from '../i18n/en';

/**
 * Every technology shown on the site. Product names stay the same in all
 * languages; descriptive labels can be overridden per language in
 * `technologies.tech` of each dictionary.
 */
export const technologyNames = {
  uipathStudio: 'UiPath Studio',
  reframework: 'REFramework',
  orchestrator: 'Orchestrator',
  libraries: 'Reusable libraries',
  testing: 'Test automation',
  dataFabric: 'Data Fabric',
  codedWorkflows: 'Coded workflows',
  agentic: 'Agentic automation',
  webAutomation: 'Web automation',
  sharepoint: 'SharePoint',
  m365: 'Microsoft 365',
  excel: 'Excel',
  powerApps: 'Power Apps',
  powershell: 'PowerShell',
  sapGui: 'SAP GUI automation',
  sapReporting: 'SAP reporting',
  sapMasterData: 'SAP master data',
  typescript: 'TypeScript',
  csharp: 'C#',
  vbnet: 'VB.NET',
  vba: 'VBA',
  java: 'Java',
  aiDev: 'AI-assisted development',
} as const;

export type TechId = keyof typeof technologyNames;

export function techLabel(id: TechId, dict: Dictionary): string {
  const translated: Partial<Record<TechId, string>> = dict.technologies.tech;
  return translated[id] ?? technologyNames[id];
}

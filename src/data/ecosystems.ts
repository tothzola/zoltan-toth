import type { Dictionary } from '../i18n/en';
import type { TechId } from './technologies';

export type EcosystemId = keyof Dictionary['technologies']['ecosystems'];

export interface Ecosystem {
  id: EcosystemId;
  technologyIds: TechId[];
}

/**
 * The buttons of the Technologies section, in display order.
 * A technology may sit in more than one ecosystem.
 * Colours live in src/styles/global.css as --eco-<id>.
 */
export const ecosystems: Ecosystem[] = [
  {
    id: 'uipath',
    technologyIds: [
      'uipathStudio',
      'reframework',
      'orchestrator',
      'libraries',
      'testing',
      'dataFabric',
      'codedWorkflows',
      'agentic',
      'webAutomation',
    ],
  },
  { id: 'microsoft', technologyIds: ['sharepoint', 'm365', 'excel', 'powerApps', 'powershell'] },
  { id: 'sap', technologyIds: ['sapGui', 'sapReporting', 'sapMasterData'] },
  { id: 'code', technologyIds: ['typescript', 'csharp', 'vbnet', 'vba', 'java', 'powershell'] },
  { id: 'ai', technologyIds: ['agentic', 'aiDev'] },
];

/** The first ecosystem a technology belongs to; used for chip and card colours. */
export function ecosystemOf(tech: TechId): EcosystemId {
  return ecosystems.find((eco) => eco.technologyIds.includes(tech))?.id ?? 'code';
}

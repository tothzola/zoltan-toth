import type { Dictionary } from '../i18n/en';
import type { TechId } from './technologies';

export type ProjectId = keyof Dictionary['projects']['items'];

export interface Project {
  id: ProjectId;
  period: string;
  technologyIds: TechId[];
}

/**
 * Language-neutral facts about each project, newest first.
 * The first one is featured on the main line of the page workflow; the others
 * are dealt into the parallel lanes row by row, so the newest stay at the top.
 * The wording lives in src/i18n/<lang>.ts under projects.items.<id>.
 * To add a project: add an entry here, then add its text to every dictionary
 * (the build fails until all five languages have it).
 */
export const projects: Project[] = [
  {
    id: 'openItems',
    period: '2026',
    technologyIds: ['agentic', 'dataFabric', 'orchestrator', 'sapGui', 'm365', 'sharepoint'],
  },
  {
    id: 'leaseAccounting',
    period: '2023 – 2026',
    technologyIds: ['reframework', 'orchestrator', 'sapGui', 'm365', 'excel'],
  },
  {
    id: 'toolbox',
    period: '2023 – 2026',
    technologyIds: ['reframework', 'libraries', 'testing', 'uipathStudio', 'vbnet'],
  },
  {
    id: 'smallTools',
    period: '2022 – 2026',
    technologyIds: ['vba', 'powershell', 'excel', 'aiDev', 'uipathStudio'],
  },
  {
    id: 'exportPaperwork',
    period: '2023 – 2024',
    technologyIds: ['reframework', 'sapGui', 'excel', 'webAutomation'],
  },
  {
    id: 'reports',
    period: '2023 – 2024',
    technologyIds: ['sapReporting', 'excel', 'm365', 'sharepoint'],
  },
  {
    id: 'netting',
    period: '2023',
    technologyIds: ['reframework', 'sapGui', 'sharepoint', 'webAutomation'],
  },
  {
    id: 'passwordReset',
    period: '2023',
    technologyIds: ['orchestrator', 'sapGui', 'sharepoint', 'powershell'],
  },
  {
    id: 'masterData',
    period: '2023',
    technologyIds: ['reframework', 'sharepoint', 'sapMasterData', 'm365'],
  },
  {
    id: 'invoices',
    period: '2023',
    technologyIds: ['reframework', 'sapGui', 'm365'],
  },
  {
    id: 'exchangeRates',
    period: '2023',
    technologyIds: ['webAutomation', 'sapGui', 'orchestrator'],
  },
];

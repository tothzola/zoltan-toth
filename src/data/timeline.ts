import type { Dictionary } from '../i18n/en';
import type { TechId } from './technologies';

export type TimelineId = keyof Dictionary['roadmap']['items'];

export interface TimelineStop {
  id: TimelineId;
  /** Shown as-is; `null` uses the translated "early days" label. */
  when: string | null;
  technologyIds: TechId[];
  /** A step that is still ahead: drawn dashed and labelled "Next" instead of a year. */
  future?: boolean;
}

/** Roadmap stops, oldest first. Wording lives in src/i18n/<lang>.ts under roadmap.items.<id>. */
export const timeline: TimelineStop[] = [
  { id: 'spark', when: null, technologyIds: [] },
  { id: 'firstCode', when: '2016', technologyIds: ['vba', 'java'] },
  { id: 'intoAutomation', when: '2016 – 2022', technologyIds: ['uipathStudio', 'powerApps', 'sharepoint'] },
  { id: 'addIns', when: '2022', technologyIds: ['vba', 'excel'] },
  { id: 'finance', when: '2023', technologyIds: ['reframework', 'orchestrator', 'sapGui'] },
  { id: 'beyondFinance', when: '2024', technologyIds: ['libraries', 'webAutomation', 'sharepoint'] },
  { id: 'foundations', when: '2025', technologyIds: ['reframework', 'testing'] },
  { id: 'agents', when: '2026', technologyIds: ['agentic', 'codedWorkflows', 'typescript', 'aiDev'] },
  { id: 'architect', when: null, technologyIds: [], future: true },
];

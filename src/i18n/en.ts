/**
 * English is the source of truth. Every other language file is typed as
 * `Dictionary`, so a missing or misspelled key fails `npm run build`.
 */
export const en = {
  langName: 'English',
  name: 'Zoltán Tóth',
  meta: {
    title: 'Zoltán Tóth — Automation engineer',
    description:
      'Personal page of Zoltán Tóth: automation with UiPath, Microsoft, SAP and code, and the projects behind it.',
  },
  nav: {
    sections: 'Sections',
    about: 'About',
    roadmap: 'Roadmap',
    projects: 'Projects',
    technologies: 'Technologies',
    skip: 'Skip to content',
    language: 'Language',
    theme: 'Switch between light and dark theme',
  },
  /** Shown to visitors whose browser prefers this language while they read another one. */
  suggest: 'This page is also available in English.',
  dismiss: 'Dismiss',
  hero: {
    eyebrow: "Hi, I'm",
    role: 'Automation engineer',
    /** The pill for where I'm heading, shown next to the current role. */
    nextRole: 'Automation architect',
    nowLabel: 'Now',
    nextLabel: 'Next',
    tagline:
      'I teach software robots to do the boring work — and lately, AI agents to work beside them.',
    ctaProjects: 'See what I built',
    ctaContact: 'Get in touch',
  },
  about: {
    title: 'About me',
    lead: 'I like it when computers do the dull parts, so people can do the interesting ones.',
    paragraphs: [
      "Technology has fascinated me for as long as I can remember. I've always wanted to know how things work, and then make them work a little better.",
      "I wrote my first lines of code around 2016, in VBA and Java. One spreadsheet that suddenly did an hour of work in a second was all it took: I was hooked on automation. Since then I've been building software robots and business apps with UiPath, Power Apps, SharePoint and TypeScript.",
      "At home I'm a husband and a father of two, which turns out to be the most demanding project of all:",
    ],
    photoAlt: 'Portrait of Zoltán Tóth',
    photoPlaceholder: 'Photo coming soon',
    family: {
      title: 'Project: Family',
      rows: [
        { label: 'Team', value: 'One wife, two kids, one dad' },
        { label: 'Product owner', value: 'My wife. The backlog is prioritised, thank you.' },
        { label: 'Stakeholders', value: 'Two kids with strong opinions and veto rights' },
        { label: 'Requirements', value: 'Change daily, usually at breakfast' },
        { label: 'Deadlines', value: 'Bedtime. A hard deadline, renegotiated every evening' },
        { label: 'Budget', value: 'Over, every year. Never regretted' },
      ],
      statusLabel: 'Status',
      status: "Green. Best project I've ever been on",
    },
  },
  roadmap: {
    title: 'Roadmap',
    intro: 'How a curious kid ended up building robots for a living.',
    early: 'Early days',
    /** Label of a step that is still ahead (shown instead of a year). */
    next: 'Next',
    items: {
      spark: {
        title: 'Curiosity first',
        text: 'Long before I could program, I wanted to know how technology works. That curiosity never went away; it just found better tools.',
      },
      firstCode: {
        title: 'First lines of code',
        text: 'VBA to tame spreadsheets, Java to learn how real programs are built. The moment a macro finished an hour of work in a second, I knew what I wanted to do.',
      },
      intoAutomation: {
        title: 'From macros to automation',
        text: 'Scripts grew into solutions: software robots with UiPath, business apps with Power Apps, and SharePoint as the place where the data lives.',
      },
      addIns: {
        title: 'Tools for other people',
        text: 'Excel add-ins for automation and reporting: my first tools built for colleagues to use every day, not just for me.',
      },
      finance: {
        title: 'Robots for finance',
        text: 'A first wave of automations around accounting and treasury: lease accounting, reconciliations, invoice checks, exchange rates.',
      },
      beyondFinance: {
        title: 'Beyond finance',
        text: 'Export paperwork, compliance reports and quality checks, plus shared libraries so that every new robot builds on tested parts.',
      },
      foundations: {
        title: 'Building the foundations',
        text: 'Platform upgrades across all running robots, and my own framework templates with tests built in.',
      },
      agents: {
        title: 'Robots meet AI agents',
        text: 'Agentic automation, where an AI agent decides and robots execute. Alongside it: coded workflows in C#, TypeScript, and AI-assisted development as an everyday tool.',
      },
      architect: {
        title: 'Automation architect',
        text: "Where I'm heading: from building individual robots to designing how whole automation landscapes fit together.",
      },
    },
  },
  projects: {
    title: 'Projects',
    intro: 'What I built and why it mattered. Names and details stay with the people I built them for.',
    purposeLabel: 'What it does',
    valueLabel: 'Why it mattered',
    items: {
      openItems: {
        title: 'Robots and an AI agent clearing the books',
        purpose:
          'Goods arrive without an invoice, invoices arrive without goods, and the open items pile up. This solution collects them, classifies each case by business rules, contacts the right person and clears the item, with an AI agent coordinating a team of robots.',
        value:
          'A month-end backlog that nobody enjoys becomes a steady flow, and people only see the cases that need judgement.',
      },
      leaseAccounting: {
        title: 'Lease accounting, automated',
        purpose:
          'Picks up new lease contracts as they arrive by email, warns before contracts expire, and keeps the accounting and consolidation systems in sync, validating the data on the way.',
        value:
          'A regulated process (IFRS 16) runs the same way every time and leaves a trail an auditor can follow.',
      },
      netting: {
        title: 'Intercompany netting and reconciliation',
        purpose:
          'Runs the weekly netting cycle between group companies: extracts receivables and payables, reconciles balances and delivers the files to the treasury platform.',
        value: 'A weekly task with fixed deadlines no longer depends on who is in the office.',
      },
      passwordReset: {
        title: 'Self-service password reset',
        purpose:
          'People who are locked out of the ERP system request a reset themselves; a robot checks the request, unlocks the account and gets them back to work.',
        value: 'No waiting for the helpdesk, and the helpdesk gets its time back for real problems.',
      },
      masterData: {
        title: 'Customer records from a simple request list',
        purpose:
          'A request entered in a SharePoint list becomes a complete, consistent customer record in the ERP system, created or updated by a robot.',
        value: 'New customers can be served sooner, and every record follows the same rules.',
      },
      invoices: {
        title: 'Invoice checking and matching',
        purpose:
          'Checks that order references, materials, quantities and prices on invoices agree with the orders behind them, and matches intercompany invoices against customer invoices.',
        value: 'Mismatches are caught before they are booked, not weeks later during closing.',
      },
      exchangeRates: {
        title: 'Statutory exchange rates',
        purpose:
          'Collects the exchange rates that several countries legally require from their official sources, enters them into the ERP system and keeps evidence of every value.',
        value: 'Order processing, closing and tax reporting all depend on these rates being right and on time.',
      },
      exportPaperwork: {
        title: 'Export paperwork',
        purpose:
          'Prepares vessel booking forms and customs declarations for outbound shipments, and assembles monthly proof-of-export certificates using carrier tracking portals.',
        value: 'Shipments move faster, with fewer errors and far less copying between systems.',
      },
      reports: {
        title: 'Reports that send themselves',
        purpose:
          'Receivables aging reports, scheduled report distribution and daily quality checks: extracted, filtered and delivered to the people who need them.',
        value: 'The right numbers arrive on time, and nobody spends the morning exporting spreadsheets.',
      },
      toolbox: {
        title: 'My automation toolbox',
        purpose:
          'My own framework templates for queue-based and linear processes, a reusable library for ERP login, SharePoint and email, built-in test cases, and a kit of design-document templates.',
        value: 'Every new robot starts from proven building blocks instead of a blank page.',
      },
      smallTools: {
        title: 'Small tools that save big time',
        purpose:
          'A generator that writes design documentation straight from workflow code, an analyser that turns screenshots of failed runs into a report, Excel add-ins, and a one-click updater for developer tooling.',
        value: 'Documentation stays in step with the code, and fewer mornings are lost to setup.',
      },
    },
  },
  technologies: {
    title: 'Technologies',
    intro: "Pick an ecosystem to see what's inside and what I built with it.",
    techHeading: 'In the box',
    projectsHeading: 'Built with it',
    filterHint: 'Tap a technology to narrow the projects.',
    empty: 'No public project story for this one yet. Ask me about it.',
    ecosystems: {
      uipath: {
        name: 'UiPath',
        blurb: 'Where the robots live: from the first workflow to a whole crew running in production.',
      },
      microsoft: {
        name: 'Microsoft',
        blurb: "The office everyone already works in, so that's where automation should meet them.",
      },
      sap: {
        name: 'SAP',
        blurb: 'The system of record. Robots are remarkably patient with it.',
      },
      code: {
        name: 'Code',
        blurb: 'When drag-and-drop runs out, I write it.',
      },
      ai: {
        name: 'AI',
        blurb: 'The newest colleague on the team: decides, drafts and assists.',
      },
    },
    /** Descriptive technology labels. Product names are not translated. */
    tech: {
      libraries: 'Reusable libraries',
      testing: 'Test automation',
      codedWorkflows: 'Coded workflows',
      agentic: 'Agentic automation',
      webAutomation: 'Web automation',
      sapGui: 'SAP GUI automation',
      sapReporting: 'SAP reporting',
      sapMasterData: 'SAP master data',
      aiDev: 'AI-assisted development',
    },
  },
  /** Labels on the page workflow that runs from the hero to the closing section. */
  flow: {
    start: 'Start',
    end: 'End',
  },
  footer: {
    title: "Let's talk",
    text: "Got a process that nobody wants to do by hand? I'd like to hear about it.",
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
    newTab: 'opens in a new tab',
    placeholder: 'Link coming soon',
    built: 'Built with Astro. No cookies, no tracking.',
    updated: 'Last updated',
  },
};

export type Dictionary = typeof en;

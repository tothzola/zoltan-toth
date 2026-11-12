import type { Dictionary } from './en';

export const de: Dictionary = {
  langName: 'Deutsch',
  name: 'Zoltán Tóth',
  meta: {
    title: 'Zoltán Tóth — Automatisierungsentwickler',
    description:
      'Persönliche Seite von Zoltán Tóth: Automatisierung mit UiPath, Microsoft, SAP und Code – und die Projekte dahinter.',
  },
  nav: {
    sections: 'Abschnitte',
    about: 'Über mich',
    roadmap: 'Werdegang',
    projects: 'Projekte',
    technologies: 'Technologien',
    skip: 'Zum Inhalt springen',
    language: 'Sprache',
    theme: 'Zwischen hellem und dunklem Design wechseln',
  },
  suggest: 'Diese Seite gibt es auch auf Deutsch.',
  dismiss: 'Schließen',
  hero: {
    eyebrow: 'Hallo, ich bin',
    role: 'Automatisierungsentwickler',
    nextRole: 'Automatisierungsarchitekt',
    nowLabel: 'Heute',
    nextLabel: 'Nächstes Ziel',
    tagline:
      'Ich bringe Software-Robotern bei, die langweilige Arbeit zu erledigen – und neuerdings KI-Agenten, an ihrer Seite zu arbeiten.',
    ctaProjects: 'Meine Projekte ansehen',
    ctaContact: 'Kontakt aufnehmen',
  },
  about: {
    title: 'Über mich',
    lead: 'Ich mag es, wenn Computer den eintönigen Teil übernehmen, damit Menschen sich um den spannenden kümmern können.',
    paragraphs: [
      'Technik fasziniert mich, seit ich denken kann. Ich wollte immer wissen, wie Dinge funktionieren – und sie dann ein bisschen besser machen.',
      'Meine ersten Codezeilen habe ich um 2016 geschrieben, in VBA und Java. Eine einzige Tabelle, die plötzlich die Arbeit einer Stunde in einer Sekunde erledigte, hat gereicht: Die Automatisierung hat mich nicht mehr losgelassen. Seitdem baue ich Software-Roboter und Geschäftsanwendungen mit UiPath, Power Apps, SharePoint und TypeScript.',
      'Zu Hause bin ich Ehemann und Vater von zwei Kindern – wie sich herausstellt, das anspruchsvollste Projekt von allen:',
    ],
    photoAlt: 'Porträt von Zoltán Tóth',
    photoPlaceholder: 'Foto folgt',
    family: {
      title: 'Projekt: Familie',
      rows: [
        { label: 'Team', value: 'Eine Ehefrau, zwei Kinder, ein Papa' },
        { label: 'Product Owner', value: 'Meine Frau. Das Backlog ist priorisiert, danke.' },
        { label: 'Stakeholder', value: 'Zwei Kinder mit klarer Meinung und Vetorecht' },
        { label: 'Anforderungen', value: 'Ändern sich täglich, meist beim Frühstück' },
        { label: 'Deadlines', value: 'Schlafenszeit. Harte Deadline, jeden Abend neu verhandelt' },
        { label: 'Budget', value: 'Jedes Jahr überzogen. Nie bereut' },
      ],
      statusLabel: 'Status',
      status: 'Grün. Das beste Projekt, an dem ich je mitgearbeitet habe',
    },
  },
  roadmap: {
    title: 'Werdegang',
    intro: 'Wie aus einem neugierigen Kind jemand wurde, der beruflich Roboter baut.',
    early: 'Die Anfänge',
    next: 'Als Nächstes',
    items: {
      spark: {
        title: 'Am Anfang war die Neugier',
        text: 'Lange bevor ich programmieren konnte, wollte ich wissen, wie Technik funktioniert. Diese Neugier ist geblieben – sie hat nur bessere Werkzeuge gefunden.',
      },
      firstCode: {
        title: 'Die ersten Codezeilen',
        text: 'VBA, um Tabellen zu bändigen, Java, um zu lernen, wie richtige Programme entstehen. Als ein Makro die Arbeit einer Stunde in einer Sekunde erledigte, wusste ich, was ich machen will.',
      },
      intoAutomation: {
        title: 'Vom Makro zur Automatisierung',
        text: 'Aus Skripten wurden Lösungen: Software-Roboter mit UiPath, Geschäftsanwendungen mit Power Apps und SharePoint als Ort, an dem die Daten liegen.',
      },
      addIns: {
        title: 'Werkzeuge für andere',
        text: 'Excel-Add-ins für Automatisierung und Reporting: meine ersten Werkzeuge, die Kolleginnen und Kollegen jeden Tag nutzen – nicht nur ich.',
      },
      finance: {
        title: 'Roboter für das Finanzwesen',
        text: 'Eine erste Welle von Automatisierungen rund um Buchhaltung und Treasury: Leasingbilanzierung, Abstimmungen, Rechnungsprüfung, Wechselkurse.',
      },
      beyondFinance: {
        title: 'Über das Finanzwesen hinaus',
        text: 'Exportdokumente, Compliance-Berichte und Qualitätsprüfungen – dazu gemeinsame Bibliotheken, damit jeder neue Roboter auf getesteten Bausteinen aufbaut.',
      },
      foundations: {
        title: 'Das Fundament',
        text: 'Plattform-Upgrades für alle laufenden Roboter und eigene Framework-Vorlagen mit eingebauten Tests.',
      },
      agents: {
        title: 'Roboter treffen KI-Agenten',
        text: 'Agentische Automatisierung: Ein KI-Agent entscheidet, Roboter führen aus. Dazu Coded Workflows in C#, TypeScript und KI-gestützte Entwicklung als tägliches Werkzeug.',
      },
      architect: {
        title: 'Automatisierungsarchitekt',
        text: 'Wohin die Reise geht: vom Bauen einzelner Roboter zum Entwurf dessen, wie ganze Automatisierungslandschaften zusammenspielen.',
      },
    },
  },
  projects: {
    title: 'Projekte',
    intro: 'Was ich gebaut habe und warum es wichtig war. Namen und Details bleiben bei denen, für die ich es gebaut habe.',
    purposeLabel: 'Was es macht',
    valueLabel: 'Warum es wichtig war',
    items: {
      openItems: {
        title: 'Roboter und ein KI-Agent räumen die Bücher auf',
        purpose:
          'Ware kommt ohne Rechnung, Rechnungen kommen ohne Ware, und die offenen Posten stapeln sich. Diese Lösung sammelt sie ein, ordnet jeden Fall nach Geschäftsregeln ein, kontaktiert die richtige Person und gleicht den Posten aus – ein KI-Agent koordiniert dabei ein Team von Robotern.',
        value:
          'Aus einem Rückstau zum Monatsende, den niemand mag, wird ein stetiger Fluss – und Menschen sehen nur noch die Fälle, die Urteilsvermögen brauchen.',
      },
      leaseAccounting: {
        title: 'Leasingbilanzierung, automatisiert',
        purpose:
          'Nimmt neue Leasingverträge entgegen, sobald sie per E-Mail eintreffen, warnt vor auslaufenden Verträgen und hält Buchhaltungs- und Konsolidierungssystem synchron – mit Datenprüfung unterwegs.',
        value:
          'Ein regulierter Prozess (IFRS 16) läuft jedes Mal gleich ab und hinterlässt eine Spur, der ein Prüfer folgen kann.',
      },
      netting: {
        title: 'Konzerninternes Netting und Abstimmung',
        purpose:
          'Führt den wöchentlichen Netting-Lauf zwischen Konzerngesellschaften durch: zieht Forderungen und Verbindlichkeiten, stimmt Salden ab und liefert die Dateien an die Treasury-Plattform.',
        value: 'Eine wöchentliche Aufgabe mit festen Fristen hängt nicht mehr davon ab, wer gerade im Büro ist.',
      },
      passwordReset: {
        title: 'Passwort-Reset zur Selbstbedienung',
        purpose:
          'Wer aus dem ERP-System ausgesperrt ist, fordert das Zurücksetzen selbst an; ein Roboter prüft die Anfrage, entsperrt das Konto und bringt die Person zurück an die Arbeit.',
        value: 'Kein Warten auf den Helpdesk – und der Helpdesk hat wieder Zeit für echte Probleme.',
      },
      masterData: {
        title: 'Kundenstammdaten aus einer einfachen Anfrageliste',
        purpose:
          'Aus einer Anfrage in einer SharePoint-Liste wird ein vollständiger, einheitlicher Kundenstammsatz im ERP-System – angelegt oder aktualisiert von einem Roboter.',
        value: 'Neue Kunden können schneller bedient werden, und jeder Datensatz folgt denselben Regeln.',
      },
      invoices: {
        title: 'Rechnungsprüfung und -abgleich',
        purpose:
          'Prüft, ob Bestellbezug, Materialien, Mengen und Preise auf Rechnungen zu den zugehörigen Bestellungen passen, und gleicht konzerninterne Rechnungen mit Kundenrechnungen ab.',
        value: 'Abweichungen fallen auf, bevor gebucht wird – nicht Wochen später beim Abschluss.',
      },
      exchangeRates: {
        title: 'Gesetzliche Wechselkurse',
        purpose:
          'Holt die Wechselkurse, die mehrere Länder gesetzlich vorschreiben, aus den offiziellen Quellen, trägt sie ins ERP-System ein und sichert zu jedem Wert einen Nachweis.',
        value: 'Auftragsabwicklung, Abschluss und Steuermeldungen hängen davon ab, dass diese Kurse stimmen und pünktlich da sind.',
      },
      exportPaperwork: {
        title: 'Exportdokumente',
        purpose:
          'Bereitet Schiffsbuchungsformulare und Zollanmeldungen für ausgehende Sendungen vor und stellt monatlich Ausfuhrnachweise mithilfe der Tracking-Portale der Spediteure zusammen.',
        value: 'Sendungen gehen schneller raus – mit weniger Fehlern und deutlich weniger Abtippen zwischen Systemen.',
      },
      reports: {
        title: 'Berichte, die sich selbst verschicken',
        purpose:
          'Fälligkeitsberichte für Forderungen, geplanter Berichtsversand und tägliche Qualitätsprüfungen: extrahiert, gefiltert und an die zugestellt, die sie brauchen.',
        value: 'Die richtigen Zahlen kommen pünktlich an, und niemand verbringt den Vormittag mit dem Exportieren von Tabellen.',
      },
      toolbox: {
        title: 'Mein Automatisierungs-Werkzeugkasten',
        purpose:
          'Eigene Framework-Vorlagen für warteschlangenbasierte und lineare Prozesse, eine wiederverwendbare Bibliothek für ERP-Login, SharePoint und E-Mail, eingebaute Testfälle und ein Satz Vorlagen für Designdokumente.',
        value: 'Jeder neue Roboter startet mit bewährten Bausteinen statt auf einem leeren Blatt.',
      },
      smallTools: {
        title: 'Kleine Werkzeuge, die viel Zeit sparen',
        purpose:
          'Ein Generator, der Designdokumentation direkt aus dem Workflow-Code schreibt, ein Analysewerkzeug, das aus Screenshots fehlgeschlagener Läufe einen Bericht macht, Excel-Add-ins und ein Ein-Klick-Updater für Entwicklerwerkzeuge.',
        value: 'Die Dokumentation hält mit dem Code Schritt, und weniger Vormittage gehen für das Einrichten verloren.',
      },
    },
  },
  technologies: {
    title: 'Technologien',
    intro: 'Wähle ein Ökosystem und sieh, was drinsteckt und was ich damit gebaut habe.',
    techHeading: 'Was drinsteckt',
    projectsHeading: 'Damit gebaut',
    filterHint: 'Tippe auf eine Technologie, um die Projekte einzugrenzen.',
    empty: 'Dazu gibt es noch keine öffentliche Projektgeschichte. Frag mich einfach.',
    ecosystems: {
      uipath: {
        name: 'UiPath',
        blurb: 'Hier wohnen die Roboter: vom ersten Workflow bis zur ganzen Mannschaft im Produktivbetrieb.',
      },
      microsoft: {
        name: 'Microsoft',
        blurb: 'Das Büro, in dem ohnehin alle arbeiten – also sollte Automatisierung sie genau dort abholen.',
      },
      sap: {
        name: 'SAP',
        blurb: 'Das führende System. Roboter haben damit erstaunlich viel Geduld.',
      },
      code: {
        name: 'Code',
        blurb: 'Wenn Drag-and-drop nicht mehr reicht, schreibe ich es selbst.',
      },
      ai: {
        name: 'KI',
        blurb: 'Der neueste Kollege im Team: entscheidet, entwirft und unterstützt.',
      },
    },
    tech: {
      libraries: 'Wiederverwendbare Bibliotheken',
      testing: 'Testautomatisierung',
      codedWorkflows: 'Coded Workflows',
      agentic: 'Agentische Automatisierung',
      webAutomation: 'Web-Automatisierung',
      sapGui: 'SAP-GUI-Automatisierung',
      sapReporting: 'SAP-Reporting',
      sapMasterData: 'SAP-Stammdaten',
      aiDev: 'KI-gestützte Entwicklung',
    },
  },
  flow: {
    start: 'Start',
    end: 'Ende',
  },
  footer: {
    title: 'Lass uns reden',
    text: 'Gibt es einen Prozess, den niemand von Hand machen will? Ich höre gern davon.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'E-Mail',
    newTab: 'öffnet in neuem Tab',
    placeholder: 'Link folgt',
    built: 'Gebaut mit Astro. Keine Cookies, kein Tracking.',
    updated: 'Zuletzt aktualisiert',
  },
};

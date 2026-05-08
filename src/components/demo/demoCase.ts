// Üks tõe-allikas demo Nikita kohta. Muuda siit, kui soovid teist juhtumit.

export const DEMO_CASE = {
  student: {
    name: "Nikita Tamm",
    short: "Nikita T.",
    initials: "NT",
    grade: "8.A",
    school: "Mai Kool",
  },
  activity: {
    kind: "Spordikool",
    name: "Jalgpall — FC Levadia U16",
    coach: "Mart Kask",
    coachLicense: "UEFA B litsents",
    frequency: "3× nädalas",
    duration: "à 90 min",
    period: "Sept 2025 – veebr 2026",
    language: "Eesti keel",
  },
  request: {
    applicant: "Lapsevanem",
    intent:
      "Hinnata arvestamist kehalises kasvatuses ja eesti keele praktilise kasutuse toetava tõendina",
  },
  subjects: {
    pe: {
      name: "Kehaline kasvatus",
      outcomes: [
        "regulaarne liikumine",
        "vastupidavus",
        "koostöö",
        "enesejuhtimine",
      ],
    },
    estonian: {
      name: "Eesti keele praktiline kasutus",
      outcomes: [
        "juhiste mõistmine",
        "suhtlus eestikeelses keskkonnas",
        "sporditerminoloogia",
        "lühike eneseanalüüs",
      ],
    },
  },
  evidence: [
    { id: "coach-confirm", label: "Treeneri kinnitus", status: "ok" },
    { id: "volume", label: "Treeningmaht", status: "ok" },
    { id: "schedule", label: "Treeninggraafik", status: "ok" },
    { id: "matches", label: "Võistlusinfo", status: "ok" },
    { id: "language", label: "Tegevuse keel — kinnitatud", status: "ok" },
    { id: "self", label: "Õppija eneseanalüüs", status: "missing" },
    { id: "talk", label: "Õpetaja lühivestlus", status: "suggested" },
  ] as const,
  aiAnalysis: {
    strong: [
      "regulaarne liikumisharjumus",
      "vastupidavuse arendamine",
      "juhendatud treening",
    ],
    partial: [
      "koostöö",
      "enesejuhtimine",
      "eestikeelne suhtlus",
    ],
    missing: [
      "õppija lühike eneseanalüüs",
      "õpetaja lühivestlus",
    ],
  },
  // Koolijuhi koondvaade — näidisandmed
  principalSummary: {
    similarRequests: 12,
    subjects: ["Kehaline kasvatus", "Muusika", "Eesti keel (funkts.)"],
    needsMoreEvidence: 4,
    estimatedTimeSavedHoursPerMonth: 6,
    coverage: [
      { subject: "Kehaline kasvatus", students: 12, of: 15 },
      { subject: "Muusika", students: 7, of: 15 },
      { subject: "Kunst", students: 5, of: 15 },
      { subject: "Eesti keel (funkts.)", students: 10, of: 15 },
    ],
    scheduleHints: [
      {
        subject: "Kehaline kasvatus",
        grade: "8.A",
        students: ["Nikita T.", "Mari L.", "Karl K."],
        suggestion: "Paigutada 1. või 7. tundi",
      },
      {
        subject: "Muusika",
        grade: "6.B",
        students: ["Liisa P.", "Anna T.", "Robin M.", "Jaan L."],
        suggestion: "Ühine projekt-tund kvartali lõpus",
      },
    ],
    // Laiendatud koondmõõdikud
    metrics: {
      totalRequests: 28,
      needsTeacherDecision: 11,
      needsPrincipalApproval: 6,
      needsMoreEvidence: 4,
      repeatingSubjects: 4,
      repeatingHobbySchools: 7,
      hobbyLinkedPerClass: [
        { group: "8.A", linked: 14, of: 22 },
        { group: "6.B", linked: 11, of: 21 },
        { group: "5.C", linked: 9, of: 19 },
        { group: "9. lend", linked: 38, of: 64 },
      ],
      teacherPrepHoursSavedPerMonth: 18,
      scheduleReshuffleSlots: 5,
    },
    topHobbySchools: [
      { name: "FC Levadia U16", students: 6, subjects: ["Kehaline kasvatus"] },
      { name: "Tallinna Muusikakool", students: 5, subjects: ["Muusika"] },
      { name: "Kunstikool Vaba Joon", students: 4, subjects: ["Kunst"] },
      { name: "Ujumisklubi Aurum", students: 4, subjects: ["Kehaline kasvatus"] },
    ],
    kovRepeatingCases: [
      { pattern: "Jalgpalli treening → kehaline kasvatus", schools: 5, students: 34 },
      { pattern: "Muusikakool → muusika", schools: 4, students: 22 },
      { pattern: "Kunstikool → kunst", schools: 3, students: 14 },
    ],
  },
} as const;

export type EvidenceStatus = "ok" | "missing" | "suggested";

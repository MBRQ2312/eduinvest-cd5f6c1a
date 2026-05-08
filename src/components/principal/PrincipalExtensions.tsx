import {
  ShieldCheck, Award, FileCheck, MessageSquare, Database,
  AlertTriangle, CalendarRange, CheckCircle2, Layers, Heart,
} from "lucide-react";

/* ===== Standardne treeneri/huvikooli tõend ===== */
const StandardEvidence = () => (
  <div className="rounded-2xl border border-border bg-card p-5">
    <div className="flex items-center gap-2 mb-3">
      <FileCheck className="size-5 text-primary" />
      <h3 className="font-semibold tracking-tight">Standardne treeneri/huvikooli tõend</h3>
    </div>
    <p className="text-sm text-muted-foreground mb-4">
      Üks kindel vorm — sama struktuur iga partneri jaoks. Kool ei pea iga juhtumi jaoks
      eraldi tõlgendama.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
      {[
        "Õppija nimi & kool",
        "Tegevus & maht (h/näd)",
        "Toimumise periood",
        "Õppekeel",
        "Tegevuse sisu (õpitulemused)",
        "Osalemise määr (nt 32/38)",
        "Juhendaja kvalifikatsioon",
        "Asutuse EHIS-tunnus",
        "Allkiri & kuupäev",
      ].map((f) => (
        <div key={f} className="rounded-lg bg-muted/40 px-3 py-2 flex items-center gap-1.5">
          <CheckCircle2 className="size-3 text-success shrink-0" /> {f}
        </div>
      ))}
    </div>
  </div>
);

/* ===== Huvikooli kvaliteedimärk ===== */
const QualityMark = () => (
  <div className="rounded-2xl border-2 border-accent/40 bg-accent-subtle/30 p-5">
    <div className="flex items-center gap-2 mb-3">
      <Award className="size-5 text-accent" />
      <h3 className="font-semibold tracking-tight">Huvikooli kvaliteedimärk</h3>
    </div>
    <p className="text-sm text-foreground/75 mb-4">
      Märk näitab koolile, et huvikooli tõendid vastavad standardile ja on koolide vahel
      võrreldavad. Kvalifitseerimine: EHIS-registreering, juhendaja kvalifikatsioon,
      õpitulemuste seos õppekavaga, korduv tõestamise praktika.
    </p>
    <div className="flex flex-wrap gap-2">
      {[
        { l: "Hõbe", d: "Standardne tõend" },
        { l: "Kuld", d: "+ õppekava seos" },
        { l: "Plaatina", d: "+ regulaarne audit" },
      ].map((b) => (
        <div key={b.l} className="rounded-xl bg-card border border-border-strong px-3 py-2">
          <div className="text-xs font-bold tracking-wider uppercase text-accent">{b.l}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{b.d}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ===== Õpetaja otsuse kontrollküsimused ===== */
const TeacherChecklist = () => (
  <div className="rounded-2xl border border-border bg-card p-5">
    <div className="flex items-center gap-2 mb-3">
      <ShieldCheck className="size-5 text-success" />
      <h3 className="font-semibold tracking-tight">Õpetaja otsuse kontrollküsimused</h3>
    </div>
    <ol className="space-y-2 text-sm text-foreground/85">
      {[
        "Kas tõendid katavad nõutavad õpitulemused?",
        "Kas tegevuse sisu vastab õppeaine eesmärgile?",
        "Kas õppija osalemise määr on piisav (≥80%)?",
        "Kas juhendaja kvalifikatsioon on asjakohane?",
        "Kas on vaja täiendavat tõestust (refleksioon, töö, esitlus)?",
        "Kas otsus on kooli arvestamise hea tavaga kooskõlas?",
      ].map((q, i) => (
        <li key={i} className="flex gap-2">
          <span className="size-5 rounded-full bg-success-subtle text-success text-xs font-bold flex items-center justify-center shrink-0">
            {i + 1}
          </span>
          <span>{q}</span>
        </li>
      ))}
    </ol>
  </div>
);

/* ===== Perele arusaadav selgitus ===== */
const FamilyExplanation = () => (
  <div className="rounded-2xl border-2 border-primary/30 bg-primary-subtle/30 p-5">
    <div className="flex items-center gap-2 mb-3">
      <Heart className="size-5 text-primary" />
      <h3 className="font-semibold tracking-tight">Perele arusaadav selgitus</h3>
    </div>
    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Mustand</p>
    <div className="rounded-xl bg-card border border-border p-4 text-sm leading-relaxed text-foreground/85 italic">
      „Tere! Vaatasime üle Nikita jalgpallitreeningute tõendi (32/38 trenni, eesti keeles).
      Otsustasime <strong className="not-italic">arvestada osaliselt</strong> kehalise kasvatuse õpitulemuste
      täitmisel. Eesti keeles peame veel täiendavalt nägema lühikest kirjalikku refleksiooni.
      See ei vabasta tunnist, kuid tähendab, et õpetaja arvestab praktilist kogemust hindamisel."
    </div>
    <p className="text-xs text-muted-foreground mt-3">
      AI koostab mustandi. Õpetaja kontrollib ja saadab.
    </p>
  </div>
);

/* ===== Mock eKool/Stuudium/EHIS/ARNO kaart ===== */
const IntegrationMap = () => {
  const rows = [
    { sys: "EHIS", what: "Huvikooli registreering, juhendaja kvalifikatsioon", status: "valideerime" },
    { sys: "eKool", what: "Õppekava, hinded, tunniplaan", status: "mock" },
    { sys: "Stuudium", what: "Õppekava, hinded, tunniplaan", status: "mock" },
    { sys: "ARNO", what: "Õppija ja huvihariduse seos", status: "mock" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-3">
        <Layers className="size-5 text-primary" />
        <h3 className="font-semibold tracking-tight">Integratsioonid (mock häkil)</h3>
      </div>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-3 py-2">Süsteem</th>
              <th className="text-left px-3 py-2">Mida toob</th>
              <th className="text-left px-3 py-2">Staatus</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.sys} className="border-t border-border">
                <td className="px-3 py-2 font-semibold">{r.sys}</td>
                <td className="px-3 py-2 text-foreground/80">{r.what}</td>
                <td className="px-3 py-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-warning-subtle text-warning">
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Häkil ei väida, et liidestused on valmis. Eesmärk on tõestada üks otsustusvoog lõpuni.
      </p>
    </div>
  );
};

/* ===== Tehniline ausus ===== */
const TechnicalHonesty = () => (
  <div className="rounded-2xl border-2 border-warning/40 bg-warning-subtle/40 p-5">
    <div className="flex items-center gap-2 mb-3">
      <AlertTriangle className="size-5 text-warning" />
      <h3 className="font-semibold tracking-tight">Tehniline ausus</h3>
    </div>
    <ul className="space-y-1.5 text-sm text-foreground/85">
      <li>• AI ei otsusta. Piiripealsed juhtumid lähevad alati inimesele.</li>
      <li>• Häkil kasutame mock-andmeid. eKool/Stuudium ei ole liidestatud.</li>
      <li>• Mõju ajale ja rahale on potentsiaalne ressursiekvivalent — mõõdame piloodis.</li>
      <li>• Andmemudeli ja integratsioonid valideerime järgmises etapis.</li>
      <li>• Iga otsus on auditeeritav: tõendid, seosed, kontrollküsimused, allkiri.</li>
    </ul>
  </div>
);

/* ===== Andmemudeli kaart ===== */
const DataModel = () => (
  <div className="rounded-2xl border border-border bg-card p-5">
    <div className="flex items-center gap-2 mb-3">
      <Database className="size-5 text-primary" />
      <h3 className="font-semibold tracking-tight">Andmemudel (lihtsustatud)</h3>
    </div>
    <pre className="text-[11px] sm:text-xs leading-relaxed font-mono bg-muted/40 rounded-xl p-4 overflow-x-auto text-foreground/85">
{`Õppija ──► Taotlus ──► Tõend(id) ──► AI eelanalüüs ──► Õpetaja otsus
   │             │            │              │                  │
   │             │            ▼              ▼                  ▼
   │             │      Huvikool        Õppekava-seos     Selgitus perele
   │             │      (EHIS)          (kattuvus %)      (auditeeritav)
   │             ▼
   └──► Klass / lend ──► Koolijuhi koondvaade ──► KOV koondraport`}
    </pre>
  </div>
);

/* ===== Riskid ===== */
const Risks = () => {
  const risks = [
    { r: "Õpetajad tajuvad AI-d otsustajana", m: "Kontrollküsimused + selge UI: AI = mustand, kool = otsus" },
    { r: "Pere ootab automaatset arvestamist", m: "Selgitusmustand selgitab tingimused ja piirid" },
    { r: "Huvikoolide tõendid on ebaühtlased", m: "Standardvorm + kvaliteedimärk" },
    { r: "Liidestused viibivad", m: "Töötab käsitsi sisestusega; integratsioonid faasiti" },
    { r: "Andmekaitse ja ligipääs", m: "Roll-põhine vaade, anonüümne agregaat KOV-ile" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="size-5 text-orange-600" />
        <h3 className="font-semibold tracking-tight">Riskid ja maandamine</h3>
      </div>
      <div className="space-y-2">
        {risks.map((x) => (
          <div key={x.r} className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-2 rounded-xl bg-muted/30 p-3 text-sm">
            <div className="font-medium text-foreground">{x.r}</div>
            <div className="text-foreground/75">→ {x.m}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ===== Septembrini plaan + pilootasutused + mõõdikud ===== */
const PlanAndPilots = () => (
  <div className="rounded-2xl border-2 border-success/30 bg-success-subtle/30 p-5">
    <div className="flex items-center gap-2 mb-3">
      <CalendarRange className="size-5 text-success" />
      <h3 className="font-semibold tracking-tight">Tegevusplaan septembrini</h3>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Etapid</p>
        <ul className="space-y-1.5 text-sm text-foreground/85">
          <li>• <strong>Mai–juuni:</strong> 2 pilootasutust kinnitatud</li>
          <li>• <strong>Juuni–juuli:</strong> andmemudel + EHIS valideerimine</li>
          <li>• <strong>August:</strong> eKool/Stuudium liidese prototüüp</li>
          <li>• <strong>September:</strong> päris otsustusvoog ühel ainel, ühes klassis</li>
        </ul>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Mida mõõdame</p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Menetlusaeg",
            "Õpetaja eeltöö",
            "Pere selgituse arusaadavus",
            "Koolijuhi koondvaate väärtus",
            "Maksevalmidus",
          ].map((m) => (
            <span key={m} className="text-xs px-2.5 py-1 rounded-md bg-card border border-border-strong font-medium">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const PrincipalExtensions = () => (
  <div className="space-y-5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <StandardEvidence />
      <QualityMark />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <TeacherChecklist />
      <FamilyExplanation />
    </div>
    <IntegrationMap />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <TechnicalHonesty />
      <DataModel />
    </div>
    <Risks />
    <PlanAndPilots />
  </div>
);

export default PrincipalExtensions;

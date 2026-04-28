import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  FileSearch,
  Scale,
  ShieldCheck,
  Sparkles,
  Trophy,
  User,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";

interface Step3DecisionProps {
  onNext: () => void;
  onBack: () => void;
}

type Decision = "partial" | "training" | "evidence" | "none";

const OPTIONS: {
  id: Decision;
  label: string;
  hint: string;
  icon: typeof CheckCircle2;
  tone: "success" | "primary" | "warning" | "destructive";
}[] = [
  {
    id: "partial",
    label: "Arvesta osaliselt",
    hint: "Õppija on saavutanud osa õpitulemustest spordikoolis",
    icon: CircleDashed,
    tone: "success",
  },
  {
    id: "training",
    label: "Arvesta võistlus- ja treeningpanusena",
    hint: "Treeningud, võistlused ja laagrid lähevad arvesse õpitee osana",
    icon: Trophy,
    tone: "primary",
  },
  {
    id: "evidence",
    label: "Küsi lisatõend või refleksioon",
    hint: "Õppija peab kirjeldama, mida ta õppis",
    icon: FileSearch,
    tone: "warning",
  },
  {
    id: "none",
    label: "Ära arvesta — vajab koolitunnis osalemist",
    hint: "Õppekava maht või vajalikud oskused ei ole kaetud",
    icon: XCircle,
    tone: "destructive",
  },
];

const toneClass: Record<string, string> = {
  success:
    "border-success/25 bg-success-subtle text-success hover:border-success hover:shadow-card",
  primary:
    "border-primary/25 bg-primary-subtle text-primary hover:border-primary hover:shadow-card",
  warning:
    "border-warning/30 bg-warning-subtle text-warning hover:border-warning hover:shadow-card",
  destructive:
    "border-destructive/25 bg-destructive/5 text-destructive hover:border-destructive hover:shadow-card",
};

const selectedToneClass: Record<string, string> = {
  success: "border-success bg-success text-success-foreground shadow-elevated",
  primary: "border-primary bg-primary text-primary-foreground shadow-elevated",
  warning: "border-warning bg-warning text-white shadow-elevated",
  destructive: "border-destructive bg-destructive text-destructive-foreground shadow-elevated",
};

type ProfileId = "A" | "B";
type Level = "strong" | "partial" | "missing";

const PROFILES: Record<
  ProfileId,
  {
    name: string;
    tag: string;
    summary: string;
    facts: string[];
    coverage: { label: string; level: Level }[];
    aiSummary: string;
    recommended: Decision;
    recommendedNote: string;
  }
> = {
  A: {
    name: "Profiil A",
    tag: "Tulemustele orienteeritud sportlane",
    summary: "Treenib 4–5 korda nädalas, osaleb võistlustel ja laagrites.",
    facts: [
      "Treenib 4–5 korda nädalas",
      "Osaleb võistlustel ja laagrites",
      "Treener kinnitab järjepidevust",
      "Õpitulemused: kehaline aktiivsus, enesejuhtimine, koostöö, liikumisoskused",
    ],
    coverage: [
      { label: "Kehaline aktiivsus ja vastupidavus", level: "strong" },
      { label: "Liikumisoskused", level: "strong" },
      { label: "Enesejuhtimine", level: "strong" },
      { label: "Koostöö ja meeskonnatöö", level: "strong" },
      { label: "Eneseanalüüs ja refleksioon", level: "partial" },
    ],
    aiSummary:
      "Õppija on saavutanud suure osa kehalise kasvatuse õpitulemustest spordikoolis. Soovitatav osaline arvestamine ja koolitundide koormuse vähendamine.",
    recommended: "partial",
    recommendedNote:
      "AI soovitus: arvestada osaliselt ning vähendada koolitundide koormust. Lõppotsuse teeb õpetaja.",
  },
  B: {
    name: "Profiil B",
    tag: "Õppija, kelle õppekava maht ei ole veel kaetud",
    summary: "Osaleb trennis ebaregulaarselt, tõendus on puudulik.",
    facts: [
      "Osaleb trennis ebaregulaarselt",
      "Puudub piisav tõendus",
      "Vajab kehalise kasvatuse tundides osalemist",
      "Õppekava maht ei ole kaetud",
    ],
    coverage: [
      { label: "Kehaline aktiivsus ja vastupidavus", level: "partial" },
      { label: "Liikumisoskused", level: "partial" },
      { label: "Enesejuhtimine", level: "missing" },
      { label: "Koostöö ja meeskonnatöö", level: "missing" },
      { label: "Eneseanalüüs ja refleksioon", level: "missing" },
    ],
    aiSummary:
      "Tõendusmaterjal on puudulik ja õppekava maht ei ole kaetud. Soovitatav mitte arvestada või küsida lisatõendit.",
    recommended: "none",
    recommendedNote:
      "AI soovitus: mitte arvestada või küsida lisatõendit. Lõppotsuse teeb õpetaja.",
  },
};

const OUTCOME: Record<
  Decision,
  { eyebrow: string; title: string; body: string; chip: string }
> = {
  partial: {
    eyebrow: "Ettepanek õpetajale",
    title:
      "Osa kehalise kasvatuse õpitulemustest loetakse kaetuks spordikoolis omandatu põhjal.",
    body:
      "Õppija osaleb endiselt koolitundides. Õpetaja otsustab, milliseid teemasid ja oskusi on koolis veel vaja käsitleda.",
    chip: "Õppija ei vabane tunnist",
  },
  training: {
    eyebrow: "Ettepanek õpetajale",
    title:
      "Treeningud, võistlused ja laagrid arvestatakse õpitee nähtava osana.",
    body:
      "Panus muutub õpetajale ja koolijuhile nähtavaks ning arvestatavaks, kuid ei asenda kooli õppekava nõudeid.",
    chip: "Nähtav panus, mitte vabastus",
  },
  evidence: {
    eyebrow: "Ettepanek õpetajale",
    title:
      "Enne arvestamist palutakse õppijal kirjeldada, mida ta on õppinud.",
    body:
      "Refleksioon või lisatõend (treeneri kinnitus, video, päevik) aitab õpetajal teha põhjendatud otsuse.",
    chip: "Vaja lisatõendit",
  },
  none: {
    eyebrow: "Ettepanek õpetajale",
    title:
      "Õppija osaleb kõigis koolitundides — õppekava maht või vajalikud oskused ei ole spordikoolis kaetud.",
    body:
      "Spordikoolis omandatu jääb nähtavaks õpitee osana, kuid ei asenda kooli õppetööd.",
    chip: "Tunnis osalemine vajalik",
  },
};

export const Step3Decision = ({ onNext, onBack }: Step3DecisionProps) => {
  const [profileId, setProfileId] = useState<ProfileId>("A");
  const [decision, setDecision] = useState<Decision | null>(null);
  const [evaluating, setEvaluating] = useState(false);
  const [shown, setShown] = useState(false);

  const profile = PROFILES[profileId];

  // Reset decision when switching profile
  useEffect(() => {
    setDecision(null);
    setEvaluating(false);
    setShown(false);
  }, [profileId]);

  useEffect(() => {
    if (decision) {
      setEvaluating(true);
      setShown(false);
      const t = setTimeout(() => {
        setEvaluating(false);
        setShown(true);
      }, 700);
      return () => clearTimeout(t);
    } else {
      setEvaluating(false);
      setShown(false);
    }
  }, [decision]);

  return (
    <DemoShell
      stepLabel="03 — Õpetaja otsus"
      title="Õpetaja otsus"
      subtitle="Spordikool → kehaline kasvatus. AI teeb eeltöö, otsuse teeb õpetaja."
    >
      {/* Vastutuse riba */}
      <div className="mb-6 rounded-2xl border-l-4 border-primary bg-primary-subtle/60 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="size-5 text-primary mt-0.5 shrink-0" />
          <div className="min-w-0">
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-1.5">
              Vastutuse põhimõte
            </div>
            <p className="text-sm text-foreground/85 leading-relaxed">
              <strong>AI ei vabasta õpilast tunnist. AI ei anna hinnet.</strong>{" "}
              AI toetab õpetajat läbipaistva otsuse tegemisel.{" "}
              <span className="text-foreground/70">
                Lõppotsuse teeb õpetaja või kooli määratud vastutaja.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Profiili valija */}
      <div className="mb-6 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 mb-3">
          <Scale className="size-4 text-primary" />
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
            Vali õppijaprofiil
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(["A", "B"] as ProfileId[]).map((id) => {
            const p = PROFILES[id];
            const active = profileId === id;
            return (
              <button
                key={id}
                onClick={() => setProfileId(id)}
                className={`text-left p-4 rounded-xl border-2 transition-smooth flex items-start gap-3 ${
                  active
                    ? "border-primary bg-primary-subtle shadow-card"
                    : "border-border bg-muted/30 hover:border-primary/40"
                }`}
              >
                <div
                  className={`size-9 rounded-lg flex items-center justify-center shrink-0 ${
                    active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/70"
                  }`}
                >
                  <User className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                    {p.name}
                  </div>
                  <div className="font-semibold text-sm tracking-tight text-foreground leading-snug">
                    {p.tag}
                  </div>
                  <div className="text-xs text-foreground/70 mt-1 leading-snug">
                    {p.summary}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Profiili faktid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {profile.facts.map((f) => (
            <div
              key={f}
              className="flex items-start gap-2 text-xs text-foreground/80 rounded-lg bg-muted/40 border border-border px-3 py-2"
            >
              <CheckCircle2 className="size-3.5 mt-0.5 text-primary shrink-0" />
              <span className="leading-snug">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* AI summary + coverage */}
        <div className="lg:col-span-2 bg-muted/40 rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-3.5 text-muted-foreground" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              AI eelanalüüs · {profile.name}
            </div>
          </div>
          <p className="text-base leading-relaxed text-foreground/90 font-medium">
            {profile.aiSummary}
          </p>

          <div className="mt-6 pt-5 border-t border-border">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Kattuvus õppekavaga
            </div>
            <div className="space-y-2">
              {profile.coverage.map(({ label, level }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`size-2.5 rounded-full shrink-0 ${
                        level === "strong"
                          ? "bg-success"
                          : level === "partial"
                          ? "bg-warning"
                          : "bg-destructive"
                      }`}
                    />
                    <span className="font-medium text-foreground/90 truncate">
                      {label}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      level === "strong"
                        ? "text-success"
                        : level === "partial"
                        ? "text-warning"
                        : "text-destructive"
                    }`}
                  >
                    {level === "strong"
                      ? "Tugev"
                      : level === "partial"
                      ? "Osaline"
                      : "Puudu"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="size-4 text-warning mt-0.5 shrink-0" />
              <p className="text-xs text-foreground/75 leading-relaxed">
                AI märgib ainult võimaliku kattuvuse. Kas ja kuidas seda arvestada,
                otsustab õpetaja.
              </p>
            </div>
          </div>
        </div>

        {/* Decision buttons */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-primary rounded-full" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Õpetaja valib otsuse
            </div>
          </div>

          {/* AI soovitus profiilile */}
          <div className="mb-3 rounded-xl border border-primary/25 bg-primary-subtle p-3 flex items-start gap-2.5">
            <Sparkles className="size-4 text-primary mt-0.5 shrink-0" />
            <p className="text-xs text-foreground/85 leading-relaxed">
              <span className="font-semibold text-primary">{profile.name}:</span>{" "}
              {profile.recommendedNote}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OPTIONS.map(({ id, label, hint, icon: Icon, tone }) => {
              const selected = decision === id;
              const recommended = profile.recommended === id;
              return (
                <button
                  key={id}
                  onClick={() => setDecision(id)}
                  className={`group relative text-left p-4 rounded-xl border-2 transition-smooth flex items-start gap-3 ${
                    selected ? selectedToneClass[tone] : toneClass[tone]
                  }`}
                >
                  {recommended && !selected && (
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[9px] font-bold tracking-wider uppercase shadow-card">
                      AI soovitus
                    </span>
                  )}
                  <Icon className="size-5 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm tracking-tight leading-snug">
                      {label}
                    </div>
                    <div
                      className={`text-[11px] mt-1 leading-snug ${
                        selected ? "opacity-85" : "opacity-75"
                      }`}
                    >
                      {hint}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Evaluating */}
          {decision && evaluating && (
            <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-5 flex items-center gap-3">
              <div className="size-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground/80 tracking-tight">
                Koostan ettepanekut õpetajale…
              </span>
            </div>
          )}

          {/* Outcome card */}
          {decision && shown && (
            <div className="mt-6 transition-spring">
              <div className="relative bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-2xl p-7 shadow-elevated overflow-hidden">
                <div className="absolute -right-12 -top-12 size-40 rounded-full bg-white/10" />
                <div className="absolute -right-20 -bottom-20 size-52 rounded-full bg-white/5" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="size-4" />
                    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80">
                      {OUTCOME[decision].eyebrow}
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl font-semibold leading-tight tracking-tight text-balance">
                    {OUTCOME[decision].title}
                  </p>
                  <p className="mt-4 text-sm text-primary-foreground/85 italic border-l-2 border-white/30 pl-3 leading-relaxed">
                    {OUTCOME[decision].body}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-xs font-semibold">
                    {OUTCOME[decision].chip}
                  </div>
                </div>
              </div>

              <div className="mt-5 px-2">
                <p className="text-sm md:text-base font-medium italic text-foreground/80 leading-snug text-balance">
                  AI valmistab ette,{" "}
                  <span className="text-primary not-italic font-semibold">
                    õpetaja otsustab ja vastutab.
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 pt-7 border-t border-border flex items-center justify-between gap-4">
        <Button variant="ghost" onClick={onBack}>
          ← Tagasi
        </Button>
        <Button
          size="lg"
          onClick={onNext}
          disabled={decision === null}
          className="shadow-elevated group"
        >
          Vaata mõju
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </DemoShell>
  );
};

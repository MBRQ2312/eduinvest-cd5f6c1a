import {
  Check,
  Coins,
  GraduationCap,
  RotateCcw,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";

interface Step4ImpactProps {
  onRestart: () => void;
  onBack: () => void;
}

/* ---------- Data (demo-friendly, lihtsad numbrid) ---------- */

const LEARNER = {
  done: [
    { label: "Sport", value: 120 },
    { label: "Muusika", value: 40 },
    { label: "Kool", value: 20 },
  ],
  totalHours: 180,
  curriculumCovered: 35,
};

const TEACHING = [
  { label: "Kool", value: 20, tone: "primary" as const },
  { label: "Huvikool", value: 120, tone: "neutral" as const },
  { label: "Kogukond", value: 40, tone: "neutral" as const },
];
const TEACHER_LOAD_DROP = 30;

const RESOURCES = [
  { label: "Kool", value: 40 },
  { label: "Huvikool", value: 35 },
  { label: "Kogukond", value: 25 },
];

/* ---------- Component ---------- */

export const Step4Impact = ({ onRestart, onBack }: Step4ImpactProps) => {
  const teachingMax = Math.max(...TEACHING.map((t) => t.value));

  return (
    <DemoShell
      stepLabel="04 — Süsteemne mõju"
      title="Mõju"
      subtitle="Kolm vaadet samale õppimisele: õppija, õpetamine, ressurss."
    >
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-success via-success to-success/90 rounded-2xl p-8 md:p-10 text-success-foreground shadow-hero mb-8 overflow-hidden">
        <div className="absolute -right-10 -top-10 size-56 rounded-full bg-white/5" />
        <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-white/5" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/40" />
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-white/60 rounded-full" />
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-success-foreground/80">
              Süsteemi vaade
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-balance leading-[1.05]">
            Õppimine ei ole probleem.
            <br />
            <span className="italic underline decoration-2 underline-offset-[6px]">
              Probleem on
            </span>
            , et me ei näe seda tervikuna.
          </h3>
          <p className="mt-5 text-success-foreground/90 text-pretty text-base md:text-lg leading-relaxed">
            EduInvest teeb selle nähtavaks — õppija, õpetamine ja ressurss ühel pildil.
          </p>
        </div>
      </div>

      {/* Three views */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* 1. Õppija vaade */}
        <ViewCard icon={GraduationCap} eyebrow="Vaade 01" title="Õppija">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Tehtud õppimine
          </div>
          <ul className="space-y-2 mb-5">
            {LEARNER.done.map((d) => (
              <li
                key={d.label}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground/80">{d.label}</span>
                <span className="font-semibold tabular text-foreground">
                  {d.value} h
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between text-sm pt-2 border-t border-border">
              <span className="text-foreground font-medium">Kokku</span>
              <span className="font-bold tabular text-foreground">
                {LEARNER.totalHours} h
              </span>
            </li>
          </ul>

          <div className="rounded-xl bg-success-subtle border border-success/15 p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-success">
                Õppekava kaetus
              </span>
              <span className="text-2xl font-bold tabular text-success">
                {LEARNER.curriculumCovered}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-success/15 overflow-hidden">
              <div
                className="h-full bg-success rounded-full transition-spring"
                style={{ width: `${LEARNER.curriculumCovered}%` }}
              />
            </div>
          </div>

          <CheckList
            eyebrow="Otsus"
            items={["Kehaline kasvatus → osaliselt arvestatud"]}
            tone="primary"
          />
        </ViewCard>

        {/* 2. Õpetamise vaade */}
        <ViewCard icon={Users} eyebrow="Vaade 02" title="Õpetamine">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Kes panustas
          </div>
          <ul className="space-y-3 mb-5">
            {TEACHING.map((t) => (
              <li key={t.label}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-foreground/80">{t.label}</span>
                  <span className="font-semibold tabular text-foreground">
                    {t.value} h
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-spring ${
                      t.tone === "primary" ? "bg-primary" : "bg-foreground/35"
                    }`}
                    style={{ width: `${(t.value / teachingMax) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-primary-subtle border border-primary/15 p-4 mb-4">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1">
              Õpetaja koormus koolis
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold tabular text-primary">
                −{TEACHER_LOAD_DROP}%
              </span>
              <span className="text-xs text-primary/80">
                vähem topeltõpetamist
              </span>
            </div>
          </div>

          <CheckList
            eyebrow="Mõju"
            items={[
              "õpetaja koormus väheneb",
              "vähem korduvat õpetamist",
            ]}
            tone="primary"
          />
        </ViewCard>

        {/* 3. Ressursi vaade */}
        <ViewCard icon={Coins} eyebrow="Vaade 03" title="Ressurss">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Aja ja raha jaotus
          </div>
          <ul className="space-y-3 mb-5">
            {RESOURCES.map((r) => (
              <li key={r.label}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-foreground/80">{r.label}</span>
                  <span className="font-semibold tabular text-foreground">
                    {r.value}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-warning rounded-full transition-spring"
                    style={{ width: `${r.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-warning-subtle border border-warning/25 p-4 mb-4">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-warning mb-1">
              KOV ringluses
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold tabular text-warning">100%</span>
              <span className="text-xs text-foreground/70">
                kogu rahastus on nähtav
              </span>
            </div>
          </div>

          <CheckList
            eyebrow="Tähendus"
            items={[
              "kes panustab",
              "kes katab õppimise",
              "kus tekib ülekate",
            ]}
            tone="warning"
          />
        </ViewCard>
      </div>

      {/* Summary */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-4">
            Näeme tervikut
          </div>
          <ul className="space-y-2.5">
            {[
              "mida õppija on juba teinud",
              "kes on õpetanud",
              "kui palju kool peab veel tegema",
            ].map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-base">
                <span className="size-5 rounded-full bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-foreground font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border-l-4 border-primary bg-primary-subtle/60 p-6">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-4">
            See võimaldab
          </div>
          <ul className="space-y-2.5">
            {[
              "vähendada dubleerimist",
              "optimeerida õpetaja koormust",
              "suunata rahastust õiglasemalt",
            ].map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-base">
                <span className="size-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-primary font-semibold">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-7 border-t border-border flex items-center justify-between gap-4">
        <Button variant="ghost" onClick={onBack}>
          ← Tagasi
        </Button>
        <Button size="lg" onClick={onRestart} variant="outline">
          <RotateCcw className="size-4" />
          Alusta demo uuesti
        </Button>
      </div>
    </DemoShell>
  );
};

/* ---------- Sub-component ---------- */

const ViewCard = ({
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  icon: typeof GraduationCap;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth">
    <div className="flex items-center gap-3 pb-5 mb-5 border-b border-border">
      <div className="size-11 rounded-xl bg-primary-subtle text-primary flex items-center justify-center shrink-0">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground">
          {eyebrow}
        </div>
        <div className="font-semibold text-base tracking-tight text-foreground">
          {title}
        </div>
      </div>
    </div>
    {children}
  </div>
);

const CheckList = ({
  eyebrow,
  items,
  tone,
}: {
  eyebrow: string;
  items: string[];
  tone: "primary" | "warning";
}) => {
  const toneClass = tone === "primary" ? "text-primary" : "text-warning";
  return (
    <div>
      <div className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${toneClass}`}>
        {eyebrow}
      </div>
      <ul className="space-y-1.5">
        {items.map((s) => (
          <li key={s} className="flex items-start gap-2 text-sm">
            <Check className={`size-4 mt-0.5 shrink-0 ${toneClass}`} strokeWidth={3} />
            <span className="text-foreground/90 font-medium leading-snug">{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  MinusCircle,
  Plus,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";

interface Step3DecisionProps {
  onNext: () => void;
  onBack: () => void;
}

type Decision = "full" | "partial" | "none" | "more";

const OPTIONS: {
  id: Decision;
  label: string;
  hint: string;
  icon: typeof CheckCircle2;
  tone: "success" | "warning" | "destructive" | "muted";
}[] = [
  {
    id: "full",
    label: "Arvesta täielikult",
    hint: "Kogu õppimine arvestatakse",
    icon: CheckCircle2,
    tone: "success",
  },
  {
    id: "partial",
    label: "Arvesta osaliselt",
    hint: "AI soovitatud",
    icon: CircleDashed,
    tone: "warning",
  },
  {
    id: "none",
    label: "Ära arvesta",
    hint: "Puudub seos õppekavaga",
    icon: XCircle,
    tone: "destructive",
  },
  {
    id: "more",
    label: "Küsi lisatõend",
    hint: "Vaja täiendavat tõendust",
    icon: Plus,
    tone: "muted",
  },
];

const toneClass: Record<string, string> = {
  success:
    "border-success/25 bg-success-subtle text-success hover:border-success hover:shadow-card",
  warning:
    "border-warning/30 bg-warning-subtle text-warning hover:border-warning hover:shadow-card",
  destructive:
    "border-destructive/25 bg-destructive/5 text-destructive hover:border-destructive hover:shadow-card",
  muted:
    "border-border bg-muted/40 text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:shadow-card",
};

const selectedToneClass: Record<string, string> = {
  success: "border-success bg-success text-success-foreground shadow-elevated",
  warning: "border-warning bg-warning text-white shadow-elevated",
  destructive: "border-destructive bg-destructive text-destructive-foreground shadow-elevated",
  muted: "border-foreground bg-foreground text-background shadow-elevated",
};

const COVERAGE = [
  { label: "Kehaline kasvatus", level: "strong" as const },
  { label: "Koostöö", level: "strong" as const },
  { label: "Enesejuhtimine", level: "partial" as const },
];

export const Step3Decision = ({ onNext, onBack }: Step3DecisionProps) => {
  const [decision, setDecision] = useState<Decision | null>(null);
  const [evaluating, setEvaluating] = useState(false);
  const [released, setReleased] = useState(false);

  // Micro-animation: when "partial" is chosen, briefly show "hindamisel" then "vabastatud"
  useEffect(() => {
    if (decision === "partial") {
      setEvaluating(true);
      setReleased(false);
      const t1 = setTimeout(() => {
        setEvaluating(false);
        setReleased(true);
      }, 900);
      return () => clearTimeout(t1);
    } else {
      setEvaluating(false);
      setReleased(false);
    }
  }, [decision]);

  return (
    <DemoShell
      stepLabel="03 — Õpetaja otsus"
      title="Õpetaja otsus"
      subtitle="AI ei otsusta. AI toetab õpetaja otsust — vastutus jääb inimesele."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* AI summary + coverage */}
        <div className="lg:col-span-2 bg-muted/40 rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-3.5 text-muted-foreground" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              AI kokkuvõte
            </div>
          </div>
          <p className="text-base leading-relaxed text-foreground/90 font-medium">
            See tegevus katab suure osa{" "}
            <strong className="text-foreground">kehalise kasvatuse</strong>{" "}
            õpitulemustest.
          </p>

          <div className="mt-6 pt-5 border-t border-border">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Kattuvus õppekavaga
            </div>
            <div className="space-y-2">
              {COVERAGE.map(({ label, level }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`size-2.5 rounded-full shrink-0 ${
                        level === "strong" ? "bg-success" : "bg-warning"
                      }`}
                    />
                    <span className="font-medium text-foreground/90 truncate">
                      {label}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      level === "strong" ? "text-success" : "text-warning"
                    }`}
                  >
                    {level === "strong" ? "Tugev" : "Osaline"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decision buttons */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-primary rounded-full" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Vali otsus
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OPTIONS.map(({ id, label, hint, icon: Icon, tone }) => {
              const selected = decision === id;
              return (
                <button
                  key={id}
                  onClick={() => setDecision(id)}
                  className={`group relative text-left p-4 rounded-xl border-2 transition-smooth flex items-start gap-3 ${
                    selected ? selectedToneClass[tone] : toneClass[tone]
                  }`}
                >
                  <Icon className="size-5 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm tracking-tight">{label}</div>
                    <div
                      className={`text-[11px] mt-0.5 ${selected ? "opacity-80" : "opacity-70"}`}
                    >
                      {hint}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Micro-animation: evaluating → released */}
          {decision === "partial" && evaluating && (
            <div className="mt-6 rounded-2xl border border-warning/30 bg-warning-subtle p-5 flex items-center gap-3">
              <div className="size-2.5 rounded-full bg-warning animate-pulse" />
              <span className="text-sm font-semibold text-warning tracking-tight">
                Hindamisel…
              </span>
            </div>
          )}

          {/* THE KEY MOMENT — outcome card */}
          <div
            className={`mt-6 transition-spring ${
              decision === "partial" && released
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-3 scale-95 pointer-events-none h-0 mt-0 overflow-hidden"
            }`}
          >
            <div className="relative bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-2xl p-7 shadow-elevated overflow-hidden">
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-white/10" />
              <div className="absolute -right-20 -bottom-20 size-52 rounded-full bg-white/5" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <MinusCircle className="size-4" />
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80">
                    Vabastatud
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-balance">
                  Õppija ei pea osalema{" "}
                  <span className="bg-white/15 px-2 py-0.5 rounded-md tabular">30%</span>{" "}
                  kehalise kasvatuse tundidest.
                </p>
                <p className="mt-4 text-sm text-primary-foreground/85 italic border-l-2 border-white/30 pl-3">
                  See õppimine on juba arvestatud.
                  <br />
                  Seda ei korrata koolis uuesti.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-xs font-semibold tabular">
                  Vabaneb ~12 tundi kuus õppija ajast
                </div>
              </div>
            </div>

            {/* WOW-lause */}
            <div className="mt-5 px-2">
              <p className="text-base md:text-lg font-medium italic text-foreground/85 leading-snug text-balance">
                Otsus ei lisa midagi juurde.
                <br />
                <span className="text-primary not-italic font-semibold">
                  See eemaldab selle, mida ei ole enam vaja teha.
                </span>
              </p>
            </div>
          </div>
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

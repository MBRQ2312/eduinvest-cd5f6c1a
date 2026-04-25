import { useState } from "react";
import { ArrowRight, CheckCircle2, CircleDashed, MinusCircle, Plus, XCircle } from "lucide-react";
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

export const Step3Decision = ({ onNext, onBack }: Step3DecisionProps) => {
  const [decision, setDecision] = useState<Decision | null>(null);

  return (
    <DemoShell
      stepLabel="03 — Õpetaja otsus"
      title="Õpetaja otsus"
      subtitle="AI on töö ette valmistanud. Vastutus jääb inimesele."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* AI summary */}
        <div className="lg:col-span-2 bg-muted/40 rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-muted-foreground/40 rounded-full" />
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              AI kokkuvõte
            </div>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">
            Tegevus <strong>Spordikool — jalgpall</strong> katab suure osa{" "}
            <strong>kehalise kasvatuse</strong> õpitulemustest ning üldpädevusi{" "}
            <strong>koostöö</strong> ja <strong>enesejuhtimine</strong>.
          </p>
          <div className="mt-5 pt-5 border-t border-border space-y-2.5 text-sm">
            <Row label="Kattuvus" value="70%" />
            <Row label="Tõendeid" value="3 / 3" />
            <Row label="Kestus" value="6 kuud" />
            <Row label="Soovitus" value="Osaline" highlight />
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

          {/* THE KEY MOMENT — outcome card */}
          <div
            className={`mt-6 transition-spring ${
              decision === "partial"
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
            }`}
          >
            <div className="relative bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-2xl p-7 shadow-elevated overflow-hidden">
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-white/10" />
              <div className="absolute -right-20 -bottom-20 size-52 rounded-full bg-white/5" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <MinusCircle className="size-4" />
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80">
                    Otsuse tagajärg
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-balance">
                  Õppija ei pea osalema{" "}
                  <span className="bg-white/15 px-2 py-0.5 rounded-md tabular">30%</span>{" "}
                  kehalise kasvatuse tundidest.
                </p>
                <p className="mt-4 text-sm text-primary-foreground/85 italic border-l-2 border-white/30 pl-3">
                  Seda õppimist ei korrata koolis uuesti.
                </p>
              </div>
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

const Row = ({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className={`font-semibold tabular ${highlight ? "text-warning" : "text-foreground"}`}>
      {value}
    </span>
  </div>
);

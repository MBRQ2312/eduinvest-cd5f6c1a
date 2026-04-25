import { useState } from "react";
import { ArrowRight, CheckCircle2, CircleDashed, Plus, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";

interface Step3DecisionProps {
  onNext: () => void;
  onBack: () => void;
}

type Decision = "full" | "partial" | "none" | "more";

const OPTIONS: { id: Decision; label: string; icon: typeof CheckCircle2; tone: "success" | "warning" | "destructive" | "muted" }[] = [
  { id: "full", label: "Arvesta täielikult", icon: CheckCircle2, tone: "success" },
  { id: "partial", label: "Arvesta osaliselt", icon: CircleDashed, tone: "warning" },
  { id: "none", label: "Ära arvesta", icon: XCircle, tone: "destructive" },
  { id: "more", label: "Küsi lisatõend", icon: Plus, tone: "muted" },
];

const toneClass: Record<string, string> = {
  success: "border-success/30 bg-success-subtle text-success hover:border-success",
  warning: "border-warning/30 bg-warning-subtle text-warning hover:border-warning",
  destructive: "border-destructive/30 bg-destructive/5 text-destructive hover:border-destructive",
  muted: "border-border bg-muted text-muted-foreground hover:border-foreground/40 hover:text-foreground",
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
      title="Õpetaja teeb lõpliku otsuse"
      subtitle="AI on töö ette valmistanud. Vastutus jääb inimesele."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* AI summary */}
        <div className="lg:col-span-2 bg-muted/50 rounded-xl p-5 border border-border">
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-3">
            AI kokkuvõte
          </div>
          <p className="text-sm leading-relaxed">
            Tegevus <strong>Spordikool – jalgpall</strong> katab suure osa{" "}
            <strong>kehalise kasvatuse</strong> õpitulemustest ning üldpädevusi{" "}
            <strong>koostöö</strong> ja <strong>enesemääratlus</strong>.
          </p>
          <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm">
            <Row label="Kattuvus" value="70%" />
            <Row label="Tõendeid" value="3/3" />
            <Row label="Kestus" value="6 kuud" />
            <Row label="Soovitus" value="Osaline" highlight />
          </div>
        </div>

        {/* Decision buttons */}
        <div className="lg:col-span-3">
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-3">
            Vali otsus
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OPTIONS.map(({ id, label, icon: Icon, tone }) => {
              const selected = decision === id;
              return (
                <button
                  key={id}
                  onClick={() => setDecision(id)}
                  className={`group relative text-left p-4 rounded-xl border-2 transition-smooth flex items-center gap-3 ${
                    selected ? selectedToneClass[tone] : toneClass[tone]
                  }`}
                >
                  <Icon className="size-5 shrink-0" />
                  <span className="font-semibold text-sm">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Hint when partial selected */}
          <div
            className={`mt-5 transition-smooth ${
              decision === "partial" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="bg-primary text-primary-foreground rounded-xl p-6 shadow-elevated animate-in fade-in zoom-in-95">
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/70">
                Otsuse tagajärg
              </div>
              <p className="text-2xl md:text-3xl font-semibold mt-2 leading-tight text-balance">
                Õppija on vabastatud 30% kehalise kasvatuse tundidest.
              </p>
              <p className="mt-3 text-sm text-primary-foreground/80 italic">
                Otsus vähendab dubleerimist süsteemis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between gap-4">
        <Button variant="ghost" onClick={onBack}>
          ← Tagasi
        </Button>
        <Button
          size="lg"
          onClick={onNext}
          disabled={decision === null}
          className="shadow-elevated"
        >
          Vaata mõju
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </DemoShell>
  );
};

const Row = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className={`font-semibold tabular ${highlight ? "text-warning" : "text-foreground"}`}>
      {value}
    </span>
  </div>
);

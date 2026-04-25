import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";

interface Step2AnalysisProps {
  onNext: () => void;
  onBack: () => void;
}

interface Match {
  competence: string;
  curriculum: string;
  strength: "strong" | "partial";
  score: number;
}

const MATCHES: Match[] = [
  { competence: "Kehaline kasvatus", curriculum: "RÕK §11.4 — kehaline aktiivsus", strength: "strong", score: 82 },
  { competence: "Koostööpädevus", curriculum: "Üldpädevus 5", strength: "strong", score: 76 },
  { competence: "Enesemääratlus", curriculum: "Üldpädevus 4", strength: "partial", score: 54 },
];

export const Step2Analysis = ({ onNext, onBack }: Step2AnalysisProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"analyzing" | "ready">("analyzing");

  useEffect(() => {
    const start = Date.now();
    const dur = 1400;
    let raf = 0;
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / dur);
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setPhase("ready");
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <DemoShell
      stepLabel="02 — AI eelanalüüs"
      title="Kuhu see õppimine kuulub?"
      subtitle="AI ei otsusta. AI valmistab otsuse ette — õpetaja jaoks."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score card */}
        <div className="lg:col-span-1 bg-primary-subtle rounded-xl p-6 border border-primary/10 flex flex-col">
          <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="size-3.5" />
            Kattuvus õppekavaga
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-6xl font-semibold tabular tracking-tight text-primary">
              {phase === "analyzing" ? Math.round(progress * 0.7) : 70}
            </span>
            <span className="text-2xl font-medium text-primary/70">%</span>
          </div>
          <div className="text-sm text-primary/70 mt-1">vahemikus 60–80%</div>

          <div className="mt-6 h-1.5 bg-primary/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-smooth"
              style={{ width: `${phase === "analyzing" ? progress : 100}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-primary/60 tabular">
            {phase === "analyzing" ? "Analüüsimine…" : "Analüüs lõpetatud"}
          </div>

          <div className="mt-auto pt-6 text-xs text-primary/70 leading-relaxed">
            Põhineb 3 tõendil ja 6-kuulisel järjepideval tegevusel.
          </div>
        </div>

        {/* Matches */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
            Tuvastatud seosed
          </div>
          {MATCHES.map((m, i) => (
            <div
              key={m.competence}
              className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 animate-in fade-in slide-in-from-right-2"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: "backwards" }}
            >
              <div
                className={`shrink-0 w-1 h-12 rounded-full ${
                  m.strength === "strong" ? "bg-success" : "bg-warning"
                }`}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{m.competence}</div>
                <div className="text-xs text-muted-foreground truncate">{m.curriculum}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-lg font-semibold tabular">{m.score}%</div>
                <div
                  className={`text-[10px] font-semibold tracking-wider uppercase ${
                    m.strength === "strong" ? "text-success" : "text-warning"
                  }`}
                >
                  {m.strength === "strong" ? "Tugev seos" : "Osaline"}
                </div>
              </div>
            </div>
          ))}

          {/* Missing */}
          <div className="mt-2 grid grid-cols-2 gap-3">
            <MissingCard label="Eneseanalüüs" />
            <MissingCard label="Kirjalik refleksioon" />
          </div>

          {/* AI suggestion */}
          <div className="mt-2 bg-warning-subtle border border-warning/30 rounded-xl p-4 flex gap-3">
            <Sparkles className="size-4 text-warning shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-warning">
                AI soovitus
              </div>
              <p className="text-sm mt-1 leading-relaxed">
                Soovitame <strong>arvestada osaliselt</strong>. Lisatõend: lühike õppija
                refleksioon kogetust.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between gap-4">
        <Button variant="ghost" onClick={onBack}>
          ← Tagasi
        </Button>
        <Button size="lg" onClick={onNext} disabled={phase !== "ready"} className="shadow-elevated">
          Edasi õpetajale
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </DemoShell>
  );
};

const MissingCard = ({ label }: { label: string }) => (
  <div className="border border-dashed border-border rounded-lg p-3 text-center">
    <div className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
      Puudu
    </div>
    <div className="text-sm font-medium mt-0.5">{label}</div>
  </div>
);

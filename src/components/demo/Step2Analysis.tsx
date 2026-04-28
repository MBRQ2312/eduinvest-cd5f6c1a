import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, AlertCircle } from "lucide-react";
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
  {
    competence: "Kehaline kasvatus",
    curriculum: "RÕK §11.4 — kehaline aktiivsus",
    strength: "strong",
    score: 82,
  },
  { competence: "Koostööpädevus", curriculum: "Üldpädevus 5", strength: "strong", score: 76 },
  { competence: "Enesejuhtimine", curriculum: "Üldpädevus 4", strength: "partial", score: 54 },
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

  const displayScore = phase === "analyzing" ? Math.round(progress * 0.7) : 70;

  return (
    <DemoShell
      stepLabel="02 — AI eelanalüüs"
      title="AI eelanalüüs"
      subtitle="AI ei otsusta. AI toetab õpetaja otsust — seob õpitu õppekavaga."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score card */}
        <div className="lg:col-span-1 bg-gradient-to-br from-primary-subtle to-primary-subtle/50 rounded-2xl p-7 border border-primary/15 flex flex-col">
          <div className="flex items-center gap-2 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
            <Sparkles className="size-3.5" />
            Kattuvus õppekavaga
          </div>
          <div className="mt-5 flex items-baseline gap-1">
            <span className="text-7xl font-semibold tabular tracking-tighter text-primary leading-none">
              {displayScore}
            </span>
            <span className="text-3xl font-medium text-primary/60">%</span>
          </div>
          <div className="text-sm text-primary/70 mt-2 font-medium">vahemikus 60–80%</div>

          <div className="mt-7 h-1.5 bg-primary/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-smooth"
              style={{ width: `${phase === "analyzing" ? progress : 100}%` }}
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] tabular text-primary/60 font-medium">
            <span>{phase === "analyzing" ? "Analüüsimine…" : "✓ Analüüs lõpetatud"}</span>
            <span>{phase === "analyzing" ? `${progress}%` : "100%"}</span>
          </div>

          <div className="mt-auto pt-7 text-xs text-primary/70 leading-relaxed border-t border-primary/10 mt-6">
            Põhineb <strong>3 tõendil</strong> ja <strong>6 kuu</strong> järjepideval
            tegevusel käesoleval õppeaastal (2025/2026).
          </div>
        </div>

        {/* Matches */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">
            Tuvastatud seosed õppekavaga
          </div>
          {MATCHES.map((m, i) => (
            <div
              key={m.competence}
              className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 hover:shadow-card transition-smooth animate-in fade-in slide-in-from-right-2"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: "backwards" }}
            >
              <div
                className={`shrink-0 w-1 h-14 rounded-full ${
                  m.strength === "strong" ? "bg-success" : "bg-warning"
                }`}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold tracking-tight">{m.competence}</div>
                <div className="text-xs text-muted-foreground truncate mt-0.5">
                  {m.curriculum}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-semibold tabular tracking-tight leading-none">
                  {m.score}%
                </div>
                <div
                  className={`text-[10px] font-bold tracking-[0.15em] uppercase mt-1 ${
                    m.strength === "strong" ? "text-success" : "text-warning"
                  }`}
                >
                  {m.strength === "strong" ? "Tugev seos" : "Osaline"}
                </div>
              </div>
            </div>
          ))}

          {/* Missing */}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <MissingCard label="Eneseanalüüs" />
            <MissingCard label="Refleksioon" />
          </div>

          {/* AI suggestion */}
          <div className="mt-3 bg-warning-subtle border border-warning/25 rounded-xl p-5 flex gap-3.5">
            <div className="shrink-0 size-8 rounded-lg bg-warning/15 flex items-center justify-center">
              <AlertCircle className="size-4 text-warning" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-warning">
                AI soovitus
              </div>
              <p className="text-sm mt-1.5 leading-relaxed">
                Seda tegevust saab <strong>osaliselt arvestada</strong> kooli õppetöös.
                Soovitatav lisatõend: <strong>õppija refleksioon</strong>.
              </p>
            </div>
          </div>

          {/* Vastutuse rõhutus */}
          <div className="mt-3 rounded-xl border border-border bg-muted/40 p-4">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Vastutus
            </div>
            <ul className="space-y-1 text-xs text-foreground/80 leading-relaxed">
              <li>• AI ei vabasta õpilast tunnist.</li>
              <li>• AI ei anna hinnet.</li>
              <li>• AI toetab õpetajat läbipaistva otsuse tegemisel.</li>
              <li>• Lõppotsuse teeb õpetaja või kooli määratud vastutaja.</li>
            </ul>
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
          disabled={phase !== "ready"}
          className="shadow-elevated group"
        >
          Saada õpetajale
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </DemoShell>
  );
};

const MissingCard = ({ label }: { label: string }) => (
  <div className="border border-dashed border-border rounded-xl p-4 text-center bg-muted/30">
    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
      Puudu
    </div>
    <div className="text-sm font-semibold mt-1 tracking-tight">{label}</div>
  </div>
);

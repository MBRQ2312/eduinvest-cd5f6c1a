import { useState } from "react";
import { ArrowRight, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepShell } from "../StepShell";
import { AiBadge, InfoCard, SimpleNote } from "../primitives";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "full", label: "Arvestan täielikult" },
  { id: "partial", label: "Arvestan osaliselt" },
  { id: "more", label: "Vajan lisatõendit" },
  { id: "no", label: "Ei arvesta" },
  { id: "principal", label: "Suunatud õppejuhile" },
  { id: "schedule", label: "Arvesta järgmise perioodi tunniplaani planeerimisel" },
] as const;

const QUESTIONS = [
  { id: "q1", label: "Kas tõend on piisav?" },
  { id: "q2", label: "Kas tegevusel on seos õpitulemusega?" },
  { id: "q3", label: "Kas maht on piisav?" },
  { id: "q4", label: "Kas kohalolek on kinnitatud?" },
  { id: "q5", label: "Kas õppekeel on oluline?" },
  { id: "q6", label: "Kas tegemist on piiripealse juhtumiga?" },
  { id: "q7", label: "Kas otsus vajab õppejuhi kinnitust?" },
  { id: "q8", label: "Kas pere saab otsusest aru?" },
] as const;

export const DecisionStep = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const [choice, setChoice] = useState<(typeof OPTIONS)[number]["id"]>("partial");
  const [answers, setAnswers] = useState<Record<string, "yes" | "no" | null>>({});

  const setA = (id: string, val: "yes" | "no") =>
    setAnswers((p) => ({ ...p, [id]: p[id] === val ? null : val }));

  return (
    <StepShell
      step={5}
      title="5. Õpetaja teeb otsuse"
      question="Mis on sinu otsus selle õppija kohta?"
      badge={<AiBadge />}
    >
      {/* Control questions */}
      <div className="mb-7 max-w-3xl">
        <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-3">
          Kontrollküsimused
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 md:p-4 space-y-1.5">
          {QUESTIONS.map((q) => (
            <div
              key={q.id}
              className="flex items-center justify-between gap-3 py-2 border-b border-border/50 last:border-0"
            >
              <span className="text-sm">{q.label}</span>
              <div className="flex gap-1.5 shrink-0">
                {(["yes", "no"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setA(q.id, v)}
                    className={cn(
                      "px-2.5 py-1 rounded-md text-xs font-semibold border transition-smooth",
                      answers[q.id] === v
                        ? v === "yes"
                          ? "bg-success text-success-foreground border-success"
                          : "bg-muted text-foreground border-border"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50",
                    )}
                  >
                    {v === "yes" ? "Jah" : "Ei"}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decision options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
        {OPTIONS.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => setChoice(o.id)}
            className={cn(
              "flex items-center gap-3 p-4 rounded-xl border text-left transition-smooth",
              choice === o.id
                ? "border-primary bg-primary-subtle/50 shadow-sm"
                : "border-border bg-card hover:border-primary/50",
            )}
          >
            <span
              className={cn(
                "size-5 rounded-full border-2 shrink-0 flex items-center justify-center",
                choice === o.id ? "border-primary" : "border-border",
              )}
            >
              {choice === o.id && <span className="size-2.5 rounded-full bg-primary" />}
            </span>
            <span className="text-sm font-semibold">{o.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        <InfoCard tone="success" title="Kehaline kasvatus — arvestan osaliselt">
          Treening katab regulaarse liikumise ja vastupidavuse osa. Mõned õpitulemused
          vajavad veel õpetaja vaatlust.
        </InfoCard>
        <InfoCard tone="primary" title="Eesti keel — toetav tõend">
          Märgin toetava tõendina eestikeelses keskkonnas suhtlemise kohta. See ei asenda
          eesti keele hinnet.
        </InfoCard>
      </div>

      {/* Tunniplaani risk vastus */}
      <div className="mt-6 max-w-3xl">
        <InfoCard tone="warning" title="Osaline arvestamine ≠ järelevalveta õppija">
          Osaline arvestamine ei tähenda, et õpilane jääb järelevalveta. Kool otsustab,
          kas õpilane osaleb osas tundidest, teeb alternatiivse ülesande, liigub tugitegevusse,
          kasutab aega juhendatud iseseisvaks tööks või võetakse info arvesse järgmise
          perioodi tunniplaani planeerimisel.
        </InfoCard>
      </div>

      <div className="mt-6 max-w-2xl">
        <SimpleNote>Otsus dokumenteeritakse kooli töövoos.</SimpleNote>
      </div>

      <div className="mt-9 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          <Save className="size-4" />
          Salvesta otsus
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </StepShell>
  );
};

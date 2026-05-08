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
] as const;

export const DecisionStep = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const [choice, setChoice] = useState<(typeof OPTIONS)[number]["id"]>("partial");

  return (
    <StepShell
      step={5}
      title="5. Õpetaja teeb otsuse"
      question="Mis on sinu otsus selle õppija kohta?"
      badge={<AiBadge />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
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

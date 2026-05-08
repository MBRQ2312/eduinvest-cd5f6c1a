import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepShell } from "../StepShell";
import { EvidenceItem, SimpleNote } from "../primitives";
import { DEMO_CASE } from "../demoCase";
import { useAiAnalysis } from "@/hooks/useAiAnalysis";

export const EvidenceStep = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  // Käivita AI analüüs taustal — tulemus on järgmises sammus valmis
  useAiAnalysis(DEMO_CASE);

  return (
    <StepShell
      step={3}
      title="3. Treener kinnitab tõendid"
      question="Kas tõendite kogum on piisav, et seos õppekavaga kontrollida?"
    >
      <div className="rounded-2xl border border-border bg-card p-5 md:p-6 max-w-2xl">
        {DEMO_CASE.evidence.map((e) => (
          <EvidenceItem key={e.id} label={e.label} status={e.status} />
        ))}
      </div>

      <div className="mt-6 max-w-2xl">
        <SimpleNote>
          Arvestamise aluseks ei ole ainult õpilase väide, vaid tõendite kogum.
        </SimpleNote>
      </div>

      <div className="mt-9 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Saada tõendid koolile
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </StepShell>
  );
};

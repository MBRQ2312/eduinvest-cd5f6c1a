import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepShell } from "../StepShell";
import { AiBadge, RelationCard } from "../primitives";
import { DEMO_CASE } from "../demoCase";

export const AiAnalysisStep = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const { strong, partial, missing } = DEMO_CASE.aiAnalysis;
  return (
    <StepShell
      step={4}
      title="4. AI teeb õpetajale eelanalüüsi"
      question="Kuidas tõendid katavad õppekava õpitulemusi?"
      badge={<AiBadge />}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <RelationCard tone="success" title="Tugev seos" items={strong} />
        <RelationCard tone="warning" title="Osaline seos" items={partial} />
        <RelationCard tone="destructive" title="Puudu" items={missing} />
      </div>

      <div className="mt-9 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Edasi õpetaja otsuseni
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </StepShell>
  );
};

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepShell } from "../StepShell";
import { InfoCard } from "../primitives";
import { DEMO_CASE } from "../demoCase";

export const SchoolMappingStep = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const { pe, estonian } = DEMO_CASE.subjects;
  return (
    <StepShell
      step={2}
      title="2. Kool seob taotluse õppekavaga"
      question="Millised õpitulemused võivad selle tegevusega kattuda?"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SubjectBlock name={pe.name} outcomes={pe.outcomes} />
        <SubjectBlock name={estonian.name} outcomes={estonian.outcomes} />
      </div>

      <div className="mt-7">
        <InfoCard tone="warning" title="Oluline">
          Eesti keele osa <strong>ei asenda automaatselt eesti keele hinnet</strong>. See võib olla
          toetav tõend õppija eestikeelse õpikeskkonna kohta.
        </InfoCard>
      </div>

      <div className="mt-9 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Edasi: küsi treenerilt tõendid
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </StepShell>
  );
};

const SubjectBlock = ({ name, outcomes }: { name: string; outcomes: readonly string[] }) => (
  <div className="rounded-2xl border border-border bg-card p-6">
    <div className="text-xs font-bold tracking-wide uppercase text-primary mb-3">{name}</div>
    <ul className="space-y-2">
      {outcomes.map((o) => (
        <li key={o} className="flex items-start gap-2.5 text-sm text-foreground/85">
          <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
          <span className="leading-snug">{o}</span>
        </li>
      ))}
    </ul>
  </div>
);

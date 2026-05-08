import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepShell } from "../StepShell";
import { InfoCard, SectionLabel } from "../primitives";
import { DEMO_CASE } from "../demoCase";
import { Users, Building2 } from "lucide-react";

export const ExplanationStep = ({ onRestart, onBack }: { onRestart: () => void; onBack: () => void }) => {
  const s = DEMO_CASE.principalSummary;
  return (
    <StepShell
      step={6}
      title="6. Pere saab selgituse, kool näeb mustreid"
      question="Mida pere ja koolijuht selle juhtumi põhjal näevad?"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pere selgitus */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <SectionLabel icon={Users}>Pere selgitus</SectionLabel>
          <ul className="space-y-3 text-sm">
            <Li title="Mida arvestati">
              Kehalises kasvatuses regulaarne liikumine ja vastupidavus.
            </Li>
            <Li title="Miks arvestati">
              Treeneri kinnitus, treeningmaht ja võistlused katavad õppekava §11.4 osad.
            </Li>
            <Li title="Mida ei arvestatud">
              Veesport ja liikumisoskuste mitmekesisus jäävad tunnis omandatavaks.
            </Li>
            <Li title="Mis jääb veel teha">
              Lisada lühike eestikeelne eneseanalüüs.
            </Li>
          </ul>
        </div>

        {/* Koolijuhi koondvaade */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <SectionLabel icon={Building2}>Koolijuhi koondvaade</SectionLabel>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
            näidisandmed
          </div>
          <ul className="space-y-3 text-sm">
            <Stat k="Sarnaseid taotlusi" v={`${s.similarRequests}`} />
            <Stat k="Korduvad ained" v={s.subjects.join(" · ")} />
            <Stat k="Vajab lisatõendit" v={`${s.needsMoreEvidence} juhtumit`} />
            <Stat k="Hinnanguline ajasääst õpetajale" v={`~${s.estimatedTimeSavedHoursPerMonth} h / kuus`} />
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <InfoCard tone="primary">
          <em>
            "EduInvest LearnOnce ei loo õppimist juurde. See teeb juba toimunud õppimise
            nähtavaks, võrreldavaks ja õpetaja otsusel arvestatavaks."
          </em>
        </InfoCard>
      </div>

      <div className="mt-9 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onRestart} variant="outline">
          <RotateCcw className="size-4" />
          Käivita demo uuesti
        </Button>
      </div>
    </StepShell>
  );
};

const Li = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <li>
    <div className="font-semibold text-foreground/90">{title}</div>
    <div className="text-foreground/70 text-sm leading-relaxed">{children}</div>
  </li>
);

const Stat = ({ k, v }: { k: string; v: string }) => (
  <li className="flex items-start justify-between gap-3 border-b border-border/50 pb-2 last:border-0">
    <span className="text-muted-foreground">{k}</span>
    <span className="font-semibold text-right">{v}</span>
  </li>
);

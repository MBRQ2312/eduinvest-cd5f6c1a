import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepShell } from "../StepShell";
import { EvidenceItem, SimpleNote, InfoCard } from "../primitives";
import { DEMO_CASE } from "../demoCase";
import { useAiAnalysis } from "@/hooks/useAiAnalysis";

const STANDARD_FIELDS: { label: string; value: string }[] = [
  { label: "Õppija nimi", value: "Nikita Tamm" },
  { label: "Huvikool / klubi", value: "FC Levadia U16" },
  { label: "Juhendaja", value: "Mart Kask" },
  { label: "Roll / kvalifikatsioon", value: "Peatreener · UEFA B litsents" },
  { label: "Tegevuse liik", value: "Jalgpall, juhendatud treening" },
  { label: "Tegevuse maht", value: "3× nädalas, à 90 min" },
  { label: "Osalemise periood", value: "Sept 2025 – mai 2026" },
  { label: "Kohaloleku %", value: "≥ 80% (32/38 trenni)" },
  { label: "Tegevuse keel", value: "Eesti keel" },
  { label: "Tegevuse sisu", value: "Tehnika, taktika, mängud, eneseanalüüs" },
  { label: "Õpiväljundid", value: "Vastupidavus, koostöö, eestikeelne sporditerminoloogia" },
  { label: "Võistlused / link", value: "Tallinna noorte liiga · 6 mängu" },
  { label: "Päeviku/kohaloleku tõend", value: "Treeningpäevik (PDF)" },
  { label: "Treeneri kommentaar", value: "Püsiv osaleja, suhtleb tiimis eesti keeles." },
];

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
      {/* Standardiseeritud tõendikaart */}
      <div className="rounded-2xl border border-border bg-card p-5 md:p-6 max-w-3xl mb-5">
        <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-4">
          Standardiseeritud tõendikaart
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {STANDARD_FIELDS.map((f) => (
            <div key={f.label} className="flex items-start justify-between gap-3 text-sm border-b border-border/50 pb-2 last:border-0">
              <dt className="text-muted-foreground shrink-0">{f.label}</dt>
              <dd className="font-semibold text-right text-foreground/90">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 rounded-xl border-l-4 border-primary bg-primary-subtle/40 p-3 text-sm font-medium">
          ✓ Kinnitan tegelikku tegevust, mitte kooli õpitulemuste täitmist.
        </div>
      </div>

      {/* Vana tõendite staatuste kokkuvõte */}
      <div className="rounded-2xl border border-border bg-card p-5 md:p-6 max-w-2xl">
        <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-3">
          Tõendite staatus
        </div>
        {DEMO_CASE.evidence.map((e) => (
          <EvidenceItem key={e.id} label={e.label} status={e.status} />
        ))}
      </div>

      <div className="mt-6 max-w-2xl">
        <SimpleNote>
          Arvestamise aluseks ei ole ainult õpilase väide, vaid tõendite kogum.
        </SimpleNote>
      </div>

      <div className="mt-6 max-w-2xl">
        <InfoCard tone="muted">
          <strong>Tehniline märkus:</strong> häkil kasutame mock-andmeid. Pärislahenduses võib andmeid
          tuua eKoolist, Stuudiumist, EHISest, ARNOst või kooli/KOV-i süsteemidest.
        </InfoCard>
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

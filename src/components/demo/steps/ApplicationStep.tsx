import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepShell } from "./StepShell";
import { DataBlock, DataRow, HelpPopup, SimpleNote } from "./primitives";
import { DEMO_CASE } from "./demoCase";

export const ApplicationStep = ({ onNext }: { onNext: () => void }) => {
  const c = DEMO_CASE;
  return (
    <StepShell
      step={1}
      title="1. Lapsevanem esitab taotluse"
      question="Minu laps õpib väljaspool kooli. Palun hinnake, kas seda saab koolis arvestada."
    >
      <DataBlock title="Taotlus" className="max-w-2xl">
        <DataRow k="Õppija" v={`${c.student.short}, ${c.student.grade}`} />
        <DataRow k="Kooliväline tegevus" v={`${c.activity.kind} · ${c.activity.frequency}`} />
        <DataRow k="Tegevuse keel" v={c.activity.language} tone="primary" />
        <DataRow k="Taotleja" v={c.request.applicant} />
        <DataRow k="Soov" v={c.request.intent} />
      </DataBlock>

      <div className="mt-6 max-w-2xl">
        <SimpleNote>
          Lapsevanem ei pea teadma õppekava täpset kattuvust. Kool aitab seosed välja selgitada.
        </SimpleNote>
        <div className="mt-3">
          <HelpPopup title="Miks alustab lapsevanem?">
            Arvestamise protsessi algatab alati lapsevanem või täisealine õppija. Kool ei algata
            seda omal initsiatiivil — see oleks vastuolus VÕTA põhimõttega, kus arvestus algab
            taotleja avaldusest.
          </HelpPopup>
        </div>
      </div>

      <div className="mt-9 pt-7 border-t border-border flex justify-end">
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Saada taotlus koolile
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </StepShell>
  );
};

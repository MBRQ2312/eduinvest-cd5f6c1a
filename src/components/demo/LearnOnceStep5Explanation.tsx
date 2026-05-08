import { ArrowRight, CheckCircle2, MessageCircle, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";

interface Props { onNext: () => void; onBack: () => void; }

export const LearnOnceStep5Explanation = ({ onNext, onBack }: Props) => {
  return (
    <DemoShell
      stepLabel="05 — Selgitus õppijale ja lapsevanemale"
      title="Mida kool arvestas ja miks?"
      subtitle="Sama otsus, lihtsas keeles — õppijale ja lapsevanemale arusaadavalt."
    >
      <ParentNote text="Lapsevanem ja õppija saavad sama selgituse, mille õpetaja kinnitas. Selgitus näitab, mida arvestati, miks arvestati ja mis jääb veel teha." />

      <div className="rounded-2xl border border-border bg-card p-7 mb-6 shadow-card">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-3 flex items-center gap-2">
          <MessageCircle className="size-4" /> Sõnum perele
        </div>
        <div className="space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Nikita jalgpallitreeninguid <strong>arvestati osaliselt</strong> kehalise kasvatuse
            õpitulemuste täitmisel, sest treeningud on regulaarsed, juhendatud ja seotud
            vastupidavuse ning liikumisharjumuse arendamisega.
          </p>
          <p className="text-foreground/80">
            Kõike ei arvestatud automaatselt, sest osa õpitulemusi vajab veel kooliõpetaja vaatlust
            või lisatõendit.
          </p>
          <p>
            <strong>Eesti keele puhul</strong> märgiti treening kui <em>toetav tõend</em>, sest
            Nikita kasutab trennis eesti keelt juhiste mõistmiseks, suhtlemiseks ja koostööks.
            See <strong>ei asenda automaatselt eesti keele hinnet</strong>, kuid aitab koolil näha
            õppija tegelikku eestikeelset õpikeskkonda.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-primary bg-primary-subtle/60 p-6">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-3 flex items-center gap-2">
          <ListChecks className="size-4" /> Järgmine samm
        </div>
        <ul className="space-y-2.5">
          {[
            "Nikita lisab 5–7 lausega eneseanalüüsi eesti keeles",
            "Treener kinnitab treeningmahu",
            "Õpetaja teeb lõpliku märke õppeinfosüsteemi (eKool / Stuudium)",
          ].map((s) => (
            <li key={s} className="flex items-start gap-2.5 text-sm md:text-base">
              <span className="size-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="size-3.5" strokeWidth={3} />
              </span>
              <span className="text-foreground font-medium leading-snug">{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Edasi: koolijuhi vaade
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </DemoShell>
  );
};

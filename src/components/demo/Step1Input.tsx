import { ArrowRight, FileCheck2, UserCheck, Video, Trophy, Calendar, Clock, ClipboardCheck, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";

interface Step1InputProps {
  onNext: () => void;
}

const PROOFS = [
  { id: "diary", label: "Treeningpäevik", icon: FileCheck2 },
  { id: "coach", label: "Treeneri kinnitus", icon: UserCheck },
  { id: "video", label: "Video", icon: Video },
];

export const Step1Input = ({ onNext }: Step1InputProps) => {
  return (
    <DemoShell
      stepLabel="01 — Õppija sisend"
      title="Lisa õppimiskogemus"
      subtitle="Õppimine, mis on juba toimunud — väljaspool klassiruumi."
    >
      <ParentNote text="Õppija kirjeldab, mida ta on koolivälisel ajal õppinud — millisel tegevusel, kui sageli, kui kaua ja millise juhendaja juures. See on alus, mille põhjal kool ja partner saavad rääkida." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-7">
        <Field label="Tegevus">
          <div className="text-lg font-semibold tracking-tight">Spordikool — jalgpall</div>
          <div className="text-sm text-muted-foreground mt-0.5">FC Levadia noortekool</div>
        </Field>

        <Field label="Sagedus">
          <div className="text-lg font-semibold tracking-tight tabular">3× nädalas</div>
          <div className="text-sm text-muted-foreground mt-0.5">à 90 minutit</div>
        </Field>

        <Field label="Kestus">
          <div className="text-lg font-semibold tracking-tight tabular">Käesolev õppeaasta</div>
          <div className="text-sm text-muted-foreground mt-0.5">
            September 2025 — veebruar 2026 · 6 kuud
          </div>
        </Field>

        <Field label="Juhendaja">
          <div className="text-lg font-semibold tracking-tight">Mart Kask</div>
          <div className="text-sm text-muted-foreground mt-0.5">UEFA B litsents</div>
        </Field>

        <div className="lg:col-span-2">
          <Field label="Mida õppisin">
            <p className="text-base leading-relaxed text-foreground/90">
              Meeskonnatöö, distsipliin, vastupidavus, taktika.
            </p>
          </Field>
        </div>

        <div className="lg:col-span-2">
          <Field label="Lisatud tõendid">
            <div className="flex flex-wrap gap-2 mt-1.5">
              {PROOFS.map(({ id, label, icon: Icon }) => (
                <div
                  key={id}
                  className="inline-flex items-center gap-2 pl-3 pr-3.5 py-2 rounded-lg border border-primary/20 bg-primary-subtle text-primary text-sm font-medium"
                >
                  <Icon className="size-4" />
                  {label}
                </div>
              ))}
            </div>
          </Field>
        </div>
      </div>

      {/* Võistlused ja treeninglaagrid */}
      <div className="mt-9 rounded-2xl border border-border bg-muted/30 p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Trophy className="size-4 text-primary" />
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground">
              Lisajaotis
            </div>
            <h3 className="text-lg font-semibold tracking-tight">Võistlused ja treeninglaagrid</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          <CompField icon={Trophy} label="Võistluse või laagri nimi" value="Eesti MV U16 — jalgpall" hint="Eesti Jalgpalli Liit" />
          <CompField icon={Calendar} label="Kuupäevad" value="14.–17.11.2025" hint="4 päeva" />
          <CompField icon={Clock} label="Maht" value="32 tundi" hint="≈ 4 treeningpäeva" />
          <CompField icon={UserCheck} label="Treeneri / juhendaja kinnitus" value="Mart Kask" hint="Allkirjastatud digitaalselt" />

          <div className="lg:col-span-2">
            <CompField
              icon={ClipboardCheck}
              label="Tulemused või osalemise kirjeldus"
              value="Meeskond saavutas 3. koha. Mängisin kõigis kohtumistes algkoosseisus, sh kaks täispikka kohtumist."
            />
          </div>

          <div className="lg:col-span-2">
            <CompField
              icon={MessageSquare}
              label="Õppija refleksioon — mida õppisin?"
              value="Õppisin, kuidas hoida keskendumist väsimuses, juhtida pingutust pikkade päevade jooksul ning seada endale enne mängu konkreetne eesmärk. Sain aru, kui palju aitab meeskonnas selge rollijaotus."
            />
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2.5 flex items-center gap-1.5">
              <Target className="size-3.5" />
              Seos õpitulemustega
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Vastupidavus",
                "Liikumisoskused",
                "Koostöö",
                "Enesejuhtimine",
                "Pingutuse juhtimine",
                "Eesmärgistamine",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/20 bg-primary-subtle text-primary text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Critical question */}
      <div className="mt-9 rounded-2xl border-l-4 border-primary bg-primary-subtle/60 p-6">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-2">
          Kriitiline küsimus
        </div>
        <p className="text-xl md:text-2xl font-semibold tracking-tight text-balance leading-snug text-primary">
          Kas seda on vaja koolis uuesti õppida?
        </p>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex justify-end gap-4">
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Analüüsi
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </DemoShell>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">
    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
      {label}
    </div>
    <div>{children}</div>
  </div>
);

const CompField = ({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  hint?: string;
}) => (
  <div className="flex flex-col gap-1.5">
    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-1.5">
      <Icon className="size-3.5" />
      {label}
    </div>
    <div className="text-base font-semibold tracking-tight leading-snug">{value}</div>
    {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
  </div>
);

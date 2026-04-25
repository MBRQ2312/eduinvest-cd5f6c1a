import { ArrowRight, FileCheck2, UserCheck, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";

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
      subtitle="See on õppimine, mis on juba tehtud."
    >
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
          <div className="text-lg font-semibold tracking-tight tabular">6 kuud</div>
          <div className="text-sm text-muted-foreground mt-0.5">
            September 2024 — veebruar 2025
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

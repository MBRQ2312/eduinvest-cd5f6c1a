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
      subtitle="Mitte hinnet. Mitte kodutööd. Päris elu — mis on toimunud väljaspool kooli."
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

        <Field label="Vastutaja">
          <div className="text-lg font-semibold tracking-tight">Mart Kask</div>
          <div className="text-sm text-muted-foreground mt-0.5">Treener · EJL litsents B</div>
        </Field>

        <div className="lg:col-span-2">
          <Field label="Mida õppisin">
            <p className="text-base leading-relaxed text-foreground/90">
              Meeskonnatöö, distsipliin, vastupidavus, treeningplaani järgimine ja
              taktikaline mõtlemine.
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

      <div className="mt-10 pt-7 border-t border-border flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
          See sisend liigub AI-eelanalüüsi, mis pakub välja seose riikliku õppekavaga.
          Otsuse teeb õpetaja.
        </p>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Analüüsi AI-ga
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

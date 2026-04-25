import { useState } from "react";
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
  const [proofs] = useState<string[]>(PROOFS.map((p) => p.id));

  return (
    <DemoShell
      stepLabel="01 — Õppija sisend"
      title="Lisa õppimiskogemus"
      subtitle="Mitte hinnet. Mitte kodutööd. Päris elu."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
        <Field label="Tegevus">
          <div className="text-base font-medium">Spordikool – jalgpall</div>
          <div className="text-sm text-muted-foreground">FC Levadia noortekool</div>
        </Field>

        <Field label="Sagedus">
          <div className="text-base font-medium tabular">3× nädalas</div>
          <div className="text-sm text-muted-foreground">à 90 minutit</div>
        </Field>

        <Field label="Kestus">
          <div className="text-base font-medium tabular">6 kuud</div>
          <div className="text-sm text-muted-foreground">September 2024 – veebruar 2025</div>
        </Field>

        <Field label="Vastutaja">
          <div className="text-base font-medium">Mart Kask</div>
          <div className="text-sm text-muted-foreground">Treener, EJL litsents B</div>
        </Field>

        <div className="lg:col-span-2">
          <Field label="Mida õppisin">
            <p className="text-base leading-relaxed">
              Treeningplaani järgimine, meeskonnatöö, vastupidavuse arendamine, taktikaline
              mõtlemine ja kaotuste käsitlemine.
            </p>
          </Field>
        </div>

        <div className="lg:col-span-2">
          <Field label="Tõendid">
            <div className="flex flex-wrap gap-2 mt-1">
              {PROOFS.map(({ id, label, icon: Icon }) => {
                const checked = proofs.includes(id);
                return (
                  <div
                    key={id}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-smooth ${
                      checked
                        ? "border-primary/30 bg-primary-subtle text-primary"
                        : "border-border bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                    {label}
                  </div>
                );
              })}
            </div>
          </Field>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground max-w-md">
          See sisend liigub AI-eelanalüüsi, mis pakub välja seose riikliku õppekavaga.
        </p>
        <Button size="lg" onClick={onNext} className="shadow-elevated">
          Analüüsi AI-ga
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </DemoShell>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-1.5">
    <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
      {label}
    </div>
    <div>{children}</div>
  </div>
);

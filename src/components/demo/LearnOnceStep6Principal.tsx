import { ArrowRight, Trophy, Music, Languages, CheckCircle2, CircleDashed, FileSearch, Timer, Repeat, Layers, School } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";

interface Props { onNext: () => void; onBack: () => void; }

const CHART_DATA = [
  { aine: "Kehaline", juhtumeid: 24, dubleerimine: 16 },
  { aine: "Eesti k.", juhtumeid: 14, dubleerimine: 8 },
  { aine: "Muusika", juhtumeid: 9, dubleerimine: 5 },
  { aine: "Loodus", juhtumeid: 7, dubleerimine: 2 },
  { aine: "Tehnoloogia", juhtumeid: 5, dubleerimine: 1 },
];

export const LearnOnceStep6Principal = ({ onNext, onBack }: Props) => {
  return (
    <DemoShell
      stepLabel="06 — Koolijuhi vaade"
      title="Õppija aeg, õpetaja töö ja korduv õppimine"
      subtitle="Anonüümne koondvaade — koolijuht näeb mustreid, mitte üksikuid juhtumeid."
    >
      <ParentNote text="Koolijuht ei näe üksikuid otsuseid, vaid mustreid: kus on dubleerimist, kui palju aega õpetajad otsustele kulutavad ja kus saaks luua ühise hea tava." />

      {/* KPI grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        <Kpi icon={Layers} label="Arvestustaotlusi" value="42" hint="käesolev semester" />
        <Kpi icon={Trophy} label="Spordikoolist" value="24" />
        <Kpi icon={Music} label="Muusikakoolist" value="9" />
        <Kpi icon={Languages} label="Eesti keele tõendiga" value="14" />
        <Kpi icon={CheckCircle2} label="Täielik arvestus" value="6" tone="success" />
        <Kpi icon={CircleDashed} label="Osaline arvestus" value="22" tone="primary" />
        <Kpi icon={FileSearch} label="Vajab lisatõendit" value="11" tone="warning" />
        <Kpi icon={School} label="Ei arvestatud" value="3" tone="muted" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <BigStat icon={Repeat} eyebrow="Dubleerimine" value="Kehaline kasvatus" hint="enim korduvaid juhtumeid (24)" />
        <BigStat icon={Timer} eyebrow="Õpetaja aeg otsustele" value="9,5 h" hint="semestri jooksul kokku" />
        <BigStat icon={Layers} eyebrow="Korduvkasutatava reegliga" value="68%" hint="juhtumitest saaks lahendada ühise hea tavaga" />
      </div>

      {/* Kooli juhtimisotsus */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
        <div className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-6">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80 mb-2">
            Kooli juhtimisotsus
          </div>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug">
            Kui koolis tekib 20 sarnast spordikooli juhtumit, ei pea iga õpetaja otsust nullist tegema.
          </h3>
        </div>
        <div className="p-6 text-sm md:text-base leading-relaxed text-foreground/85">
          Kool saab luua ühise hea tava: <strong>millised tõendid on piisavad</strong>,{" "}
          <strong>millal arvestatakse osaliselt</strong> ja <strong>kuidas õppija aeg
          koolipäeva sees sisustatakse</strong>. EduInvest LearnOnce näitab, kus
          dubleerimine tekib ja mille jaoks tasub luua kooli ühised reeglid.
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onRestart} variant="outline">
          <RotateCcw className="size-4" />
          Alusta demo uuesti
        </Button>
      </div>
    </DemoShell>
  );
};

const Kpi = ({ icon: Icon, label, value, hint, tone }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; hint?: string; tone?: "success" | "primary" | "warning" | "muted" }) => {
  const valueColor = tone === "success" ? "text-success" : tone === "warning" ? "text-warning" : tone === "muted" ? "text-muted-foreground" : "text-primary";
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <Icon className="size-3.5" />
        </div>
        <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">{label}</div>
      </div>
      <div className={`text-2xl font-semibold tabular tracking-tight ${valueColor}`}>{value}</div>
      {hint && <div className="text-[11px] text-muted-foreground mt-0.5">{hint}</div>}
    </div>
  );
};

const BigStat = ({ icon: Icon, eyebrow, value, hint }: { icon: React.ComponentType<{ className?: string }>; eyebrow: string; value: string; hint: string }) => (
  <div className="rounded-2xl border border-border bg-muted/30 p-5">
    <div className="flex items-center gap-2 mb-3">
      <div className="size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
        <Icon className="size-4" />
      </div>
      <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">{eyebrow}</div>
    </div>
    <div className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">{value}</div>
    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{hint}</p>
  </div>
);

import { useState } from "react";
import {
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Repeat,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  User,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";

const SKILLS = [
  "Vastupidavus",
  "Liikumisoskused",
  "Koostöö",
  "Enesejuhtimine",
  "Pingutuse juhtimine",
  "Eesmärgistamine",
];

export const PartnerView = () => {
  const [sent, setSent] = useState(false);

  return (
    <DemoShell
      stepLabel="Rollivaade — Partner"
      title="Partneri vaade"
      subtitle="Spordikool või huvikool kinnitab õppija tegevuse — tõendatud sisendina kooli otsustamiseks."
    >
      {/* Partner identity */}
      <div className="rounded-2xl border border-border bg-muted/30 p-5 flex items-center gap-4 mb-7">
        <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <Building2 className="size-5" />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
            Partner
          </div>
          <div className="text-base font-semibold tracking-tight">FC Levadia noortekool</div>
          <div className="text-xs text-muted-foreground">Treener: Mart Kask · UEFA B</div>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-primary">
          <Sparkles className="size-3.5" /> Kinnitusvorm
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
        <PField icon={User} label="Õppija nimi" value="Markus Tamm" hint="8. klass" />
        <PField icon={Trophy} label="Tegevusala" value="Jalgpall" hint="Noortekool U16" />
        <PField icon={Clock} label="Treeningute sagedus" value="3× nädalas" hint="à 90 minutit" />
        <PField
          icon={Calendar}
          label="Periood"
          value="September 2025 — veebruar 2026"
          hint="6 kuud, käesolev õppeaasta"
        />

        <PField
          icon={Trophy}
          label="Võistlustel osalemine"
          value="4 võistlust"
          hint="sh Eesti MV U16 — 3. koht"
        />
        <PField
          icon={Calendar}
          label="Laagrites osalemine"
          value="2 laagrit"
          hint="Pärnu sügislaager · Rakvere talvelaager"
        />

        <div className="lg:col-span-2">
          <PField
            icon={ClipboardCheck}
            label="Juhendaja / treeneri kommentaar"
            value="Markus on järjepidev ja pühendunud. Ta võtab vastutuse meeskonnas, juhib pingutust pikkades mängudes ja aitab nooremaid mängijaid. Areng vastupidavuses ja taktikalises mõtlemises on selgelt näha."
          />
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2.5">
            Milliseid oskusi õppija on arendanud
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/20 bg-primary-subtle text-primary text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
            <Repeat className="size-3.5" /> Kas osalemine on järjepidev?
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-success/30 bg-success/10 text-success text-sm font-semibold">
            <CheckCircle2 className="size-4" />
            Jah — järjepidev (kohalkäimine ≥ 90%)
          </div>
        </div>
      </div>

      {/* Vastutus */}
      <div className="mt-9 rounded-2xl border-l-4 border-primary bg-primary-subtle/60 p-5 flex gap-3.5">
        <div className="shrink-0 size-9 rounded-lg bg-primary/15 flex items-center justify-center">
          <ShieldCheck className="size-4 text-primary" />
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1.5">
            Partneri roll
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">
            Partner ei tee kooli eest hindamisotsust, vaid annab{" "}
            <strong>tõendatud sisendi õpetaja otsustamiseks</strong>.
          </p>
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <UserCheck className="size-4" />
          Kinnitatud: <span className="font-semibold text-foreground">Mart Kask</span> ·
          digiallkiri
        </div>
        <Button
          size="lg"
          onClick={() => setSent(true)}
          disabled={sent}
          className="shadow-elevated group"
        >
          {sent ? (
            <>
              <CheckCircle2 className="size-4" />
              Kinnitus saadetud koolile
            </>
          ) : (
            <>
              Saada kinnitus koolile
              <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
      </div>
    </DemoShell>
  );
};

const PField = ({
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

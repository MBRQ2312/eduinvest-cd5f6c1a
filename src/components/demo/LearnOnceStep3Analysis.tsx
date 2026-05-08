import { useState } from "react";
import { ArrowRight, Sparkles, AlertCircle, CheckCircle2, XCircle, Languages, Trophy, Users2, Brain, Loader2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Props { onNext: () => void; onBack: () => void; }

const MARKUS_CASE = {
  õppija: "Markus T.",
  klass: "8. klass",
  tegevus: "Jalgpall, Pärnu Spordikool",
  sagedus: "3× nädalas",
  keskkond: "Eestikeelne treeningkeskkond",
  lisainfo: "Võistlused ja treeninglaagrid, treeneri kinnitus olemas",
  eesmärk: "Seosta tegevus kehalise kasvatuse ja eesti keele õpitulemustega",
};

type Strength = "strong" | "partial" | "weak";

interface Link { label: string; strength: Strength; }
interface Group { title: string; subtitle: string; icon: React.ComponentType<{ className?: string }>; links: Link[]; }

const GROUPS: Group[] = [
  {
    title: "Kehaline kasvatus",
    subtitle: "Spordikool → kooli õpitulemused",
    icon: Trophy,
    links: [
      { label: "Vastupidavuse arendamine", strength: "strong" },
      { label: "Liikumisoskuste arendamine", strength: "strong" },
      { label: "Koostöö ja aus mäng", strength: "partial" },
      { label: "Enesejuhtimine ja treeningharjumus", strength: "partial" },
    ],
  },
  {
    title: "Eesti keel / üleminekutoetus",
    subtitle: "Eestikeelne treeningkeskkond → funktsionaalne keelekasutus",
    icon: Languages,
    links: [
      { label: "Eestikeelsete juhiste mõistmine treeningul", strength: "partial" },
      { label: "Suuline suhtlus eestikeelses meeskonnas", strength: "partial" },
      { label: "Eneseanalüüs eesti keeles", strength: "strong" },
      { label: "Valdkondliku sõnavara kasutamine", strength: "partial" },
    ],
  },
  {
    title: "Üldpädevused",
    subtitle: "Päriseluline tõendus üldpädevustest",
    icon: Users2,
    links: [
      { label: "Suhtluspädevus", strength: "strong" },
      { label: "Enesemääratluspädevus", strength: "partial" },
      { label: "Õpipädevus", strength: "partial" },
      { label: "Sotsiaalne ja kodanikupädevus", strength: "partial" },
    ],
  },
];

const HAVE = ["Treeneri kinnitus", "Treeningmaht (3× nädalas)", "Võistlused ja laagrid"];
const MISSING = [
  "Õppija eneseanalüüs eesti keeles",
  "Õpetaja lühivestlus õppijaga",
  "Eesti keele kasutuse täpsem kirjeldus",
];

export const LearnOnceStep3Analysis = ({ onNext, onBack }: Props) => {
  const [loading, setLoading] = useState(false);
  const [aiText, setAiText] = useState<string | null>(null);
  const [aiId, setAiId] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-preanalysis", {
        body: { caseData: MARKUS_CASE },
      });
      if (error) throw error;
      if ((data as any)?.error) {
        toast({
          title: "AI eelanalüüsi ei õnnestunud genereerida",
          description: (data as any).error + " — mock-vastus jääb alles.",
          variant: "destructive",
        });
        return;
      }
      setAiText((data as any).text || "AI ei tagastanud sisu.");
      setAiId((data as any).id || null);
      toast({ title: "AI eelanalüüs valmis" });
    } catch (e: any) {
      toast({
        title: "Viga AI päringul",
        description: (e?.message || "Tundmatu viga") + " — mock-vastus jääb alles.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DemoShell
      stepLabel="03 — AI eelanalüüs"
      title="AI eelanalüüs õpetajale"
      subtitle="AI seob õppija sisendi õppekava õpitulemustega — kontrollitavalt ja läbipaistvalt."
    >
      <ParentNote text="AI ei pane hinnet ega vabasta tunnist. AI võrdleb sisendit kooli õppekavaga ja näitab õpetajale, kus on tugev seos, kus osaline ja millised tõendid puuduvad." />

      <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex items-start gap-3">
          <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
            <Zap className="size-5" />
          </div>
          <div>
            <div className="text-sm font-semibold">Genereeri reaalne AI eelanalüüs</div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Saadab Markuse juhtumi OpenAI Responses API-sse (published prompt v1).
            </div>
          </div>
        </div>
        <Button onClick={handleGenerate} disabled={loading} size="lg" className="shrink-0">
          {loading ? <><Loader2 className="size-4 animate-spin" /> Genereerin…</> : <><Sparkles className="size-4" /> Genereeri AI eelanalüüs</>}
        </Button>
      </div>

      {aiText && (
        <div className="rounded-2xl border-2 border-primary/40 bg-card p-6 mb-10 shadow-elevated">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Brain className="size-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold">AI eelanalüüs (OpenAI Responses API)</div>
                {aiId && <div className="text-[10px] text-muted-foreground font-mono mt-0.5 truncate">{aiId}</div>}
              </div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-success bg-success/10 border border-success/30 rounded-full px-2.5 py-1 shrink-0">Live</span>
          </div>
          <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">{aiText}</div>
        </div>
      )}

      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3 font-semibold">Mock eelvaade — näide struktuurist</div>

      {/* A. Seosed */}
      <SectionTitle eyebrow="A" title="Võimalikud seosed õpitulemustega" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
        {GROUPS.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-3 pb-4 mb-4 border-b border-border">
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <g.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-base font-semibold tracking-tight leading-snug">{g.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{g.subtitle}</div>
              </div>
            </div>
            <ul className="space-y-2">
              {g.links.map((l) => (
                <li key={l.label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-foreground/90 leading-snug">{l.label}</span>
                  <StrengthChip s={l.strength} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* B. Seose tugevus selgitus */}
      <SectionTitle eyebrow="B" title="Seose tugevus" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        <LegendCard tone="success" label="Tugev seos" desc="Tõendus on selge ja kooskõlas õpitulemusega." />
        <LegendCard tone="warning" label="Osaline seos" desc="Mõned aspektid kaetud, vajab täiendavat tõendit." />
        <LegendCard tone="muted" label="Nõrk seos" desc="AI ei näe piisavat sidet õpitulemusega." />
      </div>

      {/* C. Puuduvad tõendid */}
      <SectionTitle eyebrow="C" title="Puuduvad tõendid" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="rounded-2xl border border-success/25 bg-success-subtle p-5">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-success mb-3">Olemas</div>
          <ul className="space-y-2">
            {HAVE.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="size-4 mt-0.5 text-success shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-warning/30 bg-warning-subtle p-5">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-warning mb-3">Puudub või vajab täpsustust</div>
          <ul className="space-y-2">
            {MISSING.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm text-foreground/90">
                <XCircle className="size-4 mt-0.5 text-warning shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* D. AI soovitus */}
      <SectionTitle eyebrow="D" title="AI soovitus õpetajale" />
      <div className="rounded-2xl border border-primary/25 bg-primary-subtle p-6 mb-6">
        <div className="flex items-start gap-3">
          <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
            <Brain className="size-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-2">AI soovitus</div>
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
              Kehalise kasvatuse <strong>vastupidavuse ja regulaarse liikumisharjumuse</strong> osa võib
              olla osaliselt arvestatav. Eesti keele puhul <strong>ei soovita AI ainehinde asendamist</strong>,
              vaid soovitab kasutada treeningkogemust <strong>täiendava tõendina</strong> õppija
              eestikeelse suhtluskeskkonna ja funktsionaalse keelekasutuse kohta.
              <span className="block mt-2 font-semibold text-primary">Lõppotsuse teeb õpetaja.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border-l-4 border-primary bg-muted/40 p-5 flex gap-3.5">
        <AlertCircle className="size-4 text-primary mt-0.5 shrink-0" />
        <p className="text-sm leading-relaxed text-foreground/85">
          <strong>AI ei anna hinnet</strong> ega vabasta õppijat automaatselt tunnist.
          AI koostab õpetajale <strong>kontrollitava eelanalüüsi</strong>.
        </p>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Saada õpetajale otsuseks
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </DemoShell>
  );
};

const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold tabular">{eyebrow}</div>
    <div className="text-base md:text-lg font-semibold tracking-tight">{title}</div>
  </div>
);

const StrengthChip = ({ s }: { s: Strength }) => {
  const map: Record<Strength, { label: string; cls: string }> = {
    strong: { label: "Tugev", cls: "border-success/30 bg-success/10 text-success" },
    partial: { label: "Osaline", cls: "border-warning/30 bg-warning-subtle text-warning" },
    weak: { label: "Nõrk", cls: "border-border bg-muted text-muted-foreground" },
  };
  const m = map[s];
  return <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${m.cls}`}>{m.label}</span>;
};

const LegendCard = ({ tone, label, desc }: { tone: "success" | "warning" | "muted"; label: string; desc: string }) => {
  const cls = tone === "success" ? "border-success/30 bg-success-subtle" : tone === "warning" ? "border-warning/30 bg-warning-subtle" : "border-border bg-muted/40";
  const txt = tone === "success" ? "text-success" : tone === "warning" ? "text-warning" : "text-muted-foreground";
  return (
    <div className={`rounded-xl border p-4 ${cls}`}>
      <div className={`text-[10px] font-bold tracking-[0.22em] uppercase mb-1.5 ${txt}`}>{label}</div>
      <p className="text-xs text-foreground/80 leading-relaxed">{desc}</p>
    </div>
  );
};

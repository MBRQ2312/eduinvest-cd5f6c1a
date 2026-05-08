import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileSignature,
  Languages,
  Trophy,
  Users2,
  Send,
  Sparkles,
  Calendar,
  
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

type Confirmable = {
  id: string;
  label: string;
  hint: string;
};

const ATTENDANCE: Confirmable[] = [
  { id: "freq", label: "3 treeningut nädalas", hint: "Sept 2025 – aprill 2026" },
  { id: "regular", label: "Regulaarne osavõtt (≥80%)", hint: "32/38 treeningut" },
  { id: "matches", label: "Osales 6 ametlikul mängul", hint: "Tallinna noorte liiga" },
];

const SKILLS: Confirmable[] = [
  { id: "endurance", label: "Vastupidavus ja üldkehaline ettevalmistus" },
  { id: "team", label: "Meeskonnatöö ja rollide mõistmine" },
  { id: "ftp", label: "Fair play ja eneseregulatsioon" },
  { id: "tech", label: "Tehnilised oskused (sööt, löök, kontroll)" },
].map((s) => ({ ...s, hint: "Vastab põhikooli kehalise kasvatuse õpitulemustele" }));

const LANGUAGE: Confirmable[] = [
  { id: "lang-instr", label: "Treening toimub eesti keeles", hint: "Treener eestikeelne" },
  { id: "lang-team", label: "Tiimisuhtlus eesti keeles", hint: "Igapäevane suhtlus, mängusituatsioonid" },
  { id: "lang-feedback", label: "Tagasisidevestlused eesti keeles", hint: "Mängujärgne analüüs, individuaalvestlus" },
];

const Coach = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    freq: true,
    regular: true,
    matches: true,
    endurance: true,
    team: true,
    ftp: true,
    "lang-instr": true,
    "lang-team": true,
  });
  const [note, setNote] = useState(
    "Nikita on tubli ja püsiv. Kohal regulaarselt, juhendab nooremaid. Mängusituatsioonis suhtleb tiimikaaslastega eesti keeles, küsib täpsustusi ja annab juhiseid."
  );
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) =>
    setChecked((p) => ({ ...p, [id]: !p[id] }));

  const totalChecked = Object.values(checked).filter(Boolean).length;

  const submit = () => {
    setSubmitted(true);
    toast({
      title: "Kinnitus saadetud",
      description: `${totalChecked} tõendit edastatud kooli — õpetaja näeb seda otsuse vaates.`,
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-md mx-auto bg-background min-h-screen shadow-elevated">
        {/* Top bar */}
        <header className="sticky top-0 bg-card border-b border-border z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            <Link
              to="/"
              className="size-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
            >
              <ArrowLeft className="size-4" />
            </Link>
            <div className="text-sm font-semibold flex items-center gap-1.5">
              <Trophy className="size-4 text-primary" />
              Treeneri vaade
            </div>
            <Badge variant="outline" className="text-[10px]">FC Demo</Badge>
          </div>
        </header>

        {/* Hero */}
        <div className="p-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-5 shadow-elevated">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80 mb-2">
              <Sparkles className="size-3.5" />
              Päring koolilt
            </div>
            <div className="text-lg font-semibold leading-snug">
              Palume kinnitada Nikita T. (8.A) treeningandmed ja õpitulemused.
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-primary-foreground/80">
              <Clock className="size-3.5" />
              <span>Nõmme Põhikool · K. Lepik · vastust oodatakse 28.04</span>
            </div>
          </div>
        </div>

        {/* Õpilane */}
        <section className="px-4 pb-4">
          <div className="rounded-2xl border border-border bg-card p-4 flex items-center gap-3">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              NT
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-sm">Nikita T.</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                <Calendar className="size-3" /> Treenib alates sept 2023 · U15
              </div>
            </div>
          </div>
        </section>

        {/* Kohalkäimine */}
        <Block icon={Calendar} title="Kohalkäimine ja maht" tone="primary">
          {ATTENDANCE.map((a) => (
            <Row key={a.id} item={a} checked={!!checked[a.id]} onToggle={() => toggle(a.id)} />
          ))}
        </Block>

        {/* Õpitulemused */}
        <Block icon={Trophy} title="Õpitulemused (kehaline kasvatus)" tone="success">
          {SKILLS.map((a) => (
            <Row key={a.id} item={a} checked={!!checked[a.id]} onToggle={() => toggle(a.id)} />
          ))}
        </Block>

        {/* Eesti keel */}
        <Block icon={Languages} title="Eesti keele kasutus" tone="primary">
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
            Toetav tõend õppija eestikeelse õpikeskkonna kohta — <strong>ei asenda</strong> eesti
            keele aine hinnet.
          </p>
          {LANGUAGE.map((a) => (
            <Row key={a.id} item={a} checked={!!checked[a.id]} onToggle={() => toggle(a.id)} />
          ))}
        </Block>

        {/* Vabakommentaar */}
        <section className="px-4 pb-4">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-2 flex items-center gap-1.5">
            <FileSignature className="size-3.5" /> Treeneri kommentaar
          </div>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={5}
            className="text-sm"
            placeholder="Lisa lühike kirjeldus õppija arengust, hoiakust ja keelekasutusest…"
          />
        </section>

        {/* Vastutus */}
        <section className="px-4 pb-4">
          <div className="rounded-2xl border-l-4 border-primary bg-primary-subtle/50 p-4 text-xs leading-relaxed text-foreground/85">
            <div className="font-semibold text-foreground mb-1 flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" /> Mis sinu kinnitusega edasi juhtub
            </div>
            Kinnitus läheb otse õpetajale. <strong>Otsuse teeb õpetaja</strong>, mitte AI ega
            treener. Sinu roll on tõendada, mida õppija on trennis tegelikult teinud.
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-8">
          <Button
            onClick={submit}
            disabled={submitted}
            className="w-full shadow-elevated"
            size="lg"
          >
            <Send className="size-4" />
            {submitted ? "Kinnitus saadetud" : `Kinnita ja saada koolile (${totalChecked})`}
          </Button>
          {submitted && (
            <div className="mt-3 rounded-xl border border-success/30 bg-success-subtle p-3 text-xs text-foreground/85 flex items-start gap-2">
              <CheckCircle2 className="size-4 text-success mt-0.5 shrink-0" />
              <span>
                Aitäh! Õpetaja näeb sinu kinnitust LearnOnce eelvaates ja saab selle põhjal
                otsuse vormistada.
              </span>
            </div>
          )}
        </section>

        <footer className="px-4 pb-6 text-[10px] text-muted-foreground text-center tracking-[0.18em] uppercase">
          EduInvest LearnOnce · treeneri demovaade
        </footer>
      </div>
    </div>
  );
};

const Block = ({
  icon: Icon,
  title,
  tone,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tone: "primary" | "success";
  children: React.ReactNode;
}) => (
  <section className="px-4 pb-4">
    <div
      className={`text-[10px] font-bold tracking-[0.22em] uppercase mb-2 flex items-center gap-1.5 ${
        tone === "success" ? "text-success" : "text-primary"
      }`}
    >
      <Icon className="size-3.5" /> {title}
    </div>
    <div className="rounded-2xl border border-border bg-card p-3 space-y-1">{children}</div>
  </section>
);

const Row = ({
  item,
  checked,
  onToggle,
}: {
  item: Confirmable;
  checked: boolean;
  onToggle: () => void;
}) => (
  <label
    className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-smooth ${
      checked ? "bg-primary-subtle/40" : "hover:bg-muted/40"
    }`}
  >
    <Checkbox checked={checked} onCheckedChange={onToggle} className="mt-0.5" />
    <div className="min-w-0">
      <div className="text-sm font-medium leading-snug">{item.label}</div>
      {item.hint && (
        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.hint}</div>
      )}
    </div>
  </label>
);

export default Coach;

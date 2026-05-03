import { useState } from "react";
import { ArrowRight, CheckCircle2, CircleDashed, FileSearch, XCircle, ShieldCheck, ThumbsUp, Pencil, ThumbsDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";

interface Props { onNext: () => void; onBack: () => void; }

type Decision = "full" | "partial" | "evidence" | "none";
type LinkAction = "confirm" | "modify" | "reject" | null;

const DECISIONS: { id: Decision; label: string; hint: string; icon: typeof CheckCircle2; tone: "success" | "primary" | "warning" | "destructive" }[] = [
  { id: "full", label: "Arvestan täielikult", hint: "Õpitulemus on kaetud välise tõendiga.", icon: CheckCircle2, tone: "success" },
  { id: "partial", label: "Arvestan osaliselt", hint: "Osa kaetud, ülejäänu vajab kooli vaatlust.", icon: CircleDashed, tone: "primary" },
  { id: "evidence", label: "Vajan lisatõendit", hint: "Õppija lisab refleksiooni või täienduse.", icon: FileSearch, tone: "warning" },
  { id: "none", label: "Ei arvesta", hint: "Õppekava maht või oskused vajavad kooli tunde.", icon: XCircle, tone: "destructive" },
];

const toneClass: Record<string, string> = {
  success: "border-success/25 bg-success-subtle text-success hover:border-success",
  primary: "border-primary/25 bg-primary-subtle text-primary hover:border-primary",
  warning: "border-warning/30 bg-warning-subtle text-warning hover:border-warning",
  destructive: "border-destructive/25 bg-destructive/5 text-destructive hover:border-destructive",
};
const selectedToneClass: Record<string, string> = {
  success: "border-success bg-success text-success-foreground shadow-elevated",
  primary: "border-primary bg-primary text-primary-foreground shadow-elevated",
  warning: "border-warning bg-warning text-white shadow-elevated",
  destructive: "border-destructive bg-destructive text-destructive-foreground shadow-elevated",
};

const AI_LINKS = [
  { area: "Kehaline kasvatus", text: "Vastupidavus ja liikumisharjumus — tugev seos" },
  { area: "Kehaline kasvatus", text: "Liikumisoskused — osaline, vajab kooli vaatlust" },
  { area: "Eesti keel", text: "Eestikeelne suhtluskeskkond — toetav tõend, mitte hinde asendus" },
  { area: "Üldpädevused", text: "Suhtluspädevus, enesejuhtimine — osaline tõend" },
];

export const LearnOnceStep4Decision = ({ onNext, onBack }: Props) => {
  const [pe, setPe] = useState<Decision | null>("partial");
  const [est, setEst] = useState<Decision | null>("evidence");
  const [actions, setActions] = useState<Record<number, LinkAction>>({ 0: "confirm", 1: "modify", 2: "modify", 3: "confirm" });

  return (
    <DemoShell
      stepLabel="04 — Õpetaja otsus"
      title="Õpetaja otsus"
      subtitle="Õpetaja teeb iga aine kohta otsuse ja kinnitab, muudab või lükkab AI seosed tagasi."
    >
      <ParentNote text="Õpetaja näeb õppija sisendit, kooliandmeid ja AI eelanalüüsi koos. Tema valib, kas kogemus arvestatakse täielikult, osaliselt, vajab lisatõendit või ei arvestata. Iga AI seos saab inimese kinnituse." />

      <div className="rounded-2xl border-l-4 border-primary bg-primary-subtle/60 p-5 mb-7 flex items-start gap-3">
        <ShieldCheck className="size-5 text-primary mt-0.5 shrink-0" />
        <p className="text-sm text-foreground/85 leading-relaxed">
          <strong>AI ei vabasta tunnist ega anna hinnet.</strong> Vajadusel <strong>õppekoormus kohandatud</strong> —
          õppija ei pea kordama neid õpitulemusi, mille kohta on piisav tõendus. Kool määrab, millistes
          tundides, tegevustes või refleksioonides õppija osaleb.
        </p>
      </div>

      {/* Aine kohta otsus */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <DecisionPanel title="Kehaline kasvatus" value={pe} onChange={setPe} />
        <DecisionPanel title="Eesti keel (toetav tõend)" value={est} onChange={setEst} />
      </div>

      {/* AI seoste kinnitus */}
      <div className="rounded-2xl border border-border bg-card p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="size-4 text-primary" />
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">AI pakutud seosed — õpetaja kinnitus</div>
        </div>
        <ul className="space-y-3">
          {AI_LINKS.map((l, i) => (
            <li key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/20">
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">{l.area}</div>
                <div className="text-sm font-medium text-foreground/90 mt-0.5 leading-snug">{l.text}</div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <ActionBtn icon={ThumbsUp} label="Kinnitan" active={actions[i] === "confirm"} tone="success" onClick={() => setActions({ ...actions, [i]: "confirm" })} />
                <ActionBtn icon={Pencil} label="Muudan" active={actions[i] === "modify"} tone="warning" onClick={() => setActions({ ...actions, [i]: "modify" })} />
                <ActionBtn icon={ThumbsDown} label="Lükkan" active={actions[i] === "reject"} tone="destructive" onClick={() => setActions({ ...actions, [i]: "reject" })} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Näidisotsuse sõnastus */}
      <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-7 shadow-elevated mb-6">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80 mb-3">Õpetaja otsus — näidissõnastus</div>
        <div className="space-y-4 text-sm leading-relaxed">
          <p><strong>Kehaline kasvatus:</strong> Arvestan osaliselt. Markuse jalgpallitreening katab vastupidavuse ja regulaarse liikumisharjumuse osa. Liikumisoskuste koolipõhine osa vajab veel õpetaja vaatlust.</p>
          <p><strong>Eesti keel:</strong> Ei arvesta eraldi aineosa asendusena, kuid märgin kogemuse tõendina eestikeelses keskkonnas suhtlemise ja juhiste mõistmise kohta. Õppija lisab lühikese eneseanalüüsi eesti keeles.</p>
          <p className="border-l-2 border-white/40 pl-3 italic"><strong>Õppekorralduslik kokkulepe:</strong> Markus osaleb kehalise kasvatuse tundides valikuliselt. Tundides, kus käsitletakse juba kaetud osa, teeb ta iseseisva taastumise, liikumispäeviku või eneseanalüüsi ülesande.</p>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-xs font-semibold">
          Õppekoormus kohandatud · mitte vabastatud
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Edasi: selgitus perele
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </DemoShell>
  );
};

const DecisionPanel = ({ title, value, onChange }: { title: string; value: Decision | null; onChange: (d: Decision) => void }) => (
  <div className="rounded-2xl border border-border bg-card p-5">
    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-3">Otsus — {title}</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {DECISIONS.map(({ id, label, hint, icon: Icon, tone }) => {
        const selected = value === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`text-left p-3 rounded-xl border-2 transition-smooth flex items-start gap-2.5 ${selected ? selectedToneClass[tone] : toneClass[tone]}`}
          >
            <Icon className="size-4 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <div className="font-semibold text-sm tracking-tight leading-snug">{label}</div>
              <div className={`text-[11px] mt-0.5 leading-snug ${selected ? "opacity-85" : "opacity-75"}`}>{hint}</div>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

const ActionBtn = ({ icon: Icon, label, active, tone, onClick }: { icon: typeof ThumbsUp; label: string; active: boolean; tone: "success" | "warning" | "destructive"; onClick: () => void }) => {
  const cls = active
    ? tone === "success" ? "bg-success text-success-foreground border-success" : tone === "warning" ? "bg-warning text-white border-warning" : "bg-destructive text-destructive-foreground border-destructive"
    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground";
  return (
    <button onClick={onClick} title={label} className={`size-9 rounded-lg border-2 flex items-center justify-center transition-smooth ${cls}`}>
      <Icon className="size-4" />
    </button>
  );
};

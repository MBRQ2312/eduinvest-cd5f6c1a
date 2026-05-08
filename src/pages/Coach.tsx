import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Send,
  ShieldCheck,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { toast } from "@/hooks/use-toast";

const STEPS = [
  "Kontrolli andmed",
  "Kinnita osalemine",
  "Lisa kommentaar",
  "Saada koolile",
];

type Item = { id: string; label: string; hint?: string };

const PARTICIPATION: Item[] = [
  { id: "freq", label: "3 trenni nädalas", hint: "sept 2025 – apr 2026" },
  { id: "regular", label: "Osalus ≥80%", hint: "32/38 trenni" },
  { id: "matches", label: "6 ametlikku mängu", hint: "Tallinna noorte liiga" },
  { id: "lang", label: "Trenn toimub eesti keeles", hint: "treener + tiimisuhtlus" },
];

const Coach = () => {
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean>>({
    freq: true,
    regular: true,
    matches: true,
    lang: true,
  });
  const [note, setNote] = useState(
    "Nikita on regulaarne ja püsiv. Suhtleb tiimis eesti keeles."
  );
  const [submitted, setSubmitted] = useState(false);

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const toggle = (id: string) =>
    setChecked((p) => ({ ...p, [id]: !p[id] }));

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    setSubmitted(true);
    toast({
      title: "Kinnitus saadetud",
      description: `${totalChecked} kinnitust edastatud koolile.`,
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-[430px] mx-auto bg-background min-h-screen shadow-elevated flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 bg-card border-b border-border z-10">
          <div className="px-4 py-3 flex items-center justify-between gap-3">
            <Link
              to="/"
              className="size-11 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth shrink-0"
              aria-label="Tagasi"
            >
              <ArrowLeft className="size-5" />
            </Link>
            <div className="text-base font-semibold flex items-center gap-1.5 min-w-0">
              <Trophy className="size-4 text-primary shrink-0" />
              <span className="truncate">Treeneri kinnitus</span>
            </div>
            <Badge variant="outline" className="text-[10px] shrink-0">
              FC Demo
            </Badge>
          </div>
        </header>

        {/* Stepper */}
        <div className="px-4 pt-4">
          <div className="flex items-center gap-1.5">
            {STEPS.map((label, i) => (
              <div key={label} className="flex-1 min-w-0">
                <div
                  className={`h-1.5 rounded-full transition-smooth ${
                    i <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
                <div
                  className={`mt-1.5 text-[10px] font-medium leading-tight break-words ${
                    i === step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {i + 1}. {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pt-4 pb-1">
          <p className="text-sm text-muted-foreground leading-snug break-words">
            Kool palub kinnitada, mida õppija trennis päriselt tegi.
          </p>
        </div>

        {/* Content */}
        <main className="flex-1 px-4 pb-32 pt-4 space-y-4">
          {step === 0 && (
            <>
              <StatusCard />
              <ResponsibilityCard />
            </>
          )}

          {step === 1 && (
            <section>
              <h2 className="text-base font-semibold mb-3">
                Märgi, mis trennis päriselt toimus
              </h2>
              <div className="rounded-[18px] border border-border bg-card p-2 space-y-1">
                {PARTICIPATION.map((a) => (
                  <Row
                    key={a.id}
                    item={a}
                    checked={!!checked[a.id]}
                    onToggle={() => toggle(a.id)}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed break-words">
                Sa ei hinda õppekava — kinnitad ainult osalemist, mahtu, sisu ja
                keelt.
              </p>
            </section>
          )}

          {step === 2 && (
            <section>
              <h2 className="text-base font-semibold mb-2">
                Lühike kommentaar (vabatahtlik)
              </h2>
              <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={6}
                className="text-base rounded-[18px] p-4"
                placeholder="Mida soovid koolile õppija kohta lisada?"
              />
            </section>
          )}

          {step === 3 && (
            <section className="space-y-4">
              <h2 className="text-base font-semibold">Kokkuvõte</h2>
              <SummaryRow label="Õppija" value="Nikita T., 8.A" />
              <SummaryRow label="Tegevus" value="Jalgpall, FC Demo U15" />
              <SummaryRow
                label="Kinnitatud punkte"
                value={`${totalChecked} / ${PARTICIPATION.length}`}
              />
              <div className="rounded-[18px] border border-border bg-card p-4">
                <div className="text-xs font-semibold text-muted-foreground mb-1">
                  Kommentaar
                </div>
                <div className="text-sm leading-relaxed break-words whitespace-pre-wrap">
                  {note || "—"}
                </div>
              </div>

              {submitted && (
                <div className="rounded-[18px] border border-success/30 bg-success-subtle p-4 text-sm flex items-start gap-2">
                  <CheckCircle2 className="size-5 text-success mt-0.5 shrink-0" />
                  <span className="break-words">
                    Aitäh! Õpetaja näeb sinu kinnitust ja saab otsuse
                    vormistada.
                  </span>
                </div>
              )}
            </section>
          )}
        </main>

        {/* Sticky bottom bar */}
        <div className="sticky bottom-0 left-0 right-0 bg-card border-t border-border p-4">
          <div className="flex items-center gap-2">
            {step > 0 && (
              <Button
                variant="outline"
                onClick={back}
                className="h-12 px-4"
                aria-label="Tagasi"
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}
            {step < STEPS.length - 1 ? (
              <Button onClick={next} className="flex-1 h-12 text-base">
                Edasi
                <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button
                onClick={submit}
                disabled={submitted}
                className="flex-1 h-12 text-base shadow-elevated"
              >
                <Send className="size-4" />
                {submitted ? "Saadetud" : "Kinnita ja saada koolile"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusCard = () => (
  <div className="rounded-[18px] bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-4 shadow-elevated">
    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80 mb-2">
      Päring koolilt
    </div>
    <div className="text-base font-semibold leading-snug break-words">
      Nõmme Põhikool
    </div>
    <div className="mt-1 flex items-center gap-1.5 text-xs text-primary-foreground/85">
      <Clock className="size-3.5 shrink-0" />
      <span className="break-words">vastust oodatakse 28.04</span>
    </div>
    <div className="mt-3 pt-3 border-t border-primary-foreground/20 space-y-1.5 text-sm">
      <KV k="Õppija" v="Nikita T., 8.A" />
      <KV k="Tegevus" v="Jalgpallitrenn, FC Demo U15" />
    </div>
  </div>
);

const ResponsibilityCard = () => (
  <Collapsible>
    <div className="rounded-[18px] border-l-4 border-primary bg-primary-subtle/60 p-4">
      <div className="flex items-start gap-2">
        <ShieldCheck className="size-5 text-primary mt-0.5 shrink-0" />
        <div className="min-w-0">
          <div className="font-semibold text-sm leading-snug break-words">
            Treener ei tee kooli otsust.
          </div>
          <div className="text-sm text-foreground/80 mt-1 leading-relaxed break-words">
            Sa kinnitad osalemise, mahu, sisu ja keele. Otsuse teeb kool.
          </div>
          <CollapsibleTrigger className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary [&[data-state=open]>svg]:rotate-180">
            Vaata rohkem
            <ChevronDown className="size-3.5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 text-xs text-foreground/75 leading-relaxed break-words">
            Sinu kinnitus läheb otse õpetajale. Õpetaja kontrollib, kuidas see
            sobib põhikooli õppekavaga, ja teeb arvestamise otsuse.
          </CollapsibleContent>
        </div>
      </div>
    </div>
  </Collapsible>
);

const KV = ({ k, v }: { k: string; v: string }) => (
  <div className="flex flex-wrap gap-x-2">
    <span className="text-primary-foreground/70 text-xs">{k}:</span>
    <span className="font-medium break-words">{v}</span>
  </div>
);

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-[18px] border border-border bg-card p-4 flex flex-wrap items-center justify-between gap-2">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-sm font-semibold break-words">{value}</span>
  </div>
);

const Row = ({
  item,
  checked,
  onToggle,
}: {
  item: Item;
  checked: boolean;
  onToggle: () => void;
}) => (
  <label
    className={`flex items-start gap-3 p-3 rounded-[14px] cursor-pointer transition-smooth min-h-[44px] ${
      checked ? "bg-primary-subtle/50" : "hover:bg-muted/40"
    }`}
  >
    <Checkbox
      checked={checked}
      onCheckedChange={onToggle}
      className="mt-0.5 size-5"
    />
    <div className="min-w-0 flex-1">
      <div className="text-sm font-medium leading-snug break-words">
        {item.label}
      </div>
      {item.hint && (
        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed break-words">
          {item.hint}
        </div>
      )}
    </div>
  </label>
);

export default Coach;

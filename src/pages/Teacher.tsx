import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Save, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { AiBadge, EvidenceItem, InfoCard, RelationCard, SectionLabel } from "@/components/demo/primitives";
import { DEMO_CASE } from "@/components/demo/demoCase";
import { useAiAnalysis } from "@/hooks/useAiAnalysis";

const OPTIONS = [
  { id: "full", label: "Arvestan täielikult" },
  { id: "partial", label: "Arvestan osaliselt" },
  { id: "more", label: "Vajan lisatõendit" },
  { id: "no", label: "Ei arvesta" },
] as const;

const Teacher = () => {
  const c = DEMO_CASE;
  const { isLoading } = useAiAnalysis(c);
  const [choice, setChoice] = useState<(typeof OPTIONS)[number]["id"]>("partial");
  const [note, setNote] = useState(
    "Kehaline kasvatus: arvestan osaliselt — treening katab regulaarse liikumise ja vastupidavuse osa.",
  );
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    toast({
      title: "Otsus salvestatud",
      description: "Pere ja koolijuht näevad otsust oma vaates.",
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Tagasi
          </Link>
          <AiBadge />
        </div>

        <header className="mb-6">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-2">
            Õpetaja vaade · Kehaline kasvatus · {c.student.grade}
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {c.student.short} — {c.activity.kind.toLowerCase()} {c.activity.frequency}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Treener: {c.activity.coach} · {c.activity.coachLicense}
          </p>
        </header>

        {/* AI süntees */}
        <section className="mb-6">
          <SectionLabel>AI süntees vs RÕK §11.4</SectionLabel>
          {isLoading ? (
            <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
              AI eelanalüüs valmistatakse taustal…
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <RelationCard tone="success" title="Tugev seos" items={c.aiAnalysis.strong} />
              <RelationCard tone="warning" title="Osaline seos" items={c.aiAnalysis.partial} />
              <RelationCard tone="destructive" title="Puudu" items={c.aiAnalysis.missing} />
            </div>
          )}
        </section>

        {/* Tõendid */}
        <section className="mb-6">
          <SectionLabel>Tõendid</SectionLabel>
          <div className="rounded-2xl border border-border bg-card p-5">
            {c.evidence.map((e) => (
              <EvidenceItem key={e.id} label={e.label} status={e.status} />
            ))}
          </div>
        </section>

        {/* Otsus */}
        <section className="mb-6">
          <SectionLabel>Sinu otsus</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setChoice(o.id)}
                className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-smooth ${
                  choice === o.id ? "border-primary bg-primary-subtle/50 shadow-sm" : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <span
                  className={`size-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                    choice === o.id ? "border-primary" : "border-border"
                  }`}
                >
                  {choice === o.id && <span className="size-2.5 rounded-full bg-primary" />}
                </span>
                <span className="text-sm font-semibold">{o.label}</span>
              </button>
            ))}
          </div>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            placeholder="Selgitus perele ja õppijale…"
          />
        </section>

        <InfoCard tone="primary" className="mb-6">
          Otsus dokumenteeritakse kooli töövoos ja saadetakse perele lihtsa selgitusena.
        </InfoCard>

        <div className="flex justify-end gap-3">
          <Button onClick={save} disabled={saved} size="lg" className="shadow-elevated">
            {saved ? <Check className="size-4" /> : <Save className="size-4" />}
            {saved ? "Salvestatud" : "Salvesta otsus"}
          </Button>
          <Button variant="outline" size="lg">
            <Send className="size-4" /> Saada selgitus perele
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Teacher;

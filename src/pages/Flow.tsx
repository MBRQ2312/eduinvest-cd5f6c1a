import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Check, User, Sparkles, GraduationCap, TrendingUp,
  Trophy, Building2, Languages, Clock, ShieldCheck, FileCheck, AlertCircle,
  CheckCircle2, Eye, CalendarRange, Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ===== Brand palette (sama mis pitch'is) ===== */
const C = {
  bg: "#F7F5EF",
  text: "#111827",
  green: "#053F35",
  teal: "#006D6F",
  purple: "#7C6BEA",
  lime: "#D6D04A",
  orange: "#E07A3C",
  cardBg: "#FFFFFF",
  subtle: "#EEEAE0",
  border: "#E2DCCC",
} as const;

type StepId = 0 | 1 | 2 | 3;

const STEPS: {
  id: StepId;
  short: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}[] = [
  { id: 0, short: "Õppija sisend", title: "Õppija ja pere sisend", icon: <User className="size-4" />, color: C.teal },
  { id: 1, short: "AI eelanalüüs", title: "AI eelanalüüs", icon: <Sparkles className="size-4" />, color: C.purple },
  { id: 2, short: "Õpetaja otsus", title: "Õpetaja otsus", icon: <GraduationCap className="size-4" />, color: C.green },
  { id: 3, short: "Mõju", title: "Mõju ja koolijuhi vaade", icon: <TrendingUp className="size-4" />, color: C.lime },
];

type Subject = "pe" | "estonian";

const Flow = () => {
  const [step, setStep] = useState<StepId>(0);
  const [submitted, setSubmitted] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>(["pe", "estonian"]);
  const [aiRun, setAiRun] = useState<"idle" | "running" | "done">("idle");
  const [decision, setDecision] = useState<"full" | "partial" | "more" | null>(null);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && step < 3) setStep((s) => (s + 1) as StepId);
      if (e.key === "ArrowLeft" && step > 0) setStep((s) => (s - 1) as StepId);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const next = () => step < 3 && setStep((s) => (s + 1) as StepId);
  const prev = () => step > 0 && setStep((s) => (s - 1) as StepId);

  // Edasi nupu lukustus, kuni kasutaja on sammu "läbi mänginud"
  const canAdvance =
    (step === 0 && submitted) ||
    (step === 1 && aiRun === "done") ||
    (step === 2 && decision !== null) ||
    step === 3;

  const progressPct = ((step + 1) / STEPS.length) * 100;

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur-md border-b"
        style={{ background: `${C.bg}E6`, borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
            <ArrowLeft className="size-4" /> Tagasi
          </Link>
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: C.teal }}>
            Nikita juhtum · täis-simulatsioon
          </div>
          <Link to="/pitch" className="text-sm hover:underline" style={{ color: C.teal }}>
            Pitch →
          </Link>
        </div>

        {/* Progress indicator */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            {STEPS.map((s, i) => {
              const done = i < step;
              const active = i === step;
              return (
                <div key={s.id} className="flex items-center gap-2 sm:gap-3 flex-1">
                  <button
                    type="button"
                    onClick={() => setStep(s.id)}
                    className="flex items-center gap-2 min-w-0 group"
                  >
                    <span
                      className="size-8 rounded-full flex items-center justify-center shrink-0 transition-all"
                      style={{
                        background: active ? s.color : done ? s.color : C.cardBg,
                        color: active || done ? "white" : "#9CA3AF",
                        border: active || done ? "none" : `1.5px solid ${C.border}`,
                        transform: active ? "scale(1.1)" : "scale(1)",
                        boxShadow: active ? `0 0 0 4px ${s.color}25` : "none",
                      }}
                    >
                      {done ? <Check className="size-4" /> : s.icon}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-medium hidden sm:block transition-colors ${
                        active ? "" : done ? "" : "text-muted-foreground"
                      }`}
                      style={{ color: active ? C.text : done ? C.text : "#9CA3AF" }}
                    >
                      {s.short}
                    </span>
                  </button>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-[2px] rounded-full overflow-hidden" style={{ background: C.border }}>
                      <div
                        className="h-full transition-all duration-500"
                        style={{ width: i < step ? "100%" : "0%", background: s.color }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ background: C.border }}>
            <div
              className="h-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: STEPS[step].color }}
            />
          </div>
        </div>
      </header>

      {/* Slide content with transition */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {step === 0 && <FlowOverview />}
        <div key={step} className="animate-in fade-in slide-in-from-right-4 duration-300">

          {step === 0 && (
            <Step1
              subjects={subjects}
              setSubjects={setSubjects}
              submitted={submitted}
              onSubmit={() => setSubmitted(true)}
              onNext={next}
            />
          )}
          {step === 1 && (
            <Step2
              subjects={subjects}
              aiRun={aiRun}
              onRun={() => {
                setAiRun("running");
                setTimeout(() => setAiRun("done"), 1600);
              }}
              onNext={next}
            />
          )}
          {step === 2 && <Step3 decision={decision} setDecision={setDecision} onNext={next} />}
          {step === 3 && <Step4 decision={decision} subjects={subjects} />}
        </div>

        {/* Footer nav */}
        <div className="mt-8 flex items-center justify-between gap-3">
          <Button
            variant="outline"
            onClick={prev}
            disabled={step === 0}
            className="rounded-full"
          >
            <ArrowLeft className="size-4" /> Tagasi
          </Button>
          <div className="text-xs hidden sm:block" style={{ color: "#9CA3AF" }}>
            ← → klahvid navigeerimiseks
          </div>
          {step < 3 ? (
            <Button
              onClick={next}
              disabled={!canAdvance}
              className="rounded-full disabled:opacity-50"
              style={{ background: STEPS[step].color, color: "white" }}
            >
              Edasi <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button asChild className="rounded-full" style={{ background: C.green, color: "white" }}>
              <Link to="/juht">
                <Eye className="size-4" /> Vaata koolijuhi vaadet
              </Link>
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

/* ============== Ülevaate plokk (kuvatakse 1. sammu kohal) ============== */
const OVERVIEW_STEPS = [
  { n: "01", title: "Taotlus perelt", text: "Lapsevanem või õppija annab tahteavalduse: palun hinnake, kas koolivälist õppimist saab arvestada.", color: C.teal },
  { n: "02", title: "Kool seob õppekavaga", text: "Kool valib õppeaine, õpitulemused ja tingimused. Pere ei pea ise teadma, mis täpselt kattub.", color: C.green },
  { n: "03", title: "Tõend partnerilt", text: "Treener, huvikool või juhendaja kinnitab osalemise, mahu, tegevuse sisu ja keele.", color: C.orange },
  { n: "04", title: "AI eelanalüüs", text: "AI koondab tõendid, pakub võimalikke seoseid ja näitab, mis vajab õpetaja hinnangut.", color: C.purple },
  { n: "05", title: "Otsus koolilt", text: "Õpetaja teeb otsuse: arvestan, arvestan osaliselt, vajan lisatõendit või ei arvesta.", color: C.green },
  { n: "06", title: "Selgitus ja koondvaade", text: "Pere saab arusaadava selgituse. Koolijuht näeb korduvaid mustreid ja saab kujundada ühist praktikat.", color: C.lime },
] as const;

const FlowOverview = () => (
  <section
    className="mb-10 rounded-[20px] border p-6 sm:p-8"
    style={{ background: C.cardBg, borderColor: C.border }}
  >
    <div className="text-[11px] uppercase font-semibold mb-2" style={{ color: C.teal, letterSpacing: "0.18em" }}>
      Testjuhtum Nikita
    </div>
    <h2 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight" style={{ color: C.text }}>
      Üks otsustusvoog lõpuni
    </h2>
    <p className="mt-2 text-sm sm:text-base" style={{ color: "#4B5563" }}>
      Taotlusest kooli põhjendatud otsuseni.
    </p>

    <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {OVERVIEW_STEPS.map((s) => (
        <li
          key={s.n}
          className="rounded-2xl border p-4 transition-shadow hover:shadow-sm"
          style={{ background: C.bg, borderColor: C.border }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className="size-9 rounded-lg flex items-center justify-center text-[13px] font-bold"
              style={{ background: `${s.color}18`, color: s.color }}
            >
              {s.n}
            </div>
            <h3 className="text-[15px] font-semibold tracking-tight" style={{ color: C.text }}>
              {s.title}
            </h3>
          </div>
          <p className="text-[13px] leading-relaxed" style={{ color: "#6B7280" }}>
            {s.text}
          </p>
        </li>
      ))}
    </ol>
  </section>
);

/* ============== Slaidid ============== */

const Card = ({
  children,
  bg = C.cardBg,
  border = C.border,
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  border?: string;
  className?: string;
}) => (
  <div
    className={`rounded-[20px] border p-5 sm:p-6 shadow-sm ${className}`}
    style={{ background: bg, borderColor: border }}
  >
    {children}
  </div>
);

const Eyebrow = ({ children, color = C.teal }: { children: React.ReactNode; color?: string }) => (
  <div
    className="text-[11px] uppercase font-semibold mb-2"
    style={{ color, letterSpacing: "0.18em" }}
  >
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl sm:text-4xl font-semibold leading-[1.1] tracking-tight" style={{ color: C.text }}>
    {children}
  </h2>
);

/* === Step 1: Õppija sisend (interaktiivne taotlus) === */
const Step1 = ({
  subjects,
  setSubjects,
  submitted,
  onSubmit,
  onNext,
}: {
  subjects: Subject[];
  setSubjects: (fn: (s: Subject[]) => Subject[]) => void;
  submitted: boolean;
  onSubmit: () => void;
  onNext: () => void;
}) => {
  const toggle = (s: Subject) =>
    setSubjects((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
  <div>
    <Eyebrow>1 / 4 · Õppija ja pere sisend</Eyebrow>
    <Title>Nikita Tamm, 8.A — taotlus arvestamiseks</Title>
    <p className="mt-3 text-base sm:text-lg" style={{ color: "#4B5563" }}>
      Pere algatab taotluse. Vali ained, mille puhul kool peaks koolivälist õppimist hindama.
    </p>

    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="size-12 rounded-full flex items-center justify-center"
            style={{ background: C.teal, color: "white" }}>
            <Trophy className="size-6" />
          </div>
          <div>
            <div className="text-xs" style={{ color: "#6B7280" }}>Koolivälise õppe liik</div>
            <div className="font-semibold text-lg" style={{ color: C.text }}>Spordikool</div>
          </div>
        </div>
        <Field icon={Building2} label="Huvikool" value="FC Levadia U16" />
        <Field icon={Clock} label="Maht" value="3× nädalas, à 90 min" />
        <Field icon={Languages} label="Tegevuse keel" value="Eesti keel" />
        <Field icon={ShieldCheck} label="Treener" value="Mart Kask · UEFA B litsents" />
      </Card>

      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <Eyebrow color={C.green}>Vali ained, mille kohta küsida arvestamist</Eyebrow>

        <div className="mt-3 space-y-2">
          {[
            { id: "pe" as const, t: "Kehaline kasvatus", d: "regulaarne liikumine, vastupidavus, koostöö" },
            { id: "estonian" as const, t: "Eesti keele praktiline kasutus", d: "treeningu juhised ja suhtlus eesti keeles" },
          ].map((opt) => {
            const checked = subjects.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                disabled={submitted}
                onClick={() => toggle(opt.id)}
                className="w-full text-left rounded-xl border-2 p-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: checked ? `${C.green}15` : C.cardBg,
                  borderColor: checked ? C.green : C.border,
                }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="size-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: checked ? C.green : "white",
                      border: `1.5px solid ${checked ? C.green : C.border}`,
                      color: "white",
                    }}
                  >
                    {checked && <Check className="size-3.5" />}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold" style={{ color: C.text }}>{opt.t}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#6B7280" }}>{opt.d}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <div className="text-[11px] uppercase tracking-wider mb-2" style={{ color: "#6B7280" }}>
            Lisatud tõendid
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { i: <FileCheck className="size-3.5" />, t: "Treeneri kinnitus" },
              { i: <FileCheck className="size-3.5" />, t: "Treeninggraafik" },
              { i: <FileCheck className="size-3.5" />, t: "Võistlusinfo" },
              { i: <AlertCircle className="size-3.5" />, t: "Õppija eneseanalüüs (puudu)" },
            ].map((e) => (
              <span
                key={e.t}
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: e.t.includes("puudu") ? `${C.orange}20` : `${C.green}15`,
                  color: e.t.includes("puudu") ? C.orange : C.green,
                }}
              >
                {e.i} {e.t}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>

    {!submitted ? (
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl p-4"
        style={{ background: C.subtle, borderLeft: `3px solid ${C.teal}` }}>
        <p className="text-sm" style={{ color: C.text }}>
          {subjects.length === 0
            ? "Vali vähemalt üks aine, et taotlust esitada."
            : `Esitad taotluse ${subjects.length} aine kohta. Kool saab selle koheselt töövoogu.`}
        </p>
        <Button
          onClick={onSubmit}
          disabled={subjects.length === 0}
          className="rounded-full disabled:opacity-50"
          style={{ background: C.teal, color: "white" }}
        >
          Esita taotlus koolile <ArrowRight className="size-4" />
        </Button>
      </div>
    ) : (
      <div className="mt-6 rounded-xl p-4 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2"
        style={{ background: `${C.green}15`, borderLeft: `3px solid ${C.green}` }}>
        <CheckCircle2 className="size-5 mt-0.5 shrink-0" style={{ color: C.green }} />
        <div className="flex-1">
          <p className="text-sm font-medium" style={{ color: C.text }}>
            Taotlus esitatud. Kool sai sisendi ja AI alustab eelanalüüsi.
          </p>
        </div>
        <Button onClick={onNext} className="rounded-full" style={{ background: C.purple, color: "white" }}>
          AI eelanalüüsi <ArrowRight className="size-4" />
        </Button>
      </div>
    )}
  </div>
  );
};

const Field = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex items-start gap-3 py-2 border-t" style={{ borderColor: `${C.border}80` }}>
    <Icon className="size-4 mt-0.5 shrink-0" style={{ color: C.teal }} />
    <div className="min-w-0 flex-1">
      <div className="text-[11px] uppercase tracking-wider" style={{ color: "#6B7280" }}>{label}</div>
      <div className="text-sm font-medium" style={{ color: C.text }}>{value}</div>
    </div>
  </div>
);

/* === Step 2: AI eelanalüüs (käivitatav) === */
const Step2 = ({
  subjects,
  aiRun,
  onRun,
  onNext,
}: {
  subjects: Subject[];
  aiRun: "idle" | "running" | "done";
  onRun: () => void;
  onNext: () => void;
}) => {
  const includesPe = subjects.includes("pe");
  const includesEst = subjects.includes("estonian");

  return (
  <div>
    <Eyebrow color={C.purple}>2 / 4 · AI eelanalüüs</Eyebrow>
    <Title>AI koondab tõendid ja pakub seosed õppekavaga.</Title>
    <p className="mt-3 text-base sm:text-lg" style={{ color: "#4B5563" }}>
      AI ei otsusta. AI näitab, mis on tugev, mis osaline ja mis vajab lisatõendit.
    </p>

    {aiRun === "idle" && (
      <Card className="mt-6" bg={`${C.purple}0D`} border={`${C.purple}40`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Sparkles className="size-6 shrink-0" style={{ color: C.purple }} />
            <div>
              <div className="font-semibold" style={{ color: C.text }}>Käivita AI eelanalüüs</div>
              <p className="text-sm mt-1" style={{ color: "#4B5563" }}>
                AI loeb tõendid, võrdleb õppekavaga ja koostab mustandi õpetajale.
                Analüüsitavad ained: <strong>{[includesPe && "kehaline kasvatus", includesEst && "eesti keel"].filter(Boolean).join(", ") || "—"}</strong>.
              </p>
            </div>
          </div>
          <Button onClick={onRun} className="rounded-full" style={{ background: C.purple, color: "white" }}>
            <Sparkles className="size-4" /> Käivita analüüs
          </Button>
        </div>
      </Card>
    )}

    {aiRun === "running" && (
      <Card className="mt-6 text-center" bg={`${C.purple}0D`} border={`${C.purple}40`}>
        <div className="flex flex-col items-center gap-3 py-6">
          <div
            className="size-12 rounded-full animate-spin"
            style={{ border: `3px solid ${C.purple}30`, borderTopColor: C.purple }}
          />
          <div className="text-sm font-medium" style={{ color: C.purple }}>
            AI loeb tõendeid ja seob õppekavaga…
          </div>
          <div className="text-xs" style={{ color: "#6B7280" }}>
            Kestab paar sekundit. Häkil kasutame mock-andmeid.
          </div>
        </div>
      </Card>
    )}

    {aiRun === "done" && (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
            <Eyebrow color={C.green}>Tugev seos</Eyebrow>
            <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 mt-0.5 shrink-0" style={{ color: C.green }} /> regulaarne liikumine</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 mt-0.5 shrink-0" style={{ color: C.green }} /> vastupidavus</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 mt-0.5 shrink-0" style={{ color: C.green }} /> juhendatud treening</li>
            </ul>
          </Card>

          <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
            <Eyebrow color={C.teal}>Osaline seos</Eyebrow>
            <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
              <li className="flex items-start gap-2"><AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: C.teal }} /> koostöö</li>
              <li className="flex items-start gap-2"><AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: C.teal }} /> enesejuhtimine</li>
              {includesEst && (
                <li className="flex items-start gap-2"><AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: C.teal }} /> eestikeelne suhtlus</li>
              )}
            </ul>
          </Card>

          <Card bg={`${C.orange}10`} border={`${C.orange}50`}>
            <Eyebrow color={C.orange}>Puudub tõend</Eyebrow>
            <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
              <li className="flex items-start gap-2"><AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: C.orange }} /> õppija eneseanalüüs</li>
              <li className="flex items-start gap-2"><AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: C.orange }} /> õpetaja lühivestlus</li>
            </ul>
          </Card>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card bg={`${C.purple}0D`} border={`${C.purple}40`}>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-5" style={{ color: C.purple }} />
              <div className="text-sm font-semibold" style={{ color: C.purple }}>AI mustand õpetajale</div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: C.text }}>
              „Tõendid (treeneri kinnitus, maht, võistlused, keel) toetavad{" "}
              {includesPe && (<><strong>täielikku arvestamist</strong> kehalise kasvatuse õpitulemustes 'regulaarne liikumine' ja 'vastupidavus'. </>)}
              {includesEst && (<>Eesti keele osas on tõend <strong>toetav</strong>, kuid mitte aluseks hinde asendamiseks. </>)}
              Soovitan küsida õppija lühieneseanalüüsi.“
            </p>
          </Card>

          <Card>
            <Eyebrow>Mida AI ei tee</Eyebrow>
            <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
              <li>• ei anna hinnet</li>
              <li>• ei vabasta tunnist</li>
              <li>• ei tee lõppotsust</li>
              <li>• ei asenda õpetaja hinnangut</li>
            </ul>
          </Card>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={onNext} className="rounded-full" style={{ background: C.green, color: "white" }}>
            Anna õpetajale otsustamiseks <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    )}
  </div>
  );
};

/* === Step 3: Õpetaja otsus === */
const Step3 = ({
  decision,
  setDecision,
  onNext,
}: {
  decision: "full" | "partial" | "more" | null;
  setDecision: (d: "full" | "partial" | "more") => void;
  onNext: () => void;
}) => {
  const opts = [
    { id: "full" as const, t: "Arvestan täielikult", d: "Kehalise kasvatuse õpitulemused 'regulaarne liikumine' ja 'vastupidavus' loetakse täidetuks.", c: C.green },
    { id: "partial" as const, t: "Arvestan osaliselt", d: "Kehaline kasvatus arvestatakse, eesti keel jääb toetavaks tõendiks.", c: C.teal },
    { id: "more" as const, t: "Vajan lisatõendit", d: "Palun õppija lühieneseanalüüs ja õpetaja vestlus.", c: C.orange },
  ];

  return (
    <div>
      <Eyebrow color={C.green}>3 / 4 · Õpetaja otsus</Eyebrow>
      <Title>Õpetaja teeb otsuse AI eeltöö põhjal.</Title>
      <p className="mt-3 text-base sm:text-lg" style={{ color: "#4B5563" }}>
        Vali variant — see määrab, mida pere ja koolijuht järgmises sammus näevad.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-3">
        {opts.map((o) => {
          const active = decision === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setDecision(o.id)}
              className="text-left rounded-[20px] border-2 p-5 transition-all"
              style={{
                background: active ? `${o.c}15` : C.cardBg,
                borderColor: active ? o.c : C.border,
                boxShadow: active ? `0 8px 24px -10px ${o.c}50` : "none",
                transform: active ? "translateY(-2px)" : "none",
              }}
            >
              <div
                className="size-10 rounded-full flex items-center justify-center mb-3"
                style={{ background: active ? o.c : `${o.c}15`, color: active ? "white" : o.c }}
              >
                {active ? <Check className="size-5" /> : <CheckCircle2 className="size-5" />}
              </div>
              <div className="font-semibold text-base" style={{ color: C.text }}>{o.t}</div>
              <p className="text-sm mt-2" style={{ color: "#4B5563" }}>{o.d}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl p-4 flex items-start gap-3"
        style={{ background: C.subtle, borderLeft: `3px solid ${C.green}` }}>
        <ShieldCheck className="size-5 mt-0.5 shrink-0" style={{ color: C.green }} />
        <p className="text-sm" style={{ color: C.text }}>
          <strong>Otsus jääb kooli.</strong> AI eeltöö on tugi, mitte asendaja.
          Otsus salvestub koos põhjendusega ja jõuab perele selgituse vormis.
        </p>
      </div>

      {decision && (
        <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300 text-center">
          <div className="inline-flex items-center gap-2 text-sm" style={{ color: C.green }}>
            <Check className="size-4" /> Valik tehtud — vaata mõju järgmisel ekraanil
          </div>
        </div>
      )}
    </div>
  );
};

/* === Step 4: Mõju === */
const Step4 = ({ decision, subjects }: { decision: "full" | "partial" | "more" | null; subjects: Subject[] }) => {
  const summary =
    decision === "full"
      ? { t: "Täielik arvestamine", c: C.green, msg: "Õpetaja kinnitas tõendite alusel." }
      : decision === "partial"
      ? { t: "Osaline arvestamine", c: C.teal, msg: "Kehaline kasvatus arvestatud, eesti keel toetav tõend." }
      : decision === "more"
      ? { t: "Vajab lisatõendit", c: C.orange, msg: "Pere täiendab tõendit, otsus tuleb hiljem." }
      : { t: "Otsus tegemata", c: "#9CA3AF", msg: "Mine tagasi ja vali variant." };

  const familyLetter =
    decision === "full"
      ? "Tere! Tõendid (treeneri kinnitus, treeningmaht, võistlused, eestikeelne keskkond) on piisavad. Arvestasime Nikita jalgpallitreeningut kehalise kasvatuse õpitulemuste 'regulaarne liikumine' ja 'vastupidavus' täitmisel. Nikita ei pea neis osades kooli kehalise kasvatuse tunnis täiendavalt tõendama."
      : decision === "partial"
      ? "Tere! Arvestasime Nikita jalgpallitreeningut kehalise kasvatuse osas (regulaarne liikumine, vastupidavus). Eesti keele osas jääb treening toetavaks tõendiks, kuid ei asenda hindamist. Palume Nikitalt lühikest eneseanalüüsi (5–7 lauset) järgmise nädala lõpuks."
      : decision === "more"
      ? "Tere! Tõendid on head, kuid otsuse tegemiseks vajame veel: (1) Nikita lühieneseanalüüs (5–7 lauset), (2) lühivestlus klassijuhatajaga. Pärast nende lisamist teeb õpetaja lõppotsuse 5 tööpäeva jooksul."
      : "";

  return (
    <div>
      <Eyebrow>4 / 4 · Mõju ja koolijuhi vaade</Eyebrow>
      <Title>Üks otsus — kolm tasandit mõju.</Title>

      <div className="mt-6 rounded-2xl p-5 sm:p-6 flex items-center gap-4"
        style={{ background: `${summary.c}15`, borderLeft: `4px solid ${summary.c}` }}>
        <div className="size-12 rounded-full flex items-center justify-center shrink-0"
          style={{ background: summary.c, color: "white" }}>
          <Check className="size-6" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: summary.c }}>
            Otsus
          </div>
          <div className="text-lg sm:text-xl font-semibold" style={{ color: C.text }}>{summary.t}</div>
          <div className="text-sm" style={{ color: "#4B5563" }}>{summary.msg}</div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-3">
        <ImpactCard
          icon={<Clock />}
          color={C.teal}
          title="Õpetaja eeltöö"
          big="25–40 min → 5–10 min"
          note="Ühe arvestusotsuse ettevalmistus."
        />
        <ImpactCard
          icon={<CalendarRange />}
          color={C.green}
          title="Tunniplaan"
          big="3 sarnast juhtumit"
          note="Saab grupeerida 1. või 7. tundi."
        />
        <ImpactCard
          icon={<Coins />}
          color={C.purple}
          title="Mõju mõõtkava"
          big="~7,7–24 mln €"
          note="Eesti haridusruumi rahaekvivalent (10–30% dubleerimist)."
        />
      </div>

      <div className="mt-6 rounded-2xl border p-5 sm:p-6"
        style={{ background: C.cardBg, borderColor: C.border }}>
        <div className="flex items-start gap-3">
          <div className="size-10 rounded-full flex items-center justify-center shrink-0"
            style={{ background: `${C.teal}15`, color: C.teal }}>
            <Building2 className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: C.teal }}>
              Koolijuhi koondvaade
            </div>
            <p className="text-sm" style={{ color: "#4B5563" }}>
              Nikita juhtum lisandub mustrisse. Koolijuht näeb, et 8.A klassis on{" "}
              <strong>14 / 22 õpilast</strong> seotud huviharidusega ja{" "}
              <strong>jalgpall → kehaline kasvatus</strong> muster kordub 5 koolis 34 õpilasega.
            </p>
          </div>
        </div>
      </div>

      {familyLetter && (
        <div className="mt-6 rounded-2xl border p-5 sm:p-6"
          style={{ background: `${C.purple}08`, borderColor: `${C.purple}40` }}>
          <div className="flex items-start gap-3">
            <div className="size-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: C.purple, color: "white" }}>
              <User className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: C.purple }}>
                Selgitus perele {subjects.length > 0 && `· ${subjects.length} ainet`}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: C.text }}>
                {familyLetter}
              </p>
              <div className="mt-3 text-[11px]" style={{ color: "#6B7280" }}>
                AI mustand · Saadetakse perele alles pärast õpetaja kinnitust.
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 rounded-2xl p-5 sm:p-6 text-center"
        style={{ background: C.green, color: "white" }}>
        <p className="text-base sm:text-lg font-medium">
          Me ei lisa õppimist juurde.{" "}
          <span style={{ color: C.lime }}>Me teeme juba toimunu nähtavaks.</span>
        </p>
      </div>
    </div>
  );
};

const ImpactCard = ({
  icon,
  color,
  title,
  big,
  note,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  big: string;
  note: string;
}) => (
  <div className="rounded-[20px] border p-5 shadow-sm" style={{ background: C.cardBg, borderColor: C.border }}>
    <div className="size-10 rounded-full flex items-center justify-center mb-3"
      style={{ background: `${color}15`, color }}>
      {icon}
    </div>
    <div className="text-xs uppercase tracking-wider font-semibold" style={{ color }}>{title}</div>
    <div className="text-xl font-bold mt-1.5" style={{ color: C.text }}>{big}</div>
    <p className="text-xs mt-2" style={{ color: "#6B7280" }}>{note}</p>
  </div>
);

export default Flow;

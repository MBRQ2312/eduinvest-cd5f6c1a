import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Users, GraduationCap, Building2, Sparkles, ShieldCheck, FileText, CheckCircle2, Trophy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ApplicationStep } from "@/components/demo/steps/ApplicationStep";
import { SchoolMappingStep } from "@/components/demo/steps/SchoolMappingStep";
import { EvidenceStep } from "@/components/demo/steps/EvidenceStep";
import { AiAnalysisStep } from "@/components/demo/steps/AiAnalysisStep";
import { DecisionStep } from "@/components/demo/steps/DecisionStep";
import { ExplanationStep } from "@/components/demo/steps/ExplanationStep";

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type FlowStep = {
  n: string;
  title: string;
  text: string;
  tone: "default" | "ai" | "decision";
  icon: React.ReactNode;
};

const FLOW: FlowStep[] = [
  {
    n: "01",
    title: "Taotlus perelt",
    text: "Lapsevanem või õppija annab tahteavalduse: palun hinnake, kas koolivälist õppimist saab arvestada.",
    tone: "default",
    icon: <Users className="size-4" />,
  },
  {
    n: "02",
    title: "Kool seob õppekavaga",
    text: "Kool valib õppeaine, õpitulemused ja tingimused. Pere ei pea ise teadma, mis täpselt kattub.",
    tone: "default",
    icon: <FileText className="size-4" />,
  },
  {
    n: "03",
    title: "Tõend partnerilt",
    text: "Treener, huvikool või juhendaja kinnitab osalemise, mahu, tegevuse sisu ja keele.",
    tone: "default",
    icon: <ShieldCheck className="size-4" />,
  },
  {
    n: "04",
    title: "AI eelanalüüs",
    text: "AI koondab tõendid, pakub võimalikke seoseid ja näitab, mis vajab õpetaja hinnangut.",
    tone: "ai",
    icon: <Sparkles className="size-4" />,
  },
  {
    n: "05",
    title: "Otsus koolilt",
    text: "Õpetaja teeb otsuse: arvestan, arvestan osaliselt, vajan lisatõendit või ei arvesta.",
    tone: "decision",
    icon: <CheckCircle2 className="size-4" />,
  },
  {
    n: "06",
    title: "Selgitus ja koondvaade",
    text: "Pere saab arusaadava selgituse. Koolijuht näeb korduvaid mustreid ja saab kujundada ühist praktikat.",
    tone: "default",
    icon: <Building2 className="size-4" />,
  },
];

const HeroIllustration = () => (
  <svg viewBox="0 0 420 420" className="w-full h-auto max-w-[440px]" fill="none" aria-hidden="true">
    {/* soft connecting curve */}
    <path
      d="M70 110 C 160 60, 260 360, 350 300"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeDasharray="3 6"
      opacity="0.6"
    />
    <path
      d="M90 320 C 180 280, 240 140, 340 130"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      strokeDasharray="3 6"
      opacity="0.5"
    />

    {/* Family node */}
    <g transform="translate(40 80)">
      <circle cx="36" cy="36" r="36" fill="hsl(var(--primary-subtle))" />
    </g>
    <g transform="translate(58 96)" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none">
      <circle cx="12" cy="12" r="6" />
      <circle cx="28" cy="14" r="5" />
      <path d="M2 38 C 4 26, 22 26, 24 38" />
      <path d="M22 38 C 24 30, 36 30, 38 38" />
    </g>

    {/* Coach node */}
    <g transform="translate(50 290)">
      <circle cx="36" cy="36" r="36" fill="hsl(var(--accent-subtle))" />
    </g>
    <g transform="translate(70 310)" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none">
      <circle cx="16" cy="10" r="6" />
      <path d="M4 32 C 6 20, 26 20, 28 32" />
      <path d="M22 18 L 30 26" />
    </g>

    {/* AI / network node — center */}
    <g transform="translate(180 170)">
      <circle cx="40" cy="40" r="44" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeDasharray="2 4" />
      <circle cx="40" cy="40" r="6" fill="hsl(var(--accent))" />
      <circle cx="14" cy="22" r="3" fill="hsl(var(--primary))" />
      <circle cx="66" cy="18" r="3" fill="hsl(var(--primary))" />
      <circle cx="68" cy="62" r="3" fill="hsl(var(--success))" />
      <circle cx="12" cy="60" r="3" fill="hsl(var(--success))" />
      <line x1="14" y1="22" x2="40" y2="40" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.4" />
      <line x1="66" y1="18" x2="40" y2="40" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.4" />
      <line x1="68" y1="62" x2="40" y2="40" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.4" />
      <line x1="12" y1="60" x2="40" y2="40" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.4" />
    </g>

    {/* School node */}
    <g transform="translate(310 100)">
      <circle cx="36" cy="36" r="36" fill="hsl(var(--success-subtle))" />
    </g>
    <g transform="translate(326 116)" stroke="hsl(var(--success))" strokeWidth="1.5" fill="none">
      <path d="M4 32 L 4 14 L 20 4 L 36 14 L 36 32 Z" />
      <rect x="14" y="20" width="12" height="12" />
      <line x1="20" y1="20" x2="20" y2="32" />
    </g>

    {/* Decision node */}
    <g transform="translate(320 290)">
      <circle cx="36" cy="36" r="36" fill="hsl(var(--success-subtle))" />
      <path d="M22 36 L 32 46 L 50 26" stroke="hsl(var(--success))" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const Index = () => {
  const [step, setStep] = useState<Step>(0);
  const flowRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToTimeline = () =>
    timelineRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const go = (s: number) => {
    setStep(s as Step);
    setTimeout(() => flowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <header className="border-b border-border/60 bg-background/80 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <div className="size-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shrink-0">
              EI
            </div>
            <div className="font-medium tracking-tight text-sm truncate">
              EduInvest <span className="text-primary">LearnOnce</span>
            </div>
          </Link>
          <Link
            to="/pitch"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/70 hover:bg-muted text-xs text-foreground/80"
          >
            Pitch
          </Link>
        </div>
      </header>

      <main className="relative">
        {/* HERO */}
        <section className="border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="break-words min-w-0">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
              Prototüüp
            </div>
            <h1 className="text-[34px] leading-[1.08] sm:text-[42px] md:text-[52px] lg:text-[60px] font-semibold tracking-tight text-foreground break-words">
              EduInvest <span className="text-primary">LearnOnce</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/80 leading-snug">
              Kooliväline õppimine kooli vaatesse.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Õpi üks kord.", "Tõenda selgelt.", "Kool otsustab."].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-card border border-border-strong text-[13px] font-medium text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-6 text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-xl">
              AI ei otsusta, ei anna hinnet ega vabasta tunnist. AI aitab tõendid ja
              õppekava seosed õpetajale nähtavaks teha.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={scrollToTimeline}
                className="rounded-xl"
              >
                Vaata otsustusvoogu
                <ArrowDown className="size-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroIllustration />
          </div>
          </div>
        </section>

        {/* ROLLIVÄRAV */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-5">
            Vali, kes sa oled
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { to: "/perele", icon: <Users className="size-5" />, name: "Lapsevanem", desc: "Algatan taotluse", tone: "primary" as const },
              { to: "/treener", icon: <Trophy className="size-5" />, name: "Treener", desc: "Kinnitan tõendid", tone: "accent" as const },
              { to: "/opetaja", icon: <GraduationCap className="size-5" />, name: "Õpetaja", desc: "Teen otsuse", tone: "success" as const },
              { to: "/juht", icon: <Building2 className="size-5" />, name: "Koolijuht", desc: "Näen mustreid", tone: "primary" as const },
            ].map((r) => {
              const bg =
                r.tone === "accent"
                  ? "bg-accent-subtle text-accent"
                  : r.tone === "success"
                  ? "bg-success-subtle text-success"
                  : "bg-primary-subtle text-primary";
              return (
                <Link
                  key={r.to}
                  to={r.to}
                  className="group rounded-[18px] border-2 border-border-strong bg-card p-5 shadow-card hover:border-primary hover:shadow-elevated transition-smooth flex flex-col gap-3 min-w-0"
                >
                  <div className={`size-10 rounded-xl ${bg} flex items-center justify-center`}>
                    {r.icon}
                  </div>
                  <div className="text-[15px] font-semibold tracking-tight group-hover:text-primary transition-smooth break-words">
                    {r.name}
                  </div>
                  <div className="text-[13px] text-muted-foreground leading-relaxed break-words">
                    {r.desc}
                  </div>
                </Link>
              );
            })}
          </div>
          </div>
        </section>

        {/* VERTIKAALNE OTSUSTUSVOOG */}
        <section ref={timelineRef} className="border-b border-border scroll-mt-20">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mb-10 md:mb-14">
            <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.1]">
              Üks otsustusvoog lõpuni
            </h2>
            <p className="mt-3 text-base md:text-lg text-foreground/70">
              Taotlusest kooli põhjendatud otsuseni.
            </p>
          </div>

          <ol className="relative max-w-3xl">
            {/* vertical line */}
            <span
              className="absolute left-[22px] md:left-[28px] top-2 bottom-2 w-px bg-border-strong"
              aria-hidden="true"
            />
            {FLOW.map((s, idx) => {
              const stepNum = (idx + 1) as Step;
              const isActive = step === stepNum;
              const dot =
                s.tone === "ai"
                  ? "bg-accent text-accent-foreground"
                  : s.tone === "decision"
                  ? "bg-success text-success-foreground"
                  : "bg-primary text-primary-foreground";
              const ring =
                s.tone === "ai"
                  ? "ring-accent/20"
                  : s.tone === "decision"
                  ? "ring-success/20"
                  : "ring-primary/20";
              return (
                <li key={s.n} className="relative pl-14 md:pl-20 pb-6 last:pb-0">
                  <span
                    className={`absolute left-0 top-1 size-11 md:size-14 rounded-full ${dot} ring-8 ${ring} bg-background flex items-center justify-center`}
                  >
                    <span className={`size-7 md:size-8 rounded-full ${dot} flex items-center justify-center`}>
                      {s.icon}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep(isActive ? 0 : stepNum)}
                    aria-expanded={isActive}
                    className={`w-full text-left rounded-[20px] bg-card border-2 ${isActive ? "border-primary shadow-elevated" : "border-border-strong shadow-card"} p-5 md:p-6 transition-smooth hover:border-primary`}
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-semibold tracking-widest text-muted-foreground tabular">
                        {s.n}
                      </span>
                      <h3 className="text-[17px] md:text-lg font-semibold tracking-tight flex-1 break-words">
                        {s.title}
                      </h3>
                      <ChevronDown
                        className={`size-4 text-muted-foreground transition-transform shrink-0 ${isActive ? "rotate-180" : ""}`}
                      />
                    </div>
                    <p className="text-[14.5px] md:text-[15px] text-foreground/75 leading-relaxed break-words">
                      {s.text}
                    </p>
                  </button>

                  {isActive && (
                    <div ref={flowRef} className="mt-4 scroll-mt-24">
                      {stepNum === 1 && <ApplicationStep onNext={() => go(2)} />}
                      {stepNum === 2 && <SchoolMappingStep onBack={() => go(1)} onNext={() => go(3)} />}
                      {stepNum === 3 && <EvidenceStep onBack={() => go(2)} onNext={() => go(4)} />}
                      {stepNum === 4 && <AiAnalysisStep onBack={() => go(3)} onNext={() => go(5)} />}
                      {stepNum === 5 && <DecisionStep onBack={() => go(4)} onNext={() => go(6)} />}
                      {stepNum === 6 && <ExplanationStep onBack={() => go(5)} onRestart={() => go(1)} />}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
          </div>
        </section>

        {/* VÄÄRTUSKAARDID */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mb-8 md:mb-12">
            <h2 className="text-[26px] md:text-[36px] font-semibold tracking-tight leading-[1.15]">
              Mida iga osapool saab
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: <Users className="size-5" />,
                title: "Perele",
                text: "Selge, mida kool vajab ja miks otsus selline tuli.",
                tone: "primary",
              },
              {
                icon: <GraduationCap className="size-5" />,
                title: "Õpetajale",
                text: "Tõendid ja võimalikud õppekava seosed on enne otsust koondatud.",
                tone: "accent",
              },
              {
                icon: <Building2 className="size-5" />,
                title: "Koolijuhile",
                text: "Korduvad juhtumid muutuvad nähtavaks ja ühtseks praktikaks.",
                tone: "success",
              },
            ].map((c) => {
              const bg =
                c.tone === "accent"
                  ? "bg-accent-subtle text-accent"
                  : c.tone === "success"
                  ? "bg-success-subtle text-success"
                  : "bg-primary-subtle text-primary";
              return (
                <div
                  key={c.title}
                  className="rounded-[20px] bg-card border-2 border-border-strong p-6 md:p-7 shadow-card hover:shadow-elevated transition-smooth"
                >
                  <div className={`size-11 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{c.title}</h3>
                  <p className="text-[15px] text-foreground/70 leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>
          </div>
        </section>

        {/* Loe lähemalt */}
        <section>
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
          <Accordion type="single" collapsible className="rounded-[20px] border-2 border-border-strong bg-card divide-y divide-border shadow-card">
            <AccordionItem value="vota" className="border-0 px-6">
              <AccordionTrigger className="text-sm font-semibold">
                VÕTA üldhariduse kontekstis
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/75 leading-relaxed pb-4">
                EduInvest LearnOnce kasutab VÕTA põhimõtet üldhariduse jaoks lihtsustatud kujul:
                õppija esitab kogemuse, kool võrdleb seda õppekava õpitulemustega, kogemus peab
                olema tõendatud, otsus on põhjendatud ja dokumenteeritud.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="responsibility" className="border-0 px-6">
              <AccordionTrigger className="text-sm font-semibold">
                Vastutusmudel ja andmed
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/75 leading-relaxed pb-4 space-y-1.5">
                <p>· Otsuse teeb õpetaja või kooli määratud vastutaja.</p>
                <p>· AI koondab andmed ja näitab seoseid — ei anna hinnet.</p>
                <p>· Andmeid jagatakse ainult nõusoleku alusel.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-8 text-center">
            <p className="text-[11px] text-muted-foreground tracking-[0.18em] uppercase font-semibold">
              AI ei otsusta · Õpetaja otsustab · Pere saab selgituse
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

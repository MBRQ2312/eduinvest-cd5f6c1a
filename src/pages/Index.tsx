import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Users, GraduationCap, Building2, Sparkles, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RoleCard } from "@/components/demo/primitives";
import { ProcessBar } from "@/components/demo/ProcessBar";
import { ApplicationStep } from "@/components/demo/steps/ApplicationStep";
import { SchoolMappingStep } from "@/components/demo/steps/SchoolMappingStep";
import { EvidenceStep } from "@/components/demo/steps/EvidenceStep";
import { AiAnalysisStep } from "@/components/demo/steps/AiAnalysisStep";
import { DecisionStep } from "@/components/demo/steps/DecisionStep";
import { ExplanationStep } from "@/components/demo/steps/ExplanationStep";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

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
  const [step, setStep] = useState<Step>(1);
  const flowRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToTimeline = () =>
    timelineRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const scrollToFlow = () =>
    flowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

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

      <main className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-20 relative">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20 md:mb-32">
          <div className="break-words">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
              EduInvest LearnOnce
            </div>
            <h1 className="text-[38px] leading-[1.08] md:text-[48px] lg:text-[58px] font-semibold tracking-tight text-foreground">
              Kooliväline õppimine{" "}
              <span className="text-primary">kooli vaatesse</span>
            </h1>
            <p className="mt-5 md:mt-6 text-lg md:text-xl text-foreground/80 leading-snug font-normal">
              Õpi üks kord. Tõenda selgelt. Kool otsustab.
            </p>
            <p className="mt-5 md:mt-6 text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-xl">
              LearnOnce aitab koolil näha, milline õppimine on juba toimunud, millised tõendid
              on olemas ja milliseid õppekava seoseid õpetaja saab kontrollida.
            </p>

            <div className="mt-7 inline-flex items-start gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3 max-w-xl">
              <ShieldCheck className="size-4 text-primary mt-0.5 shrink-0" />
              <p className="text-[13px] text-foreground/75 leading-relaxed">
                AI ei otsusta, ei anna hinnet ega vabasta tunnist. AI teeb eelanalüüsi.
                Otsuse teeb kool.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={scrollToTimeline}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm h-12 px-6 text-[15px] rounded-xl"
              >
                Vaata otsustusvoogu
                <ArrowDown className="size-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroIllustration />
          </div>
        </section>

        {/* VERTIKAALNE OTSUSTUSVOOG */}
        <section ref={timelineRef} className="mb-24 md:mb-32">
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
              className="absolute left-[22px] md:left-[28px] top-2 bottom-2 w-px bg-border"
              aria-hidden="true"
            />
            {FLOW.map((s) => {
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
                <li key={s.n} className="relative pl-14 md:pl-20 pb-8 last:pb-0">
                  <span
                    className={`absolute left-0 top-1 size-11 md:size-14 rounded-full ${dot} ring-8 ${ring} bg-background flex items-center justify-center`}
                  >
                    <span className={`size-7 md:size-8 rounded-full ${dot} flex items-center justify-center`}>
                      {s.icon}
                    </span>
                  </span>
                  <div className="rounded-[20px] bg-card border border-border/60 shadow-sm p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-semibold tracking-widest text-muted-foreground tabular">
                        {s.n}
                      </span>
                      <h3 className="text-[17px] md:text-lg font-semibold tracking-tight">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-[14.5px] md:text-[15px] text-foreground/75 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* VÄÄRTUSKAARDID */}
        <section className="mb-24 md:mb-32">
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
                  className="rounded-[20px] bg-card border border-border/60 p-6 md:p-7 shadow-sm"
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
        </section>

        {/* DEMO CTA */}
        <section className="mb-24 md:mb-32">
          <div className="rounded-[24px] bg-foreground text-background p-7 md:p-12 relative overflow-hidden">
            <div
              className="absolute -top-16 -right-16 size-64 rounded-full bg-accent/15 blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 right-1/3 size-40 rounded-full bg-primary/20 blur-2xl pointer-events-none" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-background/60 mb-4">
                Näidisjuhtum
              </div>
              <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.1]">
                Vaata Nikita juhtumit
              </h2>
              <p className="mt-4 text-[15px] md:text-base text-background/75 leading-relaxed">
                8. klassi õppija käib kolm korda nädalas eestikeelses jalgpallitrennis.
                Kool hindab, kas osa sellest saab arvestada kehalises kasvatuses ja eesti keele
                praktilise kasutuse toetava tõendina.
              </p>
              <Button
                size="lg"
                onClick={scrollToFlow}
                className="mt-7 bg-background text-foreground hover:bg-background/90 h-12 px-6 text-[15px] rounded-xl"
              >
                Käivita 6-sammuline demo
                <ArrowRight className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Rollivärav */}
        <section className="mb-20 md:mb-28">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-5">
            Vali, kes sa oled
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <RoleCard to="/perele" emoji="👨‍👩‍👧" name="Lapsevanem" desc="Algatan taotluse" />
            <RoleCard to="/treener" emoji="🏃" name="Treener" desc="Kinnitan tõendid" />
            <RoleCard to="/opetaja" emoji="👩‍🏫" name="Õpetaja" desc="Teen otsuse" />
            <RoleCard to="/juht" emoji="🏫" name="Koolijuht" desc="Näen mustreid" />
          </div>
        </section>

        {/* Demo flow */}
        <section ref={flowRef} className="mb-6">
          <ProcessBar current={step} onJump={go} />
        </section>
        <section className="mb-20">
          {step === 1 && <ApplicationStep onNext={() => go(2)} />}
          {step === 2 && <SchoolMappingStep onBack={() => go(1)} onNext={() => go(3)} />}
          {step === 3 && <EvidenceStep onBack={() => go(2)} onNext={() => go(4)} />}
          {step === 4 && <AiAnalysisStep onBack={() => go(3)} onNext={() => go(5)} />}
          {step === 5 && <DecisionStep onBack={() => go(4)} onNext={() => go(6)} />}
          {step === 6 && <ExplanationStep onBack={() => go(5)} onRestart={() => go(1)} />}
        </section>

        {/* Loe lähemalt */}
        <section className="mb-12">
          <Accordion type="single" collapsible className="rounded-[20px] border border-border/60 bg-card divide-y divide-border/60">
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
        </section>

        <footer className="mt-16 pt-8 border-t border-border/60 text-center">
          <p className="text-[11px] text-muted-foreground tracking-[0.18em] uppercase font-semibold">
            AI ei otsusta · Õpetaja otsustab · Pere saab selgituse
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

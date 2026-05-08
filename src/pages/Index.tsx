import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RoleCard, InfoCard } from "@/components/demo/primitives";
import { ProcessBar } from "@/components/demo/ProcessBar";
import { ApplicationStep } from "@/components/demo/steps/ApplicationStep";
import { SchoolMappingStep } from "@/components/demo/steps/SchoolMappingStep";
import { EvidenceStep } from "@/components/demo/steps/EvidenceStep";
import { AiAnalysisStep } from "@/components/demo/steps/AiAnalysisStep";
import { DecisionStep } from "@/components/demo/steps/DecisionStep";
import { ExplanationStep } from "@/components/demo/steps/ExplanationStep";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const Index = () => {
  const [step, setStep] = useState<Step>(1);
  const flowRef = useRef<HTMLDivElement>(null);
  const scrollToFlow = () =>
    flowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const go = (s: number) => {
    setStep(s as Step);
    setTimeout(() => flowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-50" />

      <header className="border-b border-border bg-card/85 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
              EI
            </div>
            <div className="font-semibold tracking-tight">
              EduInvest <span className="text-primary">LearnOnce</span>
            </div>
          </Link>
          <Link
            to="/pitch"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-xs text-foreground/80"
          >
            Pitch
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative">
        {/* Hero */}
        <section className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Tee koolivälist õppimist <span className="text-primary">nähtavaks</span>.
          </h1>
          <p className="mt-5 text-base md:text-lg text-foreground/85 leading-relaxed">
            Õpetaja otsustustugi koolivälise õppimise arvestamiseks. AI teeb eeltöö —
            otsuse teeb õpetaja.
          </p>
        </section>

        {/* Rollivärav */}
        <section className="mb-12">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-4">
            Vali, kes sa oled
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <RoleCard
              to="/perele"
              emoji="👨‍👩‍👧"
              name="Lapsevanem"
              desc="Algatan taotluse ja saan lihtsa selgituse"
            />
            <RoleCard
              to="/treener"
              emoji="🏃"
              name="Treener"
              desc="Kinnitan tõendid ja saadan koolile"
            />
            <RoleCard
              to="/opetaja"
              emoji="👩‍🏫"
              name="Õpetaja"
              desc="Näen AI-sünteesi ja teen otsuse"
            />
            <RoleCard
              to="/juht"
              emoji="🏫"
              name="Koolijuht"
              desc="Näen mustreid ja planeerin tunde"
            />
          </div>
        </section>

        {/* Demo CTA */}
        <section className="mb-10 text-center">
          <div className="text-sm text-muted-foreground mb-3">või vaata kogu lugu</div>
          <Button size="lg" onClick={scrollToFlow} className="shadow-elevated group">
            Käivita 6-sammuline demo
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </Button>
        </section>

        {/* Process bar + flow */}
        <section ref={flowRef} className="mb-6">
          <ProcessBar current={step} onJump={go} />
        </section>

        <section className="mb-14">
          {step === 1 && <ApplicationStep onNext={() => go(2)} />}
          {step === 2 && <SchoolMappingStep onBack={() => go(1)} onNext={() => go(3)} />}
          {step === 3 && <EvidenceStep onBack={() => go(2)} onNext={() => go(4)} />}
          {step === 4 && <AiAnalysisStep onBack={() => go(3)} onNext={() => go(5)} />}
          {step === 5 && <DecisionStep onBack={() => go(4)} onNext={() => go(6)} />}
          {step === 6 && <ExplanationStep onBack={() => go(5)} onRestart={() => go(1)} />}
        </section>

        {/* Pitch sõnum */}
        <section className="mb-12">
          <InfoCard tone="primary" className="text-base md:text-lg leading-relaxed">
            <em>
              EduInvest LearnOnce ei loo õppimist juurde. See teeb juba toimunud õppimise{" "}
              <strong>nähtavaks</strong>, <strong>võrreldavaks</strong> ja õpetaja otsusel{" "}
              <strong>arvestatavaks</strong>.
            </em>
          </InfoCard>
        </section>

        {/* Loe lähemalt */}
        <section className="mb-12">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card divide-y divide-border">
            <AccordionItem value="vota" className="border-0 px-6">
              <AccordionTrigger className="text-sm font-semibold">
                VÕTA üldhariduse kontekstis
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/80 leading-relaxed space-y-2 pb-4">
                <p>
                  EduInvest LearnOnce kasutab VÕTA (varasemate õpingute ja töökogemuse
                  arvestamine) põhimõtet üldhariduse jaoks lihtsustatud kujul: õppija esitab
                  kogemuse, kool võrdleb seda õppekava õpitulemustega, kogemus peab olema
                  tõendatud, otsus on põhjendatud ja dokumenteeritud.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="estonian" className="border-0 px-6">
              <AccordionTrigger className="text-sm font-semibold">
                Eesti keele tugi
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/80 leading-relaxed pb-4">
                Trennides ja huvikoolides toimub palju eestikeelset suhtlust. EduInvest aitab
                seda <strong>nähtavaks teha</strong> kui toetavat tõendit. See ei asenda eesti
                keele aine hinnet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="responsibility" className="border-0 px-6">
              <AccordionTrigger className="text-sm font-semibold">
                Vastutusmudel ja andmed
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/80 leading-relaxed pb-4 space-y-1.5">
                <p>· Otsuse teeb õpetaja või kooli määratud vastutaja.</p>
                <p>· AI koondab andmed, näitab seoseid ja tõendilünki — ei anna hinnet.</p>
                <p>· AI ei vabasta tunnist.</p>
                <p>· Andmeid jagatakse ainult nõusoleku alusel.</p>
                <p>· eKool / Stuudium / Arno integratsioon tuleb hilisemas faasis.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-[11px] text-muted-foreground tracking-[0.18em] uppercase font-semibold">
            AI ei otsusta · Õpetaja otsustab · Pere saab selgituse
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

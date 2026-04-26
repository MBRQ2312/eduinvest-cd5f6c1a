import { useRef, useState } from "react";
import { ArrowDown, Music, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/demo/StepIndicator";
import { Step1Input } from "@/components/demo/Step1Input";
import { Step2Analysis } from "@/components/demo/Step2Analysis";
import { Step3Decision } from "@/components/demo/Step3Decision";
import { Step4Impact } from "@/components/demo/Step4Impact";

const Index = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const flowRef = useRef<HTMLDivElement>(null);

  const scrollToFlow = () => {
    flowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Institutional grid background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-50" />

      {/* Header bar */}
      <header className="border-b border-border bg-card/85 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm tracking-tight shadow-card">
              EI
            </div>
            <div>
              <div className="font-semibold text-sm leading-tight tracking-tight flex items-baseline gap-1.5">
                EduInvest
                <span className="text-primary font-bold">Lab</span>
              </div>
              <div className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase mt-0.5">
                Õppija tegelik õpitee nähtavaks
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="size-1.5 rounded-full bg-success animate-pulse" />
              <span>Demo režiim · õa 2025/2026</span>
            </div>
            <span className="text-border">·</span>
            <span className="tabular text-foreground/70 font-medium">
              Markus T. · 8. klass
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-14 relative">
        {/* Hero */}
        <section className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full" />
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
              Klikitav demo · ~90 sekundit · õppeaasta 2025/2026
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-balance leading-[1.1]">
            Õppija tegelik õpitee{" "}
            <span className="text-primary">nähtavaks</span>
          </h1>
          <p className="mt-6 text-base md:text-lg font-medium text-foreground text-pretty leading-relaxed">
            <span className="font-bold text-foreground">EduInvest Lab</span> aitab koolil
            märgata, võrrelda ja arvestada õppimist, mis toimub ka väljaspool tundi —
            huvikoolis, spordikoolis, muusikakoolis, keeleõppes, projektides või kogukonnas.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
            Õppija koormus väheneb, õpetaja saab otsustustuge ja koolijuht näeb tervikpilti.
            Kogu õpitu koondub{" "}
            <span className="font-bold uppercase tracking-[0.04em] text-foreground">
              HARIDUSKONTOLE
            </span>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-subtle border border-primary/20">
              <span className="text-xs font-semibold text-primary tracking-tight">
                Põhimõte
              </span>
              <span className="text-xs text-primary/85 font-medium">
                AI ei otsusta. AI toetab õpetaja otsust.
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 border border-border">
              <span className="text-[11px] text-muted-foreground font-medium">
                Sihtrühm: koolijuhid · õpetajad · lapsevanemad · KOV-id · huvikoolid
              </span>
            </div>
          </div>
        </section>

        {/* Esimene piloot */}
        <section className="mb-12">
          <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left: intro */}
              <div className="lg:col-span-2 p-7 md:p-9 border-b lg:border-b-0 lg:border-r border-border bg-muted/30">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-1 w-8 bg-primary rounded-full" />
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                    Esimene piloot
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance leading-tight">
                  Huviharidusest{" "}
                  <span className="text-primary">üldharidusse</span>
                </h2>
                <p className="mt-4 text-sm md:text-base text-foreground/85 leading-relaxed text-pretty">
                  EduInvest Lab ei alusta korraga kõigi õpitegevuste arvestamisest.
                  Alustame ühest kitsast ja arusaadavast kasutusjuhust:{" "}
                  <span className="font-semibold text-foreground">
                    huvihariduse arvestamisest üldhariduse õpitulemuste täitmisel.
                  </span>
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-pretty">
                  Kui õppija saavutab osa õpitulemustest juba huvikoolis või
                  spordikoolis, aitab EduInvest õpetajal näha,{" "}
                  <span className="text-foreground font-medium">mida võiks koolis arvestada</span>,{" "}
                  <span className="text-foreground font-medium">millist tõendit on vaja</span> ja{" "}
                  <span className="text-foreground font-medium">mis jääb veel teha</span>.
                  Lõppotsuse teeb õpetaja või kooli määratud vastutaja.
                </p>
                <div className="mt-6">
                  <Button onClick={scrollToFlow} size="lg" className="shadow-elevated group">
                    Vaata piloodi töövoogu
                    <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </div>
              </div>

              {/* Right: two examples */}
              <div className="lg:col-span-3 p-7 md:p-9">
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-5">
                  Kaks näidet piloodis
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PilotExample
                    icon={Music}
                    source="Muusikakool"
                    target="Muusikaõpetus"
                    description="Pillimäng, solfedžo ja esinemiskogemus võivad katta osa kooli muusikaõpetuse õpitulemustest."
                  />
                  <PilotExample
                    icon={Trophy}
                    source="Spordikool"
                    target="Kehaline kasvatus"
                    description="Treeningud, võistlused ja füüsiline ettevalmistus võivad katta osa kehalise kasvatuse õpitulemustest."
                  />
                </div>
                <div className="mt-5 rounded-xl border-l-4 border-primary bg-primary-subtle/50 p-4">
                  <p className="text-xs md:text-sm text-foreground/85 leading-relaxed">
                    <span className="font-semibold text-primary">Põhimõte:</span>{" "}
                    AI ei otsusta. AI toetab õpetaja otsust — toob kokku tõendid,
                    pakub seoseid õppekavaga ja näitab, mis on juba kaetud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stepper */}
        <section className="mb-8" ref={flowRef}>
          <StepIndicator current={step} />
        </section>

        {/* Active step */}
        <section>
          {step === 1 && <Step1Input onNext={() => setStep(2)} />}
          {step === 2 && (
            <Step2Analysis onBack={() => setStep(1)} onNext={() => setStep(3)} />
          )}
          {step === 3 && (
            <Step3Decision onBack={() => setStep(2)} onNext={() => setStep(4)} />
          )}
          {step === 4 && (
            <Step4Impact onBack={() => setStep(3)} onRestart={() => setStep(1)} />
          )}
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t border-border">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-3">
              Filosoofia
            </div>
            <p className="text-lg md:text-xl font-medium italic text-foreground/90 text-pretty leading-relaxed">
              „Me ei lisa õppimist juurde. Me teeme juba toimunu{" "}
              <span className="text-primary not-italic font-semibold">nähtavaks ja arvestatavaks</span>.”
            </p>
            <p className="mt-3 text-xs text-muted-foreground tracking-[0.18em] uppercase font-semibold">
              AI ei otsusta. AI toetab õpetaja otsust.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

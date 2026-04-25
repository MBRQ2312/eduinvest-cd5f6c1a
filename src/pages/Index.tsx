import { useState } from "react";
import { StepIndicator } from "@/components/demo/StepIndicator";
import { Step1Input } from "@/components/demo/Step1Input";
import { Step2Analysis } from "@/components/demo/Step2Analysis";
import { Step3Decision } from "@/components/demo/Step3Decision";
import { Step4Impact } from "@/components/demo/Step4Impact";

const Index = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

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
                <span className="text-primary font-bold">LearnOnce</span>
              </div>
              <div className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase mt-0.5">
                Iga õppimine loeb
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="size-1.5 rounded-full bg-success animate-pulse" />
              <span>Demo režiim</span>
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
              Klikitav demo · ~90 sekundit
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.04em] text-balance leading-[1.1]">
            IGA ÕPPIMINE LOEB
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-medium text-foreground text-pretty leading-tight">
            EduInvest koondab selle{" "}
            <span className="text-primary">hariduskontole</span>{" "}
            <span className="text-muted-foreground">
              ja teeb arvestatavaks.
            </span>
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-subtle border border-primary/20">
            <span className="text-xs font-semibold text-primary tracking-tight">
              EduInvest: LearnOnce
            </span>
            <span className="text-[10px] text-primary/70 italic">
              Learning that counts once — everywhere
            </span>
          </div>
        </section>

        {/* Stepper */}
        <section className="mb-8">
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
              „Me ei lisa õppimist. Me teeme juba toimunu{" "}
              <span className="text-primary not-italic font-semibold">arvestatavaks</span>.”
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

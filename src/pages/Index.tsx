import { useState } from "react";
import { StepIndicator } from "@/components/demo/StepIndicator";
import { Step1Input } from "@/components/demo/Step1Input";
import { Step2Analysis } from "@/components/demo/Step2Analysis";
import { Step3Decision } from "@/components/demo/Step3Decision";
import { Step4Impact } from "@/components/demo/Step4Impact";

const Index = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <header className="border-b border-border bg-card sticky top-0 z-20 backdrop-blur-md bg-card/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm tracking-tight">
              EI
            </div>
            <div>
              <div className="font-semibold text-sm leading-tight">EduInvest</div>
              <div className="text-[11px] text-muted-foreground tracking-wide">
                Iga õppimine loeb
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <div className="size-1.5 rounded-full bg-success animate-pulse" />
            <span>Demo režiim</span>
            <span className="mx-1.5 text-border">•</span>
            <span className="tabular">Markus T. · 8. klass</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="mb-10 max-w-3xl">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Klikitav demo · ~90 sekundit
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            Õppija ei õpi ainult koolis. Aga süsteem ei näe seda tervikuna.
          </h1>
          <p className="mt-3 text-muted-foreground text-pretty">
            EduInvest muudab spordis, muusikas ja projektides toimuva õppimise üheks ametlikuks
            otsuseks — ja näitab, mida selle tagajärjel <strong>enam ei pea tegema</strong>.
          </p>
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
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground italic max-w-xl mx-auto text-pretty">
            “Meie innovatsioon ei ole AI. Meie innovatsioon on see, et me eemaldame
            dubleerimise.”
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

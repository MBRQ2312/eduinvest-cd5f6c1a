import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Background = () => (
  <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50" aria-hidden="true" />
);

const TaustainfoModal = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div
      className="bg-card rounded-2xl border border-border-strong shadow-elevated max-w-lg w-full max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between p-5 border-b border-border">
        <div className="text-sm font-semibold tracking-tight">Taustainfo</div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground" aria-label="Sulge">
          <X className="size-4" />
        </button>
      </div>
      <div className="p-5 space-y-4 text-[14px] text-foreground/85 leading-relaxed">
        <p>
          Kooliväline õppimine toimub juba — trennides, muusikakoolides, kunstikoolides,
          robootikas ja projektides. Probleem ei ole õppimise puudumine, vaid see, et
          kool ei näe seda otsuse tegemiseks piisavalt selgelt ja võrreldavalt.
        </p>

        <div className="grid grid-cols-3 gap-2">
          {[
            { v: "849", l: "huvikooli" },
            { v: "153 263", l: "huvikooli õppijat" },
            { v: "3000+", l: "õppekava" },
          ].map((m) => (
            <div key={m.l} className="rounded-xl border border-border-strong bg-background p-3">
              <div className="text-base font-semibold tabular text-primary">{m.v}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{m.l}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-1.5">
            AI roll
          </div>
          <p>AI teeb eelanalüüsi. Kool otsustab. AI ei anna hinnet ega vabasta tunnist.</p>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-warning mb-1.5">
            Häki piirangud
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kasutame mock-andmeid.</li>
            <li>eKool, Stuudium, EHIS ja ARNO liidestused vajavad pärislahenduses valideerimist.</li>
            <li>Andmekaitse ja vanema nõusolek vajavad piloodis täpsustamist.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Background />

      <header className="border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="max-w-[920px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
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
            className="text-xs text-muted-foreground hover:text-primary"
          >
            Pitch
          </Link>
        </div>
      </header>

      <main className="relative">
        <section className="max-w-[920px] mx-auto px-5 md:px-8 py-16 md:py-28 text-center">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
            Testitav prototüüp
          </div>

          <h1 className="text-[34px] sm:text-[44px] md:text-[56px] font-semibold tracking-tight text-success leading-[1.05] max-w-3xl mx-auto">
            Testi ühte arvestusotsust
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-snug max-w-2xl mx-auto">
            Nikita Tamm käib kolm korda nädalas eestikeelses jalgpallitrennis. Kool
            hindab, kas seda saab osaliselt arvestada kehalise kasvatuse õpitulemuste
            täitmisel.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-subtle/60 border border-accent/30 text-[13px] text-foreground/85">
            <span className="size-1.5 rounded-full bg-accent" />
            AI teeb eelanalüüsi. Kool otsustab.
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button asChild size="lg" className="rounded-xl h-12 px-7 text-base">
              <Link to="/demo">
                Alusta testjuhtumit
                <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </Button>

            <button
              onClick={() => setShowInfo(true)}
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1.5"
            >
              <Info className="size-3.5" />
              Vaata taustainfot
            </button>
          </div>

          <div className="mt-16 text-xs text-muted-foreground tracking-widest uppercase">
            9 sammu · ~3 min · mock-andmed
          </div>
        </section>
      </main>

      {showInfo && <TaustainfoModal onClose={() => setShowInfo(false)} />}
    </div>
  );
};

export default Index;

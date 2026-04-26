import { useRef, useState } from "react";
import {
  AlertCircle,
  ArrowDown,
  BookOpenCheck,
  ClipboardList,
  FileSearch,
  GitCompare,
  Layers,
  Map,
  MessageSquareText,
  Music,
  PencilLine,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  UserCog,
  Users2,
} from "lucide-react";
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

        {/* Üks piloot, viis väljundit */}
        <section className="mb-12">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                Piloodi väljundid
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance leading-tight">
              Üks piloot, <span className="text-primary">viis väljundit</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <OutputCard
              index="01"
              icon={Map}
              title="Õppija õpitee kaart"
              text="Näitab, kus õppija juba õpib — koolis, huvihariduses, projektides, keeleõppes ja tugiteenustes."
            />
            <OutputCard
              index="02"
              icon={UserCog}
              title="Õpetaja otsustugi"
              text="Aitab õpetajal hinnata, kas kooliväline tegevus katab mõne õpitulemuse. AI teeb eeltöö, õpetaja otsustab."
            />
            <OutputCard
              index="03"
              icon={Layers}
              title="Koolijuhi dubleerimise vaade"
              text="Näitab, kus õppija aeg ja õpetaja töö võivad dubleeruda ning kus on võimalik õppekorraldust paindlikumaks muuta."
            />
            <OutputCard
              index="04"
              icon={MessageSquareText}
              title="Õppija ja lapsevanema selgitusvaade"
              text="Selgitab lihtsas keeles, mida arvestati, miks arvestati ja mis jääb veel õppida."
            />
            <OutputCard
              index="05"
              icon={ScrollText}
              title="Hea tava ja metoodiline juhend"
              text="Aitab koolil teha arvestamist õiglaselt, läbipaistvalt ja kooskõlas vastutuse põhimõtetega."
            />
            <div className="rounded-2xl border-l-4 border-primary bg-primary-subtle/50 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <BookOpenCheck className="size-4 text-primary" />
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                  Üks töövoog
                </div>
              </div>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed text-pretty font-medium">
                See ei ole viis eraldi toodet, vaid{" "}
                <span className="text-primary font-semibold">
                  üks arvestamise töövoog viie vajaliku vaatega.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Kuidas see töötab? */}
        <section className="mb-12">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                Töövoog
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance leading-tight">
              Kuidas see <span className="text-primary">töötab?</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
              Näide: õppija käib <span className="text-foreground font-medium">muusikakoolis</span>.
              Vaata, kuidas tema õpitu jõuab kooli muusikaõpetuses arvestamiseni.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <ol className="relative space-y-5">
              <FlowStep
                n={1}
                icon={PencilLine}
                title="Õppija või lapsevanem lisab info"
                text="Sisestatakse, millist õppimist muusikakoolis tehakse — pill, sagedus, kestus."
              />
              <FlowStep
                n={2}
                icon={ClipboardList}
                title="EduInvest aitab kirjeldada"
                text="Süsteem soovitab, kuidas tegevusi sõnastada ja milliseid tõendeid lisada."
              />
              <FlowStep
                n={3}
                icon={GitCompare}
                title="Süsteem võrdleb õppekavaga"
                text="Tegevusi võrreldakse kooli muusikaõpetuse õpitulemustega."
              />
              <FlowStep
                n={4}
                icon={FileSearch}
                title="Õpetaja näeb ettepanekut"
                text="Mida saab arvestada, mida mitte ja millist lisatõendit on vaja."
              />
              <FlowStep
                n={5}
                icon={UserCheck}
                title="Õpetaja teeb otsuse"
                text="Lõppvastutus jääb inimesele — õpetajale või kooli määratud vastutajale."
              />
              <FlowStep
                n={6}
                icon={MessageSquareText}
                title="Õppija ja lapsevanem saavad selgituse"
                text="Lihtsas keeles: mida arvestati, miks arvestati ja mis jääb veel õppida."
              />
              <FlowStep
                n={7}
                icon={Users2}
                title="Koolijuht näeb anonüümset koondpilti"
                text="Kui palju sarnaseid arvestusjuhtumeid koolis tekib ja kus on mustrid."
              />
              <FlowStep
                n={8}
                icon={ShieldCheck}
                title="Piloodi põhjal täieneb hea tava"
                text="Kooli arvestamise reeglid muutuvad selgemaks ja korduvkasutatavaks."
                last
              />
            </ol>
          </div>

          <div className="mt-6 rounded-xl border-l-4 border-warning bg-warning-subtle p-5 flex gap-3.5">
            <div className="shrink-0 size-8 rounded-lg bg-warning/15 flex items-center justify-center">
              <AlertCircle className="size-4 text-warning" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-warning mb-1.5">
                Oluline rõhutus
              </div>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed text-pretty">
                EduInvest <span className="font-semibold">ei anna hinnet</span> ega{" "}
                <span className="font-semibold">vabasta õpilast automaatselt tunnist</span>.
                See aitab teha läbipaistva ja põhjendatud otsuse.
              </p>
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

const OutputCard = ({
  index,
  icon: Icon,
  title,
  text,
}: {
  index: string;
  icon: typeof Map;
  title: string;
  text: string;
}) => (
  <div className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-elevated transition-smooth flex flex-col">
    <div className="flex items-start justify-between mb-4">
      <div className="size-11 rounded-xl bg-primary-subtle text-primary flex items-center justify-center">
        <Icon className="size-5" />
      </div>
      <span className="text-[11px] font-bold tabular tracking-[0.2em] text-muted-foreground/70">
        {index}
      </span>
    </div>
    <h3 className="text-base md:text-lg font-semibold tracking-tight text-foreground mb-2 text-balance">
      {title}
    </h3>
    <p className="text-sm text-foreground/75 leading-relaxed text-pretty">{text}</p>
  </div>
);

const PilotExample = ({
  icon: Icon,
  source,
  target,
  description,
}: {
  icon: typeof Music;
  source: string;
  target: string;
  description: string;
}) => (
  <div className="group rounded-xl border border-border bg-background p-5 hover:border-primary/30 hover:shadow-card transition-smooth">
    <div className="flex items-start gap-3 mb-4">
      <div className="size-10 rounded-lg bg-primary-subtle text-primary flex items-center justify-center shrink-0">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
          Allikas → Sihtaine
        </div>
        <div className="mt-1 flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-foreground tracking-tight">
            {source}
          </span>
          <span className="text-muted-foreground text-xs">→</span>
          <span className="text-sm font-semibold text-primary tracking-tight">
            {target}
          </span>
        </div>
      </div>
    </div>
    <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">
      {description}
    </p>
  </div>
);

const FlowStep = ({
  n,
  icon: Icon,
  title,
  text,
  last,
}: {
  n: number;
  icon: typeof PencilLine;
  title: string;
  text: string;
  last?: boolean;
}) => (
  <li className="relative flex gap-4 md:gap-5">
    <div className="relative flex flex-col items-center shrink-0">
      <div className="size-10 md:size-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm tabular shadow-card">
        {n.toString().padStart(2, "0")}
      </div>
      {!last && (
        <div className="absolute top-10 md:top-11 bottom-[-1.25rem] w-px bg-border" />
      )}
    </div>
    <div className="flex-1 min-w-0 pb-1">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="size-4 text-primary" />
        <h4 className="text-sm md:text-base font-semibold tracking-tight text-foreground">
          {title}
        </h4>
      </div>
      <p className="text-sm text-foreground/75 leading-relaxed text-pretty">{text}</p>
    </div>
  </li>
);

export default Index;

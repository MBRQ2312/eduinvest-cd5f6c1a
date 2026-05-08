import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  CheckCircle2,
  GraduationCap,
  Languages,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  Users2,
  XCircle,
  School,
  Heart,
  Building2,
  HandHelping,
  BookOpenCheck,
  Layers,
  Presentation,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/demo/StepIndicator";
import { LearnOnceStep1Input } from "@/components/demo/LearnOnceStep1Input";
import { LearnOnceStep2SchoolData } from "@/components/demo/LearnOnceStep2SchoolData";
import { LearnOnceStep3Analysis } from "@/components/demo/LearnOnceStep3Analysis";
import { LearnOnceStep4Decision } from "@/components/demo/LearnOnceStep4Decision";
import { LearnOnceStep5Explanation } from "@/components/demo/LearnOnceStep5Explanation";
import { LearnOnceStep6Principal } from "@/components/demo/LearnOnceStep6Principal";
import { LearnOnceStep7Integration } from "@/components/demo/LearnOnceStep7Integration";
import { ImpactStats } from "@/components/landing/ImpactStats";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const Index = () => {
  const [step, setStep] = useState<Step>(1);
  const flowRef = useRef<HTMLDivElement>(null);
  const scrollToFlow = () => flowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const go = (s: Step) => {
    setStep(s);
    setTimeout(() => flowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-50" />

      {/* Header */}
      <header className="border-b border-border bg-card/85 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm tracking-tight shadow-card">
              EI
            </div>
            <div>
              <div className="font-semibold text-sm leading-tight tracking-tight flex items-baseline gap-1.5">
                EduInvest <span className="text-primary font-bold">LearnOnce</span>
              </div>
              <div className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase mt-0.5">
                Õpetaja otsustustugi koolivälise õppimise arvestamiseks
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs">
            <Link
              to="/perele"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-smooth text-foreground/80"
            >
              <Phone className="size-3.5" />
              Lapsevanema vaade
            </Link>
            <Link
              to="/treener"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-smooth text-foreground/80"
            >
              <UserCheck className="size-3.5" />
              Treeneri vaade
            </Link>
            <Link
              to="/pitch"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-sm"
            >
              <Presentation className="size-3.5" />
              Pitch
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-14 relative">
        {/* Hero */}
        <section className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full" />
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
              Üks otsustusvoog · 6 vaadet · ~2 minutit
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.05]">
            Õpetaja otsustustugi{" "}
            <span className="text-primary">koolivälise õppimise</span> arvestamiseks
          </h1>
          <p className="mt-6 text-base md:text-lg font-medium text-foreground text-pretty leading-relaxed">
            EduInvest <span className="text-primary font-bold">LearnOnce</span> ei loo õppimist juurde.
            See teeb juba toimunud õppimise <strong>nähtavaks</strong>, <strong>võrreldavaks</strong>{" "}
            ja õpetaja otsusel <strong>arvestatavaks</strong>.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
            {[
              "AI ei otsusta",
              "AI ei anna hinnet",
              "AI ei vabasta tunnist",
              "Õpetaja teeb lõpliku otsuse",
            ].map((p) => (
              <div key={p} className="flex items-center gap-2 text-foreground/85">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button size="lg" onClick={scrollToFlow} className="shadow-elevated group">
              Käivita demo
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </div>
        </section>

        {/* Põhistsenaarium */}
        <section className="mb-12">
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 p-7 md:p-9 border-b lg:border-b-0 lg:border-r border-border bg-muted/30">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-1 w-8 bg-primary rounded-full" />
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                    Demo põhistsenaarium
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                  Nikita T., <span className="text-primary">8. klass</span>
                </h2>
                <p className="mt-4 text-sm md:text-base text-foreground/85 leading-relaxed text-pretty">
                  Nikita käib jalgpallitrennis <strong>3 korda nädalas</strong>. Treeningud
                  toimuvad <strong>eesti keeles</strong>. Treener on eestikeelne ning
                  tiimikaaslastega suhtleb Nikita valdavalt eesti keeles.
                </p>
              </div>
              <div className="lg:col-span-3 p-7 md:p-9">
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-3">
                  Küsimus koolile
                </div>
                <p className="text-lg md:text-xl font-semibold tracking-tight leading-snug text-balance">
                  Kas osa Nikita spordikoolis toimuvast õppimisest saab arvestada{" "}
                  <span className="text-primary">kehalise kasvatuse</span> ja osaliselt ka{" "}
                  <span className="text-primary">eesti keele funktsionaalse kasutuse</span>{" "}
                  õpitulemuste tõendina?
                </p>
                <div className="mt-5 rounded-xl border-l-4 border-warning bg-warning-subtle p-4 text-sm leading-relaxed text-foreground/90">
                  <strong>NB!</strong> Eesti keele osa <strong>ei tähenda</strong> automaatselt
                  eesti keele aine hinde asendamist. See tähendab, et kool saab märgata ja
                  tõendina kasutada olukordi, kus õppija kasutab eesti keelt päriselulises
                  suhtluses.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact stats */}
        <ImpactStats />

        {/* Stepper + flow */}
        <section ref={flowRef} className="mb-8">
          <StepIndicator current={step} />
        </section>

        <section className="mb-14">
          {step === 1 && <LearnOnceStep1Input onNext={() => go(2)} />}
          {step === 2 && <LearnOnceStep2SchoolData onBack={() => go(1)} onNext={() => go(3)} />}
          {step === 3 && <LearnOnceStep3Analysis onBack={() => go(2)} onNext={() => go(4)} />}
          {step === 4 && <LearnOnceStep4Decision onBack={() => go(3)} onNext={() => go(5)} />}
          {step === 5 && <LearnOnceStep5Explanation onBack={() => go(4)} onNext={() => go(6)} />}
          {step === 6 && <LearnOnceStep6Principal onBack={() => go(5)} onNext={() => go(7)} />}
          {step === 7 && <LearnOnceStep7Integration onBack={() => go(6)} onRestart={() => go(1)} />}
        </section>

        {/* VÕTA */}
        <section className="mb-12">
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
            <div className="p-7 md:p-9 bg-gradient-to-br from-primary-subtle/60 to-transparent border-b border-border">
              <div className="inline-flex items-center gap-2 mb-4">
                <ScrollText className="size-4 text-primary" />
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                  VÕTA üldhariduse kontekstis
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                Tuttav loogika, <span className="text-primary">üldhariduse jaoks kohandatud</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-foreground/85 leading-relaxed text-pretty max-w-3xl">
                EduInvest LearnOnce kasutab VÕTA (varasemate õpingute ja töökogemuse
                arvestamine) põhimõtet lihtsustatud kujul.
              </p>
            </div>
            <div className="p-7 md:p-9 grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Õppija esitab varasema või paralleelse õpikogemuse",
                "Kool võrdleb seda õppekava õpitulemustega",
                "Kogemus peab olema tõendatud",
                "Arvestus võib olla täielik või osaline",
                "Otsus peab olema põhjendatud",
                "Lõppotsuse teeb kooli määratud vastutaja või õpetaja",
                "Otsus dokumenteeritakse",
              ].map((s, i) => (
                <div key={s} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-muted/30">
                  <div className="size-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold tabular shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-foreground/90 leading-snug">{s}</span>
                </div>
              ))}
            </div>
            <div className="px-7 md:px-9 pb-7 md:pb-9">
              <div className="rounded-xl border-l-4 border-primary bg-primary-subtle/50 p-5 text-sm leading-relaxed text-foreground/90">
                <strong className="text-foreground">Gümnaasiumis:</strong> sama loogikat saab
                kasutada valikkursuste, projektõppe, huvikooli, keeleõppe, spordi, muusika,
                vabatahtliku töö või muu tõendatud õpikogemuse arvestamisel — kui kooli
                õppekorralduseeskiri seda võimaldab.
              </div>
            </div>
          </div>
        </section>

        {/* Eesti keele moodul */}
        <section className="mb-12">
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
            <div className="p-7 md:p-9 bg-gradient-to-br from-primary-subtle/60 to-transparent border-b border-border">
              <div className="inline-flex items-center gap-2 mb-4">
                <Languages className="size-4 text-primary" />
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                  Eesti keelele ülemineku tugi
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                Eesti keele õpikeskkonna <span className="text-primary">nähtavaks tegemine</span>
              </h2>
            </div>
            <div className="p-7 md:p-9 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-warning/30 bg-warning-subtle p-5">
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-warning mb-2">Probleem</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Õppija võib kasutada eesti keelt palju ka väljaspool eesti keele tundi —
                    trennis, muusikakoolis, huviringis, projektis, kogukonnas või võistlustel.
                    <strong> Kool ei näe seda süsteemselt.</strong>
                  </p>
                </div>
                <div className="rounded-xl border border-success/25 bg-success-subtle p-5">
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-success mb-2">Lahendus</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    EduInvest aitab koguda ja kirjeldada neid olukordi kui{" "}
                    <strong>tõendeid õppija eestikeelse suhtluskeskkonna kohta</strong>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LangExample
                  icon={Trophy}
                  title="Sporditrenn eesti keeles"
                  items={[
                    "Treener annab juhiseid eesti keeles",
                    "Õppija suhtleb tiimikaaslastega eesti keeles",
                    "Õppija kasutab sporditermineid",
                    "Õppija analüüsib oma arengut eesti keeles",
                  ]}
                />
                <LangExample
                  icon={BookOpenCheck}
                  title="Muusikakool eesti keeles"
                  items={[
                    "Õpetaja juhendab eesti keeles",
                    "Õppija mõistab tööjuhiseid",
                    "Õppija kirjeldab harjutamist eesti keeles",
                    "Õppija osaleb esinemistel ja tagasisidevestlustes",
                  ]}
                />
              </div>

              <div className="rounded-xl border-l-4 border-primary bg-primary-subtle/50 p-5 text-sm leading-relaxed text-foreground/90">
                <strong>Oluline piirang:</strong> See <strong>ei tähenda</strong> automaatset eesti
                keele hinde asendamist. See tähendab, et kool saab õppija tegeliku eestikeelse
                õpikogemuse <strong>nähtavaks teha</strong> ja vajadusel kasutada{" "}
                <strong>toetava tõendina</strong>.
              </div>
            </div>
          </div>
        </section>

        {/* Vastutusmudel */}
        <section className="mb-12">
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
            <div className="p-7 md:p-9 bg-gradient-to-br from-primary-subtle/60 to-transparent border-b border-border">
              <div className="inline-flex items-center gap-2 mb-4">
                <ShieldCheck className="size-4 text-primary" />
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                  Vastutus ja andmed
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                Vastutusmudel
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                  <tr>
                    <th className="text-left px-6 py-3">Küsimus</th>
                    <th className="text-left px-6 py-3">Vastus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Kes teeb otsuse?", "Õpetaja või kooli määratud vastutaja"],
                    ["Mida AI teeb?", "Koondab andmed, pakub seoseid, näitab tõendilünki"],
                    ["Kas AI annab hinde?", "Ei"],
                    ["Kas AI vabastab tunnist?", "Ei"],
                    ["Kas otsus on selgitatav?", "Jah"],
                    ["Kas otsus on muudetav?", "Jah, õpetaja saab AI ettepanekuid muuta"],
                    ["Kas eKool / Stuudium on kohustuslik?", "Ei, häkil kasutatakse mock-andmeid"],
                    ["Mis on hilisem integratsioon?", "eKooli / Stuudiumi andmete lugemine ja otsuse salvestamise tugi"],
                    ["Kas andmeid jagatakse automaatselt?", "Ei, ainult kooli ja nõusolekupõhise töövoo alusel"],
                  ].map(([q, a]) => (
                    <tr key={q} className="hover:bg-muted/20 transition-smooth">
                      <td className="px-6 py-3 font-semibold text-foreground/90">{q}</td>
                      <td className="px-6 py-3 text-foreground/80">{a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sõnum žüriile */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-8 md:p-12 shadow-hero overflow-hidden relative">
            <div className="absolute -right-12 -top-12 size-56 rounded-full bg-white/5" />
            <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-white/5" />
            <div className="relative max-w-3xl">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80 mb-4">
                Sõnum žüriile
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight text-balance">
                EduInvest LearnOnce ei loo õppimist juurde.
                <br />
                See teeb juba toimunud õppimise{" "}
                <span className="italic underline decoration-2 underline-offset-[6px]">
                  nähtavaks, võrreldavaks ja õpetaja otsusel arvestatavaks.
                </span>
              </h2>
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { k: "AI", v: "teeb õpetaja jaoks eeltöö" },
                  { k: "Õpetaja", v: "otsustab" },
                  { k: "Õppija ja pere", v: "saavad selgituse" },
                ].map((c) => (
                  <div key={c.k} className="rounded-xl bg-white/10 border border-white/15 p-4">
                    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/70">{c.k}</div>
                    <div className="text-sm md:text-base font-semibold mt-1 leading-snug">{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 pt-10 border-t border-border text-center">
          <p className="text-xs text-muted-foreground tracking-[0.18em] uppercase font-semibold">
            AI ei otsusta · Õpetaja otsustab · Õppija ja pere saavad selgituse · Koolijuht näeb mustreid
          </p>
        </footer>
      </main>
    </div>
  );
};

const LangExample = ({ icon: Icon, title, items }: { icon: React.ComponentType<{ className?: string }>; title: string; items: string[] }) => (
  <div className="rounded-xl border border-border bg-muted/20 p-5">
    <div className="flex items-center gap-2.5 mb-3">
      <div className="size-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
        <Icon className="size-4" />
      </div>
      <div className="text-base font-semibold tracking-tight">{title}</div>
    </div>
    <ul className="space-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
          <CheckCircle2 className="size-3.5 text-primary mt-1 shrink-0" />
          <span className="leading-snug">{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;

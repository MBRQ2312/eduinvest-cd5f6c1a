import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Info, X, Sparkles, ShieldCheck, FileText, CheckCircle2,
  Users, GraduationCap, Building2, Bell, BarChart3, MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ============================ Taustainfo modal =========================== */

const TaustainfoModal = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div
      className="bg-card rounded-2xl border border-border-strong shadow-elevated max-w-lg w-full max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-card">
        <div className="text-sm font-semibold tracking-tight">Taustainfo</div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground" aria-label="Sulge">
          <X className="size-4" />
        </button>
      </div>
      <div className="p-5 space-y-5 text-[14px] text-foreground/85 leading-relaxed">
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

        <div className="pt-3 border-t border-border">
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
            Rollivaated (uurimiseks)
          </div>
          <div className="grid grid-cols-2 gap-2 text-[13px]">
            <Link to="/perele" className="rounded-lg border border-border-strong bg-background p-2.5 hover:border-primary">Lapsevanem</Link>
            <Link to="/treener" className="rounded-lg border border-border-strong bg-background p-2.5 hover:border-primary">Treener</Link>
            <Link to="/huvikool" className="rounded-lg border border-border-strong bg-background p-2.5 hover:border-primary">Huvikool</Link>
            <Link to="/opetaja" className="rounded-lg border border-border-strong bg-background p-2.5 hover:border-primary">Õpetaja</Link>
            <Link to="/juht" className="col-span-2 rounded-lg border border-border-strong bg-background p-2.5 hover:border-primary">Koolijuht</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* =============================== Test flow =============================== */

const FLOW = [
  {
    n: "01",
    title: "Juhtumi ülevaade",
    text: "Nikita Tamm, 8. klass, jalgpallitrenn 3× nädalas, treening eesti keeles.",
    tone: "default" as const,
    icon: <FileText className="size-4" />,
  },
  {
    n: "02",
    title: "Pere taotlus",
    text: "Pere palub hinnata, kas jalgpallitrenni saab osaliselt arvestada kehalises kasvatuses.",
    tone: "default" as const,
    icon: <Users className="size-4" />,
  },
  {
    n: "03",
    title: "Treeneri tõend",
    text: "Treener kinnitab osalemise, mahu, tegevuse sisu ja õppekeele.",
    tone: "default" as const,
    icon: <ShieldCheck className="size-4" />,
  },
  {
    n: "04",
    title: "Kool määrab võrdluse",
    text: "Kool valib õppeaine ja õpitulemused, millega tegevust võrreldakse.",
    tone: "default" as const,
    icon: <FileText className="size-4" />,
  },
  {
    n: "05",
    title: "AI eelanalüüs",
    text: "AI koondab tõendid, pakub seosed ja näitab puuduolevat infot.",
    tone: "ai" as const,
    icon: <Sparkles className="size-4" />,
  },
  {
    n: "06",
    title: "Kooli otsus",
    text: "Õpetaja või õppejuht otsustab: arvestan osaliselt, vajan lisatõendit või ei arvesta.",
    tone: "decision" as const,
    icon: <CheckCircle2 className="size-4" />,
  },
  {
    n: "07",
    title: "Selgitus perele",
    text: "Pere näeb, mida arvestati, mida mitte ja miks.",
    tone: "default" as const,
    icon: <MessageSquare className="size-4" />,
  },
  {
    n: "08",
    title: "Koolijuhi koondvaade",
    text: "Koolijuht näeb, kas sarnased juhtumid korduvad ja kus tekib tunniplaani õhk.",
    tone: "default" as const,
    icon: <BarChart3 className="size-4" />,
  },
];

/* ================================== Page ================================= */

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <header className="border-b border-border/60 bg-background/80 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-[920px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <div className="size-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shrink-0">
              EI
            </div>
            <div className="font-medium tracking-tight text-sm truncate">
              EduInvest <span className="text-primary">LearnOnce</span>
            </div>
          </Link>
          <button
            onClick={() => setShowInfo(true)}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
          >
            <Info className="size-3.5" />
            Taustainfo
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-border">
          <div className="max-w-[920px] mx-auto px-5 md:px-8 py-14 md:py-24 text-center">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
              Testitav prototüüp
            </div>
            <h1 className="text-[34px] sm:text-[44px] md:text-[56px] font-semibold tracking-tight text-success leading-[1.05]">
              Testi ühte arvestusotsust
            </h1>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-snug max-w-2xl mx-auto">
              Nikita Tamm käib kolm korda nädalas eestikeelses jalgpallitrennis. Kool
              hindab, kas seda saab osaliselt arvestada kehalise kasvatuse õpitulemuste
              täitmisel.
            </p>

            <div className="mt-7 inline-flex items-start gap-2 px-4 py-2.5 rounded-2xl bg-accent-subtle/50 border border-accent/30 text-left max-w-xl mx-auto">
              <Sparkles className="size-4 text-accent mt-0.5 shrink-0" />
              <div className="text-[13px] text-foreground/85 leading-snug">
                <strong className="text-accent">AI teeb eelanalüüsi. Kool otsustab.</strong>
                <br />
                AI ei anna hinnet, ei vabasta tunnist ega tee lõppotsust.
              </div>
            </div>

            <div className="mt-9 flex flex-col items-center gap-3">
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
                Vaata taustainfot
              </button>
            </div>
          </div>
        </section>

        {/* TESTJUHTUMI KAART */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[920px] mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-3">
              Testjuhtum
            </div>
            <h2 className="text-[24px] md:text-[32px] font-semibold tracking-tight text-success leading-[1.1]">
              Nikita Tamm
            </h2>

            <div className="mt-7 rounded-3xl border-2 border-border-strong bg-card shadow-card p-6 md:p-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { k: "Õppija", v: "Nikita Tamm" },
                  { k: "Klass", v: "8. klass" },
                  { k: "Tegevus", v: "Jalgpallitrenn" },
                  { k: "Maht", v: "3× nädalas" },
                  { k: "Õppekeel", v: "Eesti keel" },
                  { k: "Tõendi andja", v: "Treener / huvikool" },
                ].map((r) => (
                  <div key={r.k} className="rounded-xl border border-border-strong bg-background p-3.5">
                    <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                      {r.k}
                    </div>
                    <div className="text-[15px] font-medium mt-1">{r.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border-2 border-primary/30 bg-primary-subtle/30 p-4">
                <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary mb-1">
                  Kooli otsuse küsimus
                </div>
                <p className="text-[14.5px] leading-snug">
                  Kas tegevust saab osaliselt arvestada kehalise kasvatuse õpitulemuste täitmisel?
                </p>
              </div>

              <div className="mt-3 rounded-xl border border-accent/30 bg-accent-subtle/40 p-4">
                <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-accent mb-1">
                  Lisaküsimus
                </div>
                <p className="text-[14px] leading-snug">
                  Kas eestikeelne treening saab olla eesti keele praktilise kasutuse toetav tõend?
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <Button asChild size="lg" className="rounded-xl h-12 px-6">
                  <Link to="/demo">
                    Alusta: pere taotlus
                    <ArrowRight className="size-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTVOOG */}
        <section className="border-b border-border">
          <div className="max-w-[920px] mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3">
              Testvoog
            </div>
            <h2 className="text-[26px] md:text-[36px] font-semibold tracking-tight text-success leading-[1.1] max-w-2xl">
              Testvoog: Nikita juhtum algusest lõpuni
            </h2>
            <p className="mt-3 text-base md:text-lg text-foreground/75 max-w-2xl">
              Pere taotlusest kooli otsuse ja pere selgituseni.
            </p>

            <ol className="relative max-w-3xl mt-10">
              <span
                className="absolute left-[22px] md:left-[28px] top-2 bottom-2 w-px bg-border-strong"
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
                    ? "ring-accent/15"
                    : s.tone === "decision"
                    ? "ring-success/15"
                    : "ring-primary/15";
                return (
                  <li key={s.n} className="relative pl-14 md:pl-20 pb-5 last:pb-0">
                    <span className={`absolute left-0 top-1 size-11 md:size-14 rounded-full ring-8 ${ring} bg-background flex items-center justify-center`}>
                      <span className={`size-7 md:size-8 rounded-full ${dot} flex items-center justify-center`}>
                        {s.icon}
                      </span>
                    </span>
                    <div className="rounded-2xl bg-card border-2 border-border-strong shadow-card p-5">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold tracking-widest text-muted-foreground tabular">
                          {s.n}
                        </span>
                        <span className="text-[15px] md:text-base font-semibold tracking-tight">
                          {s.title}
                        </span>
                      </div>
                      <p className="text-[13.5px] text-foreground/75 leading-relaxed">{s.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl h-12 px-7">
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
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="max-w-[920px] mx-auto px-5 md:px-8 py-6 text-center text-[11px] text-muted-foreground tracking-[0.18em] uppercase font-semibold">
            Häki prototüüp · mock-andmed · AI ei otsusta
          </div>
        </footer>
      </main>

      {showInfo && <TaustainfoModal onClose={() => setShowInfo(false)} />}
    </div>
  );
};

export default Index;

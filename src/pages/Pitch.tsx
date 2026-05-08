import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Users, GraduationCap, Building2, Sparkles,
  ShieldCheck, FileText, CheckCircle2, Home as HomeIcon, Trophy, X, Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------- Reusable bits ---------- */

const SlideShell = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
    <div className="rounded-[28px] border-2 border-border-strong bg-card shadow-elevated p-6 sm:p-12 min-h-[70vh] flex flex-col justify-center">
      {children}
    </div>
  </div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">{children}</div>
);

const SlideTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-foreground break-words">
    {children}
  </h2>
);

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mt-4 break-words">{children}</p>
);

const SoftCard = ({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "primary" | "accent" | "success" | "warm";
}) => {
  const toneCls = {
    default: "bg-card border-border-strong",
    primary: "bg-primary-subtle border-primary/30",
    accent: "bg-accent-subtle border-accent/30",
    success: "bg-success-subtle border-success/30",
    warm: "bg-[hsl(var(--muted))] border-border-strong",
  }[tone];
  return <div className={`rounded-[20px] border-2 ${toneCls} p-5 sm:p-6 shadow-card`}>{children}</div>;
};

/* ---------- Slides ---------- */

const Slide1 = () => (
  <SlideShell>
    <Eyebrow>EduInvest LearnOnce · Pitch</Eyebrow>
    <SlideTitle>Kooliväline õppimine kooli vaatesse.</SlideTitle>
    <Lead>Õpi üks kord. Tõenda selgelt. Kool otsustab.</Lead>
    <div className="mt-8 grid sm:grid-cols-[1fr_auto] gap-4 items-center">
      <SoftCard tone="warm">
        <div className="flex items-start gap-3">
          <ShieldCheck className="size-5 text-success mt-0.5 shrink-0" />
          <p className="text-sm sm:text-base text-foreground">
            <strong>AI ei otsusta</strong>, ei anna hinnet ega vabasta tunnist.
            AI teeb eelanalüüsi. <strong>Otsuse teeb kool.</strong>
          </p>
        </div>
      </SoftCard>
      <Button asChild size="lg" className="rounded-full">
        <Link to="/parent"><Play className="size-4" /> Vaata demo</Link>
      </Button>
    </div>
  </SlideShell>
);

const Slide2 = () => (
  <SlideShell>
    <Eyebrow>Probleem</Eyebrow>
    <SlideTitle>Õppimine toimub mitmel pool, aga kool näeb ainult osa.</SlideTitle>
    <div className="mt-10 grid md:grid-cols-3 gap-4">
      {[
        { t: "Õppija", d: "Võib sama oskust mitu korda tõestada.", tone: "primary" as const, icon: <Users className="size-5 text-primary" /> },
        { t: "Õpetaja", d: "Peab iga juhtumit nullist tõlgendama.", tone: "accent" as const, icon: <GraduationCap className="size-5 text-accent" /> },
        { t: "Koolijuht", d: "Ei näe, kus õppija aeg ja õpetaja töö dubleeruvad.", tone: "success" as const, icon: <Building2 className="size-5 text-success" /> },
      ].map((c) => (
        <SoftCard key={c.t} tone={c.tone}>
          {c.icon}
          <h3 className="font-semibold text-lg mt-3">{c.t}</h3>
          <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
        </SoftCard>
      ))}
    </div>
    <p className="mt-8 text-lg sm:text-xl font-medium text-foreground border-l-4 border-success pl-4">
      Probleem ei ole õppimises. Probleem on nähtavuses ja otsustusvoos.
    </p>
  </SlideShell>
);

const Slide3 = () => (
  <SlideShell>
    <Eyebrow>Demojuhtum</Eyebrow>
    <SlideTitle>Testime ühte konkreetset arvestusotsust.</SlideTitle>
    <div className="mt-8 grid md:grid-cols-2 gap-5">
      <SoftCard tone="primary">
        <div className="flex items-center gap-3 mb-3">
          <Trophy className="size-5 text-primary" />
          <h3 className="font-semibold text-lg">Nikita T., 8. klass</h3>
        </div>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>• Jalgpallitrenn 3× nädalas</li>
          <li>• Treening toimub eesti keeles</li>
          <li>• Treener saab kinnitada osalemise, mahu, sisu ja keele</li>
        </ul>
      </SoftCard>
      <SoftCard tone="accent">
        <Eyebrow>Küsimus koolile</Eyebrow>
        <p className="text-base text-foreground leading-relaxed">
          Kas osa sellest õppimisest saab arvestada kehalises kasvatuses ja kas eestikeelset trenni
          saab kasutada eesti keele praktilise kasutuse toetava tõendina?
        </p>
      </SoftCard>
    </div>
    <p className="mt-6 text-sm text-muted-foreground italic">
      See ei tähenda automaatset hinnet ega tunnist vabastamist.
    </p>
  </SlideShell>
);

const FLOW = [
  { n: "01", t: "Taotlus perelt", tone: "default" },
  { n: "02", t: "Kool seob õppekavaga", tone: "default" },
  { n: "03", t: "Tõend partnerilt", tone: "default" },
  { n: "04", t: "AI eelanalüüs", tone: "ai" },
  { n: "05", t: "Otsus koolilt", tone: "decision" },
  { n: "06", t: "Selgitus ja koondvaade", tone: "default" },
] as const;

const Slide4 = () => (
  <SlideShell>
    <Eyebrow>Lahendus</Eyebrow>
    <SlideTitle>Üks otsustusvoog lõpuni.</SlideTitle>
    <div className="mt-8 grid md:grid-cols-[1.1fr_1fr] gap-8 items-start">
      <div className="relative pl-6">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />
        {FLOW.map((s) => {
          const dot =
            s.tone === "ai" ? "bg-accent" : s.tone === "decision" ? "bg-success" : "bg-foreground/40";
          return (
            <div key={s.n} className="relative mb-5 last:mb-0">
              <span className={`absolute -left-[18px] top-2 size-3 rounded-full ${dot} ring-4 ring-card`} />
              <div className="text-xs font-mono text-muted-foreground">{s.n}</div>
              <div className="text-base sm:text-lg font-medium text-foreground">{s.t}</div>
            </div>
          );
        })}
      </div>
      <SoftCard tone="warm">
        <p className="text-base sm:text-lg text-foreground leading-relaxed">
          Lapsevanem ei pea teadma õppekava kattuvust. <strong>Kool määrab</strong>, mida võrrelda.
          <strong> Partner kinnitab</strong>, mis päriselt toimus. <strong>AI teeb eeltöö.</strong>{" "}
          <strong>Õpetaja otsustab.</strong>
        </p>
      </SoftCard>
    </div>
  </SlideShell>
);

const Slide5 = () => (
  <SlideShell>
    <Eyebrow>AI roll</Eyebrow>
    <SlideTitle>AI ei otsusta. AI teeb õpetajale eeltöö.</SlideTitle>
    <div className="mt-8 grid md:grid-cols-2 gap-5">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="size-4 text-accent" />
          <span className="text-sm font-semibold text-accent uppercase tracking-wide">AI teeb</span>
        </div>
        <div className="space-y-2.5">
          {["Koondab tõendid", "Näitab võimalikud õppekava seosed", "Toob välja puuduva info"].map((x) => (
            <SoftCard key={x} tone="accent">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent" />
                <span className="text-sm sm:text-base">{x}</span>
              </div>
            </SoftCard>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-3">
          <X className="size-4 text-muted-foreground" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">AI ei tee</span>
        </div>
        <div className="space-y-2.5">
          {["Ei anna hinnet", "Ei vabasta tunnist", "Ei tee lõppotsust"].map((x) => (
            <SoftCard key={x}>
              <div className="flex items-center gap-2">
                <X className="size-4 text-muted-foreground" />
                <span className="text-sm sm:text-base">{x}</span>
              </div>
            </SoftCard>
          ))}
        </div>
      </div>
    </div>
    <p className="mt-6 text-base sm:text-lg font-medium border-l-4 border-success pl-4">
      Arvestamise aluseks ei ole ainult õpilase väide, vaid <strong>tõendite kogum</strong>.
    </p>
  </SlideShell>
);

const Slide6 = () => (
  <SlideShell>
    <Eyebrow>Kellele ja mis väärtus</Eyebrow>
    <SlideTitle>Kellele see väärtust loob?</SlideTitle>
    <div className="mt-8 grid md:grid-cols-2 gap-4">
      {[
        { t: "Õppija ja pere", d: "Saavad aru, mida kool vajab, mida arvestati ja miks otsus selline tuli.", tone: "primary" as const, icon: <Users className="size-5 text-primary" /> },
        { t: "Õpetaja", d: "Ei alusta tühjalt lehelt. Tõendid ja võimalikud seosed on enne otsust koondatud.", tone: "accent" as const, icon: <GraduationCap className="size-5 text-accent" /> },
        { t: "Treener / huvikool", d: "Ei otsusta kooli eest. Kinnitab tegeliku tegevuse, mahu, sisu ja keele.", tone: "warm" as const, icon: <Trophy className="size-5 text-foreground" /> },
        { t: "Koolijuht / koolipidaja", d: "Näeb korduvaid mustreid ja saab luua ühtse koolipraktika.", tone: "success" as const, icon: <Building2 className="size-5 text-success" /> },
      ].map((c) => (
        <SoftCard key={c.t} tone={c.tone}>
          {c.icon}
          <h3 className="font-semibold text-lg mt-2">{c.t}</h3>
          <p className="text-sm text-muted-foreground mt-1.5">{c.d}</p>
        </SoftCard>
      ))}
    </div>
    <div className="mt-6 rounded-[20px] bg-foreground text-background p-5 sm:p-6">
      <p className="text-sm sm:text-base">
        <strong>Esimene klient:</strong> kool või koolipidaja.<br />
        <strong>Kasutajad:</strong> õppija, pere, õpetaja, treener, koolijuht.
      </p>
    </div>
  </SlideShell>
);

const Metric = ({ v, l }: { v: string; l: string }) => (
  <SoftCard>
    <div className="text-2xl sm:text-3xl font-semibold text-foreground">{v}</div>
    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{l}</div>
  </SoftCard>
);

const Slide7 = () => (
  <SlideShell>
    <Eyebrow>Testgrupp ja valideerimine</Eyebrow>
    <SlideTitle>Me ei testinud ainult ideed. Testisime prototüüpi.</SlideTitle>
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
      <Metric v="49" l="külastajat" />
      <Metric v="138" l="lehevaatamist" />
      <Metric v="2.82" l="vaadet / külastus" />
      <Metric v="2:19" l="keskmine külastus" />
      <Metric v="69%" l="mobiilist" />
    </div>
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <SoftCard tone="primary">
        <h4 className="font-semibold mb-2">Õpilased</h4>
        <ul className="text-sm space-y-1 text-foreground/80">
          <li>• Pelgulinna Riigigümnaasiumi 10. klass</li>
          <li>• Tallinna Kuristiku Gümnaasiumi 8. klass</li>
          <li>• Pärnu Mai Kooli 8.c pilootgrupp</li>
        </ul>
      </SoftCard>
      <SoftCard tone="success">
        <h4 className="font-semibold mb-2">Koolijuhid</h4>
        <ul className="text-sm space-y-1 text-foreground/80">
          <li>• Alustava koolijuhi arenguprogrammi XI lend 2025</li>
          <li>• tagasiside koolijuhtidelt ja haridusjuhtidelt</li>
        </ul>
      </SoftCard>
    </div>
    <p className="mt-5 text-sm sm:text-base text-muted-foreground">
      Testimine näitas, et töövoog peab olema väga lihtne, mobiilis loetav ja rollide vastutus
      peab olema selgelt eristatud.
    </p>
  </SlideShell>
);

const Slide8 = () => (
  <SlideShell>
    <Eyebrow>Testgrupi sisend</Eyebrow>
    <SlideTitle>Mida testgrupilt küsisime?</SlideTitle>
    <div className="mt-8 grid sm:grid-cols-2 gap-3">
      {[
        "Kas probleem on päris?",
        "Kelle lauale selline juhtum koolis jõuaks?",
        "Milliseid tõendeid oleks otsustamiseks vaja?",
        "Kas töövoog “tõendid → AI eelanalüüs → õpetaja otsus → pere selgitus” oleks kasutatav?",
        "Kas seda võiks testida ühe klassi ja ühe ainega?",
      ].map((q, i) => (
        <SoftCard key={q}>
          <div className="flex gap-3">
            <span className="text-sm font-mono text-muted-foreground">{i + 1}.</span>
            <span className="text-sm sm:text-base">{q}</span>
          </div>
        </SoftCard>
      ))}
    </div>
    <SoftCard tone="warm">
      <Eyebrow>Vastuste koond</Eyebrow>
      <p className="text-base text-foreground">Esimesed vastused kinnitasid kolme vajadust:</p>
      <ul className="mt-2 space-y-1 text-sm sm:text-base">
        <li>• rollid peavad olema selged;</li>
        <li>• tõendid peavad olema kontrollitavad;</li>
        <li>• kool peab saama otsuse ise teha ja põhjendada.</li>
      </ul>
    </SoftCard>
  </SlideShell>
);

const Slide9 = () => (
  <SlideShell>
    <Eyebrow>Piloot</Eyebrow>
    <SlideTitle>Esimene realistlik piloot.</SlideTitle>
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
      {["Üks kool", "Üks klass", "Üks aine", "Üks koolivälise õppimise liik"].map((x, i) => {
        const tones = ["primary", "accent", "success", "warm"] as const;
        return (
          <SoftCard key={x} tone={tones[i]}>
            <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
            <div className="font-semibold mt-1">{x}</div>
          </SoftCard>
        );
      })}
    </div>
    <SoftCard tone="warm">
      <Eyebrow>Näide</Eyebrow>
      <p className="text-base text-foreground">
        <strong>Spordikool → kehaline kasvatus.</strong>
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        Lisavaade: eestikeelne treening kui eesti keele praktilise kasutuse toetav tõend.
      </p>
    </SoftCard>
    <div className="mt-4">
      <Eyebrow>Mida mõõdame</Eyebrow>
      <ul className="text-sm sm:text-base space-y-1 text-foreground/85">
        <li>• kui kaua võtab ühe otsuse ettevalmistamine;</li>
        <li>• kas õpetaja peab vähem infot käsitsi koguma;</li>
        <li>• kas pere saab otsusest aru;</li>
        <li>• kas tõendid on piisavad;</li>
        <li>• kas koolijuht näeb korduvat mustrit.</li>
      </ul>
    </div>
  </SlideShell>
);

const Slide10 = () => (
  <SlideShell>
    <Eyebrow>Lõpp</Eyebrow>
    <SlideTitle>Me ei lisa õppimist juurde.</SlideTitle>
    <p className="mt-6 text-2xl sm:text-3xl font-medium text-foreground leading-snug break-words">
      Teeme juba toimunu <span className="text-success">nähtavaks</span>,{" "}
      <span className="text-accent">tõendatuks</span> ja kooli otsusel{" "}
      <span className="text-primary">arvestatavaks</span>.
    </p>
    <div className="mt-10 grid md:grid-cols-3 gap-3">
      {[
        { t: "Tõendid kokku.", tone: "accent" as const },
        { t: "Seosed nähtavaks.", tone: "primary" as const },
        { t: "Otsus koolile.", tone: "success" as const },
      ].map((x) => (
        <SoftCard key={x.t} tone={x.tone}>
          <div className="text-lg font-semibold">{x.t}</div>
        </SoftCard>
      ))}
    </div>
    <div className="mt-10 rounded-[20px] bg-foreground text-background p-6 sm:p-8 text-center">
      <p className="text-xl sm:text-2xl font-semibold">AI teeb eeltöö. Kool otsustab.</p>
    </div>
    <div className="mt-6 flex flex-wrap gap-3 justify-center">
      <Button asChild size="lg" className="rounded-full">
        <Link to="/parent"><Play className="size-4" /> Käivita demo</Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="rounded-full">
        <Link to="/"><HomeIcon className="size-4" /> Avalehele</Link>
      </Button>
    </div>
  </SlideShell>
);

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];
const TITLES = [
  "Ava", "Probleem", "Demojuhtum", "Lahendus", "AI roll",
  "Huvigrupid", "Testgrupp", "Sisend", "Piloot", "Lõpp",
];

export default function Pitch() {
  const [i, setI] = useState(0);
  const total = SLIDES.length;

  const next = useCallback(() => setI((x) => Math.min(x + 1, total - 1)), [total]);
  const prev = useCallback(() => setI((x) => Math.max(x - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [i]);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].screenX;
    const diff = touchStartX.current - endX;
    const threshold = 50;
    if (diff > threshold) next();
    else if (diff < -threshold) prev();
    touchStartX.current = null;
  };

  const Current = SLIDES[i];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-background/85 backdrop-blur border-b border-border/50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-3 flex items-center gap-3">
          <Link to="/" className="text-sm font-semibold tracking-tight whitespace-nowrap">
            EduInvest LearnOnce
          </Link>
          <div className="flex-1 flex items-center gap-3 min-w-0">
            <span className="inline-flex items-center justify-center rounded-full bg-foreground text-background text-xs font-bold w-8 h-8 shrink-0">
              {i + 1}
            </span>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 rounded-full"
                style={{ width: `${((i + 1) / total) * 100}%` }}
              />
            </div>
            <span className="text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0">
              {i + 1}/{total}
            </span>
          </div>
        </div>
      </header>

      {/* Slide */}
      <main
        className="pb-28 select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Current />
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 z-30 bg-background/95 backdrop-blur border-t border-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={prev}
            disabled={i === 0}
            className="rounded-full h-12 px-6 shadow-sm"
          >
            <ArrowLeft className="size-4" /> Eelmine
          </Button>

          <div className="hidden sm:flex gap-2 items-center">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slaid ${idx + 1}`}
                className={`rounded-full transition-all ${
                  idx === i
                    ? "bg-foreground text-background w-8 h-8 text-xs font-bold shadow-sm"
                    : "bg-muted text-muted-foreground w-8 h-8 text-xs hover:bg-muted-foreground/20"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="flex sm:hidden items-center gap-1.5">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slaid ${idx + 1}`}
                className={`size-2.5 rounded-full transition-all ${
                  idx === i ? "bg-foreground w-5" : "bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

          <Button
            size="lg"
            onClick={next}
            disabled={i === total - 1}
            className="rounded-full h-12 px-6 shadow-sm"
          >
            Järgmine <ArrowRight className="size-4" />
          </Button>
        </div>
      </nav>
    </div>
  );
}

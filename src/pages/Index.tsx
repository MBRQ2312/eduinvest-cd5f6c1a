import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Users, GraduationCap, Building2, Sparkles, Trophy, School, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

      <main className="relative">
        {/* HERO */}
        <section className="border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="break-words min-w-0">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-5">
              Prototüüp
            </div>
            <h1 className="text-[34px] leading-[1.08] sm:text-[42px] md:text-[52px] lg:text-[60px] font-semibold tracking-tight text-foreground break-words">
              EduInvest <span className="text-primary">LearnOnce</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/80 leading-snug">
              Kooliväline õppimine kooli vaatesse.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Õpi üks kord.", "Tõenda selgelt.", "Kool otsustab."].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-card border border-border-strong text-[13px] font-medium text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-6 text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-xl">
              AI ei otsusta, ei anna hinnet ega vabasta tunnist. AI aitab tõendid ja
              õppekava seosed õpetajale nähtavaks teha.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-xl"
              >
                <Link to="/demo">
                  Testjuhtum Nikita
                  <ArrowDown className="size-4 ml-1 rotate-[-90deg]" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroIllustration />
          </div>
          </div>
        </section>

        {/* ROLLIVÄRAV */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-5">
            Organisatsioonivaated
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                to: "/juht",
                icon: <School className="size-[18px]" strokeWidth={1.75} />,
                name: "Kool",
                desc: "Õpetaja · õppejuht · direktor",
                detail: "Näevad korduvaid mustreid, juhivad tunniplaani ja õpetaja tööaega. Otsustavad, kas kooliväline õpe arvestatakse.",
                tone: "success" as const,
              },
              {
                to: "/huvikool",
                icon: <Palette className="size-[18px]" strokeWidth={1.75} />,
                name: "Huvikool",
                desc: "Juhendaja · treener · õppejuht · direktor",
                detail: "Teevad õppe nähtavaks ja tõendatavaks. Kinnitavad mahud, oskused ja seose õppekavaga.",
                tone: "accent" as const,
              },
            ].map((r) => {
              const bg =
                r.tone === "success"
                  ? "bg-success-subtle text-success"
                  : "bg-accent-subtle text-accent";
              return (
                <Link
                  key={r.to}
                  to={r.to}
                  className="group rounded-2xl border border-border bg-card hover:border-primary hover:bg-card hover:shadow-card transition-smooth p-5 flex flex-col gap-3 min-w-0"
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-9 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                      {r.icon}
                    </div>
                    <div className="text-[17px] font-semibold tracking-tight group-hover:text-primary transition-smooth">
                      {r.name}
                    </div>
                    <ArrowRight className="ml-auto size-4 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 transition-smooth" />
                  </div>
                  <div className="text-[12.5px] font-medium text-foreground/70">
                    {r.desc}
                  </div>
                  <div className="text-[13px] text-muted-foreground leading-relaxed">
                    {r.detail}
                  </div>
                </Link>
              );
            })}
          </div>
          </div>
        </section>

        {/* KAKS ALGUSSTSENAARIUMI */}
        <section className="border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-4">
              Kaks algusstsenaariumi
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-card p-5 hover:shadow-card transition-smooth">
                <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-2">A · Pere algatab</div>
                <div className="text-[17px] font-semibold tracking-tight mb-2">Lapsevanem esitab taotluse</div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Pere kasutab kooli töövoogu ja lisab huvikooli/treeneri tõendi. Kool palub kinnitust
                  ja teeb otsuse.
                </p>
              </div>
              <div className="rounded-2xl border border-accent/40 bg-accent-subtle/30 p-5 hover:shadow-card transition-smooth">
                <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-accent mb-2">B · Huvikool algatab</div>
                <div className="text-[17px] font-semibold tracking-tight mb-2">"Sinu lapse tegevus võib koolis arvestatav olla."</div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Huvikool annab perele märku ja pakub taotluse esitamist. Kui kool ei kasuta süsteemi,
                  saadab huvikool tõendi koos infopaketiga: <em>"Kuidas alustada koolivälise õppimise arvestamist?"</em>
                </p>
              </div>
            </div>
            <p className="mt-5 text-xs text-muted-foreground max-w-2xl">
              Tehniline märkus: häkil kasutame mock-andmeid. Pärislahenduses võib andmeid tuua eKoolist,
              Stuudiumist, EHISest, ARNOst või kooli/KOV-i süsteemidest. Häki eesmärk on tõestada üks otsustusvoog lõpuni.
            </p>
          </div>
        </section>


        {/* VÄÄRTUSKAARDID */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-5">
            Win Win tulemus
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                icon: <Users className="size-[18px]" strokeWidth={1.75} />,
                title: "Perele",
                text: "Selge, mida kool vajab ja miks otsus selline tuli.",
                tone: "primary",
              },
              {
                icon: <GraduationCap className="size-[18px]" strokeWidth={1.75} />,
                title: "Õpetajale",
                text: "Tõendid ja võimalikud õppekava seosed on enne otsust koondatud.",
                tone: "accent",
              },
              {
                icon: <Building2 className="size-[18px]" strokeWidth={1.75} />,
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
                  className="rounded-2xl bg-card border border-border p-5 hover:shadow-card hover:border-primary/40 transition-smooth"
                >
                  <div className={`size-9 rounded-lg ${bg} flex items-center justify-center mb-4`}>
                    {c.icon}
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight mb-1.5">{c.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>
          </div>
        </section>

        {/* Loe lähemalt */}
        <section>
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card divide-y divide-border">
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
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-8 text-center">
            <p className="text-[11px] text-muted-foreground tracking-[0.18em] uppercase font-semibold">
              AI ei otsusta · Õpetaja otsustab · Pere saab selgituse
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

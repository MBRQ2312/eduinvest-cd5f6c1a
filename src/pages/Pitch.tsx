import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Users, GraduationCap, Building2, Sparkles, ShieldCheck, FileText, CheckCircle2, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type FlowStep = {
  n: string;
  title: string;
  text: string;
  tone: "default" | "ai" | "decision";
  icon: React.ReactNode;
};

const FLOW: FlowStep[] = [
  { n: "01", title: "Taotlus perelt", text: "Lapsevanem või õppija palub hinnata, kas koolivälist õppimist saab arvestada.", tone: "default", icon: <Users className="size-4" /> },
  { n: "02", title: "Kool seob õppekavaga", text: "Kool valib õppeaine, õpitulemused ja tingimused. Pere ei pea ise teadma, mis täpselt kattub.", tone: "default", icon: <FileText className="size-4" /> },
  { n: "03", title: "Tõend partnerilt", text: "Treener, huvikool või juhendaja kinnitab osalemise, mahu, sisu ja keele.", tone: "default", icon: <ShieldCheck className="size-4" /> },
  { n: "04", title: "AI eelanalüüs", text: "AI koondab tõendid, pakub võimalikke seoseid ja näitab puuduvaid tõendeid.", tone: "ai", icon: <Sparkles className="size-4" /> },
  { n: "05", title: "Otsus koolilt", text: "Õpetaja või kooli määratud vastutaja otsustab: arvestan, arvestan osaliselt, vajan lisatõendit või ei arvesta.", tone: "decision", icon: <CheckCircle2 className="size-4" /> },
  { n: "06", title: "Selgitus ja koondvaade", text: "Pere saab selgituse. Koolijuht näeb korduvaid mustreid.", tone: "default", icon: <Building2 className="size-4" /> },
];

const HeroIllustration = () => (
  <svg viewBox="0 0 420 420" className="w-full h-auto max-w-[440px]" fill="none" aria-hidden="true">
    <path d="M70 110 C 160 60, 260 360, 350 300" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.6" />
    <path d="M90 320 C 180 280, 240 140, 340 130" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.5" />
    <g transform="translate(40 80)"><circle cx="36" cy="36" r="36" fill="hsl(var(--primary-subtle))" /></g>
    <g transform="translate(58 96)" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none">
      <circle cx="12" cy="12" r="6" /><circle cx="28" cy="14" r="5" />
      <path d="M2 38 C 4 26, 22 26, 24 38" /><path d="M22 38 C 24 30, 36 30, 38 38" />
    </g>
    <g transform="translate(50 290)"><circle cx="36" cy="36" r="36" fill="hsl(var(--accent-subtle))" /></g>
    <g transform="translate(70 310)" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none">
      <circle cx="16" cy="10" r="6" /><path d="M4 32 C 6 20, 26 20, 28 32" /><path d="M22 18 L 30 26" />
    </g>
    <g transform="translate(180 170)">
      <circle cx="40" cy="40" r="44" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeDasharray="2 4" />
      <circle cx="40" cy="40" r="6" fill="hsl(var(--accent))" />
      <circle cx="14" cy="22" r="3" fill="hsl(var(--primary))" /><circle cx="66" cy="18" r="3" fill="hsl(var(--primary))" />
      <circle cx="68" cy="62" r="3" fill="hsl(var(--success))" /><circle cx="12" cy="60" r="3" fill="hsl(var(--success))" />
      <line x1="14" y1="22" x2="40" y2="40" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.4" />
      <line x1="66" y1="18" x2="40" y2="40" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.4" />
      <line x1="68" y1="62" x2="40" y2="40" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.4" />
      <line x1="12" y1="60" x2="40" y2="40" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.4" />
    </g>
    <g transform="translate(310 100)"><circle cx="36" cy="36" r="36" fill="hsl(var(--success-subtle))" /></g>
    <g transform="translate(326 116)" stroke="hsl(var(--success))" strokeWidth="1.5" fill="none">
      <path d="M4 32 L 4 14 L 20 4 L 36 14 L 36 32 Z" />
      <rect x="14" y="20" width="12" height="12" /><line x1="20" y1="20" x2="20" y2="32" />
    </g>
    <g transform="translate(320 290)">
      <circle cx="36" cy="36" r="36" fill="hsl(var(--success-subtle))" />
      <path d="M22 36 L 32 46 L 50 26" stroke="hsl(var(--success))" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-4">{children}</div>
);

const Quote = ({ role, text }: { role: string; text: string }) => (
  <div className="rounded-[20px] bg-card border border-border/60 p-6 shadow-sm h-full">
    <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">{role}</div>
    <p className="text-[17px] md:text-lg text-foreground leading-snug font-medium">"{text}"</p>
  </div>
);

const Metric = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-[20px] bg-card border border-border/60 p-5 md:p-6 shadow-sm">
    <div className="text-[28px] md:text-[36px] font-semibold tracking-tight text-foreground tabular leading-none">{value}</div>
    <div className="mt-2 text-[13px] md:text-sm text-muted-foreground">{label}</div>
  </div>
);

const Pitch = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <header className="border-b border-border/60 bg-background/80 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <div className="size-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shrink-0">EI</div>
            <div className="font-medium tracking-tight text-sm truncate">
              EduInvest <span className="text-primary">LearnOnce</span>
            </div>
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/70 hover:bg-muted text-xs text-foreground/80">
            <HomeIcon className="size-3.5" /> Avalehele
          </Link>
        </div>
      </header>

      <main className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-20 relative">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-24 md:mb-32">
          <div className="break-words">
            <SectionEyebrow>EduInvest LearnOnce</SectionEyebrow>
            <h1 className="text-[38px] leading-[1.08] md:text-[48px] lg:text-[58px] font-semibold tracking-tight">
              Kooliväline õppimine <span className="text-primary">kooli vaatesse</span>
            </h1>
            <p className="mt-5 md:mt-6 text-lg md:text-xl text-foreground/80 leading-snug">
              Õpi üks kord. Tõenda selgelt. Kool otsustab.
            </p>
            <p className="mt-5 text-[15px] md:text-base text-foreground/70 leading-relaxed max-w-xl">
              LearnOnce aitab koolil näha, milline õppimine on juba toimunud, millised tõendid on
              olemas ja milliseid õppekava seoseid õpetaja saab kontrollida.
            </p>
            <div className="mt-7 inline-flex items-start gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3 max-w-xl">
              <ShieldCheck className="size-4 text-primary mt-0.5 shrink-0" />
              <p className="text-[13px] text-foreground/75 leading-relaxed">
                AI ei otsusta, ei anna hinnet ega vabasta tunnist. AI teeb eelanalüüsi.
                Otsuse teeb kool.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end"><HeroIllustration /></div>
        </section>

        {/* PROBLEEM */}
        <section className="mb-24 md:mb-32">
          <SectionEyebrow>Probleem</SectionEyebrow>
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.1] max-w-3xl">
            Õppimine toimub mitmel pool, aga kool näeb ainult osa
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-10">
            <Quote role="Õppija" text="Võib sama oskust mitu korda tõestada." />
            <Quote role="Õpetaja" text="Peab iga juhtumit nullist tõlgendama." />
            <Quote role="Koolijuht" text="Ei näe, kus dubleerimine kordub." />
          </div>
          <p className="mt-8 text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Praegu on koolivälise õppimise arvestamine sageli juhtumipõhine, ajamahukas ja ebaühtlane.
          </p>
        </section>

        {/* LAHENDUS — vertikaalne timeline */}
        <section className="mb-24 md:mb-32">
          <SectionEyebrow>Lahendus</SectionEyebrow>
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.1] max-w-3xl">
            Üks otsustusvoog lõpuni
          </h2>
          <p className="mt-3 text-base md:text-lg text-foreground/70">Taotlusest kooli põhjendatud otsuseni.</p>

          <ol className="relative max-w-3xl mt-12">
            <span className="absolute left-[22px] md:left-[28px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
            {FLOW.map((s) => {
              const dot =
                s.tone === "ai" ? "bg-accent text-accent-foreground"
                : s.tone === "decision" ? "bg-success text-success-foreground"
                : "bg-primary text-primary-foreground";
              const ring =
                s.tone === "ai" ? "ring-accent/20"
                : s.tone === "decision" ? "ring-success/20"
                : "ring-primary/20";
              return (
                <li key={s.n} className="relative pl-14 md:pl-20 pb-8 last:pb-0">
                  <span className={`absolute left-0 top-1 size-11 md:size-14 rounded-full ${dot} ring-8 ${ring} bg-background flex items-center justify-center`}>
                    <span className={`size-7 md:size-8 rounded-full ${dot} flex items-center justify-center`}>{s.icon}</span>
                  </span>
                  <div className="rounded-[20px] bg-card border border-border/60 shadow-sm p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-semibold tracking-widest text-muted-foreground tabular">{s.n}</span>
                      <h3 className="text-[17px] md:text-lg font-semibold tracking-tight">{s.title}</h3>
                    </div>
                    <p className="text-[14.5px] md:text-[15px] text-foreground/75 leading-relaxed">{s.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* TESTIMINE */}
        <section className="mb-24 md:mb-32">
          <SectionEyebrow>Testimine</SectionEyebrow>
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.1] max-w-3xl">
            Me ei testinud ainult ideed. Testisime prototüüpi.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mt-10">
            <Metric value="49" label="külastajat" />
            <Metric value="138" label="lehevaatamist" />
            <Metric value="2.82" label="vaadet külastuse kohta" />
            <Metric value="2 min 19 s" label="keskmine külastus" />
            <Metric value="69%" label="mobiilist" />
          </div>

          <div className="mt-6 rounded-[20px] bg-card border border-border/60 p-6 md:p-7 shadow-sm max-w-2xl">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Vaadatud lehed</div>
            <ul className="space-y-2.5 text-[15px] text-foreground/80">
              {["Avaleht", "Treeneri vaade", "Pere vaade", "Õpetaja vaade", "Koolijuhi vaade", "Pitch"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary" />{p}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Prototüüpi jagati õppijatele ja koolijuhtidele. Esimene testimine aitas täpsustada
            töövoogu ja mobiilikasutust.
          </p>
        </section>

        {/* SIHTRÜHM */}
        <section className="mb-24 md:mb-32">
          <SectionEyebrow>Sihtrühm</SectionEyebrow>
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.1] max-w-3xl">
            Kellele see väärtust loob?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-10">
            {[
              { icon: <Users className="size-5" />, title: "Pere", text: "Saab aru, mida kool vajab ja miks otsus tehti.", tone: "primary" },
              { icon: <ShieldCheck className="size-5" />, title: "Treener / huvikool", text: "Kinnitab tegeliku tegevuse, mitte ei otsusta kooli eest.", tone: "accent" },
              { icon: <GraduationCap className="size-5" />, title: "Õpetaja", text: "Saab tõendid ja õppekava seosed enne otsust ühte vaatesse.", tone: "primary" },
              { icon: <Building2 className="size-5" />, title: "Koolijuht / koolipidaja", text: "Näeb korduvaid mustreid ja saab luua ühtse praktika.", tone: "success" },
            ].map((c) => {
              const bg =
                c.tone === "accent" ? "bg-accent-subtle text-accent"
                : c.tone === "success" ? "bg-success-subtle text-success"
                : "bg-primary-subtle text-primary";
              return (
                <div key={c.title} className="rounded-[20px] bg-card border border-border/60 p-6 md:p-7 shadow-sm">
                  <div className={`size-11 rounded-xl ${bg} flex items-center justify-center mb-5`}>{c.icon}</div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{c.title}</h3>
                  <p className="text-[15px] text-foreground/70 leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-[20px] bg-success-subtle border border-success/20 p-6 md:p-7">
            <p className="text-base md:text-lg text-success font-medium leading-relaxed">
              Esimene klient: kool või koolipidaja.
            </p>
            <p className="mt-2 text-[14.5px] text-foreground/70 leading-relaxed">
              Partnerid: huvikoolid, spordiklubid, eKool, Stuudium, KOV süsteemid.
            </p>
          </div>
        </section>

        {/* PILOOT */}
        <section className="mb-24 md:mb-32">
          <SectionEyebrow>Äriloogika · Piloot</SectionEyebrow>
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.1] max-w-3xl">
            Esimene realistlik piloot
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10">
            {["Üks kool", "Üks klass", "Üks aine", "Üks õppimise liik"].map((l) => (
              <div key={l} className="rounded-[20px] bg-card border border-border/60 p-5 md:p-6 shadow-sm text-center">
                <div className="text-base md:text-lg font-semibold tracking-tight text-foreground">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[20px] bg-card border border-border/60 p-6 md:p-7 shadow-sm max-w-2xl">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Näide</div>
            <p className="text-[15px] md:text-base text-foreground/85 leading-relaxed">
              Spordikool → kehaline kasvatus.
            </p>
            <p className="mt-2 text-[14.5px] text-foreground/70 leading-relaxed">
              Lisavaade: eestikeelne trenn kui eesti keele praktilise kasutuse toetav tõend.
            </p>
          </div>

          <div className="mt-8 max-w-2xl">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Mida mõõdame</div>
            <ul className="space-y-3 text-[15px] text-foreground/80">
              {[
                "Kui kaua võtab ühe otsuse ettevalmistamine",
                "Kas õpetaja peab vähem infot käsitsi koguma",
                "Kas pere saab otsusest aru",
                "Kas tõendid on piisavad",
                "Kas koolijuht näeb korduvat mustrit",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LÕPP */}
        <section className="mb-16">
          <div className="rounded-[24px] bg-foreground text-background p-7 md:p-14 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 size-64 rounded-full bg-accent/15 blur-2xl pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-1/3 size-40 rounded-full bg-primary/20 blur-2xl pointer-events-none" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <h2 className="text-[30px] md:text-[46px] font-semibold tracking-tight leading-[1.1]">
                Me ei lisa õppimist juurde.<br />
                <span className="text-background/70">Me teeme juba toimunu koolile nähtavaks.</span>
              </h2>
              <ul className="mt-8 space-y-3 text-lg md:text-xl text-background/85">
                <li>· Tõendid kokku.</li>
                <li>· Seosed nähtavaks.</li>
                <li>· Otsus koolile.</li>
              </ul>
              <p className="mt-10 text-[13px] font-semibold tracking-[0.22em] uppercase text-background/60">
                AI teeb eeltöö · Kool otsustab
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 h-12 px-6 text-[15px] rounded-xl">
                  <Link to="/">
                    Vaata demot <ArrowRight className="size-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-background/30 bg-transparent text-background hover:bg-background/10 h-12 px-6 text-[15px] rounded-xl">
                  <Link to="/">
                    <ArrowLeft className="size-4 mr-1" /> Avalehele
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pitch;

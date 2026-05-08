import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Building2,
  Sparkles,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Trophy,
  AlertTriangle,
  BarChart3,
  Layers,
  Smartphone,
  Database,
  Bell,
  ClipboardCheck,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ----------------------------- HERO DASHBOARD ----------------------------- */

const HeroDashboard = () => (
  <div className="rounded-2xl border-2 border-border-strong bg-card shadow-elevated p-5 md:p-6 w-full max-w-[460px]">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
          <Building2 className="size-4" />
        </div>
        <div>
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
            Koolijuhi koondvaade
          </div>
          <div className="text-sm font-semibold">Kus tekib õhk?</div>
        </div>
      </div>
      <span className="text-[10px] font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded-md bg-warning-subtle text-warning">
        Mock
      </span>
    </div>

    <div className="grid grid-cols-2 gap-2.5">
      {[
        { v: "12", l: "sarnast taotlust", tone: "primary" },
        { v: "3", l: "korduvat ainet", tone: "primary" },
        { v: "4", l: "vajab lisatõendit", tone: "warning" },
        { v: "8–12 h", l: "õpetaja eeltöö võit", tone: "success" },
      ].map((m) => {
        const tone =
          m.tone === "warning"
            ? "border-warning/30 bg-warning-subtle/50"
            : m.tone === "success"
            ? "border-success/20 bg-success-subtle/50"
            : "border-primary/20 bg-primary-subtle/50";
        const num =
          m.tone === "warning"
            ? "text-warning"
            : m.tone === "success"
            ? "text-success"
            : "text-primary";
        return (
          <div key={m.l} className={`rounded-xl border ${tone} p-3`}>
            <div className={`text-xl font-semibold tabular ${num}`}>{m.v}</div>
            <div className="text-[11px] text-foreground/70 leading-tight mt-0.5">{m.l}</div>
          </div>
        );
      })}
    </div>

    <div className="mt-3 rounded-xl border border-accent/30 bg-accent-subtle/50 p-3 flex items-center gap-2">
      <Sparkles className="size-4 text-accent shrink-0" />
      <div className="text-[12px] text-foreground/80 leading-snug">
        <strong>AI eeltöö valmis.</strong> KOV koondraport: 1 klikiga eksport.
      </div>
    </div>
  </div>
);

/* --------------------------------- TOKENS --------------------------------- */

const Eyebrow = ({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "accent" | "success" | "muted" }) => {
  const c =
    tone === "accent"
      ? "text-accent"
      : tone === "success"
      ? "text-success"
      : tone === "muted"
      ? "text-muted-foreground"
      : "text-primary";
  return (
    <div className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${c} mb-3`}>
      {children}
    </div>
  );
};

/* ----------------------------------- PAGE --------------------------------- */

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Header */}
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
          <nav className="flex items-center gap-2">
            <Link
              to="/juht"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-strong hover:border-primary text-xs font-medium text-foreground/80"
            >
              Koolijuhi vaade
            </Link>
            <Link
              to="/pitch"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/70 hover:bg-muted text-xs text-foreground/80"
            >
              Pitch
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* 1. HERO */}
        <section className="border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="min-w-0">
              <Eyebrow>EduInvest LearnOnce · Demo</Eyebrow>
              <h1 className="text-[34px] leading-[1.05] sm:text-[44px] md:text-[54px] font-semibold tracking-tight text-success">
                Kool ei vaja veel üht vormi.
                <br />
                <span className="text-primary">Kool vajab juhtimisinfot.</span>
              </h1>
              <p className="mt-5 text-[15px] md:text-base text-foreground/80 leading-relaxed max-w-xl">
                Kooliväline õppimine toimub juba — trennis, muusikakoolis, kunstikoolis,
                robootikas ja projektides. LearnOnce aitab koolil näha, mida saab
                tõendatult arvestada, mida mitte ja kus õppija aeg ning õpetaja tööaeg
                dubleeruvad.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Tõendid kokku.", "Seosed nähtavaks.", "Otsus koolile."].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-card border border-border-strong text-[13px] font-medium text-foreground/85"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-accent/30 bg-accent-subtle/40 p-3 flex items-start gap-2 max-w-xl">
                <Sparkles className="size-4 text-accent shrink-0 mt-0.5" />
                <p className="text-[13px] text-foreground/80 leading-snug">
                  <strong className="text-accent">AI teeb eeltöö. Kool otsustab.</strong>{" "}
                  AI ei anna hinnet, ei vabasta tunnist ega tee lõppotsust.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl">
                  <Link to="/demo">
                    Alusta demo: Nikita juhtum
                    <ArrowRight className="size-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl">
                  <Link to="/juht">
                    Vaata koolijuhi koondvaadet
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <HeroDashboard />
            </div>
          </div>
        </section>

        {/* 2. PROBLEEMIPLOKK */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
            <Eyebrow tone="muted">Miks nüüd</Eyebrow>
            <h2 className="text-[26px] md:text-[36px] font-semibold tracking-tight text-success leading-[1.1] max-w-3xl">
              Miks see on nüüd oluline?
            </h2>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { t: "Õppijad on ülekoormatud", i: <Users className="size-4" /> },
                { t: "Õpetajad on ülekoormatud", i: <GraduationCap className="size-4" /> },
                { t: "Kooliväline õppimine jääb nähtamatuks", i: <Layers className="size-4" /> },
                { t: "Kool peab otsustama, aga töövoog on käsitöö", i: <ClipboardCheck className="size-4" /> },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border-2 border-border-strong bg-card p-5 shadow-card">
                  <div className="size-9 rounded-xl bg-primary-subtle text-primary flex items-center justify-center mb-3">
                    {c.i}
                  </div>
                  <div className="text-[15px] font-semibold leading-snug">{c.t}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { v: "849", l: "tegutsevat huvikooli" },
                { v: "153 263", l: "huvikooli õppijat" },
                { v: "3000+", l: "õppekava" },
                { v: "473", l: "üldhariduskooli" },
              ].map((m) => (
                <div key={m.l} className="rounded-xl border border-border-strong bg-card p-4">
                  <div className="text-2xl font-semibold tabular text-primary">{m.v}</div>
                  <div className="text-[12px] text-muted-foreground mt-0.5">{m.l}</div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[15px] md:text-lg text-foreground/85 leading-snug max-w-3xl">
              Probleem ei ole selles, et laps ei õpi.
              <br />
              <strong className="text-success">
                Probleem on selles, et kool ei näe seda otsuse tegemiseks piisavalt
                selgelt, tõendatult ja võrreldavalt.
              </strong>
            </p>
          </div>
        </section>

        {/* 3. DEMOJUHTUM — NIKITA */}
        <section className="border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
            <Eyebrow>Demojuhtum</Eyebrow>
            <h2 className="text-[26px] md:text-[36px] font-semibold tracking-tight text-success leading-[1.1] max-w-3xl">
              Üks otsus algusest lõpuni
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl">
              Kas kool saab Nikita koolivälist õppimist osaliselt arvestada?
            </p>

            <div className="mt-8 grid lg:grid-cols-[1.2fr,1fr] gap-4">
              <div className="rounded-2xl border-2 border-primary/30 bg-primary-subtle/30 p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    NT
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Nikita Tamm</div>
                    <div className="text-sm text-muted-foreground">8. klass</div>
                  </div>
                </div>
                <ul className="space-y-2 text-[14px] text-foreground/85">
                  <li className="flex gap-2"><Trophy className="size-4 text-primary shrink-0 mt-0.5" /> Jalgpallitrenn 3× nädalas</li>
                  <li className="flex gap-2"><MessageSquare className="size-4 text-primary shrink-0 mt-0.5" /> Treening toimub eesti keeles</li>
                  <li className="flex gap-2"><ShieldCheck className="size-4 text-primary shrink-0 mt-0.5" /> Treener kinnitab osalemise, mahu, sisu ja keele</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border-2 border-border-strong bg-card p-5 shadow-card">
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-success mb-1">
                    Kooli küsimus
                  </div>
                  <p className="text-[14px] leading-snug">
                    Kas Nikita spordikoolis toimuvat õppimist saab osaliselt arvestada
                    kehalise kasvatuse õpitulemuste täitmisel?
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-accent/30 bg-accent-subtle/40 p-5">
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-accent mb-1">
                    Lisaküsimus
                  </div>
                  <p className="text-[14px] leading-snug">
                    Kas eestikeelne treening saab olla eesti keele praktilise kasutuse
                    toetav tõend?
                  </p>
                </div>
                <div className="rounded-2xl border border-warning/30 bg-warning-subtle/40 p-4 flex items-start gap-2">
                  <AlertTriangle className="size-4 text-warning shrink-0 mt-0.5" />
                  <p className="text-[13px] leading-snug">
                    <strong>Selge piir.</strong> See ei tähenda automaatset vabastust ega
                    eesti keele hinde asendamist. Kool teeb põhjendatud otsuse.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/demo">
                  Ava Nikita otsustusvoog
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 4. OTSUSTUSVOOG */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
            <Eyebrow tone="muted">Otsustusvoog</Eyebrow>
            <h2 className="text-[26px] md:text-[36px] font-semibold tracking-tight text-success leading-[1.1] max-w-3xl">
              Märkamisest põhjendatud otsuseni
            </h2>
            <p className="mt-3 text-base md:text-lg text-foreground/75 max-w-3xl">
              LearnOnce ei lõpe märguandega. LearnOnce viib koolivälise õppimise
              tõendatud arvestusotsuseni.
            </p>

            <ol className="relative max-w-3xl mt-10">
              <span className="absolute left-[22px] md:left-[28px] top-2 bottom-2 w-px bg-border-strong" aria-hidden="true" />
              {[
                { n: "01", t: "Märguanne või taotlus", x: "Pere algatab taotluse või huvikool annab märku, et õppija tegevus võib olla koolis arvestatav.", i: <Bell className="size-4" />, tone: "default" },
                { n: "02", t: "Kool määrab, mida võrreldakse", x: "Kool valib õppeaine, õpitulemused ja tingimused. Pere ei pea teadma õppekava kattuvust.", i: <FileText className="size-4" />, tone: "default" },
                { n: "03", t: "Tõend partnerilt", x: "Huvikool, treener või juhendaja kinnitab tegeliku tegevuse: osalemine, maht, sisu, õppekeel, juhendaja ja vajadusel päevik/link.", i: <ShieldCheck className="size-4" />, tone: "default" },
                { n: "04", t: "AI eelanalüüs", x: "AI koondab tõendid, pakub võimalikke õppekava seoseid, näitab seose tugevust ja puuduolevat infot.", i: <Sparkles className="size-4" />, tone: "ai" },
                { n: "05", t: "Kooli otsus", x: "Õpetaja või õppejuht otsustab: arvestan, arvestan osaliselt, vajan lisatõendit või ei arvesta.", i: <CheckCircle2 className="size-4" />, tone: "decision" },
                { n: "06", t: "Selgitus ja juhtimisinfo", x: "Pere saab selgituse. Koolijuht näeb korduvaid juhtumeid, aineid, huvikoolide seoseid ja tunniplaani mõju.", i: <BarChart3 className="size-4" />, tone: "default" },
              ].map((s) => {
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
                        {s.i}
                      </span>
                    </span>
                    <div className="rounded-2xl bg-card border-2 border-border-strong shadow-card p-5">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold tracking-widest text-muted-foreground tabular">
                          {s.n}
                        </span>
                        <span className="text-[15px] md:text-base font-semibold tracking-tight">
                          {s.t}
                        </span>
                      </div>
                      <p className="text-[13.5px] text-foreground/75 leading-relaxed">{s.x}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* 5. DEMO VAATED */}
        <section className="border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
            <Eyebrow>Demo vaated</Eyebrow>
            <h2 className="text-[26px] md:text-[36px] font-semibold tracking-tight text-success leading-[1.1]">
              Vaata demo vaateid
            </h2>
            <p className="mt-3 text-base md:text-lg text-foreground/75 max-w-3xl">
              Demo näitab ühte otsust algusest lõpuni ja lõpeb koolijuhi koondvaatega.
            </p>

            {/* Koolijuht — peamine */}
            <Link
              to="/juht"
              className="group block mt-8 rounded-3xl border-2 border-primary/40 bg-primary-subtle/30 p-6 md:p-8 shadow-card hover:border-primary hover:shadow-elevated transition-smooth"
            >
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="size-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Building2 className="size-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-primary transition-smooth">
                      Koolijuht
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded-md bg-primary text-primary-foreground">
                      Peavaade
                    </span>
                  </div>
                  <p className="text-base text-foreground/80 mt-2 leading-relaxed max-w-2xl">
                    Näen mustreid, koormust ja tunniplaani õhku.
                  </p>
                </div>
                <ArrowRight className="size-6 text-primary self-center hidden md:block" />
              </div>
            </Link>

            <div className="grid md:grid-cols-3 gap-3 mt-4">
              {[
                { to: "/opetaja", icon: <GraduationCap className="size-5" />, name: "Õpetaja / õppejuht", desc: "Teen põhjendatud otsuse tõendite ja AI eelanalüüsi põhjal.", cta: "Ava otsuse vaade", tone: "success" },
                { to: "/huvikool", icon: <Sparkles className="size-5" />, name: "Huvikool / treener", desc: "Kinnitan tegeliku tegevuse standardtõendina.", cta: "Ava tõendi vaade", tone: "accent" },
                { to: "/perele", icon: <Users className="size-5" />, name: "Pere", desc: "Algatan või kinnitan taotluse ja saan selgituse.", cta: "Ava pere vaade", tone: "primary" },
              ].map((r) => {
                const bg =
                  r.tone === "accent"
                    ? "bg-accent-subtle text-accent"
                    : r.tone === "success"
                    ? "bg-success-subtle text-success"
                    : "bg-primary-subtle text-primary";
                return (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="group rounded-2xl border-2 border-border-strong bg-card p-5 shadow-card hover:border-primary hover:shadow-elevated transition-smooth flex flex-col gap-3"
                  >
                    <div className={`size-10 rounded-xl ${bg} flex items-center justify-center`}>
                      {r.icon}
                    </div>
                    <div className="text-[15px] font-semibold tracking-tight group-hover:text-primary transition-smooth">
                      {r.name}
                    </div>
                    <div className="text-[13px] text-muted-foreground leading-relaxed">
                      {r.desc}
                    </div>
                    <div className="text-[12px] font-semibold text-primary inline-flex items-center gap-1 mt-1">
                      {r.cta} <ArrowRight className="size-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. KOOLIJUHI KOONDVAADE */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
            <Eyebrow>Koolijuhi koondvaade</Eyebrow>
            <h2 className="text-[26px] md:text-[40px] font-semibold tracking-tight text-success leading-[1.05]">
              Kus tekib õhk?
            </h2>
            <p className="mt-3 text-base md:text-lg text-foreground/75 max-w-3xl">
              Üks otsus on algus. Väärtus tekib siis, kui koolijuht näeb korduvaid mustreid.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { v: "12", l: "sarnast taotlust", tone: "primary" },
                { v: "3", l: "korduvat ainet", tone: "primary" },
                { v: "7", l: "õppijat samast klassist spordikoolis", tone: "primary" },
                { v: "5", l: "õppijat täidab osaliselt muusika õpitulemusi huvikoolis", tone: "primary" },
                { v: "4", l: "juhtumit vajab lisatõendit", tone: "warning" },
                { v: "8–12 h", l: "õpetaja eeltöö potentsiaalset võitu", tone: "success" },
              ].map((m) => {
                const bg =
                  m.tone === "warning"
                    ? "border-warning/30 bg-warning-subtle/50"
                    : m.tone === "success"
                    ? "border-success/30 bg-success-subtle/50"
                    : "border-primary/20 bg-card";
                const num =
                  m.tone === "warning"
                    ? "text-warning"
                    : m.tone === "success"
                    ? "text-success"
                    : "text-primary";
                return (
                  <div key={m.l} className={`rounded-2xl border-2 ${bg} p-5 shadow-card`}>
                    <div className={`text-3xl font-semibold tabular ${num}`}>{m.v}</div>
                    <div className="text-[13px] text-foreground/75 mt-1 leading-snug">{m.l}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border-2 border-success/25 bg-success-subtle/40 p-5 md:p-6">
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-success mb-2">
                KOV-i vaade
              </div>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/85 max-w-3xl">
                Kui sarnased juhtumid korduvad mitmes koolis, saab koolipidaja kujundada
                ühise juhendi ja vähendada üksikjuhtumite vaidlusi.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/juht">Planeeri järgmine periood</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link to="/juht">Loo kooli arvestamise hea tava</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link to="/juht">Ekspordi KOV-i koondraport</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 7. MIDA PROTOTÜÜP TÕESTAB */}
        <section className="border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
            <Eyebrow tone="muted">Tõestus</Eyebrow>
            <h2 className="text-[26px] md:text-[36px] font-semibold tracking-tight text-success leading-[1.1]">
              Mida see prototüüp tõestab?
            </h2>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { t: "Üks otsustusvoog lõpuni", x: "Nikita juhtum liigub tõendist kooli otsuseni ja pere selgituseni.", i: <CheckCircle2 className="size-4" /> },
                { t: "Rollid on selged", x: "Pere algatab või kinnitab. Huvikool tõendab. AI teeb eelanalüüsi. Kool otsustab.", i: <Layers className="size-4" /> },
                { t: "Koolijuht näeb mustreid", x: "Üksikjuhtumitest tekib juhtimisinfo.", i: <BarChart3 className="size-4" /> },
                { t: "Töövoog on mobile-first", x: "Tagasiside näitas, et lahendus peab olema lihtne, selgelt loetav ja mobiilis kasutatav.", i: <Smartphone className="size-4" /> },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border-2 border-border-strong bg-card p-5 shadow-card">
                  <div className="size-9 rounded-xl bg-success-subtle text-success flex items-center justify-center mb-3">
                    {c.i}
                  </div>
                  <div className="text-[15px] font-semibold leading-snug mb-1.5">{c.t}</div>
                  <p className="text-[13px] text-foreground/70 leading-relaxed">{c.x}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { v: "69", l: "külastajat" },
                { v: "320", l: "lehevaatamist" },
                { v: "4.64", l: "vaadet / külastus" },
                { v: "3 min 2 s", l: "keskmine külastus" },
                { v: "69.6%", l: "mobiilist" },
              ].map((m) => (
                <div key={m.l} className="rounded-xl border border-border-strong bg-card p-3.5">
                  <div className="text-xl font-semibold tabular text-primary">{m.v}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. TEHNILINE AUSUS */}
        <section className="section-alt border-b border-border">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
            <Eyebrow tone="muted">Tehniline ausus</Eyebrow>
            <h2 className="text-[26px] md:text-[36px] font-semibold tracking-tight text-success leading-[1.1] max-w-3xl">
              Häkil tõestame otsustusvoogu, mitte valmis integratsioone.
            </h2>

            <div className="mt-8 grid lg:grid-cols-2 gap-4">
              <div className="rounded-2xl border-2 border-warning/30 bg-warning-subtle/40 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="size-5 text-warning" />
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-warning">
                    Mock-andmed Nikita juhtumis
                  </div>
                </div>
                <ul className="space-y-2.5 text-[13.5px] text-foreground/85">
                  <li><strong>eKool / Stuudium:</strong> Nikita osales 32/38 treeningul.</li>
                  <li><strong>EHIS:</strong> Huvikooli õppekava on registreeritud.</li>
                  <li><strong>Kooli õppekava:</strong> 8. klassi kehalise kasvatuse õpitulemused.</li>
                  <li><strong>Treeneri kinnitus:</strong> 3 treeningut nädalas, eesti keeles, regulaarne osalus.</li>
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-border-strong bg-card p-6 shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="size-5 text-primary" />
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
                    Pärislahenduses valideerime
                  </div>
                </div>
                <ul className="space-y-2 text-[13.5px] text-foreground/85 list-disc pl-5">
                  <li>eKool / Stuudium kohaloleku andmed</li>
                  <li>EHIS huvikooli õppekavad</li>
                  <li>kooli õppekava andmed</li>
                  <li>vanema nõusolek</li>
                  <li>rollipõhine ligipääs</li>
                  <li>andmekaitse</li>
                  <li>kas tehniline tee on iseseisev SaaS, KOV-lahendus või plugin</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. LÕPU CTA */}
        <section>
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 text-center">
            <Eyebrow>Alusta demo</Eyebrow>
            <h2 className="text-[28px] md:text-[44px] font-semibold tracking-tight text-success leading-[1.05] max-w-3xl mx-auto">
              Me ei lisa õppimist juurde.
              <br />
              <span className="text-primary">
                Me teeme juba toimunu nähtavaks, tõendatuks ja kooli otsusel arvestatavaks.
              </span>
            </h2>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/demo">
                  Vaata Nikita otsustusvoogu
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link to="/juht">Vaata koolijuhi koondvaadet</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-xl">
                <Link to="/pitch">Ava one-pager</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/40">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-6 text-xs text-muted-foreground flex items-center justify-between flex-wrap gap-3">
          <div>EduInvest LearnOnce · Häki prototüüp · Mock-andmed</div>
          <Link to="/pitch" className="hover:text-primary">Pitch →</Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;

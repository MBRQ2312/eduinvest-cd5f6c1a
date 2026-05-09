import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Users,
  Activity,
  UserMinus,
  Layers,
  EyeOff,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Building2,
  Palette,
  Landmark,
  School,
  Globe2,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  MapPin,
  Smartphone,
  Workflow,
  UserCheck,
  Cpu,
  MessageSquareHeart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hourglass, ParticleField } from "@/components/Hourglass";
import brandBoard from "@/assets/eduinvest-brand.jpg";

/* ---------------- HEADER ---------------- */
const Header = () => (
  <header className="sticky top-0 z-40 backdrop-blur-md bg-[hsl(230_50%_8%/0.7)] border-b border-white/5">
    <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5 min-w-0">
        <div className="relative size-9 shrink-0">
          <div className="absolute inset-0 rounded-xl bg-gradient-brand opacity-90 blur-[6px]" />
          <div className="relative size-9 rounded-xl bg-gradient-brand flex items-center justify-center">
            <Hourglass size={22} />
          </div>
        </div>
        <div className="text-white/95 text-sm font-medium tracking-tight">
          EduInvest <span className="text-gradient-brand font-semibold">LearnOnce</span>
        </div>
      </Link>
      <nav className="hidden md:flex items-center gap-1 text-[13px] text-white/70">
        <a href="#aeg" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5">Aeg</a>
        <a href="#tark-kasutus" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5">Tark kasutus</a>
        <a href="#voimalused" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5">Võimalused</a>
        <a href="#ruum" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5">Ruum</a>
        <Link
          to="/demo"
          className="ml-2 px-3.5 py-1.5 rounded-lg bg-gradient-brand text-white text-[13px] font-medium"
        >
          Käivita demo
        </Link>
      </nav>
    </div>
  </header>
);

/* ---------------- HERO ---------------- */
const Hero = () => (
  <section className="relative bg-hero-dark overflow-hidden">
    <ParticleField density={36} />
    <div className="relative max-w-[1180px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28 text-center">
      <div className="flex justify-center mb-8 animate-fade-up">
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-brand opacity-30 rounded-full" />
          <div className="relative">
            <Hourglass size={104} />
          </div>
        </div>
      </div>

      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-[11px] tracking-[0.22em] uppercase text-white/70 font-semibold mb-6 animate-fade-up"
        style={{ animationDelay: "0.05s" }}
      >
        <span className="size-1.5 rounded-full bg-[#00D5D5] animate-glow-pulse" />
        EduInvest · LearnOnce
      </div>

      <h1
        className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05] max-w-4xl mx-auto animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        Kool ei vaja rohkem dubleerimist.
        <br />
        <span className="text-gradient-brand">Ta vajab rohkem ruumi.</span>
      </h1>

      <p
        className="mt-6 md:mt-7 text-[16px] md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        EduInvest aitab koolil näha juba toimunud õppimist, et vähendada käsitööd,
        õppija ülekoormust ja topeltõpetamist.
      </p>

      <div
        className="mt-8 flex flex-wrap justify-center gap-2.5 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        {[
          { t: "Õpi targemalt", i: <Sparkles className="size-3.5" /> },
          { t: "Tõenda selgelt", i: <ShieldCheck className="size-3.5" /> },
          { t: "Kool otsustab", i: <CheckCircle2 className="size-3.5" /> },
        ].map((p) => (
          <span
            key={p.t}
            className="pill-value inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium"
          >
            {p.i}
            {p.t}
          </span>
        ))}
      </div>

      <div
        className="mt-8 mx-auto max-w-md glass-dark rounded-2xl px-4 py-3 flex items-center gap-3 animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="size-9 shrink-0 rounded-xl bg-gradient-brand flex items-center justify-center">
          <ShieldCheck className="size-4 text-white" />
        </div>
        <p className="text-[13px] text-white/85 text-left leading-snug">
          <strong className="text-white">AI ei otsusta.</strong> Õpetaja ja kool otsustavad.
        </p>
      </div>

      <div
        className="mt-9 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
        style={{ animationDelay: "0.5s" }}
      >
        <Button asChild size="lg" className="rounded-xl bg-gradient-brand text-white hover:opacity-95 border-0 px-7 h-12 text-[15px] shadow-[0_18px_40px_-14px_rgba(109,77,255,0.6)]">
          <Link to="/demo">
            Käivita demo
            <ArrowRight className="size-4 ml-1.5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-xl border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white px-7 h-12 text-[15px]">
          <a href="#demo">
            Vaata otsustusvoogu
          </a>
        </Button>
      </div>

      <p className="mt-10 text-[12px] tracking-[0.18em] uppercase text-white/40 font-semibold">
        Aeg loob ruumi
      </p>
    </div>
  </section>
);

/* ---------------- PROBLEM ---------------- */
const Problem = () => {
  const items = [
    { i: <Clock className="size-5" />, t: "Pikad koolipäevad", d: "Õppija päev venib õhtusse, ruumi taastumiseks jääb vähe." },
    { i: <Users className="size-5" />, t: "Õpetajate ülekoormus", d: "Käsitöö ja korduv hindamine söövad pedagoogilist aega." },
    { i: <Activity className="size-5" />, t: "Õppijate väsimus", d: "Sama oskust harjutatakse mitmel pool — motivatsioon kaob." },
    { i: <UserMinus className="size-5" />, t: "Õpetajate puudus", d: "Vähem inimesi peab katma rohkem tunde ja rolle." },
    { i: <Layers className="size-5" />, t: "Ressursi dubleerimine", d: "Kool, KOV ja huvikool maksavad sama tegevuse eest mitu korda." },
    { i: <EyeOff className="size-5" />, t: "Kool ei näe koolivälist õppimist", d: "Treeningud, huvitegevus ja keelepraktika jäävad otsustest välja." },
  ];
  return (
    <section id="probleem" className="relative bg-[#F7F8FA] border-t border-border">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6D4DFF] mb-4">
            Probleem
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Miks see probleem enam oodata ei saa?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <div
              key={it.t}
              className="group relative rounded-2xl bg-white border border-border p-6 hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
            >
              <div
                className="size-11 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(135deg, #00D5D5, #008b9b)"
                      : "linear-gradient(135deg, #6D4DFF, #4a2fcf)",
                }}
              >
                {it.i}
              </div>
              <h3 className="text-[17px] font-semibold tracking-tight mb-1.5">{it.t}</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#00D5D5]/10 via-white to-[#6D4DFF]/10 border border-border p-6 md:p-8">
          <p className="text-[15px] md:text-lg text-foreground/85 max-w-3xl leading-relaxed">
            <span className="text-gradient-brand font-semibold">Õppimine juba toimub.</span>{" "}
            Kool lihtsalt ei näe seda otsuste tegemiseks piisavalt selgelt.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------------- DEMO CASE ---------------- */
const DemoCase = () => {
  const steps = [
    { n: "01", t: "Pere algatab", d: "Lapsevanem esitab tahteavalduse koolile.", i: <Users className="size-4" /> },
    { n: "02", t: "Huvikool kinnitab", d: "Treener või juhendaja tõendab osalemise.", i: <ShieldCheck className="size-4" /> },
    { n: "03", t: "AI teeb eelanalüüsi", d: "Koondab tõendid ja pakub seoseid.", i: <Cpu className="size-4" /> },
    { n: "04", t: "Kool hindab", d: "Õppejuht vaatab konteksti ja õpitulemusi.", i: <School className="size-4" /> },
    { n: "05", t: "Õpetaja otsustab", d: "Arvestan, arvestan osaliselt või vajan lisa.", i: <UserCheck className="size-4" /> },
    { n: "06", t: "Pere saab selgituse", d: "Põhjendatud otsus ja edasised sammud.", i: <MessageSquareHeart className="size-4" /> },
  ];
  return (
    <section id="demo" className="relative bg-white border-t border-border">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#00BFBF] mb-4">
          Testjuhtum
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Üks otsustusvoog lõpuni — Nikita lugu.
        </h2>
        <p className="mt-4 text-[15px] md:text-lg text-muted-foreground max-w-2xl">
          Reaalne juhtum: kuidas kooliväline õppimine muutub kooli jaoks nähtavaks ja arvestatavaks.
        </p>

        {/* Two cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {/* Student */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-[#00D5D5]/8 to-white p-6 md:p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-12 rounded-xl bg-gradient-brand text-white flex items-center justify-center font-semibold text-lg">
                NT
              </div>
              <div>
                <div className="text-[17px] font-semibold tracking-tight">Nikita Tamm</div>
                <div className="text-[12.5px] text-muted-foreground">8. klass · põhikool</div>
              </div>
            </div>
            <ul className="space-y-2.5 text-[13.5px]">
              {[
                "Jalgpallitrenn 3× nädalas",
                "Eestikeelne treening",
                "Treener kinnitab osalemise",
                "Võimalik seos: kehaline kasvatus + keelepraktika",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-[#00BFBF] mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* School question */}
          <div className="rounded-2xl border border-[#6D4DFF]/30 bg-gradient-to-br from-[#6D4DFF]/8 to-white p-6 md:p-7">
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#6D4DFF] mb-3">
              Kooli küsimus
            </div>
            <p className="text-[20px] md:text-2xl font-semibold tracking-tight leading-tight text-foreground">
              "Kas osa sellest õppimisest saab arvestada?"
            </p>
            <p className="mt-4 text-[13.5px] text-muted-foreground leading-relaxed">
              EduInvest koondab tõendid ja kuvab võimalikud seosed õppekavaga. Otsus jääb
              õpetajale ja koolile — AI ei pane hinnet ega vabasta tunnist.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 relative">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-6">
            Otsustusvoog · 6 sammu
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((s, i) => {
              const isAi = i === 2;
              const isDecision = i === 3 || i === 4;
              return (
                <div
                  key={s.n}
                  className={`relative rounded-2xl border p-5 transition-smooth hover:-translate-y-0.5 hover:shadow-card ${
                    isAi
                      ? "border-[#00D5D5]/40 bg-[#00D5D5]/5"
                      : isDecision
                      ? "border-[#6D4DFF]/40 bg-[#6D4DFF]/5"
                      : "border-border bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-[11px] font-bold tracking-[0.18em] tabular ${
                        isAi ? "text-[#00BFBF]" : isDecision ? "text-[#6D4DFF]" : "text-muted-foreground"
                      }`}
                    >
                      {s.n}
                    </span>
                    <div
                      className={`size-7 rounded-lg flex items-center justify-center ${
                        isAi
                          ? "bg-[#00D5D5]/15 text-[#008b9b]"
                          : isDecision
                          ? "bg-[#6D4DFF]/15 text-[#6D4DFF]"
                          : "bg-muted text-foreground/70"
                      }`}
                    >
                      {s.i}
                    </div>
                    {isAi && (
                      <span className="ml-auto text-[10px] font-semibold tracking-[0.18em] uppercase text-[#00BFBF]">
                        AI toetab
                      </span>
                    )}
                    {isDecision && (
                      <span className="ml-auto text-[10px] font-semibold tracking-[0.18em] uppercase text-[#6D4DFF]">
                        Kool otsustab
                      </span>
                    )}
                  </div>
                  <div className="text-[15px] font-semibold tracking-tight mb-1">{s.t}</div>
                  <p className="text-[12.5px] text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-xl bg-gradient-brand text-white border-0 hover:opacity-95">
              <Link to="/demo">
                Ava interaktiivne demo
                <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </Button>
            <span className="text-[12px] text-muted-foreground">
              Klikitav prototüüp · 6 sammu · 2 minutit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- PRINCIPAL DASHBOARD ---------------- */
const PrincipalDashboard = () => {
  const subjectBars = [
    { t: "Kehaline kasvatus", v: 86, c: "#00D5D5" },
    { t: "Eesti keel praktikana", v: 64, c: "#6D4DFF" },
    { t: "Muusika", v: 52, c: "#00BFBF" },
    { t: "Tehnoloogia", v: 38, c: "#9D7BFF" },
    { t: "Kunst", v: 24, c: "#00D5D5" },
  ];
  return (
    <section id="juht" className="relative bg-[#0D1020] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-20 size-96 rounded-full bg-[#6D4DFF]/30 blur-3xl" />
        <div className="absolute bottom-0 -left-20 size-96 rounded-full bg-[#00D5D5]/20 blur-3xl" />
      </div>

      <div className="relative max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#00D5D5] mb-4">
            Koolijuhi vaade
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.08]">
            Koolijuht ei näe ainult taotlusi.
            <br />
            <span className="text-gradient-brand">Ta näeb mustreid.</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-lg text-white/70 max-w-2xl">
            Juhtimisvaade aitab kujundada targemat tunniplaani ja ühtsemat praktikat.
            Andmed muutuvad otsustusinfoks — mitte aruandluseks.
          </p>
        </div>

        {/* Dashboard mock */}
        <div className="mt-10 rounded-3xl glass-dark border-glow p-4 md:p-6">
          {/* KPI row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { k: "Korduvaid taotlusi", v: "37", d: "viimase 30 päeva jooksul", trend: "+12%", i: <TrendingUp className="size-4" /> },
              { k: "Mustriga ainet", v: "5", d: "korduvad seosed", trend: "stabiilne", i: <BarChart3 className="size-4" /> },
              { k: "Osaline arvestamine", v: "62%", d: "otsuste osakaal", trend: "+8%", i: <PieChart className="size-4" /> },
              { k: "Pilooditud klasse", v: "12", d: "3 kooliastmes", trend: "uus", i: <School className="size-4" /> },
            ].map((kpi) => (
              <div key={kpi.k} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/50 font-semibold">
                    {kpi.k}
                  </div>
                  <div className="size-7 rounded-lg bg-gradient-brand text-white flex items-center justify-center">
                    {kpi.i}
                  </div>
                </div>
                <div className="text-3xl font-semibold tabular text-white tracking-tight">{kpi.v}</div>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-white/55">
                  <span className="px-1.5 py-0.5 rounded-md bg-[#00D5D5]/15 text-[#7CE8E8]">{kpi.trend}</span>
                  <span>{kpi.d}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-3">
            {/* Subject bar chart */}
            <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/50 font-semibold">
                    Korduvad mustrid · ained
                  </div>
                  <div className="text-white text-[15px] font-semibold mt-1">
                    Kus tekib õhk?
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">Viimased 90 päeva</span>
              </div>
              <div className="space-y-3.5">
                {subjectBars.map((b) => (
                  <div key={b.t}>
                    <div className="flex justify-between text-[12px] text-white/75 mb-1">
                      <span>{b.t}</span>
                      <span className="tabular text-white/55">{b.v}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${b.v}%`,
                          background: `linear-gradient(90deg, ${b.c}, #6D4DFF)`,
                          boxShadow: `0 0 12px ${b.c}55`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[11.5px] text-white/45 leading-relaxed">
                Pilothüpotees: kus tekib korduv muster, sealt saab kujundada targemat tunniplaani.
                Mitte automaatset vabastust.
              </p>
            </div>

            {/* Insights */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col gap-4">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/50 font-semibold mb-2">
                  Ressursi nähtavus
                </div>
                <div className="flex items-end gap-1 h-20">
                  {[34, 48, 42, 60, 56, 72, 68, 80, 74, 86].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#00D5D5]/30 to-[#6D4DFF]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 text-[11px] text-white/50">
                  Nähtava koolivälise õppe maht kasvab piloodi käigus.
                </div>
              </div>

              <div className="rounded-xl bg-[#6D4DFF]/15 border border-[#6D4DFF]/30 p-3.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="size-4 text-[#9D7BFF]" />
                  <div className="text-[12px] font-semibold text-white">Võimalik koormusmõju</div>
                </div>
                <p className="text-[11.5px] text-white/65 leading-relaxed">
                  Pilooditavad mustrid viitavad <strong className="text-white/85">~3–6%</strong> potentsiaalsele
                  tunniplaani paindlikkuse kasvule. Kinnitamata hüpotees, mitte tõotus.
                </p>
              </div>

              <div className="rounded-xl bg-white/5 border border-white/10 p-3.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <LineChart className="size-4 text-[#00D5D5]" />
                  <div className="text-[12px] font-semibold text-white">Osaline arvestamine</div>
                </div>
                <p className="text-[11.5px] text-white/65 leading-relaxed">
                  Suurem osa otsustest pole "jah/ei", vaid <strong className="text-white/85">osaline</strong> tunnustamine
                  + täiendavad tingimused.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/55">
            <span className="px-2.5 py-1 rounded-full border border-white/10">Pilothüpoteesid</span>
            <span className="px-2.5 py-1 rounded-full border border-white/10">Ressursi nähtavus</span>
            <span className="px-2.5 py-1 rounded-full border border-white/10">Võimalik koormusmõju</span>
            <span className="px-2.5 py-1 rounded-full border border-white/10">Mock-andmed pilootide jaoks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- VALIDATION ---------------- */
const Validation = () => {
  const stats = [
    { v: "72", l: "külastajat" },
    { v: "328", l: "lehevaadet" },
    { v: "68%", l: "mobiilis" },
    { v: "3 min", l: "keskmine kaasatus" },
  ];
  const segments = [
    "Põhikoolid", "Gümnaasiumid", "Erakoolid",
    "Munitsipaalkoolid", "Huvikoolid", "Eri regioonide juhid",
  ];
  const findings = [
    { i: <Workflow className="size-4" />, t: "Töövoog peab olema lihtne" },
    { i: <UserCheck className="size-4" />, t: "Rollid peavad olema selged" },
    { i: <Cpu className="size-4" />, t: "AI peab jääma kontrollitavaks" },
    { i: <Smartphone className="size-4" />, t: "Mobiili loetavus on kriitiline" },
    { i: <EyeOff className="size-4" />, t: "Kool soovib nähtavust enne automatiseerimist" },
  ];
  return (
    <section id="valideerimine" className="relative bg-white border-t border-border">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6D4DFF] mb-4">
          Valideerimine
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Me ei testinud ainult ideed.
          <br />
          <span className="text-gradient-brand">Testisime töövoogu.</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border p-5 bg-gradient-to-br from-white to-[#F7F8FA]">
              <div className="text-4xl font-semibold tabular tracking-tight text-gradient-brand">{s.v}</div>
              <div className="mt-1 text-[12.5px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-5 gap-4">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-[#0D1020] p-5 relative overflow-hidden min-h-[280px]">
            <div className="absolute inset-0 opacity-50">
              <div className="absolute size-72 rounded-full bg-[#00D5D5]/20 blur-3xl -top-20 -left-10" />
              <div className="absolute size-72 rounded-full bg-[#6D4DFF]/20 blur-3xl bottom-0 right-0" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 text-white/70 text-[11px] uppercase tracking-[0.18em] font-semibold mb-3">
                <MapPin className="size-3.5 text-[#00D5D5]" /> Eesti levik
              </div>
              {/* simple map */}
              <svg viewBox="0 0 320 200" className="w-full h-auto">
                <path
                  d="M30 80 L 80 50 L 140 45 L 200 55 L 260 70 L 290 110 L 270 150 L 220 170 L 160 175 L 100 165 L 50 140 Z"
                  fill="hsl(230 30% 16%)"
                  stroke="hsl(230 20% 30%)"
                  strokeWidth="1"
                />
                {[
                  [80, 90, "Tallinn"],
                  [180, 110, "Tartu"],
                  [50, 110, "Pärnu"],
                  [240, 90, "Narva"],
                  [130, 80, "Rakvere"],
                  [110, 140, "Viljandi"],
                  [220, 145, "Võru"],
                ].map(([x, y, name], i) => (
                  <g key={i}>
                    <circle cx={x as number} cy={y as number} r="8" fill="#00D5D5" opacity="0.2" />
                    <circle cx={x as number} cy={y as number} r="3.5" fill="#00D5D5">
                      <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                    </circle>
                    <text x={(x as number) + 8} y={(y as number) + 3} fill="white" opacity="0.7" fontSize="9">
                      {name}
                    </text>
                  </g>
                ))}
              </svg>
              <p className="mt-3 text-[11.5px] text-white/55">
                Koolijuhid eri regioonidest tagasisidestasid prototüübi.
              </p>
            </div>
          </div>

          {/* Segments + findings */}
          <div className="lg:col-span-3 grid gap-4">
            <div className="rounded-2xl border border-border bg-white p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-3">
                Segmendid
              </div>
              <div className="flex flex-wrap gap-2">
                {segments.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00D5D5]/10 to-[#6D4DFF]/10 border border-border text-[12.5px] text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-4">
                Põhilised leiud
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {findings.map((f) => (
                  <div key={f.t} className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8FA]">
                    <div className="size-8 rounded-lg bg-gradient-brand text-white flex items-center justify-center shrink-0">
                      {f.i}
                    </div>
                    <div className="text-[13px] text-foreground/85 leading-snug pt-1">{f.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- VALUE ECOSYSTEM ---------------- */
const ValueEcosystem = () => {
  const cards = [
    { t: "Õppija", d: "Vähem dubleerimist.", i: <GraduationCap className="size-5" />, c: "#00D5D5" },
    { t: "Õpetaja", d: "Vähem käsitööd.", i: <Users className="size-5" />, c: "#6D4DFF" },
    { t: "Koolijuht", d: "Selgem juhtimisinfo.", i: <Building2 className="size-5" />, c: "#00BFBF" },
    { t: "Huvikool", d: "Kvaliteedimärk ja nähtavus.", i: <Palette className="size-5" />, c: "#9D7BFF" },
    { t: "KOV", d: "Paremini juhitav haridusvõrk.", i: <Landmark className="size-5" />, c: "#00D5D5" },
  ];
  return (
    <section className="relative bg-[#F7F8FA] border-t border-border">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#00BFBF] mb-4">
          Ökosüsteemi väärtus
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Üks otsus. Viis võitu.
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {cards.map((c) => (
            <div
              key={c.t}
              className="group rounded-2xl border border-border bg-white p-5 hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
            >
              <div
                className="size-11 rounded-xl flex items-center justify-center text-white mb-4"
                style={{ background: `linear-gradient(135deg, ${c.c}, #6D4DFF)` }}
              >
                {c.i}
              </div>
              <div className="text-[16px] font-semibold tracking-tight">{c.t}</div>
              <p className="mt-1 text-[13.5px] text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- BUSINESS / SCALING ---------------- */
const Scaling = () => {
  const items = [
    { t: "800", s: "huvikooli", d: "Eesti võrgu skaleeritav esimene samm.", i: <Palette className="size-5" /> },
    { t: "Skaleeritav", s: "kvaliteedivõrk", d: "Nähtav osalus muutub usaldatavaks tõendiks.", i: <ShieldCheck className="size-5" /> },
    { t: "Põhjamaad", s: "haridussüsteemid", d: "Sarnane regulatiivne tugi ja avalik usaldus.", i: <Globe2 className="size-5" /> },
    { t: "Modulaarne", s: "lõimimine", d: "EHIS, eKool, Stuudium, ARNO — etapiviisiline liidestus.", i: <Layers className="size-5" /> },
  ];
  const trust = ["Mock-liidestused", "Pilot-first lähenemine", "GDPR-teadlik", "Inimotsus säilib"];
  return (
    <section className="relative bg-white border-t border-border">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6D4DFF] mb-4">
          Mudel ja skaleerimine
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Esimene samm Eestis.
          <br />
          <span className="text-gradient-brand">Mudeli potentsiaal on suurem.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((it) => (
            <div
              key={it.t + it.s}
              className="rounded-2xl border border-border p-6 bg-gradient-to-br from-white to-[#F7F8FA] hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
            >
              <div className="size-10 rounded-xl bg-gradient-brand text-white flex items-center justify-center mb-4">
                {it.i}
              </div>
              <div className="text-3xl font-semibold tracking-tight text-gradient-brand">{it.t}</div>
              <div className="text-[13px] text-muted-foreground mt-0.5">{it.s}</div>
              <p className="mt-3 text-[13px] text-foreground/75 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-[#F7F8FA] p-5 md:p-6 flex flex-wrap items-center gap-3">
          <ShieldCheck className="size-5 text-[#00BFBF]" />
          <span className="text-[12.5px] uppercase tracking-[0.18em] font-semibold text-muted-foreground">
            Usalduse alus
          </span>
          <div className="flex flex-wrap gap-2 ml-auto">
            {trust.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-white border border-border text-[12px] text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FINAL ---------------- */
const Final = () => (
  <section className="relative bg-hero-dark overflow-hidden border-t border-white/5">
    <ParticleField density={40} />
    <div className="relative max-w-[1180px] mx-auto px-5 md:px-8 py-24 md:py-32 text-center">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-brand opacity-40 rounded-full" />
          <Hourglass size={140} />
        </div>
      </div>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
        <span className="text-gradient-brand">Aeg loob ruumi.</span>
      </h2>
      <p className="mt-6 text-[16px] md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
        Kui kool näeb õppimist tervikuna, tekib rohkem ruumi õppimiseks, õpetamiseks ja arenguks.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" className="rounded-xl bg-gradient-brand text-white hover:opacity-95 border-0 px-7 h-12 text-[15px] shadow-[0_18px_40px_-14px_rgba(109,77,255,0.6)]">
          <Link to="/demo">
            Käivita demo
            <ArrowRight className="size-4 ml-1.5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-xl border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white px-7 h-12 text-[15px]">
          <Link to="/juht">Koolijuhi vaade</Link>
        </Button>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10">
        <div className="text-[11px] tracking-[0.3em] uppercase text-white/50 font-semibold">
          EduInvest LearnOnce
        </div>
        <p className="mt-2 text-[11px] text-white/35 tracking-[0.18em] uppercase">
          AI ei otsusta · Õpetaja otsustab · Pere saab selgituse
        </p>
      </div>
    </div>
  </section>
);

/* ---------------- PAGE ---------------- */
const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main>
      <Hero />
      <Problem />
      <DemoCase />
      <PrincipalDashboard />
      <Validation />
      <ValueEcosystem />
      <Scaling />
      <Final />
    </main>
  </div>
);

export default Index;

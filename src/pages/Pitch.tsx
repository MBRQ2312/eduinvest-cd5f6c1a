import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Users, GraduationCap, Building2, Sparkles,
  ShieldCheck, CheckCircle2, Home as HomeIcon, Trophy, X, Play,
  Clock, Coins, TrendingUp, AlertCircle, FileCheck, Eye,
  Heart, Globe, BookOpen, Layers, MapPin, Activity, CalendarRange,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ========== Brand palette (per spec) ========== */
const C = {
  bg: "#F7F5EF",
  text: "#111827",
  green: "#053F35",
  teal: "#006D6F",
  purple: "#7C6BEA",   // AI
  lime: "#D6D04A",     // positive value
  orange: "#E07A3C",   // risk / "mõõdame piloodis"
  cardBg: "#FFFFFF",
  subtle: "#EEEAE0",
  border: "#E2DCCC",
} as const;

/* ========== Reusable shell ========== */

const SlideShell = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
    <div
      className="rounded-[24px] border shadow-sm p-6 sm:p-12 min-h-[72vh] flex flex-col justify-center"
      style={{ background: C.cardBg, borderColor: C.border }}
    >
      {children}
    </div>
  </div>
);

const Eyebrow = ({ children, color = C.teal }: { children: React.ReactNode; color?: string }) => (
  <div
    className="text-[11px] sm:text-xs uppercase font-semibold mb-3"
    style={{ color, letterSpacing: "0.18em" }}
  >
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-3xl sm:text-5xl font-semibold leading-[1.1] tracking-tight break-words"
    style={{ color: C.text }}
  >
    {children}
  </h2>
);

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base sm:text-xl leading-relaxed mt-4" style={{ color: "#4B5563" }}>
    {children}
  </p>
);

const Card = ({
  children,
  bg = C.cardBg,
  border = C.border,
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  border?: string;
  className?: string;
}) => (
  <div
    className={`rounded-[20px] border p-5 sm:p-6 shadow-sm ${className}`}
    style={{ background: bg, borderColor: border }}
  >
    {children}
  </div>
);

const Pill = ({ children, bg, fg }: { children: React.ReactNode; bg: string; fg: string }) => (
  <span
    className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium"
    style={{ background: bg, color: fg }}
  >
    {children}
  </span>
);

const Footnote = ({ children, color = "#6B7280" }: { children: React.ReactNode; color?: string }) => (
  <p className="text-xs sm:text-sm mt-4" style={{ color }}>
    {children}
  </p>
);

/* ========== Slides ========== */

/* 1 — Suur probleem (30 s) */
const Slide1 = () => (
  <SlideShell>
    <Eyebrow>EduInvest LearnOnce · 30 sekundit</Eyebrow>
    <Title>Õpetajate ülekoormus, õppija väsimus, dubleeriv õppimine.</Title>
    <Lead>
      Samal ajal toimub suur osa õppimisest juba väljaspool kooli — trennis, muusika- ja kunstikoolis,
      robootikas, kosmoseringis, keeleõppes ja projektides.
    </Lead>

    <div className="mt-8 grid md:grid-cols-2 gap-4">
      <Card bg={C.subtle}>
        <Eyebrow color={C.green}>Mis on koolil olemas</Eyebrow>
        <p className="text-sm sm:text-base" style={{ color: C.text }}>
          Seadusega antud paindlikkus koolivälist õppimist arvestada.
        </p>
      </Card>
      <Card bg={`${C.orange}15`} border={`${C.orange}50`}>
        <Eyebrow color={C.orange}>Mis koolil puudub</Eyebrow>
        <p className="text-sm sm:text-base" style={{ color: C.text }}>
          Analüütika- ja otsustustööriist, mis aitaks seda päriselt juhtida.
        </p>
      </Card>
    </div>

    <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
      style={{ color: C.text, borderColor: C.lime }}>
      Probleem ei ole selles, et laps ei õpi. Probleem on selles, et kool ei näe seda
      otsuse tegemiseks piisavalt selgelt.
    </p>

    <div className="mt-6 rounded-2xl p-5 sm:p-6"
      style={{ background: C.green, color: "white" }}>
      <p className="text-lg sm:text-2xl font-medium leading-snug">
        Kool ei vaja veel üht vormi.<br />
        Kool vajab <span style={{ color: C.lime }}>juhtimisinfot</span>.
      </p>
      <div className="mt-3 inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold"
        style={{ background: C.lime, color: C.green }}>
        AI teeb eeltöö. Kool otsustab.
      </div>
    </div>
  </SlideShell>
);

/* 2 — Miks nüüd? */
const Slide2 = () => {
  const items = [
    { i: <Clock />, t: "Pikad koolipäevad" },
    { i: <Activity />, t: "Õppijate väsimus" },
    { i: <Users />, t: "Õpetajate puudus" },
    { i: <GraduationCap />, t: "Vananev õpetajaskond" },
    { i: <MapPin />, t: "Vähem lapsi piirkondades" },
    { i: <Layers />, t: "Vajadus kasutada ressursse targemalt" },
  ];
  return (
    <SlideShell>
      <Eyebrow color={C.green}>Miks nüüd?</Eyebrow>
      <Title>Koolid on surve all.</Title>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {items.map((it) => (
          <Card key={it.t} bg={C.subtle} border={C.border}>
            <div className="size-10 rounded-full flex items-center justify-center mb-3"
              style={{ background: C.cardBg, color: C.green }}>
              {it.i}
            </div>
            <div className="font-medium text-sm sm:text-base" style={{ color: C.text }}>{it.t}</div>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
        style={{ color: C.text, borderColor: C.lime }}>
        Kui õpetajaid ja õppija aega on vähe, ei saa kool lubada, et juba toimunud
        õppimine jääb nähtamatuks.
      </p>
    </SlideShell>
  );
};

/* 3 — Probleem */
const Slide3 = () => (
  <SlideShell>
    <Eyebrow>Probleem</Eyebrow>
    <Title>Õppimine toimub mitmel pool, aga kool näeb ainult osa.</Title>
    <Lead>
      Õppija õpib ka trennis, muusikakoolis, huviringis, projektides, keeleõppes ja
      kogukonnas. Kool näeb sellest sageli ainult väikest osa.
    </Lead>

    <div className="mt-8 grid md:grid-cols-3 gap-4">
      {[
        { i: <Users style={{ color: C.teal }} />, t: "Õppija", d: "Võib sama oskust mitu korda tõestada." },
        { i: <GraduationCap style={{ color: C.green }} />, t: "Õpetaja", d: "Peab juhtumit nullist hindama." },
        { i: <Building2 style={{ color: C.green }} />, t: "Koolijuht", d: "Ei näe, kus õppija aeg ja õpetaja töö dubleeruvad." },
      ].map((c) => (
        <Card key={c.t}>
          <div className="size-9 rounded-full flex items-center justify-center mb-3"
            style={{ background: C.subtle }}>
            {c.i}
          </div>
          <div className="font-semibold text-base sm:text-lg" style={{ color: C.text }}>{c.t}</div>
          <p className="text-sm mt-2" style={{ color: "#4B5563" }}>{c.d}</p>
        </Card>
      ))}
    </div>

    <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
      style={{ color: C.text, borderColor: C.teal }}>
      Probleem ei ole selles, et õppija ei õpi. Probleem on selles, et kool ei näe kogu
      õppimist otsuse tegemiseks piisavalt selgelt.
    </p>
  </SlideShell>
);

/* 4 — Demojuhtum */
const Slide4 = () => (
  <SlideShell>
    <Eyebrow>Demojuhtum</Eyebrow>
    <Title>Testime ühte konkreetset otsust.</Title>

    <div className="mt-8 grid md:grid-cols-2 gap-5">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full flex items-center justify-center"
            style={{ background: C.teal, color: "white" }}>
            <Trophy className="size-5" />
          </div>
          <div>
            <div className="font-semibold text-lg" style={{ color: C.text }}>Nikita Tamm</div>
            <div className="text-xs" style={{ color: "#6B7280" }}>8. klass</div>
          </div>
        </div>
        <ul className="space-y-2 text-sm sm:text-base" style={{ color: C.text }}>
          <li>• Jalgpallitrenn 3× nädalas</li>
          <li>• Treening toimub eesti keeles</li>
          <li>• Treener kinnitab osalemise, mahu, tegevuse sisu ja keele</li>
        </ul>
      </Card>

      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <Eyebrow color={C.green}>Kooli küsimus</Eyebrow>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: C.text }}>
          Kas osa Nikita spordikoolis toimuvast õppimisest saab arvestada kehalise
          kasvatuse õpitulemuste täitmisel ning kas eestikeelne treening saab olla
          eesti keele praktilise kasutuse toetav tõend?
        </p>
      </Card>
    </div>

    <Footnote color={C.orange}>
      See ei tähenda automaatselt eesti keele hinde asendamist ega tunnist vabastamist.
    </Footnote>
  </SlideShell>
);

/* 5 — Lahendus */
const FLOW = [
  { n: "01", t: "Taotlus perelt", color: C.teal },
  { n: "02", t: "Kooli sisend", color: C.teal },
  { n: "03", t: "Tõend partnerilt", color: C.teal },
  { n: "04", t: "AI eelanalüüs", color: C.purple },
  { n: "05", t: "Otsus koolilt", color: C.green },
  { n: "06", t: "Selgitus ja koondvaade", color: C.teal },
];

const Slide5 = () => (
  <SlideShell>
    <Eyebrow>Lahendus</Eyebrow>
    <Title>Üks arvestusotsuse töövoog.</Title>

    <div className="mt-8 grid md:grid-cols-[1.4fr_1fr] gap-8">
      <div className="relative pl-7">
        <div className="absolute left-[14px] top-2 bottom-2 w-px" style={{ background: C.border }} />
        {FLOW.map((s) => (
          <div key={s.n} className="relative mb-5 last:mb-0">
            <span
              className="absolute -left-[22px] top-1.5 size-4 rounded-full ring-4"
              style={{ background: s.color, boxShadow: `0 0 0 4px ${C.cardBg}` }}
            />
            <div className="text-[11px] font-mono" style={{ color: "#6B7280" }}>{s.n}</div>
            <div className="text-base sm:text-lg font-medium" style={{ color: C.text }}>{s.t}</div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <Card bg={C.subtle}>
          <div className="space-y-1.5 text-sm sm:text-base" style={{ color: C.text }}>
            <div><strong>Pere</strong> algatab.</div>
            <div><strong>Treener</strong> kinnitab.</div>
            <div style={{ color: C.purple }}><strong>AI</strong> analüüsib.</div>
            <div style={{ color: C.green }}><strong>Kool</strong> otsustab.</div>
          </div>
        </Card>
        <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
          <p className="text-sm sm:text-base font-medium" style={{ color: C.text }}>
            LearnOnce ei otsusta kooli eest. See annab õpetajale kontrollitava eelanalüüsi.
          </p>
        </Card>
      </div>
    </div>
  </SlideShell>
);

/* 6 — AI roll */
const Slide6 = () => {
  const yes = [
    "koondab tõendid",
    "pakub võimalikud õppekava seosed",
    "näitab puuduva info",
    "koostab selgituse mustandi",
  ];
  const no = [
    "ei anna hinnet",
    "ei vabasta tunnist",
    "ei tee lõppotsust",
    "ei asenda õpetaja hinnangut",
  ];
  return (
    <SlideShell>
      <Eyebrow color={C.purple}>AI roll</Eyebrow>
      <Title>AI teeb eeltöö. Kool otsustab.</Title>

      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <Card bg={`${C.purple}0D`} border={`${C.purple}40`}>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-5" style={{ color: C.purple }} />
            <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: C.purple }}>
              AI teeb
            </span>
          </div>
          <ul className="space-y-2.5">
            {yes.map((x) => (
              <li key={x} className="flex items-start gap-2 text-sm sm:text-base" style={{ color: C.text }}>
                <CheckCircle2 className="size-4 mt-0.5 shrink-0" style={{ color: C.purple }} />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-4">
            <X className="size-5" style={{ color: "#9CA3AF" }} />
            <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: "#6B7280" }}>
              AI ei tee
            </span>
          </div>
          <ul className="space-y-2.5">
            {no.map((x) => (
              <li key={x} className="flex items-start gap-2 text-sm sm:text-base" style={{ color: C.text }}>
                <X className="size-4 mt-0.5 shrink-0" style={{ color: "#9CA3AF" }} />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
        style={{ color: C.text, borderColor: C.green }}>
        Arvestamise aluseks ei ole ainult õpilase väide, vaid <strong>tõendite kogum</strong>.
      </p>
    </SlideShell>
  );
};

/* 7 — Väärtus */
const Slide7 = () => {
  const items = [
    { i: <Users />, t: "Õppija", d: "Vähem tarbetut kordamist ja õiglasem õpitee.", c: C.teal },
    { i: <Heart />, t: "Pere", d: "Selge vastus: mida arvestati, mida mitte ja miks.", c: C.teal },
    { i: <GraduationCap />, t: "Õpetaja", d: "Vähem käsitsi eeltööd ja parem otsuse alus.", c: C.green },
    { i: <Trophy />, t: "Treener / huvikool", d: "Lihtne roll: kinnitab tegeliku tegevuse, mitte ei otsusta kooli eest.", c: C.green },
    { i: <Building2 />, t: "Koolijuht", d: "Näeb korduvaid juhtumeid ja saab kujundada ühist praktikat.", c: C.green },
    { i: <Globe />, t: "Koolipidaja / KOV", d: "Saab skaleeritava töövoo mitme kooli jaoks.", c: C.purple },
  ];
  return (
    <SlideShell>
      <Eyebrow>Väärtus</Eyebrow>
      <Title>Kes võidab ja mida võidab?</Title>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <Card key={c.t}>
            <div className="size-10 rounded-full flex items-center justify-center mb-3"
              style={{ background: `${c.c}15`, color: c.c }}>
              {c.i}
            </div>
            <div className="font-semibold text-base sm:text-lg" style={{ color: C.text }}>{c.t}</div>
            <p className="text-sm mt-2" style={{ color: "#4B5563" }}>{c.d}</p>
          </Card>
        ))}
      </div>
    </SlideShell>
  );
};

/* 8 — Testgrupp */
const Metric = ({ v, l }: { v: string; l: string }) => (
  <Card>
    <div className="text-2xl sm:text-3xl font-semibold" style={{ color: C.text }}>{v}</div>
    <div className="text-xs sm:text-sm mt-1" style={{ color: "#6B7280" }}>{l}</div>
  </Card>
);

const Slide8 = () => (
  <SlideShell>
    <Eyebrow>Valideerisime sihtgrupiga</Eyebrow>
    <Title>Me ei testinud ainult ideed. Testisime prototüüpi.</Title>

    <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
      <Metric v="69" l="külastajat" />
      <Metric v="320" l="lehevaatamist" />
      <Metric v="4.64" l="vaadet / külastus" />
      <Metric v="3 min 2 s" l="keskmine külastus" />
      <Metric v="69.6%" l="mobiilist" />
    </div>

    <div className="mt-5">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <Eyebrow color={C.teal}>Koolijuhid ja nende tiimiliikmed</Eyebrow>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: C.text }}>
          Prototüüpi jagati koolijuhtidele ja nende tiimiliikmetele eri koolitüüpidest:
          põhikoolid, gümnaasiumid, riigigümnaasium, erakoolid, väiksemad piirkonnakoolid,
          huvikoolid, kunsti- ja muusikakoolid.
        </p>
      </Card>
    </div>

    <div className="mt-5 grid md:grid-cols-2 gap-4">
      <Card bg={C.subtle}>
        <Eyebrow>Mida küsisime?</Eyebrow>
        <ul className="text-xs sm:text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Kas probleem on päris?</li>
          <li>• Kas töövoog on arusaadav?</li>
          <li>• Kas see lihtsustaks kooli tööd?</li>
          <li>• Kas see looks uut väärtust?</li>
          <li>• Kas kool või koolipidaja kaaluks kasutamist või ostmist?</li>
        </ul>
      </Card>
      <Card bg={`${C.lime}20`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Mida teada saime?</Eyebrow>
        <ul className="text-xs sm:text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Koolijuht vajab juhtimisinfot;</li>
          <li>• Töövoog peab vähendama bürokraatiat;</li>
          <li>• AI peab jääma eelanalüüsiks;</li>
          <li>• Otsus peab jääma koolile;</li>
          <li>• Riskid tuleb nähtavaks teha.</li>
        </ul>
      </Card>
    </div>

    <div className="mt-5 flex items-start gap-2 rounded-xl p-3"
      style={{ background: `${C.orange}15`, borderLeft: `3px solid ${C.orange}` }}>
      <AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: C.orange }} />
      <p className="text-xs sm:text-sm" style={{ color: C.text }}>
        Esimene testimine täpsustas töövoogu. <strong>Mõju ajale ja rahale mõõdame piloodis.</strong>
      </p>
    </div>
  </SlideShell>
);

/* 9 — Mida Eesti haridusruum võidab? */
const Slide9 = () => (
  <SlideShell>
    <Eyebrow>Mõju potentsiaal</Eyebrow>
    <Title>Mida Eesti haridusruum võidab?</Title>
    <Lead>
      Hüpoteesid kogu üldhariduse mahus. Need on piloodis kontrollitavad arvutused, mitte lubatud kokkuhoid.
    </Lead>

    <div className="mt-6 grid md:grid-cols-2 gap-3">
      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: C.green }}>Õppija aeg</div>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>10% dubleerimist</div>
            <div className="text-xl font-semibold" style={{ color: C.text }}>~11,7 mln</div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>õpilas-õppetundi / a</div>
          </div>
          <div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>30% dubleerimist</div>
            <div className="text-xl font-semibold" style={{ color: C.text }}>~35,2 mln</div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>õpilas-õppetundi / a</div>
          </div>
        </div>
      </Card>

      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: C.teal }}>Tunniplaan</div>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>10%</div>
            <div className="text-xl font-semibold" style={{ color: C.text }}>~488 000</div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>klassi/rühmatundi</div>
          </div>
          <div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>30%</div>
            <div className="text-xl font-semibold" style={{ color: C.text }}>~1,47 mln</div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>klassi/rühmatundi</div>
          </div>
        </div>
      </Card>
    </div>

    <div className="mt-3 grid md:grid-cols-2 gap-3">
      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: C.green }}>Õpetaja tööaeg</div>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>10%</div>
            <div className="text-xl font-semibold" style={{ color: C.text }}>~366 000 h</div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>~200 õpetaja FTE</div>
          </div>
          <div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>30%</div>
            <div className="text-xl font-semibold" style={{ color: C.text }}>~1,1 mln h</div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>~600 õpetaja FTE</div>
          </div>
        </div>
      </Card>

      <Card bg={`${C.purple}0D`} border={`${C.purple}40`}>
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: C.purple }}>Rahaekvivalent (21–22 €/h)</div>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>10%</div>
            <div className="text-xl font-semibold" style={{ color: C.text }}>~7,7–8,1 mln €</div>
          </div>
          <div>
            <div className="text-[11px]" style={{ color: "#6B7280" }}>30%</div>
            <div className="text-xl font-semibold" style={{ color: C.text }}>~23–24 mln €</div>
          </div>
        </div>
      </Card>
    </div>

    <div className="mt-4 flex items-start gap-2 rounded-xl p-3"
      style={{ background: `${C.orange}15`, borderLeft: `3px solid ${C.orange}` }}>
      <AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: C.orange }} />
      <p className="text-xs sm:text-sm" style={{ color: C.text }}>
        Need on piloodis kontrollitavad hüpoteesid, mitte lubatud kokkuhoid. Piloodis mõõdame:
        ühe arvestusotsuse ettevalmistus väheneb õpetaja jaoks <strong>25–40 minutilt 5–10 minutile</strong>.
      </p>
    </div>
  </SlideShell>
);

/* 10 — Kolm kliendisegmenti */
const Slide10 = () => (
  <SlideShell>
    <Eyebrow>Kliendisegmendid</Eyebrow>
    <Title>Kellele LearnOnce väärtust loob?</Title>
    <Lead>
      LearnOnce ei ole ainult töövoog. See on otsustustugi, mis loob väärtust
      kolmele erinevale kliendisegmendile.
    </Lead>

    <div className="mt-8 grid md:grid-cols-3 gap-4">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <div className="size-10 rounded-full flex items-center justify-center mb-3"
          style={{ background: C.teal, color: "white" }}>
          <Building2 className="size-5" />
        </div>
        <Eyebrow color={C.teal}>1 · Kool / koolijuht</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>
          Esmane klient
        </p>
        <ul className="text-xs sm:text-sm space-y-1.5" style={{ color: "#4B5563" }}>
          <li>• ülevaade, kus õppimine dubleerub;</li>
          <li>• tunniplaani targem juhtimine;</li>
          <li>• õpetaja tööaeg põhiainetele ja andekate toetamisele;</li>
          <li>• otsus tõenduste põhjal, mitte kõhutunde järgi.</li>
        </ul>
      </Card>

      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <div className="size-10 rounded-full flex items-center justify-center mb-3"
          style={{ background: C.green, color: "white" }}>
          <Globe className="size-5" />
        </div>
        <Eyebrow color={C.green}>2 · KOV / koolipidaja</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>
          Skaleerimise ostja
        </p>
        <ul className="text-xs sm:text-sm space-y-1.5" style={{ color: "#4B5563" }}>
          <li>• koolideülene muster;</li>
          <li>• vähem üksikvaidlusi;</li>
          <li>• ühtne arvestamise mudel;</li>
          <li>• huvihariduse ja üldhariduse parem sidumine.</li>
        </ul>
      </Card>

      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <div className="size-10 rounded-full flex items-center justify-center mb-3"
          style={{ background: C.green, color: "white" }}>
          <Trophy className="size-5" />
        </div>
        <Eyebrow color={C.green}>3 · Huvikoolid</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>
          Kvaliteedimärk
        </p>
        <ul className="text-xs sm:text-sm space-y-1.5" style={{ color: "#4B5563" }}>
          <li>• 800+ huvikooli Eestis;</li>
          <li>• õpe muutub koolile nähtavaks;</li>
          <li>• standardiseeritud arvestatavuse profiil;</li>
          <li>• tugevam väärtuspakkumine perele.</li>
        </ul>
      </Card>
    </div>

    <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
      style={{ color: C.text, borderColor: C.lime }}>
      KOV ei vaja iga pere eraldi vaidlust. KOV vajab mudelit, kuidas koolivälist
      õppimist tõendatult ja võrreldavalt arvestada.
    </p>
  </SlideShell>
);

/* 11 — Mida koolijuht päriselt võidab */
const Slide11 = () => {
  const items = [
    { i: <Layers />, t: "Tunniplaani õhk", d: "Kui osa õppijaid täidab õpitulemusi tõendatult huvihariduses, saab järgmist perioodi targemalt planeerida." },
    { i: <FileCheck />, t: "Vähem dubleerimist", d: "Kool ei õpeta sama õpitulemust uuesti, kui see on juhendatud keskkonnas tõendatult saavutatud." },
    { i: <GraduationCap />, t: "Õpetaja tööaja parem kasutus", d: "Aeg liigub sinna, kus on kõige rohkem vaja: eesti keel, matemaatika, reaalained, tugitegevused, andekate arendamine." },
    { i: <Trophy />, t: "Valikained ja talendid", d: "Talendikas õppija saab õppida talendi juures ja kool saab seda tõendatult arvestada." },
    { i: <ShieldCheck />, t: "Vähem vaidlusi", d: "Pere saab põhjendatud selgituse, mitte suulise “jah/ei” vastuse." },
    { i: <Eye />, t: "Juhtimisinfo", d: "Koolijuht näeb, millised ained, klassid ja huvikoolid tekitavad arvestamise potentsiaali." },
  ];
  return (
    <SlideShell>
      <Eyebrow>Koolijuhi vaade</Eyebrow>
      <Title>Mida koolijuht päriselt võidab?</Title>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <Card key={c.t}>
            <div className="size-10 rounded-full flex items-center justify-center mb-3"
              style={{ background: `${C.teal}15`, color: C.teal }}>
              {c.i}
            </div>
            <div className="font-semibold text-base sm:text-lg" style={{ color: C.text }}>{c.t}</div>
            <p className="text-sm mt-2" style={{ color: "#4B5563" }}>{c.d}</p>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
        style={{ color: C.text, borderColor: C.lime }}>
        Koolijuht ei osta vormi. Koolijuht ostab võimaluse juhtida õppija aega,
        õpetaja tööaega ja tunniplaani targemalt.
      </p>

      <Footnote>
        See ei tähenda õpetajate väärtuse vähendamist — see tähendab, et õpetaja aeg
        suunatakse sinna, kus tema mõju on suurem.
      </Footnote>
    </SlideShell>
  );
};

/* 12 — Huvikoolide kvaliteedimärk */
const Slide12 = () => (
  <SlideShell>
    <Eyebrow color={C.green}>Huvikoolide segment</Eyebrow>
    <Title>Nähtav õpe, mitte lihtsalt hobi.</Title>
    <Lead>
      Eestis on 800+ tegutsevat huvikooli ja üle 3000 õppekava. Täna jõuavad tõendid
      kooli eri vormis: PDF, kiri, link, screenshot, treeneri kommentaar.
    </Lead>

    <div className="mt-8 grid md:grid-cols-[1.3fr_1fr] gap-5">
      <Card bg={C.subtle}>
        <Eyebrow color={C.teal}>LearnOnce arvestatavuse profiil</Eyebrow>
        <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
          <li>• huvikooli õppekava;</li>
          <li>• õpiväljundid;</li>
          <li>• juhendaja kinnitus ja kvalifikatsioon;</li>
          <li>• osalemise maht;</li>
          <li>• tegevuse keel;</li>
          <li>• võistlused / esinemised / link;</li>
          <li>• seos üldhariduse õpitulemustega.</li>
        </ul>
      </Card>

      <div className="space-y-3">
        <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
          <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: C.green }}>
            Kvaliteedimärk
          </div>
          <div className="text-xl font-semibold mt-1" style={{ color: C.text }}>
            LearnOnce arvestatav õpe
          </div>
          <p className="text-xs mt-2" style={{ color: "#4B5563" }}>
            See ei tähenda automaatset vabastust. Kool saab huvikooli õpet võrrelda
            ja kasutada otsuse tegemisel.
          </p>
        </Card>

        <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
          <p className="text-sm font-medium" style={{ color: C.text }}>
            “Õpi meie juures — sinu pingutus võib koolis arvesse minna.”
          </p>
        </Card>
      </div>
    </div>

    <div className="mt-6 rounded-xl p-3 text-sm"
      style={{ background: `${C.orange}15`, borderLeft: `3px solid ${C.orange}`, color: C.text }}>
      <strong>Oluline piirang:</strong> Huvikool ei otsusta kooli eest. Huvikool
      kinnitab tegevuse, mahu, sisu, keele ja õpiväljundite kirjelduse. Lõppotsuse teeb kool.
    </div>
  </SlideShell>
);

/* 13 — Ärimudel: kes maksab ja miks */
const Slide13 = () => (
  <SlideShell>
    <Eyebrow color={C.purple}>Ärimudel</Eyebrow>
    <Title>Kes maksab ja miks?</Title>

    <div className="mt-8 grid md:grid-cols-3 gap-4">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <Eyebrow color={C.teal}>Kool / koolijuht</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>
          Maksab töövoo ja juhtimisinfo eest.
        </p>
        <ul className="text-xs space-y-1" style={{ color: "#4B5563" }}>
          <li>• vähem käsitööd;</li>
          <li>• parem tunniplaan;</li>
          <li>• vähem dubleerimist;</li>
          <li>• õpetaja tööaeg põhiainetele.</li>
        </ul>
      </Card>

      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <Eyebrow color={C.green}>KOV / koolipidaja</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>
          Maksab või toetab koolideülese mudelina.
        </p>
        <ul className="text-xs space-y-1" style={{ color: "#4B5563" }}>
          <li>• vähem kaebusi;</li>
          <li>• ühtne praktika;</li>
          <li>• huvi- ja üldhariduse sidumine;</li>
          <li>• ressursi parem kasutus.</li>
        </ul>
      </Card>

      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Huvikool</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>
          Maksab kvaliteedimärgi / arvestatavuse profiili eest.
        </p>
        <ul className="text-xs space-y-1" style={{ color: "#4B5563" }}>
          <li>• õpe muutub nähtavaks;</li>
          <li>• standardiseeritud tõend;</li>
          <li>• suurem väärtus perele;</li>
          <li>• eristumine turul.</li>
        </ul>
      </Card>
    </div>

    <div className="mt-6">
      <Eyebrow color={C.purple}>Võimalikud hinnastusmudelid</Eyebrow>
      <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {[
          { t: "Koolipõhine SaaS", d: "Kuutasu töövoo eest." },
          { t: "Õppijapõhine", d: "Tasu juhtumi/õppija kohta." },
          { t: "KOV litsents", d: "Mitmele koolile korraga." },
          { t: "Huvikooli märk", d: "Arvestatavuse profiil." },
          { t: "Integratsioon", d: "eKool / Stuudium / ARNO lisamoodul." },
        ].map((x) => (
          <Card key={x.t} className="!p-3">
            <div className="text-xs font-semibold" style={{ color: C.text }}>{x.t}</div>
            <div className="text-[11px] mt-1" style={{ color: "#6B7280" }}>{x.d}</div>
          </Card>
        ))}
      </div>
    </div>

    <div className="mt-5 rounded-xl p-3 text-xs sm:text-sm"
      style={{ background: C.subtle, borderLeft: `3px solid ${C.teal}`, color: C.text }}>
      <strong>Esimene müügisuund:</strong> koolid ja koolipidajad. <strong>Teine kasvusuund:</strong> huvikoolide
      kvaliteedimärk. <strong>Kolmas kasvusuund:</strong> eKool / Stuudium / ARNO plug-in või riiklik moodul.
    </div>

    <Footnote color={C.orange}>
      Ärimudelit valideerime järgmises etapis. Häkil tõestasime probleemi, kasutajahuvi
      ja ühe otsustusvoo prototüübi.
    </Footnote>
  </SlideShell>
);

/* 14 — Skaleerimine ja lõpp */
const Slide14 = () => (
  <SlideShell>
    <Eyebrow>Skaleerimine</Eyebrow>
    <Title>Alustame kitsalt, laiendame samm-sammult.</Title>

    <div className="mt-8 grid md:grid-cols-3 gap-4">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <Eyebrow color={C.teal}>Alustame</Eyebrow>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• üks kool</li>
          <li>• üks klass</li>
          <li>• üks aine</li>
          <li>• üks koolivälise õppimise liik</li>
        </ul>
      </Card>

      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Esimene kasutusjuht</Eyebrow>
        <p className="text-sm font-medium" style={{ color: C.text }}>
          Spordikool → kehaline kasvatus
        </p>
        <p className="text-xs mt-2" style={{ color: "#4B5563" }}>
          Lisavaade: eestikeelne treening kui eesti keele praktilise kasutuse toetav tõend.
        </p>
      </Card>

      <Card>
        <Eyebrow>Laiendatav</Eyebrow>
        <ul className="text-sm space-y-1" style={{ color: C.text }}>
          <li>• muusikakool</li>
          <li>• robootika</li>
          <li>• keeleõpe</li>
          <li>• projektõpe</li>
          <li>• vabatahtlik töö</li>
        </ul>
      </Card>
    </div>

    <div className="mt-6 grid md:grid-cols-2 gap-3">
      <Card bg={`${C.purple}0D`} border={`${C.purple}40`}>
        <Eyebrow color={C.purple}>Integratsioonid</Eyebrow>
        <p className="text-sm" style={{ color: C.text }}>
          eKool, Stuudium, ARNO, EHIS või kooli/KOV-i enda süsteemid.
        </p>
      </Card>
      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Rahvusvaheline skaleerimine</Eyebrow>
        <p className="text-sm" style={{ color: C.text }}>
          Skandinaavia, Läti ja Leedu — sama probleem: tugev huviharidus, pikad
          koolipäevad, õpetajate puudus, vajadus formaalset ja mitteformaalset õppimist siduda.
        </p>
      </Card>
    </div>

    <Footnote color={C.orange}>
      Iga riigi puhul tuleb lokaliseerida õppekavad, rahastusmudel, andmekaitse ja koolipidaja vastutus.
    </Footnote>

    <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
      {["kool", "KOV", "riik", "rahvusvaheline"].map((x, i, arr) => (
        <div key={x} className="flex items-center gap-2 sm:gap-4">
          <div className="rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-sm font-semibold"
            style={{
              background: i === 0 ? C.teal : i === 1 ? C.green : i === 2 ? C.purple : C.lime,
              color: i === 3 ? C.text : "white",
            }}>
            {x}
          </div>
          {i < arr.length - 1 && <ArrowRight className="size-4" style={{ color: "#9CA3AF" }} />}
        </div>
      ))}
    </div>

    <div className="mt-8 rounded-[20px] p-6 sm:p-8 text-center"
      style={{ background: C.green, color: "white" }}>
      <p className="text-lg sm:text-2xl font-medium leading-snug">
        Me ei lisa õppimist juurde.<br />
        Me teeme juba toimunu <span style={{ color: C.lime }}>nähtavaks</span>,{" "}
        tõendatuks ja kooli otsusel arvestatavaks.
      </p>
      <div className="mt-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
        style={{ background: C.lime, color: C.green }}>
        AI teeb eeltöö. Kool otsustab.
      </div>
    </div>

    <div className="mt-6 flex flex-wrap gap-3 justify-center">
      <Button asChild size="lg" className="rounded-full"
        style={{ background: C.teal, color: "white" }}>
        <Link to="/perele"><Play className="size-4" /> Vaata demo</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full">
        <Link to="/"><HomeIcon className="size-4" /> Avalehele</Link>
      </Button>
    </div>
  </SlideShell>
);

/* === Lisa-slaidid 12-deck'ile === */

/* Eesti haridusruumi mõõtkava */
const SlideScale = () => (
  <SlideShell>
    <Eyebrow color={C.teal}>Eesti haridusruumi mõõtkava</Eyebrow>
    <Title>Suur süsteem, käsitööna juhitud arvestamine.</Title>

    <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
      {[
        { v: "473", l: "üldhariduskooli" },
        { v: "849", l: "tegutsevat huvikooli" },
        { v: "153 263", l: "huvikooli õppijat" },
        { v: "3000+", l: "õppekava" },
        { v: "17 390", l: "üldhariduskooli õpetajat" },
      ].map((x) => (
        <Card key={x.l}>
          <div className="text-2xl sm:text-3xl font-semibold" style={{ color: C.text }}>{x.v}</div>
          <div className="text-xs mt-1" style={{ color: "#6B7280" }}>{x.l}</div>
        </Card>
      ))}
    </div>

    <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
      style={{ color: C.text, borderColor: C.lime }}>
      Kooliväline õppimine on suur, aga arvestamise töövoog on käsitöö.
    </p>
  </SlideShell>
);

/* Kes maksab ja miks? */
const SlidePayers = () => (
  <SlideShell>
    <Eyebrow color={C.purple}>Kliendisegmendid</Eyebrow>
    <Title>Kes maksab ja miks?</Title>

    <div className="mt-8 grid md:grid-cols-3 gap-4">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <div className="size-10 rounded-full flex items-center justify-center mb-3"
          style={{ background: C.teal, color: "white" }}>
          <Building2 className="size-5" />
        </div>
        <Eyebrow color={C.teal}>Kool / koolijuht</Eyebrow>
        <p className="text-sm" style={{ color: C.text }}>
          Juhtimisinfo, tunniplaan, õpetaja tööaja parem kasutus.
        </p>
      </Card>

      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <div className="size-10 rounded-full flex items-center justify-center mb-3"
          style={{ background: C.green, color: "white" }}>
          <Globe className="size-5" />
        </div>
        <Eyebrow color={C.green}>KOV / koolipidaja</Eyebrow>
        <p className="text-sm" style={{ color: C.text }}>
          Ühtne mudel, vähem vaidlusi, parem koolideülene praktika.
        </p>
      </Card>

      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <div className="size-10 rounded-full flex items-center justify-center mb-3"
          style={{ background: C.green, color: "white" }}>
          <Trophy className="size-5" />
        </div>
        <Eyebrow color={C.green}>Huvikool</Eyebrow>
        <p className="text-sm" style={{ color: C.text }}>
          Kvaliteedimärk — õpe muutub koolile nähtavaks ja võrreldavaks.
        </p>
      </Card>
    </div>

    <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
      style={{ color: C.text, borderColor: C.lime }}>
      Kool ei vaja veel üht vormi. Kool vajab juhtimisinfot.
    </p>
  </SlideShell>
);

/* Riskid ja ausus */
const SlideRisks = () => (
  <SlideShell>
    <Eyebrow color={C.orange}>Riskid ja ausus</Eyebrow>
    <Title>Mis võib valesti minna ja kuidas vastame?</Title>

    <div className="mt-8 grid md:grid-cols-2 gap-5">
      <Card>
        <Eyebrow color={C.orange}>Riskid</Eyebrow>
        <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
          <li>• automaatotsus;</li>
          <li>• piiripealsed juhtumid;</li>
          <li>• andmekaitse;</li>
          <li>• huvikoolide õppekavade ebaühtlane kvaliteet;</li>
          <li>• õpilase järelevalve tunniplaanis.</li>
        </ul>
      </Card>

      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Vastus</Eyebrow>
        <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
          <li>• AI ei otsusta;</li>
          <li>• piiripealsed juhtumid lähevad inimesele;</li>
          <li>• häkil kasutame mock-andmeid;</li>
          <li>• järgmises etapis valideerime andmemudeli ja integratsioonid;</li>
          <li>• kvaliteedimärk standardiseerib huvikooli tõendi.</li>
        </ul>
      </Card>
    </div>

    <div className="mt-6 rounded-xl p-4 text-sm"
      style={{ background: C.subtle, borderLeft: `3px solid ${C.teal}`, color: C.text }}>
      <strong>Tunniplaani risk — vastus:</strong> osaline arvestamine ei tähenda, et õpilane jääb järelevalveta.
      Kool otsustab, kas õpilane osaleb osas tundidest, teeb alternatiivse ülesande, liigub tugitegevusse,
      kasutab aega juhendatud iseseisvaks tööks või võetakse info arvesse järgmise perioodi tunniplaani planeerimisel.
    </div>

    <Footnote color={C.orange}>
      Tehniline märkus: häkil kasutame mock-andmeid. Pärislahenduses võib andmeid tuua eKoolist,
      Stuudiumist, EHISest, ARNOst või kooli/KOV-i süsteemidest. Integratsioon ei ole häki põhieesmärk —
      eesmärk on tõestada üks otsustusvoog lõpuni.
    </Footnote>
  </SlideShell>
);

/* === Uued slaidid Luukase tagasiside põhjal === */

/* Mida koolijuht tegelikult ostab? */
const SlidePrincipalValue = () => {
  const items = [
    { i: <Layers />, t: "Korduvad mustrid", d: "Millistes klassides, ainetes ja huvikoolides tekib arvestamise potentsiaal?" },
    { i: <CalendarRange />, t: "Tunniplaani õhk", d: "Kuidas järgmise perioodi tunniplaani paremini planeerida?" },
    { i: <GraduationCap />, t: "Õpetaja tööaja suunamine", d: "Vabasta õpetaja aega põhiainetele, tugitegevustele ja andekate toetamisele." },
    { i: <FileCheck />, t: "Põhjendatud otsus perele", d: "Selge vastus: mida arvestati, mida mitte ja miks." },
    { i: <Trophy />, t: "Huvihariduse väärtus koolile", d: "Tee nähtavaks õppimine, mis toimub juba väljaspool kooli." },
  ];
  return (
    <SlideShell>
      <Eyebrow color={C.green}>Väärtus enne töövoogu</Eyebrow>
      <Title>Mida koolijuht tegelikult ostab?</Title>
      <Lead>
        Koolijuht ei osta taotlusvormi. Koolijuht ostab võimaluse näha, kus õppimine
        dubleerub ja kus saab ressurssi targemalt kasutada.
      </Lead>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <Card key={c.t}>
            <div className="size-10 rounded-full flex items-center justify-center mb-3"
              style={{ background: `${C.teal}15`, color: C.teal }}>
              {c.i}
            </div>
            <div className="font-semibold text-base sm:text-lg" style={{ color: C.text }}>{c.t}</div>
            <p className="text-sm mt-2" style={{ color: "#4B5563" }}>{c.d}</p>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
        style={{ color: C.text, borderColor: C.lime }}>
        Väärtus ei ole vähem klikke. Väärtus on parem otsus õppija aja, õpetaja
        tööaja ja tunniplaani kohta.
      </p>
    </SlideShell>
  );
};

/* Lahendus + kasutusjuhud */
const SlideSolution = () => (
  <SlideShell>
    <Eyebrow color={C.teal}>Lahendus</Eyebrow>
    <Title>Tõendid kokku. Seosed nähtavaks. Otsus koolile.</Title>
    <Lead>
      Üks otsustusvoog, mis töötab paljude koolivälise õppimise liikide jaoks.
      Nikita demo on üks näide paljudest.
    </Lead>

    <div className="mt-8 grid md:grid-cols-2 gap-3">
      {[
        { from: "Spordikool / trenn", to: "Kehaline kasvatus" },
        { from: "Muusikakool", to: "Muusika" },
        { from: "Kunstikool", to: "Kunst" },
        { from: "Robootikaring", to: "Tehnoloogia" },
        { from: "Kosmosering", to: "Füüsika / loodusained" },
        { from: "Eestikeelne trenn", to: "Eesti keele praktiline kasutus" },
        { from: "Olümpiaadid / võistlused", to: "Ainepädevuste tõendamine" },
        { from: "Vabatahtlik / projektid", to: "Sotsiaalsed pädevused" },
      ].map((u) => (
        <Card key={u.from} className="!p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold" style={{ color: C.text }}>{u.from}</span>
            <ArrowRight className="size-3.5 shrink-0" style={{ color: C.teal }} />
            <span className="text-sm" style={{ color: "#4B5563" }}>{u.to}</span>
          </div>
        </Card>
      ))}
    </div>

    <Footnote color={C.orange}>
      Nikita demo tõestab ühte otsustusvoogu lõpuni. Sama loogika töötab kõikides
      eelpool toodud juhtudel.
    </Footnote>
  </SlideShell>
);

/* Koolijuhi vaade — peamine demo */
const SlidePrincipalView = () => (
  <SlideShell>
    <Eyebrow>Koolijuhi vaade — peamine demo</Eyebrow>
    <Title>Koolijuht näeb mustreid, mitte üksikuid taotlusi.</Title>

    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <Card bg={C.subtle}>
        <Eyebrow color={C.teal}>Mida koondvaade näitab</Eyebrow>
        <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
          <li>• taotlusi kokku ja voo seis;</li>
          <li>• 12 sarnast taotlust, 3 korduvat ainet;</li>
          <li>• korduvad huvikoolid;</li>
          <li>• mitu vajab lisatõendit;</li>
          <li>• mitu vajab õpetaja otsust;</li>
          <li>• potentsiaalne õpetaja eeltöö aja võit;</li>
          <li>• võimalik tunniplaani ümberkorraldus;</li>
          <li>• KOV-i koondraport.</li>
        </ul>
      </Card>

      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Mida koolijuht saab teha</Eyebrow>
        <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
          <li>• näha korduvaid mustreid;</li>
          <li>• planeerida järgmise perioodi tunniplaani;</li>
          <li>• suunata õpetaja tööaega põhiainetele;</li>
          <li>• luua kooli arvestamise hea tava;</li>
          <li>• eksportida koondraport koolipidajale.</li>
        </ul>
      </Card>
    </div>

    <div className="mt-6 flex flex-wrap gap-2.5 justify-center">
      <Button asChild size="lg" className="rounded-full"
        style={{ background: C.teal, color: "white" }}>
        <Link to="/juht"><Eye className="size-4" /> Ava koolijuhi koondvaade</Link>
      </Button>
    </div>

    <p className="mt-6 text-base sm:text-lg font-medium pl-4 border-l-4"
      style={{ color: C.text, borderColor: C.lime }}>
      Kui koolijuhi vaade on tugev, siis saab tootest aru.
    </p>
  </SlideShell>
);

/* Kuidas raha päriselt realiseerub */
const SlideRealize = () => (
  <SlideShell>
    <Eyebrow color={C.green}>Mõju realiseerimine</Eyebrow>
    <Title>Kuidas ressursiekvivalent muutub kooli jaoks päris väärtuseks?</Title>
    <Lead>
      Raha ei realiseeru pangakontol. See realiseerub kooli töökorralduses.
    </Lead>

    <div className="mt-8 grid md:grid-cols-2 gap-3">
      {[
        { t: "Vähem dubleerivaid tunde", d: "Õpitulemus, mis on tõendatult saavutatud, ei vaja koolis kordamist." },
        { t: "Paremini planeeritud valikained", d: "Korduvate ainete grupeerimine vabastab tunde valikainetele ja tugitegevustele." },
        { t: "Õpetaja tööaja suunamine", d: "Eesti keelele, matemaatikale, reaalainetele, tugitegevustele ja andekate toetamisele." },
        { t: "Väiksem käsitsi menetluse koormus", d: "AI eeltöö kahandab ühe otsuse ettevalmistust 25–40 minutilt 5–10 minutile." },
        { t: "Parem otsus koolikorralduse kohta", d: "Milliseid õpetajaid, tunde ja valikaineid kool tegelikult vajab." },
        { t: "Parem põhjendus koolipidajale", d: "Andmetel põhinev raport, mitte üksikute kaebuste kaupa selgitamine." },
      ].map((x) => (
        <Card key={x.t}>
          <div className="font-semibold text-sm sm:text-base" style={{ color: C.text }}>{x.t}</div>
          <p className="text-xs sm:text-sm mt-1.5" style={{ color: "#4B5563" }}>{x.d}</p>
        </Card>
      ))}
    </div>

    <div className="mt-6 rounded-2xl p-5 sm:p-6"
      style={{ background: C.green, color: "white" }}>
      <p className="text-base sm:text-xl font-medium leading-snug">
        Kool ei maksa ainult tööriista eest.{" "}
        <span style={{ color: C.lime }}>
          Kool maksab selle eest, et näha, kus saab õpetajaressurssi ümber suunata.
        </span>
      </p>
      <p className="mt-3 text-xs sm:text-sm opacity-90">
        LearnOnce ei vähenda õpetaja väärtust. LearnOnce aitab kasutada õpetaja aega
        seal, kus tema mõju on suurem.
      </p>
    </div>
  </SlideShell>
);

/* Ärimudel — uuendatud, hinnastamise hüpoteesidega */
const SlideBusinessModel = () => (
  <SlideShell>
    <Eyebrow color={C.purple}>Ärimudel</Eyebrow>
    <Title>Kes maksab ja miks?</Title>

    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <Eyebrow color={C.teal}>1 · Kool / koolijuht</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>Esimene klient</p>
        <p className="text-xs sm:text-sm" style={{ color: "#4B5563" }}>
          Maksab juhtimisinfo, töövoo ja koondvaate eest.
        </p>
      </Card>
      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <Eyebrow color={C.green}>2 · KOV / koolipidaja</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>Skaleerija</p>
        <p className="text-xs sm:text-sm" style={{ color: "#4B5563" }}>
          Võib osta mitmele koolile ühtse mudeli ja koondvaate.
        </p>
      </Card>
      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>3 · Huvikool</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>Teine kliendigrupp</p>
        <p className="text-xs sm:text-sm" style={{ color: "#4B5563" }}>
          Maksab kvaliteedimärgi või arvestatavuse profiili eest.
        </p>
      </Card>
      <Card bg={`${C.purple}0D`} border={`${C.purple}40`}>
        <Eyebrow color={C.purple}>4 · Integratsioonipartner</Eyebrow>
        <p className="text-sm font-medium mb-2" style={{ color: C.text }}>Levikanal</p>
        <p className="text-xs sm:text-sm" style={{ color: "#4B5563" }}>
          eKool, Stuudium või ARNO võib olla plugin- või jaotuspartner.
        </p>
      </Card>
    </div>

    <div className="mt-6">
      <Eyebrow color={C.purple}>Hinnastamise hüpoteesid (valideerime järgmises etapis)</Eyebrow>
      <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {[
          { t: "Koolipõhine SaaS", d: "Kuutasu kooli kohta." },
          { t: "Õppijapõhine tasu", d: "Tasu juhtumi/õppija kohta." },
          { t: "KOV-litsents", d: "Mitmele koolile korraga." },
          { t: "Huvikooli kvaliteedimärk", d: "Aastatasu profiili eest." },
          { t: "Integratsioonipartnerlus", d: "eKool / Stuudium / ARNO plugin." },
        ].map((x) => (
          <Card key={x.t} className="!p-3">
            <div className="text-xs font-semibold" style={{ color: C.text }}>{x.t}</div>
            <div className="text-[11px] mt-1" style={{ color: "#6B7280" }}>{x.d}</div>
          </Card>
        ))}
      </div>
    </div>

    <div className="mt-5 rounded-xl p-3 text-xs sm:text-sm"
      style={{ background: `${C.orange}15`, borderLeft: `3px solid ${C.orange}`, color: C.text }}>
      <strong>Aus märkus:</strong> hinnastamist ja maksevalmidust valideerime järgmises etapis.
      Häkil küsisime kasutus- ja ostuhuvi, mitte ei tõestanud veel turgu.
    </div>
  </SlideShell>
);

/* Mai → september 2026 teekaart */
const SlideRoadmap = () => {
  const months = [
    {
      m: "Mai 2026",
      color: C.teal,
      items: ["korrastame prototüübi", "valime 2 pilootasutust", "kaardistame andmekoosseisu", "täpsustame maksevalmiduse küsimused"],
    },
    {
      m: "Juuni 2026",
      color: C.green,
      items: ["standardne tõendikaart", "andmekaitse ja vanema nõusolek", "huvikooli kvaliteedimärgi loogika", "koolijuhi dashboard mock-andmetega"],
    },
    {
      m: "August 2026",
      color: C.purple,
      items: ["koolid valivad klassi/lennu", "õpetajad testivad AI eelanalüüsi", "huvikoolid lisavad õpiväljundid", "tehniline tee: SaaS / KOV / plugin"],
    },
    {
      m: "September 2026",
      color: C.lime,
      items: ["piloot ≥ 2 haridusasutuses", "mõõdame menetlusaega", "mõõdame õpetaja eeltöö vähenemist", "valideerime maksevalmidust"],
    },
  ];
  return (
    <SlideShell>
      <Eyebrow>Teekaart</Eyebrow>
      <Title>Häkist piloodini: mai → september 2026.</Title>

      <div className="mt-8 grid md:grid-cols-4 gap-3">
        {months.map((mo) => (
          <Card key={mo.m} className="!p-4">
            <div className="inline-flex rounded-full px-3 py-1 text-xs font-semibold mb-3"
              style={{ background: mo.color, color: mo.color === C.lime ? C.green : "white" }}>
              {mo.m}
            </div>
            <ul className="text-xs sm:text-sm space-y-1.5" style={{ color: C.text }}>
              {mo.items.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-[20px] p-6 sm:p-8 text-center"
        style={{ background: C.green, color: "white" }}>
        <p className="text-lg sm:text-2xl font-medium leading-snug">
          Me ei digitaliseeri vana bürokraatiat.<br />
          Me loome koolile <span style={{ color: C.lime }}>otsustustoe</span>.
        </p>
        <p className="mt-3 text-sm opacity-90">
          Kool ei vaja veel üht vormi. Kool vajab juhtimisinfot. AI teeb eeltöö. Kool otsustab.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <Button asChild size="lg" className="rounded-full"
          style={{ background: C.teal, color: "white" }}>
          <Link to="/juht"><Eye className="size-4" /> Vaata koolijuhi vaadet</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link to="/"><HomeIcon className="size-4" /> Avalehele</Link>
        </Button>
      </div>
    </SlideShell>
  );
};

/* === 12-slaidiline järjekord (Luukase tagasiside) === */
const SLIDES = [
  Slide1,                // 1  Suur probleem (30 s)
  Slide2,                // 2  Miks nüüd?
  SlidePrincipalValue,   // 3  Mida koolijuht tegelikult ostab?
  SlideSolution,         // 4  Lahendus + kasutusjuhud
  Slide4,                // 5  Demojuhtum (Nikita — näide)
  Slide6,                // 6  AI roll
  SlidePrincipalView,    // 7  Koolijuhi vaade (peamine demo)
  SlideRealize,          // 8  Kuidas raha realiseerub
  Slide8,                // 9  Valideerimine
  SlideBusinessModel,    // 10 Ärimudel — kes maksab?
  SlideRisks,            // 11 Riskid ja tehniline ausus
  SlideRoadmap,          // 12 Mai → september 2026 + lõppsõnum
];
const TITLES = [
  "Ava", "Miks nüüd?", "Mõõtkava", "Probleem", "Kes maksab",
  "Demojuhtum", "Lahendus", "AI roll", "Mõju", "Valideerimine",
  "Riskid", "Skaleerimine",
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
    const dx = touchStartX.current - e.changedTouches[0].screenX;
    if (dx > 50) next();
    else if (dx < -50) prev();
    touchStartX.current = null;
  };

  const Current = SLIDES[i];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: C.bg }}>
      {/* Top progress bar */}
      <header className="sticky top-0 z-30 backdrop-blur border-b"
        style={{ background: `${C.bg}E6`, borderColor: C.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center gap-3">
          <Link to="/" className="text-sm font-semibold tracking-tight whitespace-nowrap"
            style={{ color: C.text }}>
            EduInvest LearnOnce
          </Link>
          <div className="flex-1 flex items-center gap-3 min-w-0">
            <span className="inline-flex items-center justify-center rounded-full text-xs font-bold w-8 h-8 shrink-0"
              style={{ background: C.green, color: "white" }}>
              {i + 1}
            </span>
            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: C.subtle }}>
              <div
                className="h-full transition-all duration-300 rounded-full"
                style={{ width: `${((i + 1) / total) * 100}%`, background: C.teal }}
              />
            </div>
            <span className="text-xs font-mono whitespace-nowrap shrink-0" style={{ color: "#6B7280" }}>
              {i + 1}/{total}
            </span>
          </div>
          <Button asChild size="sm" variant="outline" className="rounded-full hidden sm:inline-flex">
            <Link to="/perele"><Play className="size-3.5" /> Vaata demo</Link>
          </Button>
        </div>
      </header>

      <main
        className="pb-28 select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Current />
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 z-30 backdrop-blur border-t"
        style={{ background: `${C.bg}F2`, borderColor: C.border }}>
        <div className="max-w-6xl mx-auto px-3 sm:px-8 py-3 sm:py-4 flex items-center justify-between gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={prev}
            disabled={i === 0}
            className="rounded-full h-12 px-4 sm:px-6 shadow-sm"
          >
            <ArrowLeft className="size-4" /> <span className="hidden sm:inline">Tagasi</span>
          </Button>

          <div className="hidden md:flex gap-1.5 items-center">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slaid ${idx + 1}`}
                className="rounded-full transition-all text-xs font-semibold"
                style={{
                  width: 32, height: 32,
                  background: idx === i ? C.green : C.subtle,
                  color: idx === i ? "white" : "#6B7280",
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="flex md:hidden items-center gap-1.5">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slaid ${idx + 1}`}
                className="rounded-full transition-all"
                style={{
                  width: idx === i ? 20 : 8,
                  height: 8,
                  background: idx === i ? C.green : C.border,
                }}
              />
            ))}
          </div>

          <Button
            size="lg"
            onClick={next}
            disabled={i === total - 1}
            className="rounded-full h-12 px-4 sm:px-6 shadow-sm"
            style={{ background: C.teal, color: "white" }}
          >
            <span className="hidden sm:inline">Järgmine</span> <ArrowRight className="size-4" />
          </Button>
        </div>
      </nav>
    </div>
  );
}

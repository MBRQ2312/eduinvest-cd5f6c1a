import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Users, GraduationCap, Building2, Sparkles,
  ShieldCheck, CheckCircle2, Home as HomeIcon, Trophy, X, Play,
  Clock, Coins, TrendingUp, AlertCircle, FileCheck, Eye,
  Heart, Globe, BookOpen, Layers, MapPin, Activity,
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

/* 1 — Ava */
const Slide1 = () => (
  <SlideShell>
    <Eyebrow>Prototüüp · EduInvest LearnOnce</Eyebrow>
    <Title>Kooliväline õppimine kooli vaatesse</Title>
    <Lead>
      AI teeb eeltöö. Õpetaja otsustab. Pere saab selgituse. Koolijuht näeb mustreid.
    </Lead>

    <div className="mt-8 flex flex-wrap gap-2.5">
      <Pill bg={`${C.teal}15`} fg={C.teal}>Tõendid kokku</Pill>
      <Pill bg={`${C.green}15`} fg={C.green}>Seosed nähtavaks</Pill>
      <Pill bg={`${C.lime}30`} fg={C.green}>Otsus koolile</Pill>
    </div>

    <div className="mt-10 flex items-start gap-3 rounded-2xl p-4 sm:p-5"
      style={{ background: C.subtle, borderLeft: `4px solid ${C.teal}` }}>
      <ShieldCheck className="size-5 mt-0.5 shrink-0" style={{ color: C.teal }} />
      <p className="text-sm sm:text-base" style={{ color: C.text }}>
        AI ei anna hinnet, ei vabasta tunnist ega tee lõppotsust.
      </p>
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
    <Eyebrow>Testgrupp ja valideerimine</Eyebrow>
    <Title>Me ei testinud ainult ideed. Testisime prototüüpi.</Title>

    <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
      <Metric v="49" l="külastajat" />
      <Metric v="138" l="lehevaatamist" />
      <Metric v="2.82" l="vaadet / külastus" />
      <Metric v="2:19" l="keskmine külastus" />
      <Metric v="69%" l="mobiilist" />
    </div>

    <div className="mt-5 grid md:grid-cols-2 gap-4">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <Eyebrow color={C.teal}>Õpilased</Eyebrow>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Pelgulinna Riigigümnaasiumi 10. klass</li>
          <li>• Tallinna Kuristiku Gümnaasiumi 8. klass</li>
          <li>• Pärnu Mai Kooli 8.c pilootgrupp</li>
        </ul>
      </Card>
      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <Eyebrow color={C.green}>Koolijuhid ja haridusjuhid</Eyebrow>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Alustava koolijuhi arenguprogrammi XI lend 2025</li>
          <li>• Koolijuhtide ja haridusjuhtide tagasiside</li>
        </ul>
      </Card>
    </div>

    <div className="mt-5 grid md:grid-cols-2 gap-4">
      <Card bg={C.subtle}>
        <Eyebrow>Mida küsisime?</Eyebrow>
        <ul className="text-xs sm:text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Kas probleem on päris?</li>
          <li>• Kas töövoog on arusaadav?</li>
          <li>• Kelle lauale selline juhtum koolis jõuaks?</li>
          <li>• Milliseid tõendeid oleks vaja?</li>
          <li>• Kas seda võiks testida ühe klassi ja ühe ainega?</li>
        </ul>
      </Card>
      <Card bg={`${C.lime}20`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Mida teada saime?</Eyebrow>
        <ul className="text-xs sm:text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• töövoog peab olema lihtne ja mobiilis loetav;</li>
          <li>• rollid peavad olema selged;</li>
          <li>• kool: vastutus, tõendite piisavus, põhjendatud otsus;</li>
          <li>• treener kinnitab tegevust, mitte õpitulemusi;</li>
          <li>• AI peab olema kontrollitav eelanalüüs.</li>
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

/* 9 — Kasu */
const Slide9 = () => (
  <SlideShell>
    <Eyebrow>Mõju potentsiaal</Eyebrow>
    <Title>Mida me mõõdame?</Title>

    <div className="mt-6 grid md:grid-cols-3 gap-3">
      <Card>
        <div className="text-xs uppercase tracking-wide" style={{ color: "#6B7280" }}>I aste</div>
        <div className="text-2xl font-semibold mt-1" style={{ color: C.text }}>43 740</div>
        <div className="text-xs" style={{ color: "#6B7280" }}>õppijat</div>
      </Card>
      <Card>
        <div className="text-xs uppercase tracking-wide" style={{ color: "#6B7280" }}>II aste</div>
        <div className="text-2xl font-semibold mt-1" style={{ color: C.text }}>43 570</div>
        <div className="text-xs" style={{ color: "#6B7280" }}>õppijat</div>
      </Card>
      <Card>
        <div className="text-xs uppercase tracking-wide" style={{ color: "#6B7280" }}>III aste</div>
        <div className="text-2xl font-semibold mt-1" style={{ color: C.text }}>46 730</div>
        <div className="text-xs" style={{ color: "#6B7280" }}>õppijat</div>
      </Card>
    </div>

    <div className="mt-3 grid md:grid-cols-2 gap-3">
      <Card>
        <div className="flex items-center gap-2">
          <Building2 className="size-4" style={{ color: C.teal }} />
          <div className="text-sm" style={{ color: C.text }}>Põhikool I–III aste kokku</div>
        </div>
        <div className="text-2xl font-semibold mt-1" style={{ color: C.teal }}>~134 000 õppijat</div>
      </Card>
      <Card>
        <div className="flex items-center gap-2">
          <Clock className="size-4" style={{ color: C.teal }} />
          <div className="text-sm" style={{ color: C.text }}>Üldhariduskoolide õpetajad</div>
        </div>
        <div className="text-2xl font-semibold mt-1" style={{ color: C.teal }}>17 390</div>
      </Card>
    </div>

    <div className="mt-4 rounded-2xl p-4" style={{ background: `${C.purple}0D`, border: `1px solid ${C.purple}40` }}>
      <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: C.purple }}>Meie hüpotees</div>
      <p className="text-sm mt-1" style={{ color: C.text }}>
        Osa õppija koolipäevast võib kuluda oskuste või õpitulemuste kordamisele,
        mida ta on juba <strong>koolivälises keskkonnas</strong> juhendatud õppinud.
      </p>
    </div>

    <div className="mt-3 grid md:grid-cols-2 gap-3">
      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <div className="text-xs uppercase tracking-wide" style={{ color: "#6B7280" }}>Kui dubleerimine 10%</div>
        <div className="text-2xl font-semibold mt-1" style={{ color: C.text }}>~9–10 mln</div>
        <div className="text-xs" style={{ color: "#6B7280" }}>õpilas-õppetundi aastas</div>
      </Card>
      <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
        <div className="text-xs uppercase tracking-wide" style={{ color: "#6B7280" }}>Kui dubleerimine 30%</div>
        <div className="text-2xl font-semibold mt-1" style={{ color: C.text }}>~29 mln</div>
        <div className="text-xs" style={{ color: "#6B7280" }}>õpilas-õppetundi aastas</div>
      </Card>
    </div>

    <div className="mt-4 rounded-xl p-3 text-sm" style={{ background: `${C.teal}10`, borderLeft: `3px solid ${C.teal}`, color: C.text }}>
      See ei ole lubatud rahaline kokkuhoid. See on märk sellest, kui suur võib olla
      <strong> nähtamatu ajaressurss</strong>, mida täna ei mõõdeta ega juhita.
    </div>

    <div className="mt-3 flex items-start gap-2 rounded-xl p-3"
      style={{ background: `${C.orange}15`, borderLeft: `3px solid ${C.orange}` }}>
      <AlertCircle className="size-4 mt-0.5 shrink-0" style={{ color: C.orange }} />
      <p className="text-xs sm:text-sm" style={{ color: C.text }}>
        Piloodis mõõdame väikest ja kontrollitavat osa: kas ühe arvestusotsuse ettevalmistus
        väheneb õpetaja jaoks <strong>25–40 minutilt 5–10 minutile</strong>.
      </p>
    </div>
  </SlideShell>
);

/* 10 — Skaleerimine ja lõpp */
const Slide10 = () => (
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

/* ========== Deck ========== */

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];
const TITLES = [
  "Ava", "Miks nüüd?", "Probleem", "Demojuhtum", "Lahendus",
  "AI roll", "Väärtus", "Testgrupp", "Kasu", "Skaleerimine",
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

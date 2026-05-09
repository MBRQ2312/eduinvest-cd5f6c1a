import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Users, GraduationCap, Building2, Sparkles,
  ShieldCheck, CheckCircle2, Home as HomeIcon, Trophy, X, Play,
  Clock, TrendingUp, AlertCircle, Eye, Heart, Globe, Layers,
  MapPin, Activity, CalendarRange, FileCheck, Award, Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ========== Brand palette (unified with landing) ========== */
const C = {
  bg: "#0D1020",
  text: "#FFFFFF",
  green: "#00D5D5",
  teal: "#00D5D5",
  purple: "#6D4DFF",
  lime: "#7CE8E8",
  orange: "#F2A66B",
  cardBg: "#141833",
  subtle: "#1B2042",
  border: "#2A3060",
  muted: "#B8BED1",
  mutedSoft: "#8A91AB",
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
  <div className="text-[11px] sm:text-xs uppercase font-semibold mb-3"
    style={{ color, letterSpacing: "0.18em" }}>
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-5xl font-semibold leading-[1.1] tracking-tight break-words"
    style={{ color: C.text }}>
    {children}
  </h2>
);

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base sm:text-xl leading-relaxed mt-4" style={{ color: C.muted }}>
    {children}
  </p>
);

const Card = ({
  children, bg = C.cardBg, border = C.border, className = "",
}: { children: React.ReactNode; bg?: string; border?: string; className?: string }) => (
  <div className={`rounded-[20px] border p-5 sm:p-6 shadow-sm ${className}`}
    style={{ background: bg, borderColor: border }}>
    {children}
  </div>
);

const Mantra = () => (
  <div className="mt-6 rounded-2xl p-5 sm:p-6" style={{ background: C.green, color: "white" }}>
    <p className="text-base sm:text-xl font-medium leading-snug">
      Tõendid kokku. Seosed nähtavaks. Otsus koolile.
    </p>
    <div className="mt-3 inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold"
      style={{ background: C.lime, color: C.green }}>
      AI teeb eeltöö. Kool otsustab.
    </div>
  </div>
);

/* ========== Slide 1 — Suur probleem ========== */
const Slide1 = () => (
  <SlideShell>
    <Eyebrow>EduInvest LearnOnce</Eyebrow>
    <Title>Õpetajate ülekoormus, õppija väsimus, dubleeriv õppimine.</Title>
    <Lead>
      Suur osa õppimisest toimub juba väljaspool kooli — trennis, muusikakoolis, robootikas,
      keeleõppes. Koolil on seadusega antud paindlikkus seda arvestada,
      aga puudub analüütika- ja otsustustööriist, mis aitaks seda päriselt juhtida.
    </Lead>
    <p className="mt-8 text-base sm:text-lg font-medium pl-4 border-l-4"
      style={{ color: C.text, borderColor: C.lime }}>
      Probleem ei ole, et laps ei õpi. Probleem on, et kool ei näe seda otsuse tegemiseks
      piisavalt selgelt.
    </p>
    <div className="mt-6 rounded-2xl p-5 sm:p-6" style={{ background: C.green, color: "white" }}>
      <p className="text-lg sm:text-2xl font-medium leading-snug">
        Kool ei vaja veel üht vormi.<br />
        Kool vajab <span style={{ color: C.lime }}>juhtimisinfot</span>.
      </p>
    </div>
  </SlideShell>
);

/* ========== Slide 2 — Kelle häda ========== */
const Slide2 = () => {
  const items = [
    { i: <Building2 />, t: "Koolijuht", d: "Ei näe, kus õppija aeg ja õpetaja töö dubleeruvad. Ei saa juhtida tunniplaani ega ressurssi." , c: C.green, lead: true },
    { i: <GraduationCap />, t: "Õpetaja", d: "Peab iga juhtumit nullist hindama. 25–40 min käsitsi eeltööd ühe otsuse kohta.", c: C.green },
    { i: <Globe />, t: "Koolipidaja / KOV", d: "Ei näe, kus mustrid linnas korduvad. Ei saa skaleerida head praktikat.", c: C.purple },
    { i: <Heart />, t: "Pere", d: "Ei saa selget vastust: mida arvestati, mida mitte ja miks.", c: C.teal },
  ];
  return (
    <SlideShell>
      <Eyebrow color={C.green}>Kelle häda</Eyebrow>
      <Title>Peategelane on koolijuht.</Title>
      <Lead>Pere algatab. Huvikool tõendab. Õpetaja otsustab. Koolijuht juhib.</Lead>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {items.map((c) => (
          <Card key={c.t} bg={c.lead ? `${c.c}0D` : C.cardBg} border={c.lead ? `${c.c}40` : C.border}>
            <div className="size-10 rounded-full flex items-center justify-center mb-3"
              style={{ background: `${c.c}15`, color: c.c }}>{c.i}</div>
            <div className="font-semibold text-base sm:text-lg" style={{ color: C.text }}>
              {c.t} {c.lead && <span className="text-xs font-medium ml-2" style={{ color: c.c }}>· peategelane</span>}
            </div>
            <p className="text-sm mt-2" style={{ color: C.muted }}>{c.d}</p>
          </Card>
        ))}
      </div>
    </SlideShell>
  );
};

/* ========== Slide 3 — Mida koolijuht ostab ========== */
const Slide3 = () => {
  const items = [
    { i: <Eye />, t: "Nähtavus", d: "Kus õppimine dubleerub klassi, aine, lennu ja õppeperioodi lõikes." },
    { i: <CalendarRange />, t: "Tunniplaani õhk", d: "Konkreetsed slotid, mis vabanevad valikainetele või süvaõppele." },
    { i: <Clock />, t: "Õpetaja tööaeg", d: "Vähem käsitsi eeltööd ühe otsuse kohta. Õpetaja aeg põhitööle." },
    { i: <ShieldCheck />, t: "Põhjendatud otsus", d: "Iga otsus tõendite ja õppekava seoste alusel — auditeeritav." },
    { i: <TrendingUp />, t: "Huvihariduse väärtus", d: "Kooliväline õppimine muutub kooli jaoks nähtavaks ressursiks." },
  ];
  return (
    <SlideShell>
      <Eyebrow color={C.green}>Mida koolijuht ostab</Eyebrow>
      <Title>Otsustustugi, mitte taotlusvormi.</Title>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <Card key={c.t}>
            <div className="size-10 rounded-full flex items-center justify-center mb-3"
              style={{ background: `${C.green}12`, color: C.green }}>{c.i}</div>
            <div className="font-semibold text-base" style={{ color: C.text }}>{c.t}</div>
            <p className="text-sm mt-2" style={{ color: C.muted }}>{c.d}</p>
          </Card>
        ))}
      </div>
      <Mantra />
    </SlideShell>
  );
};

/* ========== Slide 4 — Lahendus ========== */
const FLOW = [
  { n: "01", t: "Pere algatab või huvikool annab märku", color: C.teal },
  { n: "02", t: "Standardne tõend partnerilt", color: C.teal },
  { n: "03", t: "AI eelanalüüs — seosed ja puuduv info", color: C.purple },
  { n: "04", t: "Õpetaja otsus kontrollküsimustega", color: C.green },
  { n: "05", t: "Selgitus perele + koondvaade koolijuhile", color: C.green },
];

const Slide4 = () => (
  <SlideShell>
    <Eyebrow>Lahendus</Eyebrow>
    <Title>Üks otsustusvoog lõpuni.</Title>
    <div className="mt-8 grid md:grid-cols-[1.4fr_1fr] gap-8">
      <div className="relative pl-7">
        <div className="absolute left-[14px] top-2 bottom-2 w-px" style={{ background: C.border }} />
        {FLOW.map((s) => (
          <div key={s.n} className="relative mb-5 last:mb-0">
            <span className="absolute -left-[22px] top-1.5 size-4 rounded-full ring-4"
              style={{ background: s.color, boxShadow: `0 0 0 4px ${C.cardBg}` }} />
            <div className="text-[11px] font-mono" style={{ color: C.mutedSoft }}>{s.n}</div>
            <div className="text-base sm:text-lg font-medium" style={{ color: C.text }}>{s.t}</div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <Card bg={`${C.purple}0D`} border={`${C.purple}40`}>
          <Eyebrow color={C.purple}>AI teeb</Eyebrow>
          <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
            <li>• koondab tõendid</li>
            <li>• pakub õppekava seoseid</li>
            <li>• näitab puuduvat infot</li>
            <li>• koostab selgituse mustandi</li>
          </ul>
        </Card>
        <Card bg={`${C.lime}25`} border={`${C.lime}80`}>
          <p className="text-sm sm:text-base font-medium" style={{ color: C.text }}>
            AI ei anna hinnet, ei vabasta tunnist, ei tee lõppotsust.
          </p>
        </Card>
      </div>
    </div>
  </SlideShell>
);

/* ========== Slide 5 — Nikita demo ========== */
const Slide5 = () => (
  <SlideShell>
    <Eyebrow>Demojuhtum · Nikita Tamm, 8. klass</Eyebrow>
    <Title>Üks konkreetne otsus, mille kool teeb tõendite alusel.</Title>
    <div className="mt-8 grid md:grid-cols-3 gap-4">
      <Card bg={`${C.teal}0D`} border={`${C.teal}40`}>
        <div className="flex items-center gap-2 mb-3">
          <Trophy className="size-5" style={{ color: C.teal }} />
          <span className="font-semibold" style={{ color: C.text }}>Sisend</span>
        </div>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Jalgpall 3× nädalas, eesti keeles</li>
          <li>• 32 / 38 trenni läbitud</li>
          <li>• Treeneri standardne tõend</li>
          <li>• EHIS-registreeritud huvikool</li>
        </ul>
      </Card>
      <Card bg={`${C.purple}0D`} border={`${C.purple}40`}>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="size-5" style={{ color: C.purple }} />
          <span className="font-semibold" style={{ color: C.text }}>AI eelanalüüs</span>
        </div>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Tugev seos: kehaline kasvatus</li>
          <li>• Osaline: eesti keele praktika</li>
          <li>• Puudu: kirjalik refleksioon</li>
        </ul>
      </Card>
      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="size-5" style={{ color: C.green }} />
          <span className="font-semibold" style={{ color: C.text }}>Õpetaja otsus</span>
        </div>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Arvestan osaliselt</li>
          <li>• Tingimus: lühirefleksioon</li>
          <li>• Selgitus perele genereeritud</li>
        </ul>
      </Card>
    </div>
    <p className="mt-6 text-sm" style={{ color: C.orange }}>
      See ei tähenda automaatset hinde asendamist ega tunnist vabastamist. AI ei otsusta —
      piiripealsed juhtumid lähevad alati inimesele.
    </p>
  </SlideShell>
);

/* ========== Slide 6 — Miks parem kui täna ========== */
const Slide6 = () => (
  <SlideShell>
    <Eyebrow>Miks parem kui täna</Eyebrow>
    <Title>Täna juhuslik. Meiega süsteemne.</Title>
    <div className="mt-8 rounded-2xl overflow-hidden border" style={{ borderColor: C.border }}>
      <div className="grid grid-cols-2 text-sm sm:text-base">
        <div className="p-5 sm:p-6 font-semibold" style={{ background: C.subtle, color: C.text }}>Täna</div>
        <div className="p-5 sm:p-6 font-semibold" style={{ background: `${C.green}12`, color: C.green }}>LearnOnce</div>
        {[
          ["Iga kool teeb omal moel", "Standardne töövoog"],
          ["Käsitsi paberid ja e-kirjad", "Tõendid ühes vaates"],
          ["Õpetaja eeltöö 25–40 min", "5–10 min eelanalüüsiga"],
          ["Koolijuht ei näe mustreid", "Koondvaade ja korduvused"],
          ["Pere ei saa selget vastust", "Auditeeritav selgitus"],
          ["Huvikooli töö nähtamatu", "Tõendatud ja arvestatav"],
        ].map(([a, b], i) => (
          <div key={i} className="contents">
            <div className="p-4 sm:p-5 border-t" style={{ borderColor: C.border, color: C.muted }}>{a}</div>
            <div className="p-4 sm:p-5 border-t" style={{ borderColor: C.border, color: C.text, background: `${C.green}06` }}>{b}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideShell>
);

/* ========== Slide 7 — Mõju ja äriloogika ========== */
const Slide7 = () => (
  <SlideShell>
    <Eyebrow>Mõju ja äriloogika</Eyebrow>
    <Title>Potentsiaalne ressursiekvivalent — mõõdame piloodis.</Title>

    <div className="mt-6 grid md:grid-cols-3 gap-4">
      <Card bg={`${C.lime}20`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Õpetaja aeg</Eyebrow>
        <div className="text-2xl font-semibold" style={{ color: C.text }}>~15 h / kuus</div>
        <p className="text-xs mt-2" style={{ color: C.muted }}>
          Ühe arvestusotsuse eeltöö 25–40 min → 5–10 min ühes pilootkoolis.
        </p>
      </Card>
      <Card bg={`${C.lime}20`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Tunniplaani õhk</Eyebrow>
        <div className="text-2xl font-semibold" style={{ color: C.text }}>3–6 slotti</div>
        <p className="text-xs mt-2" style={{ color: C.muted }}>
          Korduvate ainete grupeerimine vabastab tunde valikainetele.
        </p>
      </Card>
      <Card bg={`${C.lime}20`} border={`${C.lime}80`}>
        <Eyebrow color={C.green}>Huvihariduse väärtus</Eyebrow>
        <div className="text-2xl font-semibold" style={{ color: C.text }}>nähtav</div>
        <p className="text-xs mt-2" style={{ color: C.muted }}>
          Huvikoolide töö muutub mõõdetavaks ja kooli jaoks arvestatavaks.
        </p>
      </Card>
    </div>

    <div className="mt-8 grid md:grid-cols-4 gap-3">
      {[
        { t: "Kool", d: "SaaS / aastalitsents" },
        { t: "KOV", d: "Litsents mitmele koolile" },
        { t: "Huvikool", d: "Kvaliteedimärk + integratsioon" },
        { t: "Partnerid", d: "eKool, Stuudium, ARNO — turustuskanal" },
      ].map((b) => (
        <Card key={b.t} bg={C.subtle}>
          <div className="font-semibold text-sm" style={{ color: C.text }}>{b.t}</div>
          <div className="text-xs mt-1.5" style={{ color: C.muted }}>{b.d}</div>
        </Card>
      ))}
    </div>

    <p className="mt-6 text-xs" style={{ color: C.orange }}>
      Need on potentsiaalsed ressursiekvivalendid, mitte lubatud kokkuhoid. Kontrollime kahes pilootkoolis.
    </p>
  </SlideShell>
);

/* ========== Slide 8 — Tõestus ja edasi ========== */
const Slide8 = () => (
  <SlideShell>
    <Eyebrow>Tõestus ja edasi</Eyebrow>
    <Title>Septembrini valmis päris koolikorralduses testima.</Title>

    <div className="mt-6 grid md:grid-cols-2 gap-5">
      <Card>
        <Eyebrow color={C.teal}>Mida juba teame</Eyebrow>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• 69 külastajat, 320 vaatamist sihtgrupis</li>
          <li>• Koolijuhid kinnitasid: probleem on päris</li>
          <li>• Töövoog peab vähendama bürokraatiat</li>
          <li>• AI peab jääma eelanalüüsiks</li>
        </ul>
      </Card>
      <Card bg={`${C.green}0D`} border={`${C.green}40`}>
        <Eyebrow color={C.green}>Tegevusplaan septembrini</Eyebrow>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Mai–juuni: 2 pilootasutust kinnitatud</li>
          <li>• Juuni–juuli: andmemudel + EHIS valideerimine</li>
          <li>• August: eKool/Stuudium liidese prototüüp</li>
          <li>• September: päris otsustusvoog ühel ainel</li>
        </ul>
      </Card>
    </div>

    <div className="mt-5">
      <Card bg={C.subtle}>
        <Eyebrow>Mida mõõdame piloodis</Eyebrow>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
          {[
            "Menetlusaeg",
            "Õpetaja eeltöö",
            "Pere selgituse arusaadavus",
            "Koolijuhi koondvaate väärtus",
            "Maksevalmidus",
          ].map((m) => (
            <div key={m} className="rounded-lg px-3 py-2 text-xs font-medium text-center"
              style={{ background: C.cardBg, color: C.text, border: `1px solid ${C.border}` }}>
              {m}
            </div>
          ))}
        </div>
      </Card>
    </div>

    <Mantra />
  </SlideShell>
);

/* ========== Slide 9 — Mida tõestasime ========== */
const Slide9 = () => {
  const groups = [
    "Põhikoolid", "Gümnaasiumid", "Erakoolid", "Huvikoolid",
    "Muusikakoolid", "Tallinna koolid", "Maa- ja väikelinnakoolid", "Piirkondlikud koolid",
  ];
  const insights = [
    "Töövoog peab olema väga lihtne",
    "Mobiilivaade on kriitiline",
    "Rollid peavad olema selged",
    "AI peab jääma kontrollitavaks eelanalüüsiks",
    "Koolijuht vajab juhtimisvaadet, mitte ainult taotlusi",
  ];
  return (
    <SlideShell>
      <Eyebrow>Mida me kahe päevaga päriselt tõestasime</Eyebrow>
      <Title>Me ei testinud ainult ideed. Testisime prototüüpi.</Title>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <Card>
          <Eyebrow color={C.teal}>Kaasatud koolid</Eyebrow>
          <div className="flex flex-wrap gap-2 mt-2">
            {groups.map((g) => (
              <span key={g} className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: C.subtle, color: C.text, border: `1px solid ${C.border}` }}>
                {g}
              </span>
            ))}
          </div>
        </Card>
        <Card bg={`${C.green}0D`} border={`${C.green}40`}>
          <Eyebrow color={C.green}>Korduv tagasiside</Eyebrow>
          <ul className="text-sm space-y-1.5 mt-2" style={{ color: C.text }}>
            {insights.map((x) => <li key={x}>• {x}</li>)}
          </ul>
        </Card>
      </div>
    </SlideShell>
  );
};

/* ========== Slide 10 — Valideerimine numbritega ========== */
const Slide10 = () => {
  const stats = [
    { k: "74", l: "külastajat" },
    { k: "347", l: "lehevaatamist" },
    { k: "5m 18s", l: "keskmine külastus" },
    { k: "52%", l: "bounce rate" },
    { k: "66%", l: "mobiilist" },
  ];
  return (
    <SlideShell>
      <Eyebrow>Valideerimine ja kasutus · 7 päeva</Eyebrow>
      <Title>Probleem on päris. Töövoog on arusaadav.</Title>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
        {stats.map((s) => (
          <Card key={s.k} bg={`${C.purple}14`} border={`${C.purple}40`}>
            <div className="text-2xl sm:text-3xl font-semibold" style={{ color: C.text }}>{s.k}</div>
            <div className="text-xs mt-1" style={{ color: C.muted }}>{s.l}</div>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <Card>
          <Eyebrow color={C.teal}>Vaadati enim</Eyebrow>
          <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
            <li>• Avaleht</li>
            <li>• Pere vaade</li>
            <li>• Õpetaja vaade</li>
            <li>• Koolijuhi vaade</li>
          </ul>
        </Card>
        <Card bg={`${C.lime}18`} border={`${C.lime}60`}>
          <Eyebrow color={C.green}>Kinnitas</Eyebrow>
          <p className="text-sm" style={{ color: C.text }}>
            Probleem on päris · Töövoog on arusaadav · Koolid tahavad pilooti.
          </p>
        </Card>
      </div>
    </SlideShell>
  );
};

/* ========== Slide 11 — Turg ja ärimudel ========== */
const Slide11 = () => (
  <SlideShell>
    <Eyebrow>Turg ja ärimudel</Eyebrow>
    <Title>Eesti haridusruum on piiratud, aga liigendatud.</Title>
    <div className="mt-8 grid md:grid-cols-3 gap-4">
      {[
        { k: "~800", l: "huvikooli Eestis" },
        { k: "~3 000", l: "õppekava" },
        { k: "~153 000", l: "huvihariduses õppijat" },
      ].map((s) => (
        <Card key={s.k} bg={`${C.teal}14`} border={`${C.teal}40`}>
          <div className="text-3xl font-semibold" style={{ color: C.text }}>{s.k}</div>
          <div className="text-xs mt-1" style={{ color: C.muted }}>{s.l}</div>
        </Card>
      ))}
    </div>
    <div className="mt-6 grid md:grid-cols-3 gap-4">
      {[
        { t: "Koolipõhine litsents", d: "SaaS aastalitsents üldhariduskoolile." },
        { t: "Õpilasepõhine mudel", d: "KOV / koolipidaja katab mitut kooli." },
        { t: "Kvaliteedimärk huvikoolile", d: "Meie juures õpitu on koolis nähtav ja arvestatav." },
      ].map((b) => (
        <Card key={b.t}>
          <div className="font-semibold" style={{ color: C.text }}>{b.t}</div>
          <p className="text-sm mt-2" style={{ color: C.muted }}>{b.d}</p>
        </Card>
      ))}
    </div>
    <p className="mt-6 text-xs" style={{ color: C.orange }}>
      Mentorite soovitus: maksja peab olema kool. Koolijuhid: kui tööriist vähendab dubleerimist
      ja suunab õpetaja aega, ollakse valmis maksma rohkem kui täna eKooli lisateenuste eest.
    </p>
  </SlideShell>
);

/* ========== Slide 12 — Meeskond ja mentorid ========== */
const Slide12 = () => (
  <SlideShell>
    <Eyebrow>Meeskond ja mentorid</Eyebrow>
    <Title>Hariduse, kooli ja toote inimesed ühes laudkonnas.</Title>
    <div className="mt-8 grid md:grid-cols-2 gap-5">
      <Card>
        <Eyebrow color={C.teal}>Meeskond</Eyebrow>
        <ul className="text-sm space-y-1.5" style={{ color: C.text }}>
          <li>• Haridusjuhid</li>
          <li>• Koolijuhid</li>
          <li>• Huvihariduse inimesed</li>
          <li>• Toote- ja arenduspartnerid</li>
        </ul>
      </Card>
      <Card bg={`${C.purple}14`} border={`${C.purple}40`}>
        <Eyebrow color={C.purple}>Mentorid</Eyebrow>
        <div className="grid grid-cols-2 gap-2 text-sm" style={{ color: C.text }}>
          <div>• Luukas Ilves</div>
          <div>• Tõnu Pekk</div>
          <div>• Pirkko Valge</div>
          <div>• Mari-Liis Lind</div>
        </div>
        <p className="text-xs mt-3" style={{ color: C.muted }}>
          Mentorite tagasiside aitas lihtsustada demo, fokusseerida koolijuhi väärtusele,
          sõnastada ärimudel ja muuta mõju mõõdetavaks.
        </p>
      </Card>
    </div>
  </SlideShell>
);

/* ========== Slide 13 — Lõppsõnum ========== */
const Slide13 = () => (
  <SlideShell>
    <Eyebrow>EduInvest</Eyebrow>
    <Title>Aeg loob ruumi.</Title>
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { k: "AEG", d: "Aeg on piiratud ressurss.", c: C.teal },
        { k: "TARK KASUTUS", d: "Targad valikud loovad väärtust.", c: C.purple },
        { k: "VÕIMALUSED", d: "Täna investeerituna toob rohkem võimalusi.", c: C.lime },
        { k: "RUUM", d: "Vabaneb ruum kasvuks ja arenguks.", c: C.green },
      ].map((p) => (
        <Card key={p.k} bg={`${p.c}14`} border={`${p.c}40`}>
          <div className="text-xs font-bold tracking-[0.22em]" style={{ color: p.c }}>{p.k}</div>
          <p className="text-sm mt-2" style={{ color: C.text }}>{p.d}</p>
        </Card>
      ))}
    </div>
    <div className="mt-10 rounded-2xl p-6 sm:p-8" style={{ background: C.green, color: C.bg }}>
      <p className="text-xl sm:text-3xl font-semibold leading-snug">
        Kui õppimine muutub nähtavaks,<br />
        tekib rohkem ruumi arenguks.
      </p>
    </div>
  </SlideShell>
);

/* ========== Deck navigation ========== */
const SLIDES = [
  { id: 1, label: "Suur probleem", el: <Slide1 /> },
  { id: 2, label: "Kelle häda", el: <Slide2 /> },
  { id: 3, label: "Mida koolijuht ostab", el: <Slide3 /> },
  { id: 4, label: "Lahendus", el: <Slide4 /> },
  { id: 5, label: "Nikita demo", el: <Slide5 /> },
  { id: 6, label: "Miks parem kui täna", el: <Slide6 /> },
  { id: 7, label: "Mõju ja äriloogika", el: <Slide7 /> },
  { id: 8, label: "Tõestus ja edasi", el: <Slide8 /> },
  { id: 9, label: "Mida tõestasime", el: <Slide9 /> },
  { id: 10, label: "Valideerimine", el: <Slide10 /> },
  { id: 11, label: "Turg ja ärimudel", el: <Slide11 /> },
  { id: 12, label: "Meeskond", el: <Slide12 /> },
  { id: 13, label: "Lõppsõnum", el: <Slide13 /> },
];

const Pitch = () => {
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

  const s = SLIDES[i];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: C.bg }}>
      <header className="border-b sticky top-0 z-30 backdrop-blur"
        style={{ background: `${C.bg}E6`, borderColor: C.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium"
            style={{ color: C.text }}>
            <HomeIcon className="size-4" /> Avaleht
          </Link>
          <div className="flex-1 flex items-center justify-center gap-1.5 overflow-x-auto">
            {SLIDES.map((sl, idx) => (
              <button key={sl.id} onClick={() => setI(idx)}
                className="text-[11px] px-2.5 py-1 rounded-full font-medium whitespace-nowrap transition-colors"
                style={{
                  background: idx === i ? C.green : "transparent",
                  color: idx === i ? "white" : C.text,
                  border: `1px solid ${idx === i ? C.green : C.border}`,
                }}>
                {sl.id}
              </button>
            ))}
          </div>
          <div className="text-xs font-mono tabular-nums hidden sm:block" style={{ color: C.mutedSoft }}>
            {i + 1} / {total}
          </div>
        </div>
        <div className="h-1" style={{ background: C.subtle }}>
          <div className="h-full transition-all" style={{ width: `${((i + 1) / total) * 100}%`, background: C.green }} />
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <div key={s.id} className="flex-1 animate-in fade-in slide-in-from-right-2 duration-300">
          {s.el}
        </div>
      </main>

      <footer className="border-t sticky bottom-0 backdrop-blur"
        style={{ background: `${C.bg}E6`, borderColor: C.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-3">
          <Button variant="ghost" size="sm" onClick={prev} disabled={i === 0}>
            <ArrowLeft className="size-4 mr-1" /> Tagasi
          </Button>
          <div className="text-[11px] uppercase tracking-wider font-semibold hidden sm:block"
            style={{ color: C.green }}>
            {s.label}
          </div>
          <Button size="sm" onClick={next} disabled={i === total - 1}
            style={{ background: C.green, color: "white" }}>
            Edasi <ArrowRight className="size-4 ml-1" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Pitch;

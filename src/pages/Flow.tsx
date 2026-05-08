import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Check, Sparkles, ShieldCheck, AlertCircle,
  CheckCircle2, FileText, Users, GraduationCap, Building2, Trophy, MessageSquare, Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ============================== Step model ============================== */

type StepId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const STEPS: { id: StepId; short: string }[] = [
  { id: 1, short: "Avaleht" },
  { id: 2, short: "Juhtum" },
  { id: 3, short: "Pere taotlus" },
  { id: 4, short: "Treeneri tõend" },
  { id: 5, short: "Õppekava" },
  { id: 6, short: "AI eelanalüüs" },
  { id: 7, short: "Kooli otsus" },
  { id: 8, short: "Pere selgitus" },
  { id: 9, short: "Koondvaade" },
];

/* ================================ Helpers =============================== */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-3">
    {children}
  </div>
);

const StepCard = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-3xl border-2 border-border-strong bg-card shadow-card p-6 md:p-8">
    <h1 className="text-[24px] md:text-[32px] font-semibold tracking-tight text-success leading-[1.1]">
      {title}
    </h1>
    {subtitle && (
      <p className="mt-3 text-[15px] md:text-base text-foreground/75 leading-relaxed max-w-2xl">
        {subtitle}
      </p>
    )}
    <div className="mt-6">{children}</div>
  </div>
);

/* Toggle field — checkbox-like */
const ToggleField = ({
  checked,
  onChange,
  label,
  hint,
  tone = "primary",
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  hint?: string;
  tone?: "primary" | "success";
}) => {
  const ring =
    tone === "success"
      ? checked
        ? "border-success bg-success-subtle/60"
        : "border-border-strong bg-card"
      : checked
      ? "border-primary bg-primary-subtle/40"
      : "border-border-strong bg-card";
  const dot =
    tone === "success"
      ? "bg-success text-success-foreground"
      : "bg-primary text-primary-foreground";
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-full text-left rounded-xl border-2 ${ring} p-3.5 flex items-start gap-3 transition-smooth hover:border-primary`}
    >
      <span
        className={`size-5 rounded-md border-2 ${
          checked ? `${dot} border-transparent` : "border-border-strong bg-background"
        } flex items-center justify-center shrink-0 mt-0.5`}
      >
        {checked && <Check className="size-3.5" />}
      </span>
      <div className="min-w-0">
        <div className="text-[14px] font-medium leading-snug">{label}</div>
        {hint && <div className="text-[12px] text-muted-foreground mt-0.5">{hint}</div>}
      </div>
    </button>
  );
};

const RadioField = ({
  checked,
  onChange,
  label,
  tone = "primary",
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  tone?: "primary" | "success" | "warning" | "muted";
}) => {
  const styles =
    tone === "success"
      ? checked ? "border-success bg-success-subtle/60" : "border-border-strong bg-card"
      : tone === "warning"
      ? checked ? "border-warning bg-warning-subtle/60" : "border-border-strong bg-card"
      : tone === "muted"
      ? checked ? "border-foreground/40 bg-muted/60" : "border-border-strong bg-card"
      : checked ? "border-primary bg-primary-subtle/40" : "border-border-strong bg-card";
  const dotColor =
    tone === "success" ? "bg-success" : tone === "warning" ? "bg-warning" : tone === "muted" ? "bg-foreground" : "bg-primary";
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-full text-left rounded-xl border-2 ${styles} p-3.5 flex items-center gap-3 transition-smooth hover:border-primary`}
    >
      <span className="size-5 rounded-full border-2 border-border-strong bg-background flex items-center justify-center shrink-0">
        {checked && <span className={`size-2.5 rounded-full ${dotColor}`} />}
      </span>
      <div className="text-[14px] font-medium">{label}</div>
    </button>
  );
};

/* ================================ Steps ================================ */

const Step1Start = ({ onNext }: { onNext: () => void }) => (
  <StepCard
    title="Testi ühte arvestusotsust"
    subtitle="Sa läbid 9-sammulise voo: pere taotlusest treeneri tõendini, AI eelanalüüsist kooli otsuseni ja pere selgituseni. Lõpus näed koolijuhi koondvaadet."
  >
    <div className="rounded-2xl border border-accent/30 bg-accent-subtle/40 p-4 flex items-start gap-3">
      <Sparkles className="size-4 text-accent shrink-0 mt-0.5" />
      <div className="text-[13.5px] leading-snug">
        <strong className="text-accent">AI teeb eelanalüüsi. Kool otsustab.</strong> AI ei anna
        hinnet, ei vabasta tunnist ega tee lõppotsust.
      </div>
    </div>

    <Button onClick={onNext} size="lg" className="rounded-xl mt-6 h-12 px-6">
      Alusta testjuhtumit
      <ArrowRight className="size-4 ml-1.5" />
    </Button>
  </StepCard>
);

const Step2Case = ({ onNext }: { onNext: () => void }) => (
  <StepCard title="Juhtum: Nikita Tamm" subtitle="Vaata juhtumi põhiandmeid enne taotluse esitamist.">
    <div className="grid sm:grid-cols-2 gap-3">
      {[
        { k: "Õppija", v: "Nikita Tamm" },
        { k: "Klass", v: "8. klass" },
        { k: "Tegevus", v: "Jalgpallitrenn" },
        { k: "Maht", v: "3× nädalas" },
        { k: "Õppekeel", v: "Eesti keel" },
        { k: "Tõendi andja", v: "FC Demo / treener" },
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
        Lisatõend
      </div>
      <p className="text-[14px] leading-snug">Eesti keele praktiline kasutus treeningul.</p>
    </div>
  </StepCard>
);

const Step3Family = ({ onNext, state, setState }: any) => (
  <StepCard
    title="Pere taotlus"
    subtitle="Pere ei pea teadma õppekava kattuvust. Pere kirjeldab tegevust ja annab tahteavalduse."
  >
    <div className="text-[13px] font-semibold text-foreground/80 mb-2">Mida soovin arvestada?</div>
    <div className="space-y-2.5">
      <ToggleField
        checked={state.askPE}
        onChange={() => setState({ ...state, askPE: !state.askPE })}
        label="Kehaline kasvatus"
      />
      <ToggleField
        checked={state.askEst}
        onChange={() => setState({ ...state, askEst: !state.askEst })}
        label="Eesti keele praktiline kasutus toetava tõendina"
      />
    </div>

    <div className="mt-5">
      <div className="text-[13px] font-semibold text-foreground/80 mb-2">Kirjeldus</div>
      <div className="rounded-xl border border-border-strong bg-background p-3.5 text-[14px] text-foreground/85 leading-snug">
        Nikita osaleb FC Demo jalgpallitrennis 3× nädalas. Treening toimub eesti keeles.
      </div>
    </div>

    <div className="mt-4">
      <div className="text-[13px] font-semibold text-foreground/80 mb-2">Tõendi andja</div>
      <div className="rounded-xl border border-border-strong bg-background p-3.5 flex items-center gap-3">
        <div className="size-9 rounded-lg bg-primary-subtle text-primary flex items-center justify-center">
          <Trophy className="size-4" />
        </div>
        <div>
          <div className="text-[14px] font-medium">FC Demo</div>
          <div className="text-[12px] text-muted-foreground">Treener · Mart Mets</div>
        </div>
      </div>
    </div>

    <Button
      onClick={onNext}
      disabled={!state.askPE && !state.askEst}
      size="lg"
      className="rounded-xl mt-6 h-12 px-6 w-full sm:w-auto"
    >
      <Send className="size-4 mr-1.5" />
      Saada tõendipäring treenerile
    </Button>
  </StepCard>
);

const Step4Coach = ({ onNext, state, setState }: any) => {
  const flags: ("osa" | "maht" | "sisu" | "keel" | "juh" | "log")[] = ["osa", "maht", "sisu", "keel", "juh", "log"];
  const allConfirmed = flags.every((k) => state.coach[k]);
  const labels: Record<string, string> = {
    osa: "Kinnitan osalemise",
    maht: "Kinnitan mahu",
    sisu: "Kinnitan tegevuse sisu",
    keel: "Kinnitan õppekeele",
    juh: "Kinnitan juhendaja andmed",
    log: "Lisan kohaloleku / päeviku tõendi",
  };
  return (
    <StepCard
      title="Treeneri tõend"
      subtitle="Treener ei otsusta kooli õpitulemuste täitmist. Treener kinnitab tegelikku tegevust."
    >
      <div className="rounded-2xl border-2 border-border-strong bg-background p-4 md:p-5">
        <div className="grid sm:grid-cols-2 gap-3 text-[13.5px]">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Osalemine</div>
            <div className="font-medium mt-0.5">32 / 38 treeningut</div>
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Maht</div>
            <div className="font-medium mt-0.5">3 treeningut nädalas</div>
          </div>
          <div className="sm:col-span-2">
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Sisu</div>
            <div className="font-medium mt-0.5">üldkehaline ettevalmistus, jalgpallitehnika, meeskonnatöö</div>
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Õppekeel</div>
            <div className="font-medium mt-0.5">Eesti keel</div>
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Juhendaja</div>
            <div className="font-medium mt-0.5">Mart Mets</div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-border text-[13px] text-foreground/75 italic">
          „Nikita mõistab eestikeelseid juhiseid ja suhtleb treeningul tiimikaaslastega eesti keeles.”
        </div>
      </div>

      <div className="text-[13px] font-semibold text-foreground/80 mt-6 mb-2">Treeneri kinnitused</div>
      <div className="space-y-2">
        {flags.map((k) => (
          <ToggleField
            key={k}
            checked={state.coach[k]}
            onChange={() => setState({ ...state, coach: { ...state.coach, [k]: !state.coach[k] } })}
            label={labels[k]}
            tone="success"
          />
        ))}
      </div>

      <Button
        onClick={onNext}
        disabled={!allConfirmed}
        size="lg"
        className="rounded-xl mt-6 h-12 px-6 w-full sm:w-auto"
      >
        <ShieldCheck className="size-4 mr-1.5" />
        Kinnita ja saada koolile
      </Button>
      {!allConfirmed && (
        <div className="text-[12px] text-muted-foreground mt-2">Kinnita kõik väljad enne saatmist.</div>
      )}
    </StepCard>
  );
};

const Step5Curriculum = ({ onNext, state, setState }: any) => {
  const outcomes = [
    { k: "lia", l: "liikumisaktiivsus ja kehaline võimekus" },
    { k: "ko", l: "koostöö ja fair play" },
    { k: "es", l: "eneseregulatsioon ja ohutus" },
    { k: "mlo", l: "mängulised liikumisoskused" },
  ];
  const anySelected = outcomes.some((o) => state.outcomes[o.k]) || state.estSupport;
  return (
    <StepCard
      title="Kool määrab, mida võrreldakse"
      subtitle="Pere ei vali õpitulemusi. Kool määrab, millise õppeaine ja õpitulemustega tegevust võrreldakse."
    >
      <div className="rounded-xl border border-border-strong bg-background p-4 mb-5">
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
          Õppeaine
        </div>
        <div className="text-[16px] font-semibold mt-1">Kehaline kasvatus</div>
      </div>

      <div className="text-[13px] font-semibold text-foreground/80 mb-2">Valitavad õpitulemused</div>
      <div className="space-y-2">
        {outcomes.map((o) => (
          <ToggleField
            key={o.k}
            checked={state.outcomes[o.k]}
            onChange={() => setState({ ...state, outcomes: { ...state.outcomes, [o.k]: !state.outcomes[o.k] } })}
            label={o.l}
          />
        ))}
      </div>

      <div className="text-[13px] font-semibold text-foreground/80 mt-6 mb-2">Lisatõendina</div>
      <ToggleField
        checked={state.estSupport}
        onChange={() => setState({ ...state, estSupport: !state.estSupport })}
        label="Eesti keele praktiline kasutus"
      />

      <Button
        onClick={onNext}
        disabled={!anySelected}
        size="lg"
        className="rounded-xl mt-6 h-12 px-6 w-full sm:w-auto"
      >
        <Sparkles className="size-4 mr-1.5" />
        Käivita AI eelanalüüs
      </Button>
    </StepCard>
  );
};

const Step6AI = ({ onNext }: { onNext: () => void }) => (
  <StepCard
    title="AI eelanalüüs"
    subtitle="AI koondab tõendid ja pakub võimalikke seoseid. Otsuse teeb õpetaja või õppejuht."
  >
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-success mb-2">
          Tõendid
        </div>
        <ul className="space-y-2">
          {[
            "treeneri kinnitus olemas",
            "osalemise maht olemas",
            "õppekeel kinnitatud",
            "kohalolek 32/38",
          ].map((t) => (
            <li key={t} className="flex items-center gap-2 text-[13.5px]">
              <CheckCircle2 className="size-4 text-success shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-2">
          Võimalik seos
        </div>
        <div className="space-y-2">
          <div className="rounded-xl border-2 border-success/30 bg-success-subtle/40 p-3">
            <div className="text-[13px] font-semibold">Kehaline kasvatus</div>
            <div className="text-[12px] text-foreground/70 mt-0.5">osaline / tugev seos</div>
          </div>
          <div className="rounded-xl border-2 border-accent/30 bg-accent-subtle/40 p-3">
            <div className="text-[13px] font-semibold">Eesti keele praktiline kasutus</div>
            <div className="text-[12px] text-foreground/70 mt-0.5">toetav tõend, mitte hinde asendus</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-5 rounded-xl border border-warning/30 bg-warning-subtle/40 p-4">
      <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-warning mb-1">
        Puuduolev info
      </div>
      <ul className="list-disc pl-5 text-[13px] space-y-1">
        <li>kooli otsus, kas maht on piisav</li>
        <li>õpetaja hinnang, kas seos katab valitud õpitulemused</li>
      </ul>
    </div>

    <div className="mt-4 rounded-2xl border-2 border-accent/30 bg-accent-subtle/30 p-4">
      <div className="flex items-center gap-2 mb-1.5">
        <Sparkles className="size-4 text-accent" />
        <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-accent">AI soovitus</div>
      </div>
      <p className="text-[14px] leading-snug">
        Sobib osaliseks arvestamiseks kehalises kasvatuses. Eesti keelt käsitleda toetava
        tõendina, mitte automaatse arvestusena.
      </p>
    </div>

    <div className="mt-3 flex items-start gap-2 text-[12.5px] text-muted-foreground">
      <AlertCircle className="size-3.5 shrink-0 mt-0.5" />
      AI ei tee otsust. Õpetaja või õppejuht kontrollib ja otsustab.
    </div>

    <Button onClick={onNext} size="lg" className="rounded-xl mt-6 h-12 px-6 w-full sm:w-auto">
      <GraduationCap className="size-4 mr-1.5" />
      Jätka otsuse vaatesse
    </Button>
  </StepCard>
);

const Step7Decision = ({ onNext, state, setState }: any) => {
  const opts: { v: string; l: string; tone: any }[] = [
    { v: "full", l: "Arvestan täielikult", tone: "success" },
    { v: "partial", l: "Arvestan osaliselt", tone: "success" },
    { v: "more", l: "Vajan lisatõendit", tone: "warning" },
    { v: "no", l: "Ei arvesta", tone: "muted" },
    { v: "head", l: "Suunan õppejuhile", tone: "primary" },
  ];
  return (
    <StepCard
      title="Kooli otsus"
      subtitle="Õpetaja või õppejuht teeb põhjendatud otsuse tõendite ja AI eelanalüüsi alusel."
    >
      <div className="space-y-2">
        {opts.map((o) => (
          <RadioField
            key={o.v}
            checked={state.decision === o.v}
            onChange={() => setState({ ...state, decision: o.v })}
            label={o.l}
            tone={o.tone}
          />
        ))}
      </div>

      <div className="mt-6">
        <div className="text-[13px] font-semibold text-foreground/80 mb-2">Põhjenduse mustand</div>
        <div className="rounded-2xl border-2 border-border-strong bg-background p-4 text-[13.5px] leading-relaxed text-foreground/85 space-y-3">
          <p>
            Nikita Tamme jalgpallitreeningul on tõendatud regulaarne osalemine, piisav maht ja
            seos kehalise kasvatuse õpitulemustega. Kool arvestab treeningut osaliselt
            kehalise kasvatuse õpitulemuste täitmisel.
          </p>
          <p>
            Eestikeelne treening arvestatakse eesti keele praktilise kasutuse toetava tõendina,
            kuid see ei asenda eesti keele hinnet ega vabasta õppijat automaatselt eesti keele
            tundidest.
          </p>
        </div>
      </div>

      <Button
        onClick={onNext}
        disabled={!state.decision}
        size="lg"
        className="rounded-xl mt-6 h-12 px-6 w-full sm:w-auto"
      >
        <Send className="size-4 mr-1.5" />
        Kinnita otsus ja saada perele selgitus
      </Button>
    </StepCard>
  );
};

const Step8Family = ({ onNext }: { onNext: () => void }) => (
  <StepCard title="Selgitus perele" subtitle="Pere saab arusaadava selgituse, mida arvestati ja mida mitte.">
    <div className="rounded-2xl border-2 border-success/30 bg-success-subtle/40 p-5">
      <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-success mb-1">Otsus</div>
      <div className="text-xl font-semibold">Arvestame osaliselt.</div>
    </div>

    <div className="mt-4 space-y-3">
      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-success mb-1.5">
          Mida arvestati?
        </div>
        <p className="text-[14px] leading-snug">
          Nikita regulaarne osalemine jalgpallitreeningul toetab kehalise kasvatuse õpitulemuste täitmist.
        </p>
      </div>

      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-warning mb-1.5">
          Mida ei arvestatud automaatselt?
        </div>
        <p className="text-[14px] leading-snug">
          Eestikeelne treening ei asenda eesti keele hinnet ega vabasta automaatselt eesti keele tundidest.
        </p>
      </div>

      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-primary mb-1.5">
          Miks?
        </div>
        <p className="text-[14px] leading-snug">
          Treening annab praktilise keelekasutuse tõendi, kuid ainehinde otsustab kool eesti keele
          õpitulemuste alusel.
        </p>
      </div>

      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-1.5">
          Järgmine samm
        </div>
        <p className="text-[14px] leading-snug">
          Kool määrab, kuidas osaline arvestamine kajastub õppija õppetöös ja tunniplaanis.
        </p>
      </div>
    </div>

    <Button onClick={onNext} size="lg" className="rounded-xl mt-6 h-12 px-6 w-full sm:w-auto">
      <Building2 className="size-4 mr-1.5" />
      Vaata koolijuhi koondvaadet
    </Button>
  </StepCard>
);

const Step9Principal = () => (
  <StepCard title="Koolijuhi koondvaade" subtitle="Üksikotsusest tekib juhtimisinfo.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {[
        { v: "12", l: "sarnast juhtumit", tone: "primary" },
        { v: "3", l: "korduvat ainet (KK, muusika, kunst)", tone: "primary" },
        { v: "4", l: "vajab lisatõendit", tone: "warning" },
        { v: "3", l: "korduvat partnerit (FC Demo, muusikakool, kunstiring)", tone: "primary" },
        { v: "8–12 h", l: "potentsiaalne tööaja võit perioodis", tone: "success" },
      ].map((m) => {
        const bg =
          m.tone === "warning"
            ? "border-warning/30 bg-warning-subtle/50"
            : m.tone === "success"
            ? "border-success/30 bg-success-subtle/50"
            : "border-primary/20 bg-card";
        const num =
          m.tone === "warning" ? "text-warning" : m.tone === "success" ? "text-success" : "text-primary";
        return (
          <div key={m.l} className={`rounded-2xl border-2 ${bg} p-4 shadow-card`}>
            <div className={`text-2xl font-semibold tabular ${num}`}>{m.v}</div>
            <div className="text-[12.5px] text-foreground/75 mt-1 leading-snug">{m.l}</div>
          </div>
        );
      })}
    </div>

    <div className="mt-5 rounded-2xl border-2 border-primary/25 bg-primary-subtle/30 p-5">
      <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary mb-1.5">
        Tunniplaani märkus
      </div>
      <p className="text-[14px] leading-snug">
        Kui sarnased juhtumid korduvad ühes klassis või lennus, saab järgmise perioodi tunniplaani
        paindlikumalt planeerida.
      </p>
    </div>

    <div className="mt-6 flex flex-wrap gap-3">
      <Button size="lg" className="rounded-xl">Ekspordi koondraport</Button>
      <Button size="lg" variant="outline" className="rounded-xl">Loo kooli arvestamise hea tava</Button>
      <Button asChild size="lg" variant="ghost" className="rounded-xl">
        <Link to="/">Lõpeta test</Link>
      </Button>
    </div>
  </StepCard>
);

/* ================================ Page ================================= */

const Flow = () => {
  const [step, setStep] = useState<StepId>(1);
  const [state, setState] = useState({
    askPE: true,
    askEst: true,
    coach: { osa: false, maht: false, sisu: false, keel: false, juh: false, log: false },
    outcomes: { lia: true, ko: true, es: false, mlo: true } as Record<string, boolean>,
    estSupport: true,
    decision: "partial" as "full" | "partial" | "more" | "no" | "head" | "",
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      if (e.key === "ArrowRight" && step < 9) setStep((s) => (s + 1) as StepId);
      if (e.key === "ArrowLeft" && step > 1) setStep((s) => (s - 1) as StepId);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const next = () => step < 9 && setStep((s) => (s + 1) as StepId);
  const prev = () => step > 1 && setStep((s) => (s - 1) as StepId);

  const progressPct = useMemo(() => (step / 9) * 100, [step]);
  const currentShort = STEPS.find((s) => s.id === step)?.short ?? "";

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-3.5" /> Avaleht
          </Link>
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">
            Samm {step}/9 · {currentShort}
          </div>
          <div className="text-[11px] text-muted-foreground tabular">{Math.round(progressPct)}%</div>
        </div>
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        {step === 1 && <Step1Start onNext={next} />}
        {step === 2 && <Step2Case onNext={next} />}
        {step === 3 && <Step3Family onNext={next} state={state} setState={setState} />}
        {step === 4 && <Step4Coach onNext={next} state={state} setState={setState} />}
        {step === 5 && <Step5Curriculum onNext={next} state={state} setState={setState} />}
        {step === 6 && <Step6AI onNext={next} />}
        {step === 7 && <Step7Decision onNext={next} state={state} setState={setState} />}
        {step === 8 && <Step8Family onNext={next} />}
        {step === 9 && <Step9Principal />}

        {/* Bottom nav */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            onClick={prev}
            disabled={step === 1}
            variant="outline"
            className="rounded-xl"
          >
            <ArrowLeft className="size-4 mr-1.5" />
            Tagasi
          </Button>
          {step < 9 ? (
            <Button onClick={next} variant="ghost" className="rounded-xl text-muted-foreground">
              Edasi
              <ArrowRight className="size-4 ml-1.5" />
            </Button>
          ) : (
            <Button asChild variant="ghost" className="rounded-xl text-muted-foreground">
              <Link to="/">Avalehele</Link>
            </Button>
          )}
        </div>

        {/* Mock data note */}
        <div className="mt-8 text-center text-[11px] text-muted-foreground tracking-wider uppercase">
          Häki prototüüp · mock-andmed
        </div>
      </main>
    </div>
  );
};

export default Flow;

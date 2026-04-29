import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  Compass,
  GraduationCap,
  Heart,
  Link2,
  MapPin,
  Palette,
  Sparkles,
  Trophy,
  Users2,
} from "lucide-react";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";
import { PartnerConfirmationStep } from "./PartnerConfirmationStep";

type PartnerKey =
  | "school"
  | "sport"
  | "pernova"
  | "art"
  | "onk"
  | "rajaleidja"
  | "parent";

const PARTNERS: {
  id: PartnerKey;
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  contributes: string;
}[] = [
  {
    id: "school",
    name: "Mai Kool",
    role: "Üldhariduskool",
    icon: GraduationCap,
    contributes:
      "Õpetaja teeb arvestamise otsuse õppekava õpitulemuste põhjal. Klassijuhataja koordineerib koostööruumis.",
  },
  {
    id: "sport",
    name: "Pärnu Spordikool",
    role: "Huvikool — sport",
    icon: Trophy,
    contributes:
      "Treener kinnitab treeningute sageduse, võistlused, laagrid ja arendatud oskused.",
  },
  {
    id: "pernova",
    name: "Pernova Hariduskeskus",
    role: "Loodus- ja tehnoloogia",
    icon: Compass,
    contributes:
      "Kinnitab loodus- ja tehnoloogiaõppe projektid, laborid ja õppekäigud — seos loodusainetega.",
  },
  {
    id: "art",
    name: "Pärnu Kunstide Kool",
    role: "Huvikool — kunst ja muusika",
    icon: Palette,
    contributes:
      "Kinnitab muusika- ja kunstiõppe taseme, esinemised ja loomingu — seos kunsti- ja muusikaõpetusega.",
  },
  {
    id: "onk",
    name: "ÕNK",
    role: "Õppe- ja nõustamiskeskus",
    icon: Users2,
    contributes:
      "Toetab õpitee disaini, kokkulepete sõnastamist ja õppija toe vajaduste arvestamist — ei jaga diagnoose.",
  },
  {
    id: "rajaleidja",
    name: "Rajaleidja",
    role: "Karjääri- ja õppenõustamine",
    icon: Compass,
    contributes:
      "Aitab siduda õppija huvid ja oskused tulevaste valikute ning karjääriteega.",
  },
  {
    id: "parent",
    name: "Lapsevanem",
    role: "Õppija pere",
    icon: Heart,
    contributes:
      "Näeb sama juhtumit koostööruumis, saab esitada küsimusi ja kinnitada nõusoleku.",
  },
];

export const PartnerView = () => {
  const [selected, setSelected] = useState<PartnerKey>("sport");
  const sel = PARTNERS.find((p) => p.id === selected)!;

  return (
    <div className="space-y-6">
      <DemoShell
        stepLabel="Õpikeskus — Pärnu"
        title="Pärnu õpikeskus"
        subtitle="Õppija ümber on terve võrgustik. Igal partneril on selge roll, kuid arvestamise otsuse teeb alati kool."
      >
        <ParentNote
          audience="Lapsevanemale ja partnerile"
          text="Pärnu linnas saavad kool, huvikoolid, õppe- ja karjäärinõustajad ning lapsevanem näha sama õppijat koostööruumis. Iga osapool annab oma osa, kuid arvestamise otsuse teeb õpetaja koos kooli vastutajaga."
        />

        <div className="rounded-2xl border border-border bg-muted/20 p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="size-4 text-primary" />
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
              Õpikeskuse võrgustik
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {PARTNERS.map((p) => {
              const active = selected === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`text-left p-3 rounded-xl border-2 transition-smooth ${
                    active
                      ? "border-primary bg-primary-subtle shadow-card"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div
                    className={`size-8 rounded-lg flex items-center justify-center mb-2 ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <p.icon className="size-4" />
                  </div>
                  <div className="text-xs font-semibold tracking-tight leading-snug">
                    {p.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                    {p.role}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl border border-border bg-card p-4 flex gap-3">
            <div className="shrink-0 size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Link2 className="size-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1">
                {sel.name} · roll
              </div>
              <p className="text-sm leading-relaxed text-foreground/85">
                {sel.contributes}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              icon: Sparkles,
              title: "Üks õppija — üks koostööruum",
              text: "Iga osapool näeb sama juhtumi staatust ja oma järgmist sammu.",
            },
            {
              icon: CheckCircle2,
              title: "Partner ei pane hinnet",
              text: "Partner annab tõendatud sisendi. Otsuse teeb õpetaja.",
            },
            {
              icon: Building2,
              title: "KOV näeb tervikut",
              text: "Pärnu linn näeb, kuidas üld- ja huviharidus päriselt koos toimivad.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                <c.icon className="size-4" />
              </div>
              <div className="text-sm font-semibold tracking-tight">{c.title}</div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </DemoShell>

      <PartnerConfirmationStep embedded />
    </div>
  );
};

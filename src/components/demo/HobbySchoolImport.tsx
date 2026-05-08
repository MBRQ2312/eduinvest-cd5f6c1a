import { useState } from "react";
import { ArrowRight, Check, GraduationCap, Loader2, RotateCcw, School, ShieldCheck, Sparkles, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Source = "ekool" | "stuudium" | "arno";

const SOURCES: {
  id: Source;
  name: string;
  tag: string;
  desc: string;
  fields: string[];
  accent: string;
}[] = [
  {
    id: "ekool",
    name: "eKool",
    tag: "Üldhariduskool",
    desc: "Õpilase profiil, klass, õpitulemused ja päeviku märked.",
    fields: ["Nimi + EHIS kood", "Klass ja kool", "Aine õpitulemused", "Lapsevanema kontakt"],
    accent: "from-[#1f6feb]/15 to-transparent border-[#1f6feb]/30",
  },
  {
    id: "stuudium",
    name: "Stuudium",
    tag: "Üldhariduskool",
    desc: "Õpilase ja klassi andmed Stuudiumi REST-liidese kaudu.",
    fields: ["Nimi + EHIS kood", "Õppekava versioon", "Hinnete ajalugu", "Tunniplaan"],
    accent: "from-[#7c3aed]/15 to-transparent border-[#7c3aed]/30",
  },
  {
    id: "arno",
    name: "Arno",
    tag: "KOV register (Tartu, Tallinn jt)",
    desc: "Lapse rahvastikuandmed ja huvikooli koht KOV-i süsteemist.",
    fields: ["Isikukood + nimi", "Elukoha KOV", "Olemasolevad huvikoolid", "Rahastuse staatus"],
    accent: "from-[#10b981]/15 to-transparent border-[#10b981]/30",
  },
];

export const HobbySchoolImport = () => {
  const [active, setActive] = useState<Source>("ekool");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const current = SOURCES.find((s) => s.id === active)!;

  const fetchData = async () => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  };

  const reset = (id: Source) => {
    setActive(id);
    setStatus("idle");
  };

  return (
    <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary-subtle/40 via-card to-card p-5 md:p-6 mb-8 shadow-card">
      <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <School className="size-4 text-primary" />
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
              Huvikooli vaade
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold tracking-tight">
            Lisa õpilane otse — eKoolist, Stuudiumist või Arnost
          </h3>
          <p className="text-sm text-foreground/75 mt-1 max-w-2xl">
            Huvikool ei pea andmeid käsitsi sisestama. Vali allikas, kinnita lapsevanema nõusolek
            ning õpilase andmed tulevad LearnOnce'i sekunditega.
          </p>
        </div>
        <Badge variant="outline" className="text-[10px] shrink-0">
          <Sparkles className="size-3 mr-1" /> Üks klikk
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        {SOURCES.map((s) => {
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              onClick={() => reset(s.id)}
              className={`text-left rounded-xl border-2 p-4 transition-smooth bg-gradient-to-br ${
                selected ? `${s.accent} shadow-elevated` : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-base font-semibold tracking-tight">{s.name}</div>
                {selected && (
                  <div className="size-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Check className="size-3" strokeWidth={3} />
                  </div>
                )}
              </div>
              <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground mb-2">
                {s.tag}
              </div>
              <div className="text-xs text-foreground/75 leading-snug">{s.desc}</div>
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-border bg-card/60 p-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
          <div className="rounded-lg border border-border bg-muted/30 p-3 text-center">
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground mb-1">
              Allikas
            </div>
            <div className="text-sm font-semibold">{current.name}</div>
          </div>
          <ArrowRight className="size-4 text-primary mx-auto hidden md:block" />
          <div className="rounded-lg border border-primary/30 bg-primary-subtle/40 p-3 text-center">
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary mb-1">
              Turvaline liides
            </div>
            <div className="text-sm font-semibold flex items-center justify-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" />
              OAuth + nõusolek
            </div>
          </div>
          <ArrowRight className="size-4 text-primary mx-auto hidden md:block" />
          <div className="rounded-lg border border-success/30 bg-success-subtle p-3 text-center">
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-success mb-1">
              Huvikool
            </div>
            <div className="text-sm font-semibold flex items-center justify-center gap-1.5">
              <GraduationCap className="size-4 text-success" />
              Õpilase profiil
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          {current.fields.map((f, i) => {
            const visible = status === "done";
            return (
              <div
                key={f}
                className={`rounded-lg border px-3 py-2 text-xs transition-smooth ${
                  visible
                    ? "border-success/30 bg-success-subtle text-foreground"
                    : "border-dashed border-border bg-muted/20 text-muted-foreground"
                }`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
              >
                <div className="flex items-center gap-1.5">
                  {visible ? (
                    <Check className="size-3 text-success shrink-0" strokeWidth={3} />
                  ) : (
                    <div className="size-3 rounded-full border border-muted-foreground/40 shrink-0" />
                  )}
                  <span className="leading-snug">{f}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-xs text-muted-foreground">
            {status === "idle" && "Mock-päring — päriselus loeb LearnOnce ainult lubatud välju."}
            {status === "loading" && `Pärin andmeid ${current.name}-ist…`}
            {status === "done" && (
              <span className="text-success font-medium">
                ✓ Õpilane lisatud huvikooli — 4 välja sünkroonitud {current.name}-ist
              </span>
            )}
          </div>
          {status !== "done" ? (
            <Button onClick={fetchData} disabled={status === "loading"} size="sm">
              {status === "loading" ? (
                <><Loader2 className="size-4 animate-spin" /> Pärin…</>
              ) : (
                <><UserPlus className="size-4" /> Lisa õpilane {current.name}-ist</>
              )}
            </Button>
          ) : (
            <Button onClick={() => setStatus("idle")} size="sm" variant="outline">
              <RotateCcw className="size-4" /> Proovi uuesti
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

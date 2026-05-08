import { useState } from "react";
import { ArrowRight, Check, Database, FileCheck2, Loader2, RotateCcw, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";

interface Props { onBack: () => void; onRestart: () => void; }

const PAYLOAD = {
  oppija: { id: "EHIS-2010-1142", nimi: "Markus T.", klass: "8.A" },
  arvestus: {
    aine: "Kehaline kasvatus",
    periood: "2025/2026 II veerand",
    otsus: "osaline_arvestus",
    kaetud_oppetulemused: ["KK.8.1.2", "KK.8.1.5", "KK.8.2.1"],
    veel_vaja: ["KK.8.3.4 — pallimängud, kooli vaatlus"],
    eesti_keel_toendina: true,
  },
  toendid: [
    { tyyp: "treeneri_kinnitus", allikas: "Pärnu Spordikool", id: "PSK-2025-441" },
    { tyyp: "voistlusprotokoll", allikas: "Eesti Jalgpalliliit", id: "EJL-U15-118" },
  ],
  otsustaja: { roll: "õpetaja", nimi: "K. Lepik", aeg: "2026-04-22T15:58:00+03:00" },
};

type Status = "idle" | "syncing" | "done";

export const LearnOnceStep7Integration = ({ onBack, onRestart }: Props) => {
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState(0);

  const sync = async () => {
    setStatus("syncing");
    setStep(0);
    for (let i = 1; i <= 4; i++) {
      await new Promise((r) => setTimeout(r, 550));
      setStep(i);
    }
    setStatus("done");
  };

  const stages = [
    "Autentimine kooli ÕIS-iga (eKool / Stuudium API)",
    "Õppija ja õpitulemuste sidumine (EHIS kood)",
    "Otsuse ja tõendite kirjutamine arvestuste tabelisse",
    "Märkide loomine vastavate ainete päevikutesse",
  ];

  return (
    <DemoShell
      stepLabel="07 — eKool / Stuudium integratsioon"
      title="Otsus läheb tagasi kooli infosüsteemi"
      subtitle="Häki ajal mock. Päriselus loeb LearnOnce õpitulemused ja kirjutab otsuse tagasi standardse API kaudu."
    >
      <ParentNote
        audience="Lapsevanemale ja partnerile"
        text="Kool ei pea midagi käsitsi üle kandma. Otsus, tõendid ja viited õpitulemustele liiguvad turvalise liidese kaudu otse õppeinfosüsteemi."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
        {/* Left: payload */}
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="size-4 text-primary" />
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                POST /api/v1/arvestused
              </div>
            </div>
            <Badge variant="outline" className="text-[10px]">JSON</Badge>
          </div>
          <pre className="p-4 text-[11px] leading-relaxed font-mono text-foreground/85 overflow-x-auto bg-card">
{JSON.stringify(PAYLOAD, null, 2)}
          </pre>
        </div>

        {/* Right: pipeline */}
        <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
                Andmevoog
              </div>
            </div>
            <Badge variant={status === "done" ? "default" : "outline"} className="text-[10px]">
              {status === "idle" && "Ootel"}
              {status === "syncing" && "Sünkroonimine…"}
              {status === "done" && "Sünkroonitud"}
            </Badge>
          </div>

          <ol className="space-y-2">
            {stages.map((s, i) => {
              const done = step > i;
              const active = step === i && status === "syncing";
              return (
                <li
                  key={s}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-smooth ${
                    done
                      ? "border-success/30 bg-success-subtle"
                      : active
                        ? "border-primary/40 bg-primary-subtle/60"
                        : "border-border bg-muted/20"
                  }`}
                >
                  <div
                    className={`size-7 rounded-lg shrink-0 flex items-center justify-center ${
                      done
                        ? "bg-success text-success-foreground"
                        : active
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {done ? (
                      <Check className="size-4" strokeWidth={3} />
                    ) : active ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <span className="text-xs font-bold tabular">{i + 1}</span>
                    )}
                  </div>
                  <span className="text-sm leading-snug pt-0.5 text-foreground/90">{s}</span>
                </li>
              );
            })}
          </ol>

          <div className="mt-5">
            {status !== "done" ? (
              <Button onClick={sync} disabled={status === "syncing"} className="w-full shadow-elevated">
                {status === "syncing" ? (
                  <><Loader2 className="size-4 animate-spin" /> Sünkroonin…</>
                ) : (
                  <><Zap className="size-4" /> Saada otsus eKooli / Stuudiumi (mock)</>
                )}
              </Button>
            ) : (
              <div className="rounded-xl border border-success/30 bg-success-subtle p-4 flex items-start gap-3">
                <FileCheck2 className="size-5 text-success shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">
                    Märge loodud · ÕIS-i viide #ARV-2026-00118
                  </div>
                  <div className="text-foreground/80 mt-1">
                    Otsus, tõendid ja õpitulemuste viited on salvestatud. Õpetaja, õppija ja
                    lapsevanem näevad sama kirjet eKoolis / Stuudiumis.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
        <div className="px-6 py-4 border-b border-border bg-gradient-to-br from-primary-subtle/60 to-transparent">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
            Tehniline teekond
          </div>
          <h3 className="text-lg md:text-xl font-semibold tracking-tight mt-1">
            Häkist toodanguni 12 nädalaga
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          <Phase
            tag="Häki"
            weeks="2 päeva"
            title="Mock-andmed + AI eelanalüüs"
            items={[
              "Markuse juhtum lõpuni",
              "OpenAI Responses API päris",
              "Otsuse JSON struktuur valmis",
            ]}
          />
          <Phase
            tag="Pilot"
            weeks="4 nädalat"
            title="Üks kool, üks aine"
            items={[
              "eKool / Stuudium read-only API",
              "5–10 päris juhtumit",
              "Õpetaja tagasiside ringid",
            ]}
            highlight
          />
          <Phase
            tag="Skaala"
            weeks="12 nädalat"
            title="Write-back ja koolijuhi vaade"
            items={[
              "Otsuse kirjutamine ÕIS-i",
              "EHIS õpitulemuste sidumine",
              "Andmekaitse ja logimine",
            ]}
          />
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onRestart} variant="outline">
          <RotateCcw className="size-4" />
          Alusta demo uuesti
        </Button>
      </div>
    </DemoShell>
  );
};

const Phase = ({
  tag,
  weeks,
  title,
  items,
  highlight,
}: {
  tag: string;
  weeks: string;
  title: string;
  items: string[];
  highlight?: boolean;
}) => (
  <div className={`p-5 ${highlight ? "bg-primary-subtle/40" : ""}`}>
    <div className="flex items-center justify-between mb-2">
      <Badge variant={highlight ? "default" : "outline"} className="text-[10px]">{tag}</Badge>
      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">{weeks}</span>
    </div>
    <div className="text-base font-semibold tracking-tight mb-2">{title}</div>
    <ul className="space-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
          <Check className="size-3.5 text-primary mt-1 shrink-0" />
          <span className="leading-snug">{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

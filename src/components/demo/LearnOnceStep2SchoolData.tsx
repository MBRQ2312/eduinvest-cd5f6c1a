import { ArrowRight, Database, BookOpen, ClipboardList, MessageSquare, AlertCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";

interface Props { onNext: () => void; onBack: () => void; }

export const LearnOnceStep2SchoolData = ({ onNext, onBack }: Props) => {
  return (
    <DemoShell
      stepLabel="02 — Kooliandmed"
      title="Olemasolevad kooliandmed"
      subtitle="Mock-vaade andmemudelist, mida eKoolist või Stuudiumist saaks lugeda."
    >
      <ParentNote text="EduInvest ei asenda eKooli ega Stuudiumit. Demo näitab, milliseid kooli andmeid otsustusvoog vajab — hilisem integratsioon toimub API või andmeekspordi kaudu." />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Block icon={BookOpen} title="Õppija kooliandmed">
          <Row k="Õppija" v="Markus Tamm" />
          <Row k="Klass" v="8.A" />
          <Row k="Kool" v="Mai Kool" />
          <Row k="Õppeained" v="Kehaline kasvatus, eesti keel, klassijuhatajatund" />
        </Block>

        <Block icon={ClipboardList} title="Õpitulemused — kehaline kasvatus">
          <Row k="Kehaline aktiivsus" v="Tase: kaetud" tone="success" />
          <Row k="Liikumisoskused" v="Osaliselt" tone="warning" />
          <Row k="Koostöö ja aus mäng" v="Osaliselt" tone="warning" />
          <Row k="Enesejuhtimine" v="Osaliselt" tone="warning" />
        </Block>

        <Block icon={MessageSquare} title="Õpetaja kommentaarid">
          <Row k="Klassijuhataja" v="Aktiivne, käib regulaarselt trennis." />
          <Row k="Kehalise õp." v="Treeningharjumus väga hea, vajab koolis liikumisoskuste mitmekesistamist." />
          <Row k="Eesti keele õp." v="Suhtleb klassis vabalt eesti keeles." />
        </Block>

        <Block icon={FileText} title="Puudumised ja arvestused">
          <Row k="Puudumisi (sept–veebr)" v="6 tundi" />
          <Row k="Põhjuseta" v="0" tone="success" />
          <Row k="Arvestused" v="Kõik täidetud" tone="success" />
          <Row k="Hinded" v="KK 4 · EK 4" />
        </Block>

        <Block icon={ClipboardList} title="Individuaalsed kokkulepped">
          <Row k="Kokkulepe" v="Treeningpäevadel pikem aeg kodutööde esitamiseks." />
          <Row k="Tugi" v="Eesti keele tugi reaalsete ainete sees." />
        </Block>

        <Block icon={BookOpen} title="Kooli õppekava viited">
          <Row k="Kehaline kasvatus" v="RÕK §11.4" />
          <Row k="Eesti keel" v="RÕK §6.2 — funktsionaalne keelekasutus" />
          <Row k="Üldpädevused" v="Suhtlus, enesemääratlus, õpipädevus" />
        </Block>
      </div>

      <div className="mt-8 rounded-xl border-l-4 border-warning bg-warning-subtle p-5 flex gap-3.5">
        <div className="shrink-0 size-9 rounded-lg bg-warning/15 flex items-center justify-center">
          <AlertCircle className="size-4 text-warning" />
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-warning mb-1.5">Tehniline märkus</div>
          <p className="text-sm leading-relaxed text-foreground/90">
            Häki prototüübis sisestatakse andmed käsitsi või mock-andmetena. Hilisem integratsioon
            saab toimida <strong>eKooli/Stuudiumi API või andmeekspordi</strong> kaudu. EduInvest ei
            asenda eKooli ega Stuudiumit, vaid loob nende kõrvale <strong>arvestusotsuse töövoo</strong>.
          </p>
        </div>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>← Tagasi</Button>
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Edasi: AI eelanalüüs
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </DemoShell>
  );
};

const Block = ({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-card p-5">
    <div className="flex items-center gap-2.5 mb-4">
      <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="size-4" />
      </div>
      <div className="text-sm font-semibold tracking-tight">{title}</div>
    </div>
    <div className="space-y-2.5">{children}</div>
  </div>
);

const Row = ({ k, v, tone }: { k: string; v: string; tone?: "success" | "warning" }) => (
  <div className="flex items-start justify-between gap-3 text-xs border-b border-border/50 pb-2 last:border-0 last:pb-0">
    <span className="text-muted-foreground">{k}</span>
    <span className={`font-semibold text-right ${tone === "success" ? "text-success" : tone === "warning" ? "text-warning" : "text-foreground"}`}>{v}</span>
  </div>
);

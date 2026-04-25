import {
  Building2,
  GraduationCap,
  Landmark,
  RotateCcw,
  School,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";

interface Step4ImpactProps {
  onRestart: () => void;
  onBack: () => void;
}

interface ImpactGroup {
  icon: typeof GraduationCap;
  title: string;
  subtitle: string;
  metrics: { label: string; value: string; trend: "down" | "up" }[];
}

const GROUPS: ImpactGroup[] = [
  {
    icon: GraduationCap,
    title: "Õppija",
    subtitle: "Markus, 8. klass",
    metrics: [
      { label: "Dubleerimist kuus", value: "−12 h", trend: "down" },
      { label: "Õppekoormus", value: "−18%", trend: "down" },
      { label: "Motivatsioon", value: "+1 tase", trend: "up" },
    ],
  },
  {
    icon: School,
    title: "Õpetaja",
    subtitle: "Kehalise kasvatuse õpetaja",
    metrics: [
      { label: "Hindamiste arv", value: "−4/kvartal", trend: "down" },
      { label: "Käsitööd", value: "−25%", trend: "down" },
    ],
  },
  {
    icon: Building2,
    title: "Kool",
    subtitle: "Pelgulinna Gümnaasium",
    metrics: [
      { label: "Dubleeritud tunde", value: "−320 h/a", trend: "down" },
      { label: "Ajakasutus", value: "+12%", trend: "up" },
    ],
  },
  {
    icon: Landmark,
    title: "KOV",
    subtitle: "Tallinna Haridusamet",
    metrics: [
      { label: "Topeltrahastus", value: "−8 200 €", trend: "down" },
      { label: "Ressursside jaotus", value: "+15%", trend: "up" },
    ],
  },
];

export const Step4Impact = ({ onRestart, onBack }: Step4ImpactProps) => {
  return (
    <DemoShell
      stepLabel="04 — Süsteemne mõju"
      title="Üks otsus — neli võitjat"
      subtitle="See ei ole ainult üks otsus. See on süsteemi mõju, kus aeg ja raha kokku hoitakse."
    >
      {/* Hero metric */}
      <div className="relative bg-gradient-to-br from-success via-success to-success/90 rounded-2xl p-8 md:p-10 text-success-foreground shadow-hero mb-8 overflow-hidden">
        <div className="absolute -right-10 -top-10 size-56 rounded-full bg-white/5" />
        <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-white/5" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/40" />
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-white/60 rounded-full" />
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-success-foreground/80">
              Suurim võit
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-balance leading-[1.05]">
            Suurim väärtus on see,
            <br />
            mida <span className="italic underline decoration-2 underline-offset-[6px]">
              enam ei pea
            </span>{" "}
            tegema.
          </h3>
          <p className="mt-5 text-success-foreground/85 text-pretty text-base md:text-lg leading-relaxed">
            Me ei lisa midagi süsteemi — me eemaldame dubleerimise.
          </p>
        </div>
      </div>

      {/* Impact grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {GROUPS.map(({ icon: Icon, title, subtitle, metrics }, i) => (
          <div
            key={title}
            className="bg-card border border-border rounded-2xl p-5 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth animate-in fade-in slide-in-from-bottom-3"
            style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
          >
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
              <div className="size-11 rounded-xl bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm tracking-tight">{title}</div>
                <div className="text-xs text-muted-foreground truncate mt-0.5">{subtitle}</div>
              </div>
            </div>
            <div className="space-y-3">
              {metrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between gap-3">
                  <span className="text-xs text-muted-foreground">{m.label}</span>
                  <span
                    className={`text-base font-semibold tabular flex items-center gap-1.5 tracking-tight ${
                      m.trend === "down" ? "text-success" : "text-primary"
                    }`}
                  >
                    {m.trend === "down" ? (
                      <TrendingDown className="size-3.5" strokeWidth={2.5} />
                    ) : (
                      <TrendingUp className="size-3.5" strokeWidth={2.5} />
                    )}
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Closing line */}
      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
          Täna teeb õppija sama asja mitu korda. Meie lahendus teeb selle{" "}
          <strong className="text-foreground not-italic">üheks korraks.</strong>
        </p>
      </div>

      <div className="mt-10 pt-7 border-t border-border flex items-center justify-between gap-4">
        <Button variant="ghost" onClick={onBack}>
          ← Tagasi
        </Button>
        <Button size="lg" onClick={onRestart} variant="outline">
          <RotateCcw className="size-4" />
          Alusta demo uuesti
        </Button>
      </div>
    </DemoShell>
  );
};

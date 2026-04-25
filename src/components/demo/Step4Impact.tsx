import { Building2, GraduationCap, Landmark, RotateCcw, School, TrendingDown, TrendingUp } from "lucide-react";
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
      title="Üks otsus, neli võitjat"
      subtitle="See ei ole ainult üks otsus. See on süsteemi mõju — kus aeg ja raha kokku hoitakse."
    >
      {/* Hero metric */}
      <div className="bg-success rounded-2xl p-8 text-success-foreground shadow-elevated mb-8 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 size-48 rounded-full bg-white/5" />
        <div className="absolute -right-16 -bottom-16 size-56 rounded-full bg-white/5" />
        <div className="relative">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-success-foreground/70 mb-2">
            Killer feature
          </div>
          <h3 className="text-3xl font-semibold tracking-tight text-balance max-w-2xl">
            Me ei lisa midagi süsteemi.
            <br />
            Me <span className="underline decoration-2 underline-offset-4">eemaldame</span> midagi.
          </h3>
          <p className="mt-3 text-success-foreground/80 max-w-xl text-pretty">
            Täna teeb õppija sama asja mitu korda. Meie lahendus teeb selle üheks korraks.
          </p>
        </div>
      </div>

      {/* Impact grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {GROUPS.map(({ icon: Icon, title, subtitle, metrics }, i) => (
          <div
            key={title}
            className="bg-card border border-border rounded-xl p-5 shadow-card animate-in fade-in slide-in-from-bottom-3"
            style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
          >
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
              <div className="size-10 rounded-lg bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm">{title}</div>
                <div className="text-xs text-muted-foreground truncate">{subtitle}</div>
              </div>
            </div>
            <div className="space-y-3">
              {metrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between gap-3">
                  <span className="text-xs text-muted-foreground">{m.label}</span>
                  <span
                    className={`text-base font-semibold tabular flex items-center gap-1 ${
                      m.trend === "down" ? "text-success" : "text-primary"
                    }`}
                  >
                    {m.trend === "down" ? (
                      <TrendingDown className="size-3.5" />
                    ) : (
                      <TrendingUp className="size-3.5" />
                    )}
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between gap-4">
        <Button variant="ghost" onClick={onBack}>
          ← Tagasi
        </Button>
        <Button size="lg" onClick={onRestart} variant="outline">
          <RotateCcw className="size-4" />
          Alusta uuesti
        </Button>
      </div>
    </DemoShell>
  );
};

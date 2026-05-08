import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, TrendingUp } from "lucide-react";
import { SectionLabel, InfoCard } from "@/components/demo/primitives";
import { DEMO_CASE } from "@/components/demo/demoCase";

const Principal = () => {
  const s = DEMO_CASE.principalSummary;
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Tagasi
          </Link>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            näidisandmed
          </div>
        </div>

        <header className="mb-8">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-2">
            Koolijuht · {DEMO_CASE.student.school} · 2025/26
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Koondvaade — kus huvikoolis omandatu kattub õppekavaga
          </h1>
        </header>

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <Kpi label="Sarnaseid taotlusi" value={s.similarRequests} />
          <Kpi label="Korduvad ained" value={s.subjects.length} />
          <Kpi label="Vajab lisatõendit" value={s.needsMoreEvidence} />
          <Kpi label="Ajasääst (h/kuus)" value={`~${s.estimatedTimeSavedHoursPerMonth}`} />
        </div>

        {/* Coverage */}
        <section className="mb-8">
          <SectionLabel icon={TrendingUp}>Õpitulemuste kate huvikoolist (aineti)</SectionLabel>
          <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
            {s.coverage.map((c) => {
              const pct = Math.round((c.students / c.of) * 100);
              return (
                <div key={c.subject}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-semibold">{c.subject}</span>
                    <span className="text-muted-foreground tabular">
                      {c.students} / {c.of} õpilast
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Schedule hints */}
        <section className="mb-8">
          <SectionLabel icon={Calendar}>Tunniplaani soovitused</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {s.scheduleHints.map((h) => (
              <div key={`${h.subject}-${h.grade}`} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-semibold mb-1">
                  {h.subject} · {h.grade}
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  {h.students.length} õpilast saavad arvestuse trennist / huvikoolist
                </div>
                <div className="text-sm text-foreground/85 mb-3">
                  → {h.suggestion}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {h.students.map((n) => (
                    <span key={n} className="text-[11px] px-2 py-1 rounded-md bg-primary-subtle text-primary font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard tone="primary">
          Koondvaade ei sisalda isikuandmeid avalikult. Õpilased on nimetatud demo otstarbel —
          päris süsteemis kuvatakse anonüümset agregaati ja õpetaja vaates konkreetsed nimed.
        </InfoCard>
      </div>
    </div>
  );
};

const Kpi = ({ label, value }: { label: string; value: number | string }) => (
  <div className="rounded-2xl border border-border bg-card p-4">
    <div className="text-2xl font-bold tabular text-primary">{value}</div>
    <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{label}</div>
  </div>
);

export default Principal;

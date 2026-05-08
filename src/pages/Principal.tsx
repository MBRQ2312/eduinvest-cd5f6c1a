import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  TrendingUp,
  ClipboardList,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Repeat,
  Building2,
  Users,
  Clock,
  CalendarRange,
  Map,
  FileDown,
  Eye,
  BookOpenCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel, InfoCard } from "@/components/demo/primitives";
import { DEMO_CASE } from "@/components/demo/demoCase";
import { Button } from "@/components/ui/button";
import { MockDataNotice } from "@/components/MockDataNotice";
import { PrincipalExtensions } from "@/components/principal/PrincipalExtensions";

const Principal = () => {
  const s = DEMO_CASE.principalSummary;
  const m = s.metrics;

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Tagasi
          </Link>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            näidisandmed
          </div>
        </div>

        <header className="mb-6">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-2">
            Koolijuht · {DEMO_CASE.student.school} · 2025/26
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Koolijuhi koondvaade
          </h1>
          <p className="mt-3 text-sm md:text-base text-foreground/75 max-w-3xl leading-relaxed">
            Näen, kus koolivälise õppimise arvestamise juhtumid korduvad ja kus kool saab
            tunniplaani ning õpetaja tööaega targemalt juhtida. Kool ei vaja veel üht vormi —
            kool vajab juhtimisinfot.
          </p>
        </header>

        <MockDataNotice className="mb-6" />

        {/* Kus tekib õhk? — keskne plokk Tõnu Peki tagasiside põhjal */}
        <section className="mb-8">
          <div className="rounded-[24px] border-2 border-success/40 bg-gradient-to-br from-success-subtle/40 to-primary-subtle/30 p-6 md:p-7">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="size-5 text-success" />
              <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-success">
                Kus tekib õhk?
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
              Koolijuht ei osta taotlust. Koolijuht ostab nähtavust, kus tekib õhk.
            </h2>
            <p className="text-sm text-foreground/75 mb-5 max-w-3xl">
              Konkreetsed mustrid, mille põhjal saab tunniplaani, õpetaja tööaega ja
              valikaineid järgmiseks perioodiks targemini juhtida.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <AirStat value="12" label="sarnast taotlust" />
              <AirStat value="3" label="korduvat ainet" />
              <AirStat value="7" label="õppijat 8.A-st spordikoolis" />
              <AirStat value="5" label="muusika osaline kate" />
              <AirStat value={`${m.repeatingHobbySchools}`} label="korduvat huvikooli" />
              <AirStat value={`${m.needsMoreEvidence}`} label="vajab lisatõendit" />
              <AirStat value={`~${m.teacherPrepHoursSavedPerMonth} h`} label="potentsiaalne eeltöö võit / kuus" />
              <AirStat value={`${m.scheduleReshuffleSlots}`} label="tunniplaani ümberkorralduse kohta" />
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              <Button className="h-auto py-3 justify-start gap-2 rounded-xl">
                <CalendarRange className="size-4" />
                <span className="text-left text-sm">Planeeri järgmine periood</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 justify-start gap-2 rounded-xl">
                <BookOpenCheck className="size-4" />
                <span className="text-left text-sm">Loo kooli arvestamise hea tava</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 justify-start gap-2 rounded-xl">
                <FileDown className="size-4" />
                <span className="text-left text-sm">Ekspordi koondraport KOV-ile</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 justify-start gap-2 rounded-xl">
                <Eye className="size-4" />
                <span className="text-left text-sm">Vaata korduvaid juhtumeid</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Mida saan koolijuhina teha? */}
        <section className="mb-8">
          <SectionLabel icon={ShieldCheck}>Mida saan koolijuhina teha?</SectionLabel>
          <div className="rounded-2xl border-2 border-primary/30 bg-primary-subtle/30 p-5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-foreground/85">
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> näha korduvaid mustreid;</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> planeerida järgmise perioodi tunniplaani;</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> suunata õpetaja tööaega põhiainetele;</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> luua kooli arvestamise hea tava;</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> eksportida koondraport koolipidajale;</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> põhjendada perele otsuseid tõendite alusel.</li>
            </ul>
          </div>
        </section>

        {/* Voo mõõdikud */}
        <section className="mb-8">
          <SectionLabel icon={ClipboardList}>Taotluste voog</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Metric icon={ClipboardList} label="Taotlusi kokku" value={m.totalRequests} />
            <Metric icon={CheckCircle2} label="Vajab õpetaja otsust" value={m.needsTeacherDecision} tone="primary" />
            <Metric icon={ShieldCheck} label="Vajab õppejuhi kinnitust" value={m.needsPrincipalApproval} tone="primary" />
            <Metric icon={AlertTriangle} label="Vajab lisatõendit" value={m.needsMoreEvidence} tone="warning" />
          </div>
        </section>

        {/* Korduvused & seos huviharidusega */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <SectionLabel icon={Repeat}>Korduvad mustrid</SectionLabel>
            <div className="grid grid-cols-2 gap-3">
              <MiniStat icon={BookOpenCheck} label="Korduvad ained" value={m.repeatingSubjects} />
              <MiniStat icon={Building2} label="Korduvad huvikoolid" value={m.repeatingHobbySchools} />
            </div>
            <ul className="mt-4 space-y-2">
              {DEMO_CASE.principalSummary.topHobbySchools.map((h) => (
                <li key={h.name} className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium">{h.name}</div>
                    <div className="text-xs text-muted-foreground">{h.subjects.join(" · ")}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary-subtle text-primary font-semibold tabular">
                    {h.students} õpilast
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <SectionLabel icon={Users}>Huviharidusega seotud õppijad klassis / lennus</SectionLabel>
            <div className="space-y-3">
              {m.hobbyLinkedPerClass.map((c) => {
                const pct = Math.round((c.linked / c.of) * 100);
                return (
                  <div key={c.group}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="font-semibold">{c.group}</span>
                      <span className="text-muted-foreground tabular">
                        {c.linked} / {c.of} ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Potentsiaal */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <PotentialCard
            icon={Clock}
            title="Õpetaja eeltöö aja võit"
            value={`~${m.teacherPrepHoursSavedPerMonth} h / kuus`}
            note="Ühe arvestusotsuse ettevalmistus 25–40 min → 5–10 min."
          />
          <PotentialCard
            icon={CalendarRange}
            title="Tunniplaani ümberkorraldus"
            value={`${m.scheduleReshuffleSlots} võimalikku slotti`}
            note="Korduvate ainete grupeerimine vabastab tunde valikainetele."
          />
        </section>

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
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* KOV */}
        <section className="mb-8">
          <SectionLabel icon={Map}>KOV-i vaade — korduvad juhtumid linnas / vallas</SectionLabel>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left px-4 py-2.5 font-semibold">Muster</th>
                  <th className="text-right px-4 py-2.5 font-semibold">Koole</th>
                  <th className="text-right px-4 py-2.5 font-semibold">Õpilasi</th>
                </tr>
              </thead>
              <tbody>
                {s.kovRepeatingCases.map((k) => (
                  <tr key={k.pattern} className="border-t border-border">
                    <td className="px-4 py-3">{k.pattern}</td>
                    <td className="px-4 py-3 text-right tabular">{k.schools}</td>
                    <td className="px-4 py-3 text-right tabular font-semibold">{k.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                <div className="text-sm text-foreground/85 mb-3">→ {h.suggestion}</div>
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

        {/* CTAs */}
        <section className="mb-8">
          <SectionLabel icon={ShieldCheck}>Tegevused</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Button variant="default" className="h-auto py-3 justify-start gap-2">
              <BookOpenCheck className="size-4" />
              <span className="text-left text-sm">Loo kooli hea tava</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 justify-start gap-2">
              <FileDown className="size-4" />
              <span className="text-left text-sm">Ekspordi koondraport</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 justify-start gap-2">
              <Eye className="size-4" />
              <span className="text-left text-sm">Vaata korduvaid juhtumeid</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 justify-start gap-2">
              <CalendarRange className="size-4" />
              <span className="text-left text-sm">Planeeri järgmise perioodi tunniplaan</span>
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <SectionLabel icon={ShieldCheck}>Standardid, ausus ja edasi</SectionLabel>
          <PrincipalExtensions />
        </section>

        <InfoCard tone="primary">
          Koondvaade ei sisalda isikuandmeid avalikult. Õpilased on nimetatud demo otstarbel —
          päris süsteemis kuvatakse anonüümset agregaati ja õpetaja vaates konkreetsed nimed.
        </InfoCard>
      </div>
    </div>
  );
};

const Metric = ({
  icon: Icon,
  label,
  value,
  tone = "default",
}: {
  icon: LucideIcon;
  label: string;
  value: number | string;
  tone?: "default" | "primary" | "warning";
}) => {
  const toneCls =
    tone === "warning"
      ? "text-warning"
      : tone === "primary"
        ? "text-primary"
        : "text-foreground";
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <Icon className={`size-4 mb-2 ${toneCls}`} />
      <div className={`text-2xl font-bold tabular ${toneCls}`}>{value}</div>
      <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{label}</div>
    </div>
  );
};

const AirStat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-xl bg-card border border-border/60 p-3">
    <div className="text-xl md:text-2xl font-bold tabular text-success leading-none">{value}</div>
    <div className="text-[11px] text-muted-foreground mt-1.5 leading-tight">{label}</div>
  </div>
);

const MiniStat = ({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: number | string }) => (
  <div className="rounded-xl bg-muted/40 p-3">
    <Icon className="size-4 text-primary mb-1.5" />
    <div className="text-xl font-bold tabular text-primary">{value}</div>
    <div className="text-[11px] text-muted-foreground leading-tight">{label}</div>
  </div>
);

const PotentialCard = ({
  icon: Icon,
  title,
  value,
  note,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  note: string;
}) => (
  <div className="rounded-2xl border border-primary/30 bg-primary-subtle/40 p-5">
    <div className="flex items-center gap-2 mb-2">
      <Icon className="size-4 text-primary" />
      <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary">{title}</div>
    </div>
    <div className="text-2xl font-bold text-primary mb-1">{value}</div>
    <div className="text-sm text-foreground/75">{note}</div>
  </div>
);

export default Principal;

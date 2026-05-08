import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  BookOpen,
  GraduationCap,
  Clock,
  Languages,
  ClipboardCheck,
  Trophy,
  Link2,
  CheckCircle2,
  Send,
  FilePlus,
  ListPlus,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel, InfoCard } from "@/components/demo/primitives";
import { MockDataNotice } from "@/components/MockDataNotice";

const PROFILE = {
  hobbySchool: "FC Levadia U16",
  curriculum: "Noortejalgpalli aastaprogramm 2025/26",
  outcomes: [
    "regulaarne juhendatud liikumine ja vastupidavus",
    "tiimitöö ja eneseanalüüs",
    "eestikeelne sporditerminoloogia ja juhiste mõistmine",
  ],
  instructor: {
    name: "Mart Kask",
    role: "Peatreener",
    qualification: "UEFA B litsents · 8 a kogemus",
  },
  volume: "3× nädalas, à 90 min · sept 2025 – mai 2026",
  language: "Eesti keel",
  attendance: "Päevikupõhine kohaloleku tõend (≥80%)",
  events: [
    "Tallinna noorte liiga 2025 (6 mängu)",
    "Eesti MV U16 (kvalifikatsioon)",
  ],
  curricularLinks: [
    { subject: "Kehaline kasvatus", strength: "tugev" },
    { subject: "Eesti keele praktiline kasutus", strength: "toetav" },
  ],
} as const;

const HobbySchool = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Tagasi
          </Link>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">näidisandmed</div>
        </div>

        <header className="mb-8">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-2">
            Huvikool · {PROFILE.hobbySchool}
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Huvikooli arvestatavuse profiil
          </h1>
          <p className="mt-3 text-sm md:text-base text-foreground/70 max-w-2xl">
            Huvikool ei otsusta kooli eest. Huvikool teeb oma õppe koolile nähtavaks ja tõendatavaks.
          </p>
        </header>

        <MockDataNotice className="mb-6" />

        {/* Quality mark hero */}
        <section className="mb-8">
          <div className="rounded-2xl border-2 border-primary/40 bg-primary-subtle/40 p-5 md:p-6 flex items-start gap-4">
            <div className="size-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
              <Award className="size-6" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary">Kvaliteedimärk</div>
              <div className="text-xl font-semibold mt-1">LearnOnce arvestatav õpe</div>
              <p className="text-sm text-foreground/75 mt-2">
                Kvaliteedimärk näitab, et huvikooli õpe on kirjeldatud õpiväljundite keeles ja
                kool saab seda arvestusotsuses kasutada. See ei tähenda automaatset vabastust tunnist.
              </p>
            </div>
          </div>
        </section>

        {/* Profile fields */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field icon={BookOpen} label="Õppekava" value={PROFILE.curriculum} />
          <Field icon={Languages} label="Õppekeel" value={PROFILE.language} />
          <Field icon={Clock} label="Tegevuse maht" value={PROFILE.volume} />
          <Field icon={ClipboardCheck} label="Kohaloleku või päeviku tõend" value={PROFILE.attendance} />
          <Field
            icon={GraduationCap}
            label="Juhendaja kvalifikatsioon"
            value={`${PROFILE.instructor.name} · ${PROFILE.instructor.role} · ${PROFILE.instructor.qualification}`}
          />
          <Field
            icon={Trophy}
            label="Võistlused / esinemised"
            value={PROFILE.events.join(" · ")}
          />
        </section>

        {/* Outcomes */}
        <section className="mb-8">
          <SectionLabel icon={ListPlus}>Õpiväljundid</SectionLabel>
          <div className="rounded-2xl border border-border bg-card p-5">
            <ul className="space-y-2">
              {PROFILE.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Curricular links */}
        <section className="mb-8">
          <SectionLabel icon={Link2}>Seos üldhariduse õpitulemustega</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {PROFILE.curricularLinks.map((l) => (
              <div key={l.subject} className="rounded-2xl border border-border bg-card p-4 flex items-center justify-between">
                <span className="text-sm font-semibold">{l.subject}</span>
                <span
                  className={`text-[11px] px-2 py-1 rounded-md font-medium ${
                    l.strength === "tugev"
                      ? "bg-success-subtle text-success"
                      : "bg-primary-subtle text-primary"
                  }`}
                >
                  seos: {l.strength}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="mb-8">
          <SectionLabel icon={ShieldCheck}>Tegevused</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Button className="h-auto py-3 justify-start gap-2">
              <Award className="size-4" />
              <span className="text-left text-sm">Taotle kvaliteedimärki</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 justify-start gap-2">
              <FilePlus className="size-4" />
              <span className="text-left text-sm">Lisa õppekava</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 justify-start gap-2">
              <ListPlus className="size-4" />
              <span className="text-left text-sm">Lisa õpiväljundid</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 justify-start gap-2">
              <Send className="size-4" />
              <span className="text-left text-sm">Saada tõend koolile</span>
            </Button>
          </div>
        </section>

        <InfoCard tone="warning">
          <strong>Oluline piirang:</strong> Huvikool ei otsusta kooli eest. Huvikool kinnitab tegevuse, mahu, sisu, keele ja
          õpiväljundite kirjelduse. Lõppotsuse teeb kool.
        </InfoCard>
      </div>
    </div>
  );
};

const Field = ({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) => (
  <div className="rounded-2xl border border-border bg-card p-4">
    <div className="flex items-center gap-2 mb-1.5">
      <Icon className="size-4 text-primary" />
      <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-muted-foreground">{label}</div>
    </div>
    <div className="text-sm leading-relaxed text-foreground/85">{value}</div>
  </div>
);

export default HobbySchool;

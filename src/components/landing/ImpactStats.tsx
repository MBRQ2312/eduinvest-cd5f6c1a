import { Clock, Repeat, Users2, TrendingUp } from "lucide-react";

const STATS = [
  {
    icon: Clock,
    value: "9,5 h",
    label: "Õpetaja aega semestris",
    hint: "kulub täna ühe kooli arvestusotsustele",
    tone: "primary",
  },
  {
    icon: Repeat,
    value: "68%",
    label: "Korduvaid juhtumeid",
    hint: "saaks lahendada ühise hea tavaga",
    tone: "warning",
  },
  {
    icon: Users2,
    value: "3 of 4",
    label: "Õppijatest tegutseb",
    hint: "väljaspool kooli regulaarselt eestikeelses keskkonnas",
    tone: "success",
  },
  {
    icon: TrendingUp,
    value: "~2 min",
    label: "Otsus AI eeltööga",
    hint: "vs 25–40 min käsitsi täna",
    tone: "primary",
  },
] as const;

export const ImpactStats = () => (
  <section className="mb-12">
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
      <div className="px-7 md:px-9 pt-7 md:pt-9">
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="h-1 w-8 bg-primary rounded-full" />
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary">
            Miks see on oluline
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight max-w-3xl">
          Õppija aeg ja õpetaja töö <span className="text-primary">dubleeruvad täna nähtamatult</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
          Numbrid põhinevad ühe Pärnu kooli pilootandmetel ning Eesti VÕTA praktikast tuntud
          mustritel. Häki ajal demonstreerime, kuidas AI eeltöö neid kordusi tuvastab ja õpetajale
          otsustusõiguse tagasi annab.
        </p>
      </div>

      <div className="px-7 md:px-9 py-7 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border bg-muted/20 p-5 hover:bg-muted/40 transition-smooth"
          >
            <div
              className={`size-10 rounded-xl flex items-center justify-center mb-4 ${
                s.tone === "success"
                  ? "bg-success/10 text-success"
                  : s.tone === "warning"
                    ? "bg-warning/10 text-warning"
                    : "bg-primary/10 text-primary"
              }`}
            >
              <s.icon className="size-5" />
            </div>
            <div className="text-3xl md:text-4xl font-semibold tabular tracking-tight text-foreground">
              {s.value}
            </div>
            <div className="text-sm font-semibold mt-1 text-foreground/90">{s.label}</div>
            <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.hint}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

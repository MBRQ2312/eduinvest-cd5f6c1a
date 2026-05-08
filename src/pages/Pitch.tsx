import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, GraduationCap, Home, MessageCircle, School, Sparkles, Trophy, Users2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
}

const SLIDES: Slide[] = [
  {
    eyebrow: "EduInvest LearnOnce · 60 sek pitch",
    title: (
      <>
        Õppija õpib ka <span className="text-primary-glow">väljaspool kooli</span>.
        <br /> Kool ei näe seda tervikuna.
      </>
    ),
    body: (
      <p>
        Trennis, muusikakoolis, huviringis, projektides ja kogukonnas. Sama õpitulemust
        tõestatakse mitu korda või tehakse uuesti. <strong>Õpetaja aeg dubleerub.</strong>
      </p>
    ),
  },
  {
    eyebrow: "Demojuhtum",
    title: (
      <>
        Nikita T., 8. klass.<br />
        Jalgpallitrenn <span className="text-primary-glow">3× nädalas, eesti keeles</span>.
      </>
    ),
    body: (
      <p>
        Kas osa sellest õppimisest saab arvestada kehalise kasvatuse õpitulemuste täitmisel
        ja eesti keele praktilise kasutuse toetava tõendina?
      </p>
    ),
  },
  {
    eyebrow: "Lahendus",
    title: <>AI teeb eeltöö. <span className="text-primary-glow">Õpetaja otsustab.</span></>,
    body: (
      <ul className="space-y-3 text-2xl">
        {[
          ["AI", "koondab tõendid ja seob õpitulemustega"],
          ["Õpetaja", "kinnitab, muudab või küsib lisatõendit"],
          ["Pere", "saab ühe selge selgituse"],
          ["Koolijuht", "näeb kordusmustreid"],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-4">
            <span className="px-3 py-1 rounded-lg bg-primary-glow/20 text-primary-glow text-base font-bold tracking-[0.18em] uppercase shrink-0">
              {k}
            </span>
            <span className="text-primary-foreground/90">{v}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    eyebrow: "AI piirid",
    title: <>AI <span className="text-primary-glow">ei otsusta, ei vabasta, ei anna hinnet.</span></>,
    body: (
      <p>
        Kogu vastutus jääb õpetajale ja kooli määratud vastutajale. AI teeb eeltöö nähtavaks ja
        võrreldavaks — nii et õpetaja saab teha kiirema ja õiglasema otsuse.
      </p>
    ),
  },
  {
    eyebrow: "Mõju",
    title: (
      <>
        Õpetaja säästab <span className="text-primary-glow">~9 h semestris</span>.<br />
        Õppija aega kasutatakse õigemini.
      </>
    ),
    body: (
      <p>
        68% juhtumitest saab lahendada ühise hea tavaga. Eesti keelele üleminek toetatakse
        nähtava õpikeskkonna kaudu, mitte täiendavate tundidega.
      </p>
    ),
  },
  {
    eyebrow: "Tehniline teostatavus",
    title: (
      <>
        Häki ajal mock.<br />
        Pilot <span className="text-primary-glow">eKooli / Stuudiumiga</span> 4 nädalat.
      </>
    ),
    body: (
      <p>
        OpenAI Responses API täna juba töös. eKooli/Stuudiumi liides loeb õpitulemused ja
        kirjutab otsuse standardse REST API kaudu tagasi.
      </p>
    ),
  },
  {
    eyebrow: "Sõnum žüriile",
    title: (
      <>
        Me ei lisa õppimist juurde.<br />
        Me teeme <span className="text-primary-glow italic">juba toimunu nähtavaks ja arvestatavaks.</span>
      </>
    ),
  },
];

const Pitch = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") setI((p) => Math.min(p + 1, SLIDES.length - 1));
      else if (e.key === "ArrowLeft" || e.key === "PageUp") setI((p) => Math.max(p - 1, 0));
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(SLIDES.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = SLIDES[i];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary-glow text-primary-foreground relative overflow-hidden flex flex-col">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10 bg-grid pointer-events-none" />
      <div className="absolute -right-32 -top-32 size-[500px] rounded-full bg-white/5" />
      <div className="absolute -left-40 -bottom-40 size-[600px] rounded-full bg-white/5" />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center font-bold text-sm">EI</div>
          <div className="text-sm font-semibold tracking-tight">EduInvest LearnOnce · pitch</div>
        </div>
        <Link to="/" className="size-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth">
          <X className="size-4" />
        </Link>
      </header>

      {/* Slide */}
      <main className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-32 relative z-10">
        <div className="max-w-5xl w-full" key={i}>
          <div className="inline-flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="h-1 w-10 bg-primary-glow rounded-full" />
            <div className="text-xs font-bold tracking-[0.28em] uppercase text-primary-foreground/80">
              {slide.eyebrow}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance animate-in fade-in slide-in-from-bottom-3 duration-500">
            {slide.title}
          </h1>
          {slide.body && (
            <div className="mt-8 text-lg md:text-2xl text-primary-foreground/85 leading-relaxed max-w-3xl text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700">
              {slide.body}
            </div>
          )}
        </div>
      </main>

      {/* Footer / nav */}
      <footer className="relative z-10 px-8 py-6 flex items-center justify-between gap-4">
        <Button
          variant="ghost"
          onClick={() => setI((p) => Math.max(p - 1, 0))}
          disabled={i === 0}
          className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
        >
          <ArrowLeft className="size-4" /> Eelmine
        </Button>

        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-primary-foreground" : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/70"
              }`}
              aria-label={`Slaid ${idx + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          onClick={() => setI((p) => Math.min(p + 1, SLIDES.length - 1))}
          disabled={i === SLIDES.length - 1}
          className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
        >
          Järgmine <ArrowRight className="size-4" />
        </Button>
      </footer>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.22em] uppercase text-primary-foreground/40">
        ← → klahvid · Esc / X = välju
      </div>
    </div>
  );
};

export default Pitch;

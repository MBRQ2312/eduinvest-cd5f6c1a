import { BookMarked, Scale, ShieldCheck, Trophy, Music2, Palette, Languages, Users2 } from "lucide-react";

export const CurriculumPrinciples = () => {
  return (
    <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary-subtle/40 to-card p-6 mb-8">
      <div className="flex items-start gap-3 mb-5 pb-4 border-b border-primary/20">
        <div className="size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
          <BookMarked className="size-5" />
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-1">
            Lähtekoht · Põhikooli riiklik õppekava (RT I, 23.12.2025, 6)
          </div>
          <div className="text-base md:text-lg font-semibold tracking-tight leading-snug">
            Arvestuse põhimõtted — kuidas AI võrdleb huvikooli kogemust kooli õppekavaga
          </div>
        </div>
      </div>

      {/* Õigusalus */}
      <div className="rounded-xl border-l-4 border-primary bg-primary-subtle/60 p-4 mb-5">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-1.5 flex items-center gap-1.5">
          <ShieldCheck className="size-3.5" /> Õigusalus
        </div>
        <p className="text-sm text-foreground/90 leading-relaxed">
          <strong>§15 (10) ja §17 (3¹)</strong> — kool võib arvestada õpilase kooliväline õppimist
          (huvikool, spordikool, muusikakool, kunstikool, mitteformaalõpe) <strong>koolis õpetatava osana</strong>,
          kui see vastab kooli õppekava õpitulemustele. Hindamisel lähtutakse kooli õppekavas kirjeldatud
          hindamise alustest ja konkreetse õppeaine erisustest.
        </p>
      </div>

      {/* Ainepõhised kattuvused */}
      <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-3">
        Ainepõhised kattuvused (näited)
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        <SubjectCard
          icon={Trophy}
          subject="Kehaline kasvatus"
          source="Spordikool · tantsukool"
          covers="Vastupidavus · liikumisoskused · koostöö · regulaarne treeningharjumus"
        />
        <SubjectCard
          icon={Music2}
          subject="Muusika"
          source="Muusikakool · koor · pillistuudio"
          covers="Pillimäng · solfedžo · esinemiskogemus · muusikaline kuulamine"
        />
        <SubjectCard
          icon={Palette}
          subject="Kunst · käsitöö-tehnoloogia"
          source="Kunstikool · disainistuudio · käsitöökool"
          covers="Visuaalne väljendus · tehnikad · portfoolio · materjalitundmine"
        />
        <SubjectCard
          icon={Languages}
          subject="Eesti keel (toetav tõend)"
          source="Eestikeelne huvitegevus · vahetusõpilane"
          covers="Funktsionaalne keelekasutus · suhtlus · juhiste mõistmine · refleksioon"
        />
      </div>

      {/* Üldpädevused */}
      <div className="rounded-xl border border-border bg-muted/30 p-4 mb-5 flex items-start gap-3">
        <div className="size-9 rounded-lg bg-card border border-border text-primary flex items-center justify-center shrink-0">
          <Users2 className="size-4" />
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-1">
            §4 (3) Üldpädevused
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed">
            Kõik regulaarne kooliväline tegevus panustab <strong>üldpädevustesse</strong>
            {" "}(suhtlus-, koostöö-, õpi-, ettevõtlikkuspädevus jt) — need kujunevad
            riikliku õppekava järgi <strong>nii tunnis kui ka tunnivälises tegevuses</strong>.
          </p>
        </div>
      </div>

      {/* Arvestuse skaala */}
      <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-3 flex items-center gap-1.5">
        <Scale className="size-3.5" /> Arvestuse ulatus
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <ScaleCard
          tone="success"
          label="Täielik"
          desc="Õpitulemused tugevalt kaetud + tõendid olemas. Vabastus AINULT nendest tundidest, kus käsitletakse juba kaetud osa."
        />
        <ScaleCard
          tone="warning"
          label="Osaline"
          desc="Osa õpitulemustest kaetud, osa katab kool. Õpilane osaleb tundides valikuliselt + täiendab iseseisva tööga."
        />
        <ScaleCard
          tone="muted"
          label="Ei arvestata"
          desc="Tõendid puuduvad või seos õpitulemusega on nõrk."
        />
      </div>
    </div>
  );
};

const SubjectCard = ({
  icon: Icon,
  subject,
  source,
  covers,
}: {
  icon: React.ComponentType<{ className?: string }>;
  subject: string;
  source: string;
  covers: string;
}) => (
  <div className="rounded-xl border border-border bg-card p-4">
    <div className="flex items-center gap-2.5 mb-2">
      <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon className="size-4" />
      </div>
      <div className="text-sm font-semibold tracking-tight">{subject}</div>
    </div>
    <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground mb-1">
      Allikas
    </div>
    <div className="text-xs text-foreground/85 mb-2">{source}</div>
    <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground mb-1">
      Katab õpitulemustest
    </div>
    <div className="text-xs text-foreground/85 leading-snug">{covers}</div>
  </div>
);

const ScaleCard = ({
  tone,
  label,
  desc,
}: {
  tone: "success" | "warning" | "muted";
  label: string;
  desc: string;
}) => {
  const cls =
    tone === "success"
      ? "border-success/30 bg-success-subtle"
      : tone === "warning"
      ? "border-warning/30 bg-warning-subtle"
      : "border-border bg-muted/40";
  const txt =
    tone === "success" ? "text-success" : tone === "warning" ? "text-warning" : "text-muted-foreground";
  return (
    <div className={`rounded-xl border p-4 ${cls}`}>
      <div className={`text-[10px] font-bold tracking-[0.22em] uppercase mb-1.5 ${txt}`}>{label}</div>
      <p className="text-xs text-foreground/85 leading-relaxed">{desc}</p>
    </div>
  );
};

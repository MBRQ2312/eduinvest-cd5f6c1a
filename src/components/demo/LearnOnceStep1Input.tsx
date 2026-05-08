import { ArrowRight, FileCheck2, UserCheck, Calendar, Clock, Trophy, Languages, ClipboardCheck, MessageSquare, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoShell } from "./DemoShell";
import { ParentNote } from "./ParentNote";
import { HobbySchoolImport } from "./HobbySchoolImport";

interface Props { onNext: () => void; }

const PROOFS = [
  { id: "coach", label: "Treeneri kinnitus", icon: UserCheck },
  { id: "schedule", label: "Tunniplaan", icon: Calendar },
  { id: "hours", label: "Osalemise maht", icon: Clock },
  { id: "comp", label: "Võistlused / esinemised", icon: Trophy },
  { id: "self", label: "Õppija eneseanalüüs", icon: MessageSquare },
  { id: "comment", label: "Juhendaja kommentaar", icon: ClipboardCheck },
];

const ASSESS = [
  "Kehalises kasvatuses",
  "Muusikaõpetuses",
  "Eesti keele praktilise kasutuse tõendina",
  "Üldpädevuste tõendina",
  "Gümnaasiumi VÕTA põhimõtte alusel",
];

export const LearnOnceStep1Input = ({ onNext }: Props) => {
  return (
    <DemoShell
      stepLabel="01 — Õppija sisend"
      title="Lisa kooliväline õpikogemus"
      subtitle="Markus T., 8. klass — jalgpallitrenn 3× nädalas eesti keeles."
    >
      <ParentNote text="Õppija või lapsevanem kirjeldab, mida ja kus on koolivälisel ajal õpitud. Eraldi märgitakse tegevuse keel ja juhendaja keel — see aitab koolil näha, kus õppija eesti keelt päriselt kasutab." />

      <HobbySchoolImport />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
        <Field label="Õppija nimi" value="Markus Tamm" />
        <Field label="Klass" value="8.A" hint="Mai Kool" />
        <Field label="Tegevuse liik" value="Spordikool" hint="huvikool · sport" />
        <Field label="Tegevuse nimi" value="Jalgpall — FC Levadia U16" />
        <Field label="Juhendaja / treener" value="Mart Kask" hint="UEFA B litsents" />
        <Field label="Sagedus" value="3× nädalas" hint="à 90 min" />
        <Field label="Kestus" value="Sept 2025 – veebr 2026" hint="6 kuud" />

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LangCard
            label="Tegevuse keel"
            value="Eesti keel"
            detail="Treening, võistlused ja meeskonna sisene suhtlus toimuvad eesti keeles."
          />
          <LangCard
            label="Juhendaja kasutab eesti keelt"
            value="Jah"
            detail="Treener Mart Kask annab juhised, tagasiside ja taktikalised arutelud eesti keeles."
          />
          <LangCard
            label="Õppija kasutab tegevuses eesti keelt"
            value="Jah, valdavalt"
            detail="Suhtlus tiimikaaslastega, sporditerminoloogia, juhiste mõistmine, lühike refleksioon."
          />
          <LangCard
            label="Eestikeelne tõend lisatud"
            value="Treeneri kinnitus + lühirefleksioon"
            detail="Õppija lisab 5–7 lausega eneseanalüüsi eesti keeles."
          />
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3 flex items-center gap-1.5">
            <FileCheck2 className="size-3.5" /> Lisatud tõendid
          </div>
          <div className="flex flex-wrap gap-2">
            {PROOFS.map(({ id, label, icon: Icon }) => (
              <span key={id} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/20 bg-primary-subtle text-primary text-sm font-medium">
                <Icon className="size-4" /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3 flex items-center gap-1.5">
            <Target className="size-3.5" /> Soovin, et kool hindaks, kas see kogemus on arvestatav:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ASSESS.map((a, i) => (
              <label key={a} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-muted/30 cursor-pointer hover:border-primary/40 transition-smooth">
                <input type="checkbox" defaultChecked={i < 3} className="mt-1 accent-primary size-4" />
                <span className="text-sm text-foreground/90 leading-snug">{a}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-9 rounded-2xl border-l-4 border-primary bg-primary-subtle/60 p-6">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-2 flex items-center gap-1.5">
          <Languages className="size-3.5" /> Eesti keele osa
        </div>
        <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
          Eesti keele märkimine <strong>ei tähenda automaatselt eesti keele aine hinde asendamist</strong>.
          Kool saab seda kasutada <strong>toetava tõendina</strong> õppija eestikeelse õpikeskkonna ja
          funktsionaalse keelekasutuse kohta — juhiste mõistmine, koostöö, eneseväljendus, refleksioon.
        </p>
      </div>

      <div className="mt-8 pt-7 border-t border-border flex justify-end">
        <Button size="lg" onClick={onNext} className="shadow-elevated group">
          Edasi: kooliandmed
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </DemoShell>
  );
};

const Field = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="flex flex-col gap-1.5">
    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">{label}</div>
    <div className="text-base font-semibold tracking-tight leading-snug">{value}</div>
    {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
  </div>
);

const LangCard = ({ label, value, detail }: { label: string; value: string; detail: string }) => (
  <div className="rounded-xl border border-border bg-muted/30 p-4">
    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-1.5">
      <Languages className="size-3.5" /> {label}
    </div>
    <div className="mt-1.5 text-sm font-semibold text-primary">{value}</div>
    <p className="mt-1.5 text-xs text-foreground/75 leading-relaxed">{detail}</p>
  </div>
);

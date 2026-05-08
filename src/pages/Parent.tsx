import { ArrowLeft, CheckCircle2, MessageCircle, Clock, FileText, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Parent = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Phone-frame style mobile-first */}
      <div className="max-w-md mx-auto bg-background min-h-screen shadow-elevated">
        {/* Top bar */}
        <header className="sticky top-0 bg-card border-b border-border z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            <Link
              to="/"
              className="size-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
            >
              <ArrowLeft className="size-4" />
            </Link>
            <div className="text-sm font-semibold">eKool · Nikita T.</div>
            <Badge variant="outline" className="text-[10px]">8.A</Badge>
          </div>
        </header>

        {/* Hero — decision card */}
        <div className="p-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-5 shadow-elevated">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase text-primary-foreground/80 mb-2">
              <Sparkles className="size-3.5" />
              Uus otsus koolilt
            </div>
            <div className="text-lg font-semibold leading-snug">
              Nikita jalgpallitreeninguid arvestati osaliselt kehalise kasvatuse õpitulemuste täitmisel.
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-primary-foreground/80">
              <Clock className="size-3.5" />
              <span>Õpetaja K. Lepik · 22.04.2026 15:58</span>
            </div>
          </div>
        </div>

        {/* Mida kool arvestas */}
        <section className="px-4 pb-4">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5" /> Mida kool arvestas
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
            <Item label="Vastupidavus ja liikumisharjumus" tone="success" note="Treeningmaht 3× nädalas, regulaarne aastaringi" />
            <Item label="Meeskonnatöö ja koostöö" tone="success" note="Tiimi koosseisus, treeneri kinnitus" />
            <Item label="Eesti keele funktsionaalne kasutus" tone="primary" note="Toetav tõend — ei asenda eesti keele hinnet" />
          </div>
        </section>

        {/* Mida veel vaja */}
        <section className="px-4 pb-4">
          <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-warning mb-2 flex items-center gap-1.5">
            <FileText className="size-3.5" /> Mida veel vaja
          </div>
          <div className="rounded-2xl border border-warning/30 bg-warning-subtle p-4 space-y-2 text-sm">
            <p className="text-foreground/90">
              <strong>Nikita:</strong> kirjuta 5–7 lausega eneseanalüüs eesti keeles —
              mida õppisid trennist sel veerandil?
            </p>
            <p className="text-foreground/90">
              <strong>Treener:</strong> kinnitab semestri treeningmahu (link tuleb e-kirjaga).
            </p>
          </div>
        </section>

        {/* Mida see EI tähenda */}
        <section className="px-4 pb-4">
          <div className="rounded-2xl border-l-4 border-primary bg-primary-subtle/50 p-4 text-sm leading-relaxed">
            <div className="font-semibold mb-1.5">Mida see otsus EI tähenda</div>
            <ul className="space-y-1.5 text-foreground/85">
              <li className="flex gap-2"><span>·</span><span>Nikita EI ole kehalise kasvatuse tunnist vabastatud</span></li>
              <li className="flex gap-2"><span>·</span><span>Eesti keele hinnet EI asendata automaatselt</span></li>
              <li className="flex gap-2"><span>·</span><span>Õppekoormus on kohandatud, mitte vähendatud</span></li>
            </ul>
          </div>
        </section>

        {/* Küsimused */}
        <section className="px-4 pb-8">
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="size-4 text-primary" />
              <div className="text-sm font-semibold">Küsimused?</div>
            </div>
            <p className="text-sm text-foreground/80 mb-3">
              Otsuse põhjenduse kirjutas õpetaja, mitte AI. Saad alati pöörduda klassijuhataja poole.
            </p>
            <Button variant="outline" className="w-full" size="sm">
              <Phone className="size-3.5" />
              Võta klassijuhatajaga ühendust
            </Button>
          </div>
        </section>

        <footer className="px-4 pb-6 text-[10px] text-muted-foreground text-center tracking-[0.18em] uppercase">
          EduInvest LearnOnce · demovaade
        </footer>
      </div>
    </div>
  );
};

const Item = ({ label, note, tone }: { label: string; note: string; tone: "success" | "primary" }) => (
  <div className="flex items-start gap-3">
    <div
      className={`size-6 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
        tone === "success" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
      }`}
    >
      <CheckCircle2 className="size-3.5" strokeWidth={3} />
    </div>
    <div className="min-w-0">
      <div className="text-sm font-semibold leading-snug">{label}</div>
      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{note}</div>
    </div>
  </div>
);

export default Parent;

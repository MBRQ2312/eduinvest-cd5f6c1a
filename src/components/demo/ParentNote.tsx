import { MessageCircle } from "lucide-react";

interface ParentNoteProps {
  audience?: "Lapsevanemale" | "Partnerile" | "Lapsevanemale ja partnerile";
  text: string;
}

export const ParentNote = ({
  audience = "Lapsevanemale ja partnerile",
  text,
}: ParentNoteProps) => (
  <div className="mb-6 rounded-xl border border-border bg-muted/40 p-4 flex gap-3">
    <div className="shrink-0 size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
      <MessageCircle className="size-4" />
    </div>
    <div className="min-w-0">
      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1">
        Selgitus {audience.toLowerCase()}
      </div>
      <p className="text-sm leading-relaxed text-foreground/85">{text}</p>
    </div>
  </div>
);

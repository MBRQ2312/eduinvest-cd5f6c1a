import { useState } from "react";
import { HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

interface ParentNoteProps {
  audience?: "Lapsevanemale" | "Partnerile" | "Lapsevanemale ja partnerile";
  text: string;
  label?: string;
}

export const ParentNote = ({
  audience = "Lapsevanemale ja partnerile",
  text,
  label,
}: ParentNoteProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-subtle/60 hover:bg-primary-subtle px-3.5 py-1.5 text-xs font-semibold text-primary transition-smooth shadow-sm"
          >
            <HelpCircle className="size-3.5" />
            {label ?? `Selgitus ${audience.toLowerCase()}`}
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base">
              <HelpCircle className="size-4 text-primary" />
              Selgitus {audience.toLowerCase()}
            </DialogTitle>
            <DialogDescription className="text-sm text-foreground/85 leading-relaxed pt-2 whitespace-pre-line">
              {text}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

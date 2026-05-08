import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const PROCESS_STEPS = [
  { id: 1, label: "Taotlus" },
  { id: 2, label: "Kooli vaade" },
  { id: 3, label: "Tõendid" },
  { id: 4, label: "AI eelanalüüs" },
  { id: 5, label: "Otsus" },
  { id: 6, label: "Selgitus" },
] as const;

interface Props {
  current: number;
  onJump?: (step: number) => void;
}

export const ProcessBar = ({ current, onJump }: Props) => (
  <div className="rounded-2xl border border-border bg-card p-4 md:p-5 shadow-card">
    <ol className="flex items-center gap-1 md:gap-2 overflow-x-auto">
      {PROCESS_STEPS.map((s, i) => {
        const done = s.id < current;
        const active = s.id === current;
        return (
          <li key={s.id} className="flex items-center gap-1 md:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onJump?.(s.id)}
              className={cn(
                "flex items-center gap-2 px-2 md:px-3 py-1.5 rounded-lg transition-smooth",
                active && "bg-primary text-primary-foreground shadow-sm",
                done && "text-success hover:bg-success-subtle",
                !active && !done && "text-muted-foreground hover:bg-muted",
              )}
            >
              <span
                className={cn(
                  "size-6 rounded-full flex items-center justify-center text-xs font-bold tabular shrink-0",
                  active && "bg-primary-foreground/20",
                  done && "bg-success/15",
                  !active && !done && "bg-muted",
                )}
              >
                {done ? <Check className="size-3.5" strokeWidth={3} /> : s.id}
              </span>
              <span className="text-xs md:text-sm font-semibold whitespace-nowrap">{s.label}</span>
            </button>
            {i < PROCESS_STEPS.length - 1 && (
              <span
                className={cn(
                  "h-px w-3 md:w-6 shrink-0",
                  done ? "bg-success/40" : "bg-border",
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  </div>
);

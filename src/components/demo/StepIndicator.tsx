import { Check } from "lucide-react";

interface Step {
  id: number;
  label: string;
  short: string;
}

const STEPS: Step[] = [
  { id: 1, label: "Õppija sisend", short: "Päris elu" },
  { id: 2, label: "Kooliandmed", short: "eKool / Stuudium" },
  { id: 3, label: "AI eelanalüüs", short: "Seos" },
  { id: 4, label: "Õpetaja otsus", short: "Inimene" },
  { id: 5, label: "Selgitus perele", short: "Arusaadav" },
  { id: 6, label: "Koolijuhi vaade", short: "Mustrid" },
];

interface StepIndicatorProps {
  current: number;
}

export const StepIndicator = ({ current }: StepIndicatorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-stretch justify-between gap-0">
        {STEPS.map((step, idx) => {
          const isDone = step.id < current;
          const isActive = step.id === current;
          const isFuture = step.id > current;
          return (
            <div key={step.id} className="flex items-center flex-1 min-w-0 last:flex-none">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div
                    className={`size-9 rounded-full flex items-center justify-center text-xs font-bold tabular transition-spring border-2 ${
                      isDone
                        ? "bg-primary text-primary-foreground border-primary"
                        : isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-elevated scale-110"
                          : "bg-card text-muted-foreground border-border"
                    }`}
                  >
                    {isDone ? (
                      <Check className="size-4" strokeWidth={3} />
                    ) : (
                      step.id.toString().padStart(2, "0")
                    )}
                  </div>
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                  )}
                </div>
                <div className="min-w-0 hidden lg:block">
                  <div
                    className={`text-sm font-semibold truncate transition-smooth tracking-tight ${
                      isActive
                        ? "text-foreground"
                        : isDone
                          ? "text-foreground/80"
                          : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.18em] truncate transition-smooth ${
                      isActive ? "text-primary font-semibold" : "text-muted-foreground/70"
                    }`}
                  >
                    {step.short}
                  </div>
                </div>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="flex-1 h-px mx-3 sm:mx-4 bg-border relative overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-primary transition-spring ${
                      isFuture ? "w-0" : "w-full"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

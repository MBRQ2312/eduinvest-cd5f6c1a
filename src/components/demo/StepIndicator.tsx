import { Check } from "lucide-react";

interface Step {
  id: number;
  label: string;
  short: string;
}

const STEPS: Step[] = [
  { id: 1, label: "Õppija sisend", short: "Päris elu" },
  { id: 2, label: "AI eelanalüüs", short: "Seos õppekavaga" },
  { id: 3, label: "Õpetaja otsus", short: "Inimene otsustab" },
  { id: 4, label: "Süsteemne mõju", short: "Mida ei pea enam tegema" },
];

interface StepIndicatorProps {
  current: number;
}

export const StepIndicator = ({ current }: StepIndicatorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2">
        {STEPS.map((step, idx) => {
          const isDone = step.id < current;
          const isActive = step.id === current;
          return (
            <div key={step.id} className="flex items-center flex-1 min-w-0 last:flex-none">
              <div className="flex flex-col items-start gap-2 min-w-0">
                <div className="flex items-center gap-3">
                  <div
                    className={`shrink-0 size-7 rounded-full flex items-center justify-center text-xs font-semibold tabular transition-smooth border ${
                      isDone
                        ? "bg-primary text-primary-foreground border-primary"
                        : isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                          : "bg-card text-muted-foreground border-border"
                    }`}
                  >
                    {isDone ? <Check className="size-3.5" strokeWidth={3} /> : step.id.toString().padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-sm font-medium truncate transition-smooth ${
                        isActive || isDone ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground truncate">
                      {step.short}
                    </div>
                  </div>
                </div>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="flex-1 h-px mx-4 bg-border relative overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-primary transition-smooth ${
                      step.id < current ? "w-full" : "w-0"
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

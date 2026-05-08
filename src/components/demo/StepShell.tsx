import { ReactNode } from "react";

interface Props {
  step: number;
  title: string;
  question: string;
  badge?: ReactNode;
  children: ReactNode;
}

export const StepShell = ({ step, title, question, badge, children }: Props) => (
  <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
    <header className="px-6 md:px-10 py-7 border-b border-border bg-gradient-to-b from-card to-muted/20">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-2">
            Samm {step} / 6
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-foreground/80 mt-3 leading-relaxed max-w-2xl">
            {question}
          </p>
        </div>
        {badge}
      </div>
    </header>
    <div className="px-6 md:px-10 py-8 md:py-10">{children}</div>
  </div>
);

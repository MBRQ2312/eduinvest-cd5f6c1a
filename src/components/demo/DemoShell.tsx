import { ReactNode } from "react";

interface DemoShellProps {
  stepLabel: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const DemoShell = ({ stepLabel, title, subtitle, children }: DemoShellProps) => {
  return (
    <div className="bg-card rounded-2xl border-2 border-border-strong shadow-card overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="px-6 md:px-10 py-7 border-b border-border bg-gradient-to-b from-card to-muted/30">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-8 bg-primary rounded-full" />
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary">
            {stepLabel}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base text-muted-foreground mt-2 text-pretty max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </header>
      <div className="px-6 md:px-10 py-8 md:py-10">{children}</div>
    </div>
  );
};

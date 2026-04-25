import { ReactNode } from "react";

interface DemoShellProps {
  stepLabel: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const DemoShell = ({ stepLabel, title, subtitle, children }: DemoShellProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="px-8 py-6 border-b border-border bg-card flex items-center justify-between gap-6">
        <div className="min-w-0">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-1.5">
            {stepLabel}
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-balance">{title}</h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1.5 text-pretty max-w-xl">{subtitle}</p>
          )}
        </div>
      </header>
      <div className="px-8 py-8">{children}</div>
    </div>
  );
};

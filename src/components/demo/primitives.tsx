import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Check, HelpCircle, Info, ShieldCheck, X, AlertTriangle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Tone = "primary" | "warning" | "success" | "destructive" | "muted";

const toneClasses: Record<Tone, { border: string; bg: string; text: string }> = {
  primary: { border: "border-primary", bg: "bg-primary-subtle/50", text: "text-primary" },
  warning: { border: "border-warning", bg: "bg-warning-subtle", text: "text-warning" },
  success: { border: "border-success", bg: "bg-success-subtle", text: "text-success" },
  destructive: { border: "border-destructive", bg: "bg-destructive/10", text: "text-destructive" },
  muted: { border: "border-border", bg: "bg-muted/40", text: "text-muted-foreground" },
};

/* ---------- SectionLabel ---------- */
export const SectionLabel = ({
  icon: Icon,
  children,
  tone = "primary",
}: {
  icon?: LucideIcon;
  children: ReactNode;
  tone?: Tone;
}) => (
  <div
    className={cn(
      "text-[10px] font-bold tracking-[0.22em] uppercase mb-3 flex items-center gap-1.5",
      toneClasses[tone].text,
    )}
  >
    {Icon && <Icon className="size-3.5" />}
    {children}
  </div>
);

/* ---------- InfoCard ---------- */
export const InfoCard = ({
  tone = "primary",
  title,
  children,
  className,
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
  className?: string;
}) => {
  const t = toneClasses[tone];
  return (
    <div className={cn("rounded-xl border-l-4 p-4 md:p-5 text-sm leading-relaxed text-foreground/90", t.border, t.bg, className)}>
      {title && <div className="font-semibold mb-1.5">{title}</div>}
      {children}
    </div>
  );
};

/* ---------- AiBadge — läbiv märgis igas AI-vaates ---------- */
export const AiBadge = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide shadow-sm",
      className,
    )}
  >
    <ShieldCheck className="size-3.5" />
    AI ei otsusta · Õpetaja otsustab
  </div>
);

/* ---------- HelpPopup — popup "?" nupuga ---------- */
export const HelpPopup = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
        >
          <HelpCircle className="size-3.5" /> Mida see tähendab?
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="whitespace-pre-line text-sm leading-relaxed text-foreground/85 pt-2">
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

/* ---------- DataBlock + DataRow ---------- */
export const DataBlock = ({
  title,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("rounded-2xl border border-border bg-card p-5 md:p-6", className)}>
    {title && <div className="text-sm font-semibold tracking-tight mb-4">{title}</div>}
    <div className="space-y-2.5">{children}</div>
  </div>
);

export const DataRow = ({
  k,
  v,
  tone,
}: {
  k: string;
  v: ReactNode;
  tone?: "success" | "warning" | "primary";
}) => (
  <div className="flex items-start justify-between gap-3 text-sm border-b border-border/50 pb-2.5 last:border-0 last:pb-0">
    <span className="text-muted-foreground">{k}</span>
    <span
      className={cn(
        "font-semibold text-right",
        tone === "success" && "text-success",
        tone === "warning" && "text-warning",
        tone === "primary" && "text-primary",
      )}
    >
      {v}
    </span>
  </div>
);

/* ---------- EvidenceItem ---------- */
export const EvidenceItem = ({
  label,
  status,
}: {
  label: string;
  status: "ok" | "missing" | "suggested";
}) => {
  const map = {
    ok: { icon: Check, cls: "bg-success/10 text-success", note: "olemas" },
    missing: { icon: X, cls: "bg-destructive/10 text-destructive", note: "puudu" },
    suggested: { icon: AlertTriangle, cls: "bg-warning/15 text-warning", note: "soovitatud" },
  } as const;
  const { icon: Icon, cls, note } = map[status];
  return (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-border/50 last:border-0">
      <div className="flex items-center gap-3">
        <span className={cn("size-7 rounded-full flex items-center justify-center shrink-0", cls)}>
          <Icon className="size-3.5" strokeWidth={3} />
        </span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-xs text-muted-foreground">{note}</span>
    </div>
  );
};

/* ---------- RelationCard — AI seose tugevus ---------- */
export const RelationCard = ({
  tone,
  title,
  items,
}: {
  tone: "success" | "warning" | "destructive";
  title: string;
  items: readonly string[];
}) => {
  const t = toneClasses[tone];
  return (
    <div className={cn("rounded-2xl border p-5 bg-card", "border-border")}>
      <div className={cn("text-[10px] font-bold tracking-[0.22em] uppercase mb-3", t.text)}>
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="text-sm text-foreground/85 leading-snug">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ---------- RoleCard — avalehe rollivärav ---------- */
export const RoleCard = ({
  to,
  emoji,
  name,
  desc,
}: {
  to: string;
  emoji: string;
  name: string;
  desc: string;
}) => (
  <Link
    to={to}
    className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-elevated transition-smooth flex flex-col gap-3"
  >
    <div className="text-4xl">{emoji}</div>
    <div className="text-lg font-semibold tracking-tight group-hover:text-primary transition-smooth">
      {name}
    </div>
    <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
  </Link>
);

/* ---------- SimpleNote — väike "Info" rida ---------- */
export const SimpleNote = ({ children }: { children: ReactNode }) => (
  <div className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
    <Info className="size-3.5 shrink-0 mt-0.5" />
    <span>{children}</span>
  </div>
);

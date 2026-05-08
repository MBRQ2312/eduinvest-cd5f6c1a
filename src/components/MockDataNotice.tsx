import { AlertCircle } from "lucide-react";

export const MockDataNotice = ({ className = "" }: { className?: string }) => (
  <div
    className={`rounded-xl border border-warning/30 bg-warning-subtle/40 p-3 flex items-start gap-2 ${className}`}
  >
    <AlertCircle className="size-4 text-warning mt-0.5 shrink-0" />
    <div className="text-xs text-foreground/80 leading-relaxed">
      <strong>Häkil mock-andmed.</strong> EHIS, eKool, Stuudium ja ARNO liidestused valideerime
      järgmises etapis. Eesmärk on tõestada üks otsustusvoog lõpuni.
    </div>
  </div>
);

export default MockDataNotice;

import { useMemo } from "react";

export const Hourglass = ({ className = "", size = 120 }: { className?: string; size?: number }) => (
  <svg
    viewBox="0 0 120 160"
    width={size}
    height={(size * 160) / 120}
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="hg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D5D5" />
        <stop offset="100%" stopColor="#6D4DFF" />
      </linearGradient>
      <radialGradient id="hg-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00D5D5" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#6D4DFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="80" r="58" fill="url(#hg-glow)" className="animate-glow-pulse" />
    {/* Hourglass frame */}
    <path
      d="M28 12 H92 M28 148 H92"
      stroke="url(#hg-grad)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M30 14 C 30 50, 90 70, 90 80 C 90 90, 30 110, 30 146"
      stroke="url(#hg-grad)"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M90 14 C 90 50, 30 70, 30 80 C 30 90, 90 110, 90 146"
      stroke="url(#hg-grad)"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Sand */}
    <path d="M36 18 H84 L62 70 Z" fill="url(#hg-grad)" opacity="0.65" />
    <path d="M40 142 H80 L70 100 Q60 92 50 100 Z" fill="url(#hg-grad)" opacity="0.85" />
    <line x1="60" y1="76" x2="60" y2="98" stroke="#00D5D5" strokeWidth="1.5" opacity="0.9" />
  </svg>
);

export const ParticleField = ({ density = 28 }: { density?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: density }).map((_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 6,
        dur: 5 + Math.random() * 6,
        hue: Math.random() > 0.5 ? "#00D5D5" : "#6D4DFF",
      })),
    [density],
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-float-y"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.hue,
            boxShadow: `0 0 ${p.size * 4}px ${p.hue}`,
            opacity: 0.55,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Hourglass;

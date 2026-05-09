/* Brand-coherent pillar icons matching the EduInvest hourglass logo:
   AEG (hourglass) → TARK KASUTUS (crossing X) → VÕIMALUSED (scattering dots) → RUUM (open ring) */

const GRAD_ID = "pillar-grad";

const Defs = () => (
  <defs>
    <linearGradient id={GRAD_ID} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00D5D5" />
      <stop offset="100%" stopColor="#6D4DFF" />
    </linearGradient>
  </defs>
);

const wrap = "inline-flex items-center justify-center";

export const PillarAeg = ({ size = 64 }: { size?: number }) => (
  <svg viewBox="0 0 64 80" width={size} height={(size * 80) / 64} className={wrap} fill="none" aria-hidden>
    <Defs />
    <path d="M14 6 H50 M14 74 H50" stroke={`url(#${GRAD_ID})`} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M16 8 C16 28 48 34 48 40 C48 46 16 52 16 72" stroke={`url(#${GRAD_ID})`} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M48 8 C48 28 16 34 16 40 C16 46 48 52 48 72" stroke={`url(#${GRAD_ID})`} strokeWidth="2" fill="none" strokeLinecap="round" />
    <line x1="32" y1="38" x2="32" y2="50" stroke="#00D5D5" strokeWidth="1.4" />
  </svg>
);

export const PillarTark = ({ size = 64 }: { size?: number }) => (
  <svg viewBox="0 0 64 80" width={size} height={(size * 80) / 64} className={wrap} fill="none" aria-hidden>
    <Defs />
    {/* X — kaks ristuvat kaarjat lainet, tark suunamine */}
    <path d="M10 10 C24 28 40 28 54 10" stroke={`url(#${GRAD_ID})`} strokeWidth="2.4" strokeLinecap="round" fill="none" />
    <path d="M10 70 C24 52 40 52 54 70" stroke={`url(#${GRAD_ID})`} strokeWidth="2.4" strokeLinecap="round" fill="none" />
    <circle cx="32" cy="40" r="2.6" fill="#00D5D5" />
  </svg>
);

export const PillarVoimalused = ({ size = 64 }: { size?: number }) => (
  <svg viewBox="0 0 64 80" width={size} height={(size * 80) / 64} className={wrap} fill="none" aria-hidden>
    <Defs />
    {/* Hajuvad osakesed — võimalused avanevad */}
    {[
      [22, 14, 2.4, "#00D5D5"], [30, 18, 1.8, "#00D5D5"], [38, 14, 2.6, "#00D5D5"],
      [20, 26, 2, "#00D5D5"], [32, 30, 2.8, "#6D4DFF"], [42, 26, 2, "#6D4DFF"],
      [24, 40, 2.2, "#6D4DFF"], [34, 44, 2.6, "#6D4DFF"], [44, 40, 1.8, "#6D4DFF"],
      [28, 56, 2, "#6D4DFF"], [38, 60, 2.4, "#6D4DFF"], [22, 66, 1.8, "#6D4DFF"],
      [44, 68, 2.2, "#6D4DFF"],
    ].map(([cx, cy, r, c], i) => (
      <circle key={i} cx={cx as number} cy={cy as number} r={r as number} fill={c as string} />
    ))}
  </svg>
);

export const PillarRuum = ({ size = 64 }: { size?: number }) => (
  <svg viewBox="0 0 64 80" width={size} height={(size * 80) / 64} className={wrap} fill="none" aria-hidden>
    <Defs />
    {/* Avatud ring — ruum kasvuks */}
    <circle cx="32" cy="40" r="22" stroke={`url(#${GRAD_ID})`} strokeWidth="2.4" fill="none" />
  </svg>
);

export const PILLARS = [
  { key: "AEG", icon: PillarAeg, title: "Aeg on piiratud ressurss.", color: "#00D5D5" },
  { key: "TARK KASUTUS", icon: PillarTark, title: "Targad valikud loovad väärtust.", color: "#34BFD9" },
  { key: "VÕIMALUSED", icon: PillarVoimalused, title: "Täna investeerituna toob rohkem võimalusi.", color: "#6D4DFF" },
  { key: "RUUM", icon: PillarRuum, title: "Vabaneb ruum kasvuks ja arenguks.", color: "#9B7BFF" },
] as const;

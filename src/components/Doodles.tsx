export const INK = "#2A2521";

interface DoodleProps {
  className?: string;
}

/** Three short radiating ticks, coral. */
export function Sparks({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <g stroke="#DF5B41" strokeWidth="4" strokeLinecap="round">
        <line x1="8" y1="33" x2="14" y2="19" />
        <line x1="20" y1="35" x2="20" y2="17" />
        <line x1="32" y1="33" x2="26" y2="19" />
      </g>
    </svg>
  );
}

/** Hand-drawn double underline stroke, coral. */
export function UnderlineStroke({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 240 16"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M6 6 C 60 2, 180 2, 234 5"
        stroke="#DF5B41"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 12 C 70 8, 170 8, 228 10"
        stroke="#DF5B41"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

/** Curved hand-drawn arrow. */
export function CurvedArrow({
  className = "",
  flip = false,
}: DoodleProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M12 10 C 30 28, 46 44, 60 62"
        stroke={INK}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M60 62 L48 59 M60 62 L57 50"
        stroke={INK}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Little laptop sketch with code lines. */
export function LaptopDoodle({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 92" fill="none" className={className} aria-hidden="true">
      <polygon
        points="32,8 102,8 95,58 25,58"
        fill="#2E2A26"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <polygon
        points="14,68 106,68 117,79 3,79"
        fill="#FAF6F0"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g strokeLinecap="round" strokeWidth="3">
        <line x1="36" y1="18" x2="58" y2="18" stroke="#DF5B41" />
        <line x1="36" y1="26" x2="72" y2="26" stroke="#8f8a83" />
        <line x1="42" y1="34" x2="64" y2="34" stroke="#7FA36B" />
        <line x1="36" y1="42" x2="80" y2="42" stroke="#8f8a83" />
        <line x1="42" y1="50" x2="56" y2="50" stroke="#DF5B41" />
      </g>
    </svg>
  );
}

/** Bold hand-drawn star outline. */
export function StarDoodle({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M50 8 L61.5 38 L93 38.5 L67.5 57 L78 88 L50 69.5 L22 88 L32.5 57 L7 38.5 L38.5 38 Z"
        stroke={INK}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Small emphasis ticks (!!). */
export function TickMarks({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 30 30" fill="none" className={className} aria-hidden="true">
      <g stroke={INK} strokeWidth="3" strokeLinecap="round">
        <line x1="9" y1="5" x2="12" y2="15" />
        <line x1="20" y1="5" x2="17" y2="15" />
        <circle cx="10.5" cy="23" r="0.5" fill={INK} />
        <circle cx="18.5" cy="23" r="0.5" fill={INK} />
      </g>
    </svg>
  );
}

/** Pink sticky note with handwritten text. */
export function StickyNote({ className = "" }: DoodleProps) {
  return (
    <div
      className={`bg-[#F8CDBF] px-5 py-4 shadow-[3px_4px_0_rgba(42,37,33,0.12)] ${className}`}
      aria-hidden="true"
    >
      <p className="font-hand text-xl leading-tight text-[#2A2521] text-center tracking-wide">
        SAME GIRL...
        <br />
        DIFFERENT
        <br />
        IDEAS
        <br />
        EVERYDAY
      </p>
      <svg viewBox="0 0 20 18" className="w-4 h-4 mx-auto mt-1" fill="none" aria-hidden="true">
        <path
          d="M10 16 C 4 11, 2 7.5, 4 4.8 C 5.6 2.8, 8.4 3.2, 10 5.6 C 11.6 3.2, 14.4 2.8, 16 4.8 C 18 7.5, 16 11, 10 16 Z"
          stroke="#2A2521"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Takeaway coffee cup doodle. */
export function CoffeeCupDoodle({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 112" fill="none" className={className} aria-hidden="true">
      <line x1="50" y1="14" x2="58" y2="0" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <rect x="16" y="14" width="48" height="10" rx="2" stroke={INK} strokeWidth="3" />
      <path
        d="M20 26 L60 26 L55 104 L25 104 Z"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
        fill="#FAF6F0"
      />
      <rect x="23" y="56" width="34" height="24" stroke={INK} strokeWidth="2.5" />
      <circle cx="40" cy="68" r="7" stroke={INK} strokeWidth="2.5" />
    </svg>
  );
}

/** Stack of four books labelled AI / PRODUCTS / FINANCE / COMMUNITY. */
export function BooksDoodle({ className = "" }: DoodleProps) {
  const books = ["AI", "PRODUCTS", "FINANCE", "COMMUNITY"];
  return (
    <svg viewBox="0 0 160 128" fill="none" className={className} aria-hidden="true">
      {books.map((label, i) => {
        const y = 8 + i * 28;
        const x = i % 2 === 0 ? 8 : 14;
        return (
          <g key={label}>
            <rect
              x={x}
              y={y}
              width="138"
              height="24"
              rx="2"
              fill={i % 2 === 0 ? "#FAF6F0" : "#F3E9DB"}
              stroke={INK}
              strokeWidth="3"
            />
            <line
              x1={x + 16}
              y1={y + 3}
              x2={x + 16}
              y2={y + 21}
              stroke={INK}
              strokeWidth="2"
            />
            <text
              x={x + 69}
              y={y + 17}
              textAnchor="middle"
              fontSize="13"
              letterSpacing="3"
              fill={INK}
              className="font-hand"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

import { card } from "./ui";
import { solutions } from "@/lib/site";

type Motif = "bars" | "stack" | "hub" | "check" | "grid" | "rings" | "spark";

const motifBySlug: Record<(typeof solutions)[number]["slug"], Motif> = {
  inventory: "stack",
  sales: "bars",
  customers: "hub",
  bookings: "check",
  staff: "hub",
  reports: "bars",
  forms: "check",
  spreadsheets: "grid",
  websites: "rings",
  custom: "spark",
};

const delay = (i: number) => ({ animationDelay: `${i * 0.12}s` });

/** Small animated diagram, calm at rest, animating while its card is hovered. */
function MotifArt({ type }: { type: Motif }) {
  const stroke = { stroke: "currentColor", strokeWidth: 2, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (type === "bars") {
    const bars = [
      { x: 5, y: 20, h: 15 },
      { x: 14, y: 11, h: 24 },
      { x: 23, y: 24, h: 11 },
      { x: 32, y: 7, h: 28 },
    ];
    return (
      <svg viewBox="0 0 40 40" className="size-7" aria-hidden>
        {bars.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width="5"
            height={b.h}
            rx="1.5"
            fill="currentColor"
            className="fx-bottom group-hover:animate-[barGrow_2.4s_ease-in-out_infinite]"
            style={delay(i)}
          />
        ))}
      </svg>
    );
  }

  if (type === "stack") {
    const blocks = [
      { y: 26, x: 8, w: 24 },
      { y: 16.5, x: 10, w: 20 },
      { y: 7, x: 12, w: 16 },
    ];
    return (
      <svg viewBox="0 0 40 40" className="size-7" aria-hidden>
        {blocks.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height="7"
            rx="2"
            fill="currentColor"
            className="fx group-hover:animate-[popIn_1.8s_ease-in-out_infinite]"
            style={delay(blocks.length - 1 - i)}
          />
        ))}
      </svg>
    );
  }

  if (type === "hub") {
    const sats = [
      { x: 8, y: 9 },
      { x: 32, y: 12 },
      { x: 21, y: 33 },
    ];
    return (
      <svg viewBox="0 0 40 40" className="size-7" aria-hidden>
        {sats.map((s, i) => (
          <line key={`l${i}`} x1="20" y1="20" x2={s.x} y2={s.y} {...stroke} opacity="0.5" />
        ))}
        <circle cx="20" cy="20" r="4.5" fill="currentColor" />
        {sats.map((s, i) => (
          <circle
            key={`c${i}`}
            cx={s.x}
            cy={s.y}
            r="3.5"
            fill="currentColor"
            className="fx group-hover:animate-[pulseNode_1.8s_ease-in-out_infinite]"
            style={delay(i)}
          />
        ))}
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg viewBox="0 0 40 40" className="size-7" aria-hidden>
        <rect x="5" y="5" width="30" height="30" rx="8" {...stroke} opacity="0.5" />
        <polyline
          points="13,21 18,26 28,14"
          {...stroke}
          strokeDasharray="26"
          className="group-hover:animate-[drawTick_2s_ease-in-out_infinite]"
          style={{ "--len": "26" } as React.CSSProperties}
        />
      </svg>
    );
  }

  if (type === "grid") {
    const cells = Array.from({ length: 9 }, (_, i) => ({ col: i % 3, row: Math.floor(i / 3) }));
    return (
      <svg viewBox="0 0 40 40" className="size-7" aria-hidden>
        {cells.map((c, i) => (
          <rect
            key={i}
            x={6 + c.col * 11}
            y={6 + c.row * 11}
            width="8"
            height="8"
            rx="2"
            fill="currentColor"
            className="group-hover:animate-[cellPulse_1.8s_ease-in-out_infinite]"
            style={delay(c.col + c.row)}
          />
        ))}
      </svg>
    );
  }

  if (type === "rings") {
    return (
      <svg viewBox="0 0 40 40" className="size-7" aria-hidden>
        <circle cx="20" cy="20" r="3.5" fill="currentColor" />
        {[9, 14].map((r, i) => (
          <circle
            key={i}
            cx="20"
            cy="20"
            r={r}
            {...stroke}
            className="fx group-hover:animate-[ringOut_2s_ease-out_infinite]"
            style={delay(i * 2)}
          />
        ))}
      </svg>
    );
  }

  // spark — the logo's four-point star
  return (
    <svg viewBox="0 0 40 40" className="size-7" aria-hidden>
      <path
        d="M20 5 Q22.5 16.5 35 20 Q22.5 23.5 20 35 Q17.5 23.5 5 20 Q17.5 16.5 20 5Z"
        fill="currentColor"
        className="fx group-hover:animate-[sparkle_2.2s_ease-in-out_infinite]"
      />
    </svg>
  );
}

export function SolutionsGrid({ limit }: { limit?: number }) {
  const items = limit ? solutions.slice(0, limit) : solutions;
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {items.map((m) => (
        <li key={m.slug} className={`group ${card} flex flex-col items-center p-5 text-center`}>
          <span className="mb-3 grid size-14 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
            <MotifArt type={motifBySlug[m.slug]} />
          </span>
          <h3 className="font-semibold">{m.name}</h3>
          <p className="mt-1 text-[13px] leading-snug text-muted">{m.body}</p>
        </li>
      ))}
    </ul>
  );
}

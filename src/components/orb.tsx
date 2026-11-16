const anim = (name: string, dur: string, ease = "ease-in-out") =>
  ({ animation: `${name} ${dur} ${ease} infinite` }) as React.CSSProperties;

/** Glassmorphic 3D object inspired by the Mella mark — a frosted orb with a centered glass spark.
 *  The orb and spark float together (carry) so the star stays locked in the middle; it only spins.
 *  Fills its parent (size it from the container). */
export function Orb() {
  return (
    <div className="relative size-full">
      {/* Ambient glow — decoration */}
      <div
        className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgb(224_122_74/0.5),transparent_62%)] blur-2xl"
        style={anim("glowPulse", "7s")}
      />

      {/* Orbit ring (arch motif) — decoration */}
      <div className="absolute inset-[9%] rounded-full border border-white/40" style={anim("floatYc", "9s")} />

      {/* Lead: the orb and its star float together as one object, so the star stays centered. */}
      <div className="absolute inset-0" style={anim("floatY", "6.5s")}>
        {/* Frosted glass orb */}
        <div className="absolute inset-[16%] overflow-hidden rounded-full border border-white/50 bg-gradient-to-br from-white/55 via-white/15 to-accent/20 shadow-[0_40px_90px_-25px_rgb(44_28_18/0.45),inset_0_3px_26px_rgb(255_255_255/0.65)] backdrop-blur-xl">
          <div className="absolute left-[16%] top-[12%] h-[26%] w-[26%] rounded-full bg-white/70 blur-md" />
          <div className="absolute bottom-[12%] right-[14%] h-[18%] w-[18%] rounded-full bg-accent/25 blur-lg" />
        </div>

        {/* Glass spark (the logo's star) — centered in the orb, spins in place only */}
        <div className="absolute inset-0 grid place-items-center">
          <svg
            viewBox="0 0 40 40"
            className="w-[28%] min-w-20 drop-shadow-[0_14px_24px_rgb(181_70_28/0.4)]"
            style={anim("spinSlow", "42s", "linear")}
          >
            <defs>
              <linearGradient id="sparkG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="0.5" stopColor="#e07a4a" stopOpacity="0.75" />
                <stop offset="1" stopColor="#b5461c" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d="M20 4 Q22.8 17.2 36 20 Q22.8 22.8 20 36 Q17.2 22.8 4 20 Q17.2 17.2 20 4Z"
              fill="url(#sparkG)"
              stroke="#ffffff"
              strokeWidth="0.6"
              strokeOpacity="0.75"
            />
          </svg>
        </div>
      </div>

      {/* Small glass bubbles for depth — decoration */}
      <div
        className="absolute left-[6%] top-[22%] aspect-square w-[13%] rounded-full border border-white/50 bg-white/25 shadow-[inset_0_2px_10px_rgb(255_255_255/0.6)] backdrop-blur-md"
        style={anim("floatYb", "5.5s")}
      />
      <div
        className="absolute bottom-[12%] right-[4%] aspect-square w-[17%] rounded-full border border-white/50 bg-gradient-to-br from-white/35 to-accent/15 shadow-[inset_0_2px_12px_rgb(255_255_255/0.55)] backdrop-blur-md"
        style={anim("floatYc", "8s")}
      />
      <div
        className="absolute right-[22%] top-[6%] aspect-square w-[7.5%] rounded-full border border-white/50 bg-white/30 backdrop-blur-md"
        style={anim("floatYb", "6.8s")}
      />
    </div>
  );
}

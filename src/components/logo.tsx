type Props = { className?: string; markClassName?: string; wordClassName?: string };

export function LogoMark({ className = "h-9 w-[30px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 48" fill="none" aria-hidden="true">
      <path d="M7 41V19a13 13 0 0 1 26 0v22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20" cy="17" r="4.6" fill="currentColor" />
      <path
        d="M20 24.5Q21.6 31.4 29.5 33.5Q21.6 35.6 20 46Q18.4 35.6 10.5 33.5Q18.4 31.4 20 24.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({ className = "", markClassName, wordClassName = "text-[28px]" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-orchid ${className}`}>
      <LogoMark className={markClassName} />
      <span className={`font-display leading-none tracking-wide ${wordClassName}`}>Mella</span>
    </span>
  );
}

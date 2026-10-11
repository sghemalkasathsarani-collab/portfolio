import React from 'react';

// Stand-ins drawn in CSS until real images are added in constants.ts

// Faint blueprint grid tinted with the accent colour
const GRID: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
  backgroundPosition: 'center',
  ['--grid' as string]: 'color-mix(in srgb, var(--color-accent) 14%, transparent)',
};

export const Blueprint: React.FC<{ label: string; icon?: React.ReactNode; className?: string }> = ({ label, icon, className = '' }) => (
  <div aria-hidden="true" className={`flex flex-col items-center justify-center gap-2 bg-accent-soft text-accent ${className}`} style={GRID}>
    {icon}
    <span className="font-mono text-[11px] uppercase tracking-[0.14em]">{label}</span>
  </div>
);

// A typeset first page: venue line, the title, then grey text lines. `compact` is the phone thumbnail.
export const PaperPage: React.FC<{ title: string; venue: string; compact?: boolean; className?: string }> = ({
  title,
  venue,
  compact = false,
  className = '',
}) => (
  <div aria-hidden="true" className={`flex flex-col overflow-hidden bg-white ${compact ? 'gap-1 p-2' : 'gap-2.5 p-5'} ${className}`}>
    {!compact && <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#0f6e5f]">{venue}</span>}
    {compact ? (
      <>
        <span className="h-1 w-full rounded-full bg-[#2a2a2e]" />
        <span className="h-1 w-3/4 rounded-full bg-[#2a2a2e]" />
      </>
    ) : (
      <span className="line-clamp-3 font-serif text-[13px] leading-snug text-[#17171b]">{title}</span>
    )}
    <div className={`flex flex-col ${compact ? 'mt-1 gap-[3px]' : 'mt-1 gap-1.5'}`}>
      {[100, 96, 100, 88, 100, 94, 70].map((w, i) => (
        <span key={i} className={`${compact ? 'h-[2px]' : 'h-[3px]'} rounded-full bg-[#dedbd3]`} style={{ width: `${w}%` }} />
      ))}
    </div>
  </div>
);

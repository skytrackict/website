import type { ReactNode } from 'react';
import clsx from 'clsx';

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-signal">
      <span className="w-4 h-px bg-signal" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={clsx(
          'mt-3 text-[1.9rem] md:text-[2.4rem] font-bold leading-[1.12]',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx('mt-4 text-base md:text-[1.05rem] leading-relaxed', light ? 'text-white/70' : 'text-slate')}>
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            'conic-gradient(from 90deg, transparent 0deg, rgba(46,107,255,0.55) 40deg, transparent 90deg)',
        }}
      />
      <div className="container-page relative py-20 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 text-[2.2rem] md:text-[3rem] font-bold leading-[1.08] max-w-3xl">{title}</h1>
        <p className="mt-5 text-white/70 max-w-xl text-[1.05rem] leading-relaxed">{description}</p>
      </div>
    </section>
  );
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl md:text-4xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-sm text-slate">{label}</p>
    </div>
  );
}

export function Divider() {
  return <div className="h-px bg-line" />;
}

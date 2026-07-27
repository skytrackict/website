import { Icon } from './Icon';

const blips = [
  { label: 'IELTS Exam', top: '18%', left: '62%', delay: '0s' },
  { label: 'CBT Slot Verified', top: '55%', left: '20%', delay: '0.6s' },
  { label: 'Background Check', top: '72%', left: '68%', delay: '1.2s' },
  { label: 'Desk Booked', top: '32%', left: '12%', delay: '1.8s' },
];

export function RadarHero() {
  return (
    <div className="relative aspect-square w-full max-w-[440px] mx-auto select-none" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-signal/20" />
      <div className="absolute inset-[12%] rounded-full border border-signal/20" />
      <div className="absolute inset-[24%] rounded-full border border-signal/20" />
      <div className="absolute inset-[36%] rounded-full border border-signal/25" />

      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="radar-sweep absolute inset-0 origin-center"
          style={{
            background: 'conic-gradient(from 0deg, rgba(46,107,255,0.35), transparent 70deg)',
          }}
        />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ink text-white flex items-center justify-center shadow-card-hover">
        <Icon name="radar" size={26} />
      </div>

      {blips.map((b) => (
        <div key={b.label} className="absolute" style={{ top: b.top, left: b.left }}>
          <span className="relative flex items-center justify-center">
            <span className="radar-ping absolute w-3 h-3 rounded-full bg-amber" style={{ animationDelay: b.delay }} />
            <span className="relative w-2.5 h-2.5 rounded-full bg-amber" />
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-[0.7rem] font-medium bg-white text-ink px-2.5 py-1 rounded-full shadow-card border border-line">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}
